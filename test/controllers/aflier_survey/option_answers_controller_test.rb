require 'test_helper'

module AflierSurvey
  class OptionAnswersControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @option_answer = aflier_survey_option_answers(:one)
    end

    test "should get index" do
      get option_answers_url
      assert_response :success
    end

    test "should get new" do
      get new_option_answer_url
      assert_response :success
    end

    test "should create option_answer" do
      assert_difference('OptionAnswer.count') do
        post option_answers_url, params: { option_answer: { answer_id: @option_answer.answer_id, option_id: @option_answer.option_id, unique_ident: @option_answer.unique_ident } }
      end

      assert_redirected_to option_answer_url(OptionAnswer.last)
    end

    test "should show option_answer" do
      get option_answer_url(@option_answer)
      assert_response :success
    end

    test "should get edit" do
      get edit_option_answer_url(@option_answer)
      assert_response :success
    end

    test "should update option_answer" do
      patch option_answer_url(@option_answer), params: { option_answer: { answer_id: @option_answer.answer_id, option_id: @option_answer.option_id, unique_ident: @option_answer.unique_ident } }
      assert_redirected_to option_answer_url(@option_answer)
    end

    test "should destroy option_answer" do
      assert_difference('OptionAnswer.count', -1) do
        delete option_answer_url(@option_answer)
      end

      assert_redirected_to option_answers_url
    end
  end
end
