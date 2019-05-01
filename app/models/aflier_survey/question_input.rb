module AflierSurvey
  class QuestionInput < ApplicationRecord
    belongs_to :calc
    belongs_to :question
  end
end
