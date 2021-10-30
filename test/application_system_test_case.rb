require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: :chrome, screen_size: [1400, 1400]

  def sign_in(user)
    fill_in "Email", with: user.email
    fill_in 'Password', with: '123greetings'
    click_button 'Sign in'
  end

end
