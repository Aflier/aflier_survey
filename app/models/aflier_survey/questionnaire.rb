module AflierSurvey
  class Questionnaire < ApplicationRecord
    has_many :belonging_sections
    has_many :question_sections, through: :belonging_sections

    has_many :questionnaire_submissions

    def is_submitted?(unique_ident)
      questionnaire_submissions = self.questionnaire_submissions.where(unique_ident: unique_ident).order(:updated_at)

      return false if questionnaire_submissions.empty?
      return true if questionnaire_submissions.last.status == QuestionnaireSubmission::SUBMITTED
      false
    end

    def is_locked?(unique_ident, admin)
      return true if self.is_result
      return false if admin
      is_submitted?(unique_ident)
    end

    def is_saved?(unique_ident)
      questionnaire_submissions = self.questionnaire_submissions.where(unique_ident: unique_ident).order(:updated_at)

      return false if questionnaire_submissions.empty?
      return true if questionnaire_submissions.last.status == QuestionnaireSubmission::SAVED
      false
    end

    def assigned_to(user)
      self.questionnaire_submissions.find_or_create_by!(user_id: user.id) do |submission|
        submission.update_attribute(:status, QuestionnaireSubmission::ASSIGNED)
      end
    end

    def looked_at_by(user)
      self.questionnaire_submissions.find_or_create_by!(user_id: user.id) do |submission|
        submission.update_attribute(:status, QuestionnaireSubmission::LOOKING_AT)
      end
    end

    def submitted_questionnaire(unique_ident)
      submission = self.questionnaire_submissions.find_or_create_by!(unique_ident: unique_ident)
      submission.update_attribute(:status, QuestionnaireSubmission::SUBMITTED)
    end

    def updated_questionnaire(unique_ident)
      submission = self.questionnaire_submissions.find_or_create_by!(unique_ident: unique_ident)
      submission.update_attribute(:status, QuestionnaireSubmission::UPDATED)
    end

    def is_complete?(unique_ident)
      answers = Answer.joins(question: { question_section: :belonging_sections })
                    .where(complete: [nil, false], aflier_survey_questions: { required: true })
                    .where(aflier_survey_belonging_sections: { questionnaire_id: self.id })
                    .where(unique_ident: unique_ident)

      return true if answers.empty?

      answers.each do |answer|
        answer.question.question_section.tag_as_required(unique_ident)
      end

      false
    end

    def incomplete_answers(unique_ident)
      Answer.where(unique_ident: unique_ident).joins(question: {question_section: :belonging_sections})
          .where(complete: [nil, false], questions: {required: true})
          .where(belonging_sections: {questionnaire_id: self.id})
    end
  end
end
