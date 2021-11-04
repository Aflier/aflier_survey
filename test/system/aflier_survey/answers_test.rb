require "application_system_test_case"

module AflierSurvey
  class AnswersTest < ApplicationSystemTestCase
    setup do
      @user__one = users(:one)
      @answer      = aflier_survey_answers(:one)
    end

    test "creating a Answer" do
      visit aflier_survey.answers_url
      click_on "New Answer"

      fill_in "A boolean", with: @answer.a_boolean
      fill_in "A date", with: @answer.a_date
      fill_in "A decimal", with: @answer.a_decimal
      fill_in "A string", with: @answer.a_string
      fill_in "A time", with: @answer.a_time
      fill_in "An integer", with: @answer.an_integer
      fill_in "Complete", with: @answer.complete
      fill_in "File", with: @answer.file
      fill_in "Not sure", with: @answer.not_sure
      fill_in "Other", with: @answer.other
      fill_in "Question", with: @answer.question_id
      fill_in "Repeat section", with: @answer.repeat_section_id
      fill_in "User", with: @answer.user_id
      click_on "Create Answer"

      assert_text "Answer was successfully created"
      click_on "Back"
    end

    test "updating a Answer" do
      visit aflier_survey.answers_url
      click_on "Edit", match: :first

      fill_in "A boolean", with: @answer.a_boolean
      fill_in "A date", with: @answer.a_date
      fill_in "A decimal", with: @answer.a_decimal
      fill_in "A string", with: @answer.a_string
      fill_in "A time", with: @answer.a_time
      fill_in "An integer", with: @answer.an_integer
      fill_in "Complete", with: @answer.complete
      fill_in "File", with: @answer.file
      fill_in "Not sure", with: @answer.not_sure
      fill_in "Other", with: @answer.other
      fill_in "Question", with: @answer.question_id
      fill_in "Repeat section", with: @answer.repeat_section_id
      fill_in "User", with: @answer.user_id
      click_on "Update Answer"

      assert_text "Answer was successfully updated"
      click_on "Back"
    end

    test "destroying a Answer" do
      visit aflier_survey.answers_url

      sign_in(@user__admin)

      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Answer was successfully destroyed"
    end
  end
end
