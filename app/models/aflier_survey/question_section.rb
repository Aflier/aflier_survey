module AflierSurvey
  class QuestionSection < ApplicationRecord
    has_many :questions, dependent: :destroy
    has_many :repeat_sections
    has_many :belonging_sections, dependent: :destroy
    has_many :questionnaires, through: :belonging_sections
    has_many :section_progresses, dependent: :destroy

    has_rich_text :section_description

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
      repeat_sections.create(unique_ident: unique_ident) if repeat_sections.where(unique_ident: unique_ident).empty?
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
