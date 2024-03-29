require "application_system_test_case"

module AflierSurvey
  class CalcsTest < ApplicationSystemTestCase
    setup do
      @sign_in = users(:one)
      @calc    = aflier_survey_calcs(:one)
    end

    test "visiting the index" do
      visit aflier_survey.calcs_url
      assert_selector "h1", text: "Calcs"
    end

    test "creating a Calc" do
      visit aflier_survey.calcs_url
      click_on "New Calc"

      fill_in "A decimal", with: @calc.a_decimal
      fill_in "First calc", with: @calc.first_calc_id
      fill_in "First question", with: @calc.first_question_id
      fill_in "Name", with: @calc.name
      fill_in "Operation", with: @calc.operation
      fill_in "Second calc", with: @calc.second_calc_id
      fill_in "Second question", with: @calc.second_question_id
      click_on "Create Calc"

      assert_text "Calc was successfully created"
      click_on "Back"
    end

    test "updating a Calc" do
      visit aflier_survey.calcs_url

      sign_in(@user__one)

      click_on "Edit", match: :first

      fill_in "A decimal", with: @calc.a_decimal
      fill_in "First calc", with: @calc.first_calc_id
      fill_in "First question", with: @calc.first_question_id
      fill_in "Name", with: @calc.name
      fill_in "Operation", with: @calc.operation
      fill_in "Second calc", with: @calc.second_calc_id
      fill_in "Second question", with: @calc.second_question_id
      click_on "Update Calc"

      assert_text "Calc was successfully updated"
      click_on "Back"
    end

    test "destroying a Calc" do
      visit aflier_survey.calcs_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Calc was successfully destroyed"
    end
  end
end
