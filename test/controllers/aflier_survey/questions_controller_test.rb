require 'test_helper'

module AflierSurvey
  class QuestionsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @question = aflier_survey_questions(:one)
    end

    test "should get index" do
      get questions_url
      assert_response :success
    end

    test "should get new" do
      get new_question_url
      assert_response :success
    end

    test "should create question" do
      assert_difference('Question.count') do
        post questions_url, params: { question: { aflier_survey_calc_id: @question.aflier_survey_calc_id, aflier_survey_question_section_id: @question.aflier_survey_question_section_id, allow_not_sure: @question.allow_not_sure, following_section_id: @question.following_section_id, help: @question.help, name: @question.name, position: @question.position, question_type: @question.question_type, required: @question.required, text_hint: @question.text_hint, text_on_other: @question.text_on_other } }
      end

      assert_redirected_to question_url(Question.last)
    end

    test "should show question" do
      get question_url(@question)
      assert_response :success
    end

    test "should get edit" do
      get edit_question_url(@question)
      assert_response :success
    end

    test "should update question" do
      patch question_url(@question), params: { question: { aflier_survey_calc_id: @question.aflier_survey_calc_id, aflier_survey_question_section_id: @question.aflier_survey_question_section_id, allow_not_sure: @question.allow_not_sure, following_section_id: @question.following_section_id, help: @question.help, name: @question.name, position: @question.position, question_type: @question.question_type, required: @question.required, text_hint: @question.text_hint, text_on_other: @question.text_on_other } }
      assert_redirected_to question_url(@question)
    end

    test "should destroy question" do
      assert_difference('Question.count', -1) do
        delete question_url(@question)
      end

      assert_redirected_to questions_url
    end
  end
end
