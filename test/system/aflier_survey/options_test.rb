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
