require 'test_helper'

module AflierSurvey
  class QuestionInputsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @question_input = aflier_survey_question_inputs(:one)
    end

    test "should get index" do
      get question_inputs_url
      assert_response :success
    end

    test "should get new" do
      get new_question_input_url
      assert_response :success
    end

    test "should create question_input" do
      assert_difference('QuestionInput.count') do
        post question_inputs_url, params: { question_input: { calc_id: @question_input.calc_id, question_id: @question_input.question_id } }
      end

      assert_redirected_to question_input_url(QuestionInput.last)
    end

    test "should show question_input" do
      get question_input_url(@question_input)
      assert_response :success
    end

    test "should get edit" do
      get edit_question_input_url(@question_input)
      assert_response :success
    end

    test "should update question_input" do
      patch question_input_url(@question_input), params: { question_input: { calc_id: @question_input.calc_id, question_id: @question_input.question_id } }
      assert_redirected_to question_input_url(@question_input)
    end

    test "should destroy question_input" do
      assert_difference('QuestionInput.count', -1) do
        delete question_input_url(@question_input)
      end

      assert_redirected_to question_inputs_url
    end
  end
end
