require "application_system_test_case"

module AflierSurvey
  class BelongingSectionsTest < ApplicationSystemTestCase
    setup do
      @belonging_section = aflier_survey_belonging_sections(:one)
    end

    test "visiting the index" do
      visit aflier_survey.belonging_sections_url
      assert_selector "h1", text: "Belonging Sections"
    end

    test "creating a Belonging section" do
      visit belonging_sections_url
      click_on "New Belonging Section"

      fill_in "Question section", with: @belonging_section.question_section_id
      fill_in "Questionnaire", with: @belonging_section.questionnaire_id
      click_on "Create Belonging section"

      assert_text "Belonging section was successfully created"
      click_on "Back"
    end

    test "updating a Belonging section" do
      visit belonging_sections_url
      click_on "Edit", match: :first

      fill_in "Question section", with: @belonging_section.question_section_id
      fill_in "Questionnaire", with: @belonging_section.questionnaire_id
      click_on "Update Belonging section"

      assert_text "Belonging section was successfully updated"
      click_on "Back"
    end

    test "destroying a Belonging section" do
      visit belonging_sections_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Belonging section was successfully destroyed"
    end
  end
end
