require "application_system_test_case"

module AflierSurvey
  class QuestionnaireSubmissionsTest < ApplicationSystemTestCase
    setup do
      @user__one = users(:one)
      @questionnaire_submission = aflier_survey_questionnaire_submissions(:one)
    end

    test "visiting the index" do
      visit aflier_survey.questionnaire_submissions_url

      sign_in(@user__one)

      assert_selector "h1", text: "Questionnaire Submissions"
    end

    test "creating a Questionnaire submission" do
      visit aflier_survey.questionnaire_submissions_url
      click_on "New Questionnaire Submission"

      fill_in "Questionnaire", with: @questionnaire_submission.questionnaire_id
      fill_in "Status", with: @questionnaire_submission.status
      fill_in "User", with: @questionnaire_submission.user_id
      click_on "Create Questionnaire submission"

      assert_text "Questionnaire submission was successfully created"
      click_on "Back"
    end

    test "destroying a Questionnaire submission" do
      visit aflier_survey.questionnaire_submissions_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Questionnaire submission was successfully destroyed"
    end
  end
end
