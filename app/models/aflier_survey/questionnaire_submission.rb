module AflierSurvey
  class QuestionnaireSubmission < ApplicationRecord
    belongs_to :user
    belongs_to :questionnaire

    SAVED = 'saved'
    SUBMITTED = 'submitted'
    UPDATED   = 'updated'
    LOOKING_AT = 'looking_at'
    ASSIGNED = 'assigned'
  end

end
