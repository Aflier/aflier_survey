require "application_system_test_case"

module AflierSurvey
  class QuestionsTest < ApplicationSystemTestCase
    setup do
      @question = aflier_survey_questions(:one)
    end

    test "visiting the index" do
      visit questions_url
      assert_selector "h1", text: "Questions"
    end

    test "creating a Question" do
      visit questions_url
      click_on "New Question"

      fill_in "Aflier survey calc", with: @question.aflier_survey_calc_id
      fill_in "Aflier survey question section", with: @question.aflier_survey_question_section_id
      fill_in "Allow not sure", with: @question.allow_not_sure
      fill_in "Following section", with: @question.following_section_id
      fill_in "Help", with: @question.help
      fill_in "Name", with: @question.name
      fill_in "Position", with: @question.position
      fill_in "Question type", with: @question.question_type
      fill_in "Required", with: @question.required
      fill_in "Text hint", with: @question.text_hint
      fill_in "Text on other", with: @question.text_on_other
      click_on "Create Question"

      assert_text "Question was successfully created"
      click_on "Back"
    end

    test "updating a Question" do
      visit questions_url
      click_on "Edit", match: :first

      fill_in "Aflier survey calc", with: @question.aflier_survey_calc_id
      fill_in "Aflier survey question section", with: @question.aflier_survey_question_section_id
      fill_in "Allow not sure", with: @question.allow_not_sure
      fill_in "Following section", with: @question.following_section_id
      fill_in "Help", with: @question.help
      fill_in "Name", with: @question.name
      fill_in "Position", with: @question.position
      fill_in "Question type", with: @question.question_type
      fill_in "Required", with: @question.required
      fill_in "Text hint", with: @question.text_hint
      fill_in "Text on other", with: @question.text_on_other
      click_on "Update Question"

      assert_text "Question was successfully updated"
      click_on "Back"
    end

    test "destroying a Question" do
      visit questions_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Question was successfully destroyed"
    end
  end
end
