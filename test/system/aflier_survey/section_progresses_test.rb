require "application_system_test_case"

module AflierSurvey
  class SectionProgressesTest < ApplicationSystemTestCase
    setup do
      @section_progress = aflier_survey_section_progresses(:one)
    end

    test "visiting the index" do
      visit aflier_survey.section_progresses_url
      assert_selector "h1", text: "Section Progresses"
    end

    test "creating a Section progress" do
      visit aflier_survey.section_progresses_url
      click_on "New Section Progress"

      fill_in "Question section", with: @section_progress.question_section_id
      fill_in "Status", with: @section_progress.status
      fill_in "User", with: @section_progress.user_id
      click_on "Create Section progress"

      assert_text "Section progress was successfully created"
      click_on "Back"
    end

    test "updating a Section progress" do
      visit aflier_survey.section_progresses_url
      click_on "Edit", match: :first

      fill_in "Question section", with: @section_progress.question_section_id
      fill_in "Status", with: @section_progress.status
      fill_in "User", with: @section_progress.user_id
      click_on "Update Section progress"

      assert_text "Section progress was successfully updated"
      click_on "Back"
    end

  end
end
