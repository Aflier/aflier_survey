module AflierSurvey
  class Option < ApplicationRecord
    belongs_to :question
  end
end
