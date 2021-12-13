require "application_system_test_case"

module AflierSurvey
  class QuestionnairesTest < ApplicationSystemTestCase
    setup do
      @user__one     = users(:one)
      @questionnaire = aflier_survey_questionnaires(:one)
    end

    test "visiting the index" do
      visit aflier_survey.questionnaires_url
      sign_in(@user__one)
      assert_selector "h1", text: "Questionnaires"
    end

    test "creating a Questionnaire" do
      visit aflier_survey.questionnaires_url
      sign_in(@user__one)
      click_on "New Questionnaire"

      sleep 1
      sleep 1

      fill_in "Complete on sections", with: @questionnaire.complete_on_sections
      fill_in "Description", with: @questionnaire.description
      fill_in "Name", with: @questionnaire.name
      fill_in "Thank you", with: @questionnaire.thank_you
      click_on "Create Questionnaire"

      assert_text "Questionnaire was successfully created"
      click_on "Back"
    end

    test "updating a Questionnaire" do
      visit aflier_survey.questionnaires_url

      sign_in(@user__one)

      click_on "Edit", match: :first

      fill_in "Complete on sections", with: @questionnaire.complete_on_sections
      fill_in "Description", with: @questionnaire.description
      fill_in "Name", with: @questionnaire.name
      fill_in "Thank you", with: @questionnaire.thank_you
      click_on "Update Questionnaire"

      assert_text "Questionnaire was successfully updated"
      click_on "Back"
    end

    test "destroying a Questionnaire" do
      visit aflier_survey.questionnaires_url
      sign_in(@user__one)
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Questionnaire was successfully destroyed"
    end
  end
end
