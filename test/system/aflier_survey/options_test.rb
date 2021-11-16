require "application_system_test_case"

module AflierSurvey
  class OptionsTest < ApplicationSystemTestCase
    setup do
      @user__one = users(:one)
      @option    = aflier_survey_options(:one)
    end

    test "visiting the index" do
      visit aflier_survey.options_url
      sign_in(@user__one)
      assert_selector "h1", text: "Options"
    end

    test "creating a Option" do
      visit aflier_survey.options_url
      sign_in(@user__one)

      click_on "New Option"

      fill_in "A decimal", with: @option.a_decimal
      fill_in "Name", with: @option.name
      fill_in "Position", with: @option.position
      fill_in "Question", with: @option.question_id
      click_on "Create Option"

      assert_text "Option was successfully created"
      click_on "Back"
    end

    test "updating a Option" do
      visit aflier_survey.options_url
      sign_in(@user__one)
      click_on "Edit", match: :first

      fill_in "A decimal", with: @option.a_decimal
      fill_in "Name", with: @option.name
      fill_in "Position", with: @option.position
      fill_in "Question", with: @option.question_id
      click_on "Update Option"

      assert_text "Option was successfully updated"
      click_on "Back"
    end

    test "destroying a Option" do
      visit aflier_survey.options_url
      sign_in(@user__one)
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Option was successfully destroyed"
    end
  end
end
