require "application_system_test_case"

module AflierSurvey
  class BelongingSectionsTest < ApplicationSystemTestCase
    setup do
      @user__one = users(:one)
      @belonging_section = aflier_survey_belonging_sections(:one)
    end

    test "updating a Belonging section" do
      visit aflier_survey.belonging_sections_url

      sign_in(@user__one)

      click_on "Edit", match: :first

      fill_in "Question section", with: @belonging_section.question_section_id
      fill_in "Questionnaire", with: @belonging_section.questionnaire_id
      click_on "Update Belonging section"

      assert_text "Belonging section was successfully updated"
      click_on "Back"
    end

    test "destroying a Belonging section" do
      visit aflier_survey.belonging_sections_url

      sign_in(@user__one)

      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Belonging section was successfully destroyed"
    end
  end
end
