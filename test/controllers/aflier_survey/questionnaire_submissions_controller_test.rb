require 'test_helper'

module AflierSurvey
  class QuestionnaireSubmissionsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @questionnaire_submission = aflier_survey_questionnaire_submissions(:one)
    end

    test "should get index" do
      get questionnaire_submissions_url
      assert_response :success
    end

    test "should get new" do
      get new_questionnaire_submission_url
      assert_response :success
    end

    test "should create questionnaire_submission" do
      assert_difference('QuestionnaireSubmission.count') do
        post questionnaire_submissions_url, params: { questionnaire_submission: { questionnaire_id: @questionnaire_submission.questionnaire_id, status: @questionnaire_submission.status, user_id: @questionnaire_submission.user_id } }
      end

      assert_redirected_to questionnaire_submission_url(QuestionnaireSubmission.last)
    end

    test "should show questionnaire_submission" do
      get questionnaire_submission_url(@questionnaire_submission)
      assert_response :success
    end

    test "should get edit" do
      get edit_questionnaire_submission_url(@questionnaire_submission)
      assert_response :success
    end

    test "should update questionnaire_submission" do
      patch questionnaire_submission_url(@questionnaire_submission), params: { questionnaire_submission: { questionnaire_id: @questionnaire_submission.questionnaire_id, status: @questionnaire_submission.status, user_id: @questionnaire_submission.user_id } }
      assert_redirected_to questionnaire_submission_url(@questionnaire_submission)
    end

    test "should destroy questionnaire_submission" do
      assert_difference('QuestionnaireSubmission.count', -1) do
        delete questionnaire_submission_url(@questionnaire_submission)
      end

      assert_redirected_to questionnaire_submissions_url
    end
  end
end
