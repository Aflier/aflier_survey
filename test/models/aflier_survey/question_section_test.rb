require 'test_helper'

module AflierSurvey
  class QuestionSectionTest < ActiveSupport::TestCase

    setup do
      @user__one        = users(:one)
      @question_section = aflier_survey_question_sections(:select_many_can_see)

      @option_answer = aflier_survey_option_answers(:select_many_can_see)
      @option_answer.update(unique_ident: @user__one.id.to_s)
    end

    test '#can_view? - option selected "select many" and chosen' do
      assert(@question_section.can_view?(@user__one.id.to_s))
    end

  end
end
