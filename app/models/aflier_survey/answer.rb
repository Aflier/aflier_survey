module AflierSurvey
  class Answer < ApplicationRecord
    belongs_to :question
    belongs_to :repeat_section, optional: true

    has_many :option_answers, dependent: :destroy

    # mount_uploader :file, DocumentUploader

    NOT_SURE = 'not sure'.freeze

    before_validation :is_complete?
    after_commit :update_audit

    def update_audit
      return if unique_ident.nil?

      # questionnaire_submission = self.user.questionnaire_submissions.order(:created_at).last
      questionnaire_submission = QuestionnaireSubmission.where(unique_ident: unique_ident).order(:created_at).last

      if questionnaire_submission.nil?
        # Nothing
      else
        questionnaire_submission.update_attribute(:status, QuestionnaireSubmission::UPDATED)

        if not(complete) and question.required?
          question.question_section.tag_as_required(unique_ident)
        else
          question.question_section.tag_as_updated(unique_ident)
        end
      end
    end

    def user_chose(option, answer)
      return false if OptionAnswer.where(option_id: option.id, answer_id: answer.id).empty?
      true
    end

    def score_given?(choice)
      return true if choice.to_i == an_integer
      false
    end

    def update_on_button_press(new_answer)
      if question.question_type == Question::OUT_OF
        update(an_integer: new_answer)
      elsif question.question_type == Question::YES_OR_NO or
          question.question_type == Question::TEXT_ON_YES or
          question.question_type == Question::SECTION_ON_YES or
          question.question_type == Question::SECTION_ON_NO
        if new_answer == Answer::NOT_SURE
          update_attribute(:not_sure, true)
          update_attribute(:a_boolean, nil)
        else
          update_attribute(:a_boolean, new_answer == 'yes' ? true : false)
          update_attribute(:not_sure, false)
        end
      else
        if new_answer == Answer::NOT_SURE
          self.not_sure = true
        else
          update_attribute(:not_sure, false)
        end
      end

      self.save!
    end

    def is_complete?

      self.complete = false

      self.complete = true if self.question.allow_not_sure? and self.not_sure?
      self.complete = true if self.question.question_type == Question::YES_OR_NO and not self.a_boolean.nil?
      self.complete = true if self.question.question_type == Question::STRING and not self.a_string.blank?
      self.complete = true if self.question.question_type == Question::TEXT and not self.some_text.nil?
      self.complete = true if self.question.question_type == Question::DATE and not self.a_date.nil?
      self.complete = true if self.question.question_type == Question::DECIMAL and not self.a_decimal.nil?
      self.complete = true if self.question.question_type == Question::WHOLE_NUMBER and not self.an_integer.nil?
      self.complete = true if self.question.question_type == Question::SELECT_MANY and not self.option_answers.empty?
      self.complete = true if self.question.question_type == Question::SELECT_ONE and not self.option_answers.empty?

      self.complete
    end

    def linear_assessment_colour(result_grouping, repeat_section)
      linear_assessment = nil

      if self.question.question_type == Question::YES_OR_NO
        return '' if self.question.mappings.find_by(choice: self.a_boolean).nil?
        linear_assessment = self.question.mappings.find_by(choice: self.a_boolean).linear_assessment

      elsif question.question_type == Question::DECIMAL or question.question_type == Question::WHOLE_NUMBER
        if get_value.nil?
          return "#{question.name}: (1) No answer given"
        else
          question.mappings.where(result_grouping_id: result_grouping.id).each do |mapping|
            if mapping.mapping_type == Mapping::ABOVE_LEVEL
              return "#{question.name}: (3) No value for mapping (mapping-#{mapping.id})" if mapping.get_value(user, repeat_section).nil?
              linear_assessment = mapping.linear_assessment if get_value > mapping.get_value(user, repeat_section)
            elsif mapping.mapping_type == Mapping::BELOW_LEVEL
              return "#{question.name}: (3) No value for mapping (mapping-#{mapping.id})" if mapping.get_value(user, repeat_section).nil?
              linear_assessment = mapping.linear_assessment if get_value < mapping.get_value(user, repeat_section)
            elsif mapping.mapping_type == Mapping::OTHERWISE
              linear_assessment = mapping.linear_assessment if linear_assessment.nil?
            end
          end
        end

      elsif question.question_type == Question::CALCULATION
        linear_assessment = question_condition_met(linear_assessment)
      end

      return 'assessment-green' if linear_assessment == 'Green'
      return 'assessment-amber' if linear_assessment == 'Amber'
      return 'assessment-red' if linear_assessment == 'Red'
    end

    def get_weighting(result_grouping, repeat_section)
      default_weight = 0.0

      question.mappings.includes(:question).where(result_grouping_id: result_grouping.id).order(:position).each do |mapping|
        if mapping.mapping_type == Mapping::DATE_AS_AGE
          return ((Date.today - a_date) / 365).floor
        elsif mapping.mapping_type == Mapping::ABOVE_LEVEL
          return "#{question.name}: (2) No answer given (mapping-#{mapping.id})" if get_value.nil?
          return get_value if get_value.is_a? String
          return "#{question.name}: (3) No value for mapping (mapping-#{mapping.id})" if mapping.get_value(user, repeat_section).nil?
          return mapping.weight if get_value > mapping.get_value(user, repeat_section)
        elsif mapping.mapping_type == Mapping::BELOW_LEVEL
          return "#{question.name}: (4) No answer given (mapping-#{mapping.id})" if get_value.nil?
          return "#{question.name}: (5) No value for mapping (mapping-#{mapping.id})" if mapping.get_value(user, repeat_section).nil?
          return mapping.weight if get_value < mapping.get_value(user, repeat_section)
        elsif mapping.mapping_type == Mapping::OTHERWISE
          default_weight = mapping.weight
        else
          return mapping.weight if mapping.choice == a_boolean
        end
      end

      default_weight
    end

    def get_category(result_grouping, repeat_section)
      default_category = ''

      question.mappings.where(result_grouping_id: result_grouping.id).order(:position).each do |mapping|
        if mapping.mapping_type == Mapping::ABOVE_LEVEL
          return "#{question.name}: (6) No answer given (mapping-#{mapping.id})" if get_value.nil?
          return get_value if get_value.is_a? String
          return "#{question.name}: (7) No value for mapping (mapping-#{mapping.id})" if mapping.get_value(user, repeat_section).nil?
          return mapping.category if get_value > mapping.get_value(user, repeat_section)
        elsif mapping.mapping_type == Mapping::BELOW_LEVEL
          return "#{question.name}: (8) No answer given (mapping-#{mapping.id})" if get_value.nil?
          return "#{question.name}: (9) No value for mapping (mapping-#{mapping.id})" if mapping.get_value(user, repeat_section).nil?
          return mapping.category if get_value < mapping.get_value(user, repeat_section)
        elsif mapping.mapping_type == Mapping::OTHERWISE
          default_category = mapping.category
        else
          return mapping.category if mapping.choice == a_boolean
        end
      end

      default_category
    end

    def get_value
      if question.question_type == Question::CALCULATION or question.question_type == Question::CALCULATION_LONG
        return question.get_calculation(user, nil)
      elsif question.question_type == Question::WHOLE_NUMBER
        an_integer
      else
        a_decimal
      end
    end

    private

    def question_condition_met(linear_assessment)
      if get_value.nil?
        return "#{question.name}: (1) No answer given"
      else
        question.mappings.order(:position).each do |mapping|
          if mapping.mapping_type == Mapping::ABOVE_LEVEL
            return question.get_calculation(user, nil) if question.get_calculation(user, nil).is_a? String
            return "#{question.name}: (10) No value for mapping (mapping-#{mapping.id})" if mapping.get_value(user).nil?
            return mapping.linear_assessment if question.get_calculation(user, nil) > mapping.get_value(user)
          elsif mapping.mapping_type == Mapping::BELOW_LEVEL
            return mapping.linear_assessment if question.get_calculation(user, nil) < mapping.get_value(user)
          elsif mapping.mapping_type == Mapping::OTHERWISE
            return mapping.linear_assessment if linear_assessment.nil?
          end
        end
      end
    end
  end
end
