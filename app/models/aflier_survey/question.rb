module AflierSurvey
  class Question < ApplicationRecord
    belongs_to :question_section
    belongs_to :following_section, class_name: "QuestionSection", foreign_key: "following_section_id", optional: true
    belongs_to :calc, optional: true
    belongs_to :result_grouping, optional: true
    belongs_to :question, optional: true

    has_many :answers, dependent: :destroy
    has_many :options, dependent: :destroy
    has_many :question_sections

    # has_many :mappings, dependent: :destroy TODO - needs adding back in
    # has_many :table_mappings, dependent: :destroy TODO - needs adding back in

    belongs_to :question_y, class_name: "Question", foreign_key: 'question_y_id', optional: true

    validates :unique_key, uniqueness: true, :allow_blank => true, :allow_nil => true

    STRING = 'String'.freeze
    YES_OR_NO = 'Yes or no'.freeze
    TEXT = 'Always text'.freeze
    TEXT_ON_YES = 'Text on yes'.freeze
    TEXT_ON_NO = 'Text on no'.freeze
    SELECT_ONE = 'Select one'.freeze
    SELECT_MANY = 'Select many'.freeze
    OUT_OF = 'Out of...'.freeze
    DECIMAL = 'Decimal'.freeze
    WHOLE_NUMBER = 'Whole number'.freeze
    DATE = 'Date'.freeze
    TIME = 'Time'.freeze
    MONEY = 'Money'.freeze
    FILE_UPLOAD = 'File Upload'.freeze

    SECTION_ON_YES = 'New Section on Yes'.freeze
    SECTION_ON_NO = 'New Section on No'.freeze

    # Depricated!
    CALCULATION = 'Calculation'.freeze
    CALCULATION_PERCENTAGE = 'Calculation percent'.freeze
    CALCULATION_LONG = 'Calculation long'.freeze

    RESULT = "Result"

    # What to display results as
    RADAR    = 'radar'.freeze
    BAR      = 'bar'.freeze
    LINE     = 'line'.freeze
    POLAR    = 'polar'.freeze
    MATCH    = 'match'.freeze
    TABLE    = 'table'.freeze
    GROUPING = 'result grouping'
    AS_AGE   = 'date as age'


    QUESTION_TYPES = [STRING, TEXT, YES_OR_NO, TEXT_ON_YES, TEXT_ON_NO, SECTION_ON_YES, SECTION_ON_NO, SELECT_ONE, SELECT_MANY,
                      OUT_OF, DECIMAL, WHOLE_NUMBER, MONEY, DATE, TIME, FILE_UPLOAD, CALCULATION,
                      CALCULATION_PERCENTAGE, CALCULATION_LONG, RESULT].freeze

    CALCULATION_TYPE = [DECIMAL, WHOLE_NUMBER, SELECT_ONE, YES_OR_NO, CALCULATION, CALCULATION_LONG, DATE, RESULT, STRING].freeze
    OPTION_TYPE = [SELECT_ONE].freeze

    RESULT_TYPES = [RADAR, POLAR, BAR, LINE, MATCH, TABLE, GROUPING, AS_AGE].freeze

    # Used for linear assessments of values
    ASSESSMENT = ['Green', 'Amber', 'Red', 'Info'].freeze

    store :general_store, accessors: [ :minimum, :maximum ], coder: JSON

    def minimum
      return 1 if super.blank?
      super
    end

    def maximum
      return 10 if super.blank?
      super
    end


    def previous
      return nil if self.position == 0
      self.question_section.questions.find_by(position: self.position - 1)
    end

    def next
      self.question_section.questions.where(position: self.position + 1).first
    end

    def is_complete?(unique_ident)
      return false if self.answers.where(unique_ident: unique_ident).empty?
      self.answers.find_by(unique_ident: unique_ident).complete?
    end

    # Ignore repeated section for now.
    def option_name(unique_ident)

      option = Option.joins(:option_answers)
                     .find_by(option_answers: { unique_ident: unique_ident,
                                                option_id: options.pluck(:id) })

      if question_type == SELECT_ONE
        return "Please provide answer for: #{self.name}" if option.nil?
        return option.name
      end

      if question_type == DATE or question_type == WHOLE_NUMBER or question_type == DECIMAL
        return "Please provide answer for: #{self.name}" if get_answer(user, nil).is_a? String
        return get_answer(user, nil)
      end

      return "Question type as feed not yet supported: #{self.question_type}"
    end


    def get_repeat_answers(unique_ident)
      answers = self.answers.where(unique_ident: unique_ident)
      return answers
    end

    def get_source_repeat_answers(unique_ident)
      answers = self.question.answers.where(unique_ident: unique_ident)
      return answers
    end

    def is_option_chosen?(unique_ident, option)
      option__found = Option.joins(:option_answers).find_by(option_answers: { unique_ident: unique_ident, option_id: option.id })
      option__found
    end

    # If this is a question in a repeated section it will give the latest.
    def get_answer(unique_ident, repeat_section)
      if question_type == CALCULATION and repeat_section.nil?
        return "No answer: #{name}" if self.answers.where(user: user).empty?
        return self.answers.joins(:repeat_section).order("repeat_sections.created_at ASC").where(user_id: user.id).last.an_integer if self.question_type == WHOLE_NUMBER
        return "Calculation sourse not yet supported"
      elsif question_type == RESULT

        return "Hello!"

      elsif question_type == SELECT_ONE
        option = Option.joins(:option_answers).find_by(option_answers: { unique_ident: unique_ident, option_id: options.pluck(:id) })
        return "Please provide answer for: #{self.name}" if option.nil?
        return option.a_decimal unless option.a_decimal.nil?
        return option.name
      elsif question_type == SELECT_MANY
        option = Option.joins(:option_answers).where(option_answers: { unique_ident: unique_ident, option_id: options.pluck(:id) })
        return "Please provide answer for: #{self.name}" if option.empty?
        return option.pluck(:name).join(', ')
      else
        latest_answer = relevant_answer(repeat_section, unique_ident)

        return "No answer: #{name}" if latest_answer.nil?
        return latest_answer.a_string if self.question_type == STRING
        return latest_answer.some_text if self.question_type == TEXT

        if self.question_type == DATE
          return "Please provide answer for: #{self.name}" if latest_answer.a_date.nil?
          return latest_answer.a_date
        end

        return latest_answer.a_decimal if self.question_type == DECIMAL
        return latest_answer.an_integer if self.question_type == WHOLE_NUMBER
      end

      false
    end

    def get_option(user)
      option = Option.joins(:option_answers).find_by(option_answers: { user_id: user.id, option_id: options.pluck(:id) })
      return "Please provide answer for: #{self.name}" if option.nil?
      return option
    end

    def match_answer(user, repeat_section)

      answer = relevant_answer(repeat_section, user)

      return "'#{question_section.name}:#{name}' required [2]" if answer.nil?

      return answer.an_integer if self.question_type == WHOLE_NUMBER
      return answer.a_decimal if self.question_type == DECIMAL

      if self.question_type == DATE
        return "'#{name}' required [3]" if answer.a_date.nil?
        return ((Date.today - answer.a_date) / 365).floor
      end

      ## not sure need rest!

      if question_type == RESULT

        return "Hello!"

      elsif question_type == SELECT_ONE
        option = Option.joins(:option_answers).find_by(option_answers: { user_id: user.id, option_id: options.pluck(:id) })
        return "Please provide answer for: #{self.name}" if option.nil?
        return option.a_decimal # TODO - where do I use this!
      else
        return "No answer: #{name}" if self.answers.where(user: user, repeat_section_id: repeat_section).empty?
        return self.answers.find_by(user: user, repeat_section_id: repeat_section).a_string if self.question_type == STRING
        return self.answers.find_by(user: user, repeat_section_id: repeat_section).some_text if self.question_type == TEXT
        return self.answers.find_by(user: user, repeat_section_id: repeat_section).a_date if self.question_type == DATE
        return self.answers.find_by(user: user, repeat_section_id: repeat_section).a_decimal if self.question_type == DECIMAL
        return self.answers.find_by(user: user, repeat_section_id: repeat_section).an_integer if self.question_type == WHOLE_NUMBER
      end

      false
    end

    def match_option(user, repeat_section)
      option = Option.joins(:option_answers).find_by(option_answers: { user_id: user.id, option_id: options.pluck(:id) })
      return "Please provide answer for: #{self.name}" if option.nil?
      option.name
      # return option.a_decimal # TODO - where do I use this!
    end



    def make_repeat_answer(unique_ident, repeat_section)
      # First check we don't have an answer over from before repeat
      lonely_answer = answers.find_by(unique_ident: unique_ident, repeat_section: nil)

      if lonely_answer
        lonely_answer.update_attribute(:repeat_section_id, repeat_section.id)
        return lonely_answer
      else
        return answers.find_or_create_by(unique_ident: unique_ident,
                                         repeat_section_id: repeat_section.id)
      end
    end

    def make_answer(unique_ident)
      self.answers.find_or_create_by!(unique_ident: unique_ident)
    end

    def comment_text_hint
      return 'Please explain more...' if self.text_hint.blank?
      return self.text_hint
    end

    def links_to_section?
      return true if question_type == SECTION_ON_YES
      return true if question_type == SECTION_ON_NO
      false
    end

    def answer_wants_section?(user)
      return false if self.following_section.nil?
      answer = self.answers.find_by(user_id: user.id)

      return true if question_type == SECTION_ON_YES and answer.a_boolean == true and following_section
      return true if question_type == SECTION_ON_NO and answer.a_boolean == false and following_section
      false
    end

    def is_required?(user)
      return false unless self.required
      return false if self.required and is_complete?(user)
      true
    end

    def mappings_for(result_grouping)
      if question_type == DATE
        mappings.find_or_create_by!(result_grouping_id: result_grouping.id, choice: true,
                                    mapping_type: Mapping::DATE_AS_AGE)
      elsif question_type == DECIMAL or question_type == CALCULATION or question_type == WHOLE_NUMBER or question_type == RESULT
        mappings.find_or_create_by!(result_grouping_id: result_grouping.id, mapping_type: Mapping::ABOVE_LEVEL, position: 0)
        mappings.find_or_create_by!(result_grouping_id: result_grouping.id, mapping_type: Mapping::BELOW_LEVEL, position: 1)
        mappings.find_or_create_by!(result_grouping_id: result_grouping.id, mapping_type: Mapping::OTHERWISE, position: 2)
      else
        mappings.find_or_create_by!(result_grouping_id: result_grouping.id, choice: true)
        mappings.find_or_create_by!(result_grouping_id: result_grouping.id, choice: false)
      end
    end

    def add_mapping(result_grouping, mapping_type)
      mappings.create!(result_grouping_id: result_grouping.id, mapping_type: mapping_type, position: mappings.where(result_grouping_id: result_grouping.id).size)
    end

    def get_calculation(user, repeat_section)
      return calc.result(user, repeat_section) unless calc.nil?
      return question.match_answer(user, repeat_section) if question and result_type == MATCH
      question.get_answer(user, repeat_section) unless question.nil?
    end

    def maximum_calculation(user)
      calc.maximum_score(user) unless calc.nil?
    end

    def question_maximum(user)
      if question_type == SELECT_ONE
        return options.maximum(:a_decimal)
      end

      answer = answers.find_by(user_id: user.id, repeat_section_id: repeat_section.id)

      if question_type == YES_OR_NO
        return value_true if value_true > value_false
        return value_false
      end

      answer.get_value
    end

    def get_description(user, repeat_section)

      result = calc.result(user, repeat_section) if calc

      if result_type == MATCH
        result = question.match_answer(user, repeat_section) unless question.nil?
      else
        result = question.get_answer(user, repeat_section) if question
      end

      return "No result for: #{name}" if result.nil?

      mapping = matching_mapping(result, user, repeat_section)

      return mapping if mapping.is_a? String

      mapping.description
    end

    def get_table_inputs(user, repeat_section)
      return "#{question_y.get_answer(user, nil)}" if question.question_type == DATE or question.question_type == SELECT_ONE
      return "#{question.option_name(user)}, #{question_y.get_answer(user, repeat_section)}"
    end

    def get_category(user, repeat_section)

      result = calc.result(user, repeat_section) if calc

      if result_type == MATCH
        result = question.match_answer(user, repeat_section) unless question.nil?
      else
        result = question.get_answer(user, repeat_section) if question
      end

      return "No result for: #{name}" if result.nil?

      mapping = matching_mapping(result, user, repeat_section)

      return mapping if mapping.is_a? String

      mapping.category
    end

    def get_linear(user, repeat_section)

      result = calc.result(user, repeat_section) if calc

      if result_type == MATCH
        result = question.match_answer(user, repeat_section) unless question.nil?
      else
        result = question.get_answer(user, repeat_section) if question
      end


      return "No result for: #{name}" if result.nil?

      mapping = matching_mapping(result, user, repeat_section)

      return mapping if mapping.is_a? String

      mapping.linear_assessment
    end


    def weighting_on_value_given
      return true if question_type == YES_OR_NO or
          question_type == DATE or
          question_type == DECIMAL or question_type == WHOLE_NUMBER
    end

    # I think this is where we know that the question is actually showing a result so lets go to where we are getting the result from.
    def result(unique_ident, repeat_section)

      if question_type == RESULT and result_type == GROUPING
        return self.result_grouping.total_scored(unique_ident)
      elsif question_type == RESULT and result_type == AS_AGE
        return "Question #{name} not set up correctly" if self.question.nil?

        dob = self.question.get_answer(unique_ident, repeat_section)
        return dob if dob.is_a? String

        return ((Date.today - dob) / 365).floor
      elsif question_type == SELECT_ONE
        option_answer = OptionAnswer.joins(:option).find_by(unique_ident: unique_ident, options: {question_id: self.id} )
        return "Provide answer for: #{name}" if option_answer.nil?
        return option_answer.option.a_decimal
      end

      answer = answers.find_by(unique_ident: unique_ident, repeat_section_id: (repeat_section ? repeat_section.id : nil))
      return "Provide answer for: #{name}" if answer.nil?

      if question_type == YES_OR_NO
        return value_true if answer.a_boolean == true
        return value_false if answer.a_boolean == false
      end

      answer.get_value
    end

    def percentage(unique_ident, repeat_section)
      return get_calculation(unique_ident, repeat_section) if get_calculation(unique_ident, repeat_section).is_a? String
      return get_calculation(unique_ident, repeat_section) if get_calculation(unique_ident, repeat_section).nil?
      return "NaN" if maximum_calculation(user) == 0.0
      return "No Calc" if calc.nil?

      if calc.operation == Calc::AVERAGE
        return calc.get_average(user)
      end

      (get_calculation(unique_ident, repeat_section) / maximum_calculation(unique_ident) * 100).to_i
    end

    def matching_mapping(value, unique_ident, repeat_section)
      return "No value to check against!" if value.nil?
      return value if value.is_a? String

      mappings.order(:position).each do |mapping|
        mapping_value = mapping.get_value(unique_ident, repeat_section)

        if mapping.mapping_type == Mapping::ABOVE_LEVEL
          return "'#{self.name}' required [4]" if value.nil?
          return "'#{self.name}' mapping issue" if mapping_value.nil?
          return mapping_value if mapping_value.is_a? String

          return mapping if value > mapping_value
        elsif mapping.mapping_type == Mapping::BELOW_LEVEL
          return mapping if value < mapping_value
        elsif mapping.mapping_type == Mapping::OTHERWISE
          return mapping
        end
      end
      "No matching mappings exits"
    end

    def is_lowest?(lowest_question)
      return false if lowest_question.is_a? String

      id == lowest_question.id
    end

    def table_mapping(bound, category)
      if question_type == Question::RESULT and question and question.question_type == Question::SELECT_ONE
        option = question.options.find_by(name: bound)
        return self.table_mappings.find_or_create_by!(option_id: option.id, category: category)
      end

      self.table_mappings.find_or_create_by!(limit_one: bound, category: category)
    end

    def table_mapping_linear_assessment(bound, category)
      return 'none' if table_mapping(bound, category).linear_assessment.nil?
      table_mapping(bound, category).linear_assessment.downcase
    end


    def matching_table_mapping(unique_ident, repeat_section)
      return "No X question as input in #{name}" if question.nil?
      return "No Y question as input in #{name}" if question_y.nil?
      return "No X bounds" if bounds_x.blank? and not(question.question_type == SELECT_ONE)
      return "No Y bounds" if bounds_y.blank?

      answer_x = question.match_option(unique_ident, repeat_section) if question.question_type == SELECT_ONE
      answer_x = question.match_answer(unique_ident, repeat_section) unless question.question_type == SELECT_ONE
      answer_y = question_y.match_answer(unique_ident, repeat_section)

      return "No X answer" if answer_x.nil?
      return "No Y answer" if answer_y.nil?

      return answer_x if answer_x.is_a? String unless question.question_type == SELECT_ONE

      get_bounds_x.each do |bound|
        bounds_y.split(',').each do |bound_y|
          table_mapping = table_mapping(bound, bound_y)

          return "Found invalid table element!" if table_mapping.limit_two.nil?

          if meets_bounds_x(table_mapping, answer_x) and
              answer_y >= table_mapping.limit_one
            return table_mapping
          end unless answer_y.nil? or answer_y.is_a? String
        end
      end

      return 'No match'
    end

    def meets_bounds_x(table_mapping, answer_x)
      return answer_x == table_mapping.option.name if table_mapping.option
      answer_x >= table_mapping.limit_two
    end

    def matching_table_mapping_linear(user, repeat_section)
      table_mapping = matching_table_mapping(user, repeat_section)

      return 'none' if table_mapping.is_a? String
      return 'No Traffic Light' if table_mapping.nil? || table_mapping.linear_assessment.blank?

      table_mapping.linear_assessment.downcase
    end

    def matching_table_mapping_category(user, repeat_section)
      table_mapping = matching_table_mapping(user, repeat_section)

      return table_mapping if table_mapping.is_a? String

      table_mapping.category
    end

    def matching_table_mapping_description(user, repeat_section)
      table_mapping = matching_table_mapping(user, repeat_section)

      return "#{table_mapping}" if table_mapping.is_a? String

      table_mapping.description
    end

    def limit_two(bound, bound_y)
      return table_mapping(bound, bound_y) if table_mapping(bound, bound_y).is_a? String

      table_mapping(bound, bound_y).limit_two
    end

    def get_bounds_x
      return question.options.pluck(:name) if question and question.question_type == SELECT_ONE
      return [] if bounds_x.blank?
      bounds_x.split(",")
    end

    def fall_through_linear(user, repeat_section)
      return matching_table_mapping_linear(user, repeat_section) if self.question_type == TABLE
      return
    end

    def fall_through_category(user, repeat_section)
      return matching_table_mapping_category(user, repeat_section) if self.question_type == TABLE
      get_category(user, nil)
    end

    private

    # Where we have repeated section we use the method to select the appropriate repeated answer or the last.
    def relevant_answer(repeat_section, unique_ident)
      if question_section.many?
        if repeat_section
          answer = self.answers.find_by(user_id: user.id, repeat_section_id: repeat_section.id)
        else
          answer = self.answers
                       .joins(:repeat_section).order("aflier_survey_repeat_sections.created_at ASC")
                       .where(unique_ident: unique_ident).last
        end
      else
        answer = self.answers.find_by(unique_ident: unique_ident)
      end
      answer
    end
  end
end
