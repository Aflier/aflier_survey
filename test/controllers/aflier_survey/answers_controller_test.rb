require 'test_helper'

module AflierSurvey
  class AnswersControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @answer = aflier_survey_answers(:one)
    end

    test "should get index" do
      get answers_url
      assert_response :success
    end

    test "should get new" do
      get new_answer_url
      assert_response :success
    end

    test "should create answer" do
      assert_difference('Answer.count') do
        post answers_url, params: { answer: { a_boolean: @answer.a_boolean, a_date: @answer.a_date, a_decimal: @answer.a_decimal, a_string: @answer.a_string, a_time: @answer.a_time, an_integer: @answer.an_integer, complete: @answer.complete, file: @answer.file, not_sure: @answer.not_sure, other: @answer.other, question_id: @answer.question_id, repeat_section_id: @answer.repeat_section_id, user_id: @answer.user_id } }
      end

      assert_redirected_to answer_url(Answer.last)
    end

    test "should show answer" do
      get answer_url(@answer)
      assert_response :success
    end

    test "should get edit" do
      get edit_answer_url(@answer)
      assert_response :success
    end

    test "should update answer" do
      patch answer_url(@answer), params: { answer: { a_boolean: @answer.a_boolean, a_date: @answer.a_date, a_decimal: @answer.a_decimal, a_string: @answer.a_string, a_time: @answer.a_time, an_integer: @answer.an_integer, complete: @answer.complete, file: @answer.file, not_sure: @answer.not_sure, other: @answer.other, question_id: @answer.question_id, repeat_section_id: @answer.repeat_section_id, user_id: @answer.user_id } }
      assert_redirected_to answer_url(@answer)
    end

    test "should destroy answer" do
      assert_difference('Answer.count', -1) do
        delete answer_url(@answer)
      end

      assert_redirected_to answers_url
    end
  end
end
