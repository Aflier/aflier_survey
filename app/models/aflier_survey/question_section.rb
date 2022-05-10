module AflierSurvey
  class QuestionSection < ApplicationRecord
    belongs_to :question, optional: true
    belongs_to :option, optional: true

    has_many :questions, -> { order(position: :asc) }, dependent: :destroy
    has_many :repeat_sections
    has_many :belonging_sections, dependent: :destroy
    has_many :questionnaires, through: :belonging_sections
    has_many :section_progresses, dependent: :destroy

    has_rich_text :section_description

    def can_view?(unique_ident)
      return true if self.question.nil?

      if self.question
        if question.is_option_chosen?(unique_ident, option)
          return true
        else
          return false
        end
      end

      true
    end

    def is_complete?(unique_ident)
      return true if section_progresses.find_or_create_by!(unique_ident: unique_ident).status == SectionProgress::COMPLETE
    end

    def is_required?(unique_ident)
      return true if section_progresses.find_or_create_by!(unique_ident: unique_ident).status == SectionProgress::REQUIRED
    end

    def tag_as_complete(unique_ident)
      section_progresses.find_or_create_by!(unique_ident: unique_ident).update_attribute(:status, SectionProgress::COMPLETE)
    end

    def tag_as_updated(unique_ident)
      return

      # TODO - Before removing the return about make sure OK on MedicCare (admin should not change questionnaire from submitted)

      section_progresses.find_or_create_by!(unique_ident: unique_ident).update_attribute(:status, SectionProgress::UPDATED)
      questionnaires.each do |questionnaire|
        questionnaire.updated_questionnaire(unique_ident)
      end
    end

    def tag_as_required(unique_ident)
      section_progresses.find_or_create_by!(unique_ident: unique_ident)
                        .update_attribute(:status, SectionProgress::REQUIRED)
    end

    def total_questions
      questions.size
    end

    def repeated_sections(unique_ident)
      if repeat_sections.where(unique_ident: unique_ident).empty?
        repeat_sections.create!(unique_ident: unique_ident)
      end
      repeat_sections.where(unique_ident: unique_ident)
    end

    def can_control_repeated_section?
      return false if self.restrict_controls
      true
    end

    def in_questionnaire?(questionnaire)
      belonging_sections.where(questionnaire_id: questionnaire.id).empty?
    end

    def open_section?(unique_ident)
      return false if is_complete?(unique_ident)
      return default_open
    end
  end
end
