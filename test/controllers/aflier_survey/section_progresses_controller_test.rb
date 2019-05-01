require 'test_helper'

module AflierSurvey
  class SectionProgressesControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @section_progress = aflier_survey_section_progresses(:one)
    end

    test "should get index" do
      get section_progresses_url
      assert_response :success
    end

    test "should get new" do
      get new_section_progress_url
      assert_response :success
    end

    test "should create section_progress" do
      assert_difference('SectionProgress.count') do
        post section_progresses_url, params: { section_progress: { question_section_id: @section_progress.question_section_id, status: @section_progress.status, user_id: @section_progress.user_id } }
      end

      assert_redirected_to section_progress_url(SectionProgress.last)
    end

    test "should show section_progress" do
      get section_progress_url(@section_progress)
      assert_response :success
    end

    test "should get edit" do
      get edit_section_progress_url(@section_progress)
      assert_response :success
    end

    test "should update section_progress" do
      patch section_progress_url(@section_progress), params: { section_progress: { question_section_id: @section_progress.question_section_id, status: @section_progress.status, user_id: @section_progress.user_id } }
      assert_redirected_to section_progress_url(@section_progress)
    end

    test "should destroy section_progress" do
      assert_difference('SectionProgress.count', -1) do
        delete section_progress_url(@section_progress)
      end

      assert_redirected_to section_progresses_url
    end
  end
end
