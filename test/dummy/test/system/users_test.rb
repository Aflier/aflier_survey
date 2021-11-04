require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  setup do
    @user__one = users(:one)
  end

  test "visiting the index" do
    visit users_url

    sign_in(@user__one)

    assert_selector "h1", text: "Users"
  end

  test "updating a User" do
    visit users_url
    sign_in(@user__one)
    click_on "Edit", match: :first

    fill_in "First name", with: @user.first_name
    fill_in "Last name", with: @user.last_name
    click_on "Update User"

    assert_text "User was successfully updated"
    click_on "Back"
  end

  test "destroying a User" do
    visit users_url
    sign_in(@user__one)
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "User was successfully destroyed"
  end
end
