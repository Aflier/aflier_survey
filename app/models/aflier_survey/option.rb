module AflierSurvey
  class Option < ApplicationRecord
    belongs_to :question

    has_many :option_mappings
    has_many :option_answers
  end
end
