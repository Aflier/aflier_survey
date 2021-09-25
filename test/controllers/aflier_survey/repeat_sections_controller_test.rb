require "test_helper"

module AflierSurvey
  class RepeatSectionsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @repeat_section = aflier_survey_repeat_sections(:one)
    end

    test "should get index" do
      get repeat_sections_url
      assert_response :success
    end

    test "should get new" do
      get new_repeat_section_url
      assert_response :success
    end

    test "should create repeat_section" do
      assert_difference('RepeatSection.count') do
        post repeat_sections_url, params: { repeat_section: { data_date: @repeat_section.data_date, question_section_id: @repeat_section.question_section_id, unique_ident: @repeat_section.unique_ident } }
      end

      assert_redirected_to repeat_section_url(RepeatSection.last)
    end

    test "should show repeat_section" do
      get repeat_section_url(@repeat_section)
      assert_response :success
    end

    test "should get edit" do
      get edit_repeat_section_url(@repeat_section)
      assert_response :success
    end

    test "should update repeat_section" do
      patch repeat_section_url(@repeat_section), params: { repeat_section: { data_date: @repeat_section.data_date, question_section_id: @repeat_section.question_section_id, unique_ident: @repeat_section.unique_ident } }
      assert_redirected_to repeat_section_url(@repeat_section)
    end

    test "should destroy repeat_section" do
      assert_difference('RepeatSection.count', -1) do
        delete repeat_section_url(@repeat_section)
      end

      assert_redirected_to repeat_sections_url
    end
  end
end
