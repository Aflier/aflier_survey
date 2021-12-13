require "application_system_test_case"

module AflierSurvey
  class QuestionInputsTest < ApplicationSystemTestCase
    setup do
      @user__one      = users(:one)
      @question_input = aflier_survey_question_inputs(:one)
    end

    test "visiting the index" do
      visit aflier_survey.question_inputs_url
      sign_in(@user__one)
      assert_selector "h1", text: "Question Inputs"
    end

    test "creating a Question input" do
      visit aflier_survey.question_inputs_url

      sign_in(@user__one)

      click_on "New Question Input"

      fill_in "Calc", with: @question_input.calc_id
      fill_in "Question", with: @question_input.question_id
      click_on "Create Question input"

      sleep 1
      sleep 1

      assert_text "Question input was successfully created"
      click_on "Back"
    end

    test "updating a Question input" do
      visit aflier_survey.question_inputs_url

      sign_in(@user__one)

      click_on "Edit", match: :first

      fill_in "Calc", with: @question_input.calc_id
      fill_in "Question", with: @question_input.question_id
      click_on "Update Question input"

      assert_text "Question input was successfully updated"
      click_on "Back"
    end

    test "destroying a Question input" do
      visit aflier_survey.question_inputs_url
      sign_in(@user__one)
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Question input was successfully destroyed"
    end
  end
end
