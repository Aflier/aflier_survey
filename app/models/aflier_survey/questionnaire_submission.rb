module AflierSurvey
  class QuestionnaireSubmission < ApplicationRecord
    belongs_to :questionnaire

    validates :unique_ident, presence: true

    SAVED      = 'saved'
    SUBMITTED  = 'submitted'
    UPDATED    = 'updated'
    LOOKING_AT = 'looking_at'
    ASSIGNED   = 'assigned'
  end

end
