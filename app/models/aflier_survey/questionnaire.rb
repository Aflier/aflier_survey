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

    def is_locked?(user, admin)
      return true if self.is_result
      return false if admin
      is_submitted?(user)
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

    def submitted_questionnaire(user)
      submission = self.questionnaire_submissions.find_or_create_by!(user_id: user.id)
      submission.update_attribute(:status, QuestionnaireSubmission::SUBMITTED)
    end

    def updated_questionnaire(user)
      submission = self.questionnaire_submissions.find_or_create_by!(user_id: user.id)
      submission.update_attribute(:status, QuestionnaireSubmission::UPDATED)
    end

    def is_complete?(user)
      answers = user.answers.joins(question: { question_section: :belonging_sections })
                    .where(complete: [nil, false], questions: { required: true })
                    .where(belonging_sections: { questionnaire_id: self.id })

      return true if answers.empty?

      answers.each do |answer|
        answer.question.question_section.tag_as_required(user)
      end

      false
    end

  end
end
