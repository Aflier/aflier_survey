module AflierSurvey
  class SectionProgress < ApplicationRecord
    belongs_to :question_section

    COMPLETE = 'complete'.freeze
    UPDATED = 'updated'.freeze
    REQUIRED = 'required'.freeze
  end
end
