require "application_system_test_case"

module AflierSurvey
  class RepeatSectionsTest < ApplicationSystemTestCase
    setup do
      @user__one = users(:one)
      @repeat_section = aflier_survey_repeat_sections(:one)
    end

    test "visiting the index" do
      visit aflier_survey.repeat_sections_url
      sign_in(@user__one)
      assert_selector "h1", text: "Repeat Sections"
    end

    test "updating a Repeat section" do
      visit aflier_survey.repeat_sections_url
      sign_in(@user__one)
      click_on "Edit", match: :first

      fill_in "Data date", with: @repeat_section.data_date
      fill_in "Question section", with: @repeat_section.question_section_id
      fill_in "Unique ident", with: @repeat_section.unique_ident
      click_on "Update Repeat section"

      assert_text "Repeat section was successfully updated"
      click_on "Back"
    end

    test "destroying a Repeat section" do
      visit aflier_survey.repeat_sections_url
      sign_in(@user__one)

      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Repeat section was successfully destroyed"
    end
  end
end
