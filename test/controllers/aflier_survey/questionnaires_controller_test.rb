require 'test_helper'

module AflierSurvey
  class QuestionnairesControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @questionnaire = aflier_survey_questionnaires(:one)
    end

    test "should get index" do
      get questionnaires_url
      assert_response :success
    end

    test "should get new" do
      get new_questionnaire_url
      assert_response :success
    end

    test "should create questionnaire" do
      assert_difference('Questionnaire.count') do
        post questionnaires_url, params: { questionnaire: { complete_on_sections: @questionnaire.complete_on_sections, description: @questionnaire.description, name: @questionnaire.name, thank_you: @questionnaire.thank_you } }
      end

      assert_redirected_to questionnaire_url(Questionnaire.last)
    end

    test "should show questionnaire" do
      get questionnaire_url(@questionnaire)
      assert_response :success
    end

    test "should get edit" do
      get edit_questionnaire_url(@questionnaire)
      assert_response :success
    end

    test "should update questionnaire" do
      patch questionnaire_url(@questionnaire), params: { questionnaire: { complete_on_sections: @questionnaire.complete_on_sections, description: @questionnaire.description, name: @questionnaire.name, thank_you: @questionnaire.thank_you } }
      assert_redirected_to questionnaire_url(@questionnaire)
    end

    test "should destroy questionnaire" do
      assert_difference('Questionnaire.count', -1) do
        delete questionnaire_url(@questionnaire)
      end

      assert_redirected_to questionnaires_url
    end
  end
end
