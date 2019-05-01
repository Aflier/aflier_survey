require 'test_helper'

module AflierSurvey
  class BelongingSectionsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @belonging_section = aflier_survey_belonging_sections(:one)
    end

    test "should get index" do
      get belonging_sections_url
      assert_response :success
    end

    test "should get new" do
      get new_belonging_section_url
      assert_response :success
    end

    test "should create belonging_section" do
      assert_difference('BelongingSection.count') do
        post belonging_sections_url, params: { belonging_section: { question_section_id: @belonging_section.question_section_id, questionnaire_id: @belonging_section.questionnaire_id } }
      end

      assert_redirected_to belonging_section_url(BelongingSection.last)
    end

    test "should show belonging_section" do
      get belonging_section_url(@belonging_section)
      assert_response :success
    end

    test "should get edit" do
      get edit_belonging_section_url(@belonging_section)
      assert_response :success
    end

    test "should update belonging_section" do
      patch belonging_section_url(@belonging_section), params: { belonging_section: { question_section_id: @belonging_section.question_section_id, questionnaire_id: @belonging_section.questionnaire_id } }
      assert_redirected_to belonging_section_url(@belonging_section)
    end

    test "should destroy belonging_section" do
      assert_difference('BelongingSection.count', -1) do
        delete belonging_section_url(@belonging_section)
      end

      assert_redirected_to belonging_sections_url
    end
  end
end
