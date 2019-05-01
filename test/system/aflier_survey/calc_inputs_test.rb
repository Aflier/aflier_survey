require "application_system_test_case"

module AflierSurvey
  class CalcInputsTest < ApplicationSystemTestCase
    setup do
      @calc_input = aflier_survey_calc_inputs(:one)
    end

    test "visiting the index" do
      visit calc_inputs_url
      assert_selector "h1", text: "Calc Inputs"
    end

    test "creating a Calc input" do
      visit calc_inputs_url
      click_on "New Calc Input"

      fill_in "Calc", with: @calc_input.calc_id
      fill_in "Calc input", with: @calc_input.calc_input_id
      click_on "Create Calc input"

      assert_text "Calc input was successfully created"
      click_on "Back"
    end

    test "updating a Calc input" do
      visit calc_inputs_url
      click_on "Edit", match: :first

      fill_in "Calc", with: @calc_input.calc_id
      fill_in "Calc input", with: @calc_input.calc_input_id
      click_on "Update Calc input"

      assert_text "Calc input was successfully updated"
      click_on "Back"
    end

    test "destroying a Calc input" do
      visit calc_inputs_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Calc input was successfully destroyed"
    end
  end
end
