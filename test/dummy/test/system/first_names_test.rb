require "application_system_test_case"

class FirstNamesTest < ApplicationSystemTestCase
  setup do
    @first_name = first_names(:one)
  end

  test "visiting the index" do
    visit first_names_url
    assert_selector "h1", text: "First Names"
  end

  test "creating a First name" do
    visit first_names_url
    click_on "New First Name"

    fill_in "Last name", with: @first_name.last_name
    click_on "Create First name"

    assert_text "First name was successfully created"
    click_on "Back"
  end

  test "updating a First name" do
    visit first_names_url
    click_on "Edit", match: :first

    fill_in "Last name", with: @first_name.last_name
    click_on "Update First name"

    assert_text "First name was successfully updated"
    click_on "Back"
  end

  test "destroying a First name" do
    visit first_names_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "First name was successfully destroyed"
  end
end
