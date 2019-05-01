module AflierSurvey
  class BelongingSection < ApplicationRecord
    belongs_to :questionnaire
    belongs_to :question_section
  end
end
