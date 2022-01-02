require 'test_helper'

module AflierSurvey
  class AnswerTest < ActiveSupport::TestCase

    setup do
      @answer__time_incomplete = aflier_survey_answers(:time_incomplete)
      @answer__time_complete = aflier_survey_answers(:time_complete)

      @answer__whole_number_incomplete = aflier_survey_answers(:whole_number_incomplete)
      @answer__whole_number_complete = aflier_survey_answers(:whole_number_complete)
    end

    test '#is_complete?' do
      assert(@answer__time_complete.is_complete?)
      assert_not(@answer__time_incomplete.is_complete?)

      assert(@answer__whole_number_complete.is_complete?)
      assert_not(@answer__whole_number_incomplete.is_complete?)
    end

  end
end
