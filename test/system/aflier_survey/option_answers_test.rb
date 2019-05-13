require "application_system_test_case"

module AflierSurvey
  class OptionAnswersTest < ApplicationSystemTestCase
    setup do
      @option_answer = aflier_survey_option_answers(:one)
    end

    test "visiting the index" do
      visit option_answers_url
      assert_selector "h1", text: "Option Answers"
    end

    test "creating a Option answer" do
      visit option_answers_url
      click_on "New Option Answer"

      fill_in "Answer", with: @option_answer.answer_id
      fill_in "Option", with: @option_answer.option_id
      fill_in "Unique ident", with: @option_answer.unique_ident
      click_on "Create Option answer"

      assert_text "Option answer was successfully created"
      click_on "Back"
    end

    test "updating a Option answer" do
      visit option_answers_url
      click_on "Edit", match: :first

      fill_in "Answer", with: @option_answer.answer_id
      fill_in "Option", with: @option_answer.option_id
      fill_in "Unique ident", with: @option_answer.unique_ident
      click_on "Update Option answer"

      assert_text "Option answer was successfully updated"
      click_on "Back"
    end

    test "destroying a Option answer" do
      visit option_answers_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Option answer was successfully destroyed"
    end
  end
end
