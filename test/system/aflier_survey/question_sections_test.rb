require "application_system_test_case"

module AflierSurvey
  class QuestionSectionsTest < ApplicationSystemTestCase
    setup do
      @question_section = aflier_survey_question_sections(:one)
    end

    test "visiting the index" do
      visit question_sections_url
      assert_selector "h1", text: "Question Sections"
    end

    test "creating a Question section" do
      visit question_sections_url
      click_on "New Question Section"

      fill_in "Data date", with: @question_section.data_date
      fill_in "Default open", with: @question_section.default_open
      fill_in "Description", with: @question_section.description
      fill_in "Many", with: @question_section.many
      fill_in "Name", with: @question_section.name
      fill_in "Restrict controls", with: @question_section.restrict_controls
      click_on "Create Question section"

      assert_text "Question section was successfully created"
      click_on "Back"
    end

    test "updating a Question section" do
      visit question_sections_url
      click_on "Edit", match: :first

      fill_in "Data date", with: @question_section.data_date
      fill_in "Default open", with: @question_section.default_open
      fill_in "Description", with: @question_section.description
      fill_in "Many", with: @question_section.many
      fill_in "Name", with: @question_section.name
      fill_in "Restrict controls", with: @question_section.restrict_controls
      click_on "Update Question section"

      assert_text "Question section was successfully updated"
      click_on "Back"
    end

    test "destroying a Question section" do
      visit question_sections_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Question section was successfully destroyed"
    end
  end
end
