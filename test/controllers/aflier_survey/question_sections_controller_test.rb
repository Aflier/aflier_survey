require 'test_helper'

module AflierSurvey
  class QuestionSectionsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @question_section = aflier_survey_question_sections(:one)
    end

    test "should get index" do
      get question_sections_url
      assert_response :success
    end

    test "should get new" do
      get new_question_section_url
      assert_response :success
    end

    test "should create question_section" do
      assert_difference('QuestionSection.count') do
        post question_sections_url, params: { question_section: { data_date: @question_section.data_date, default_open: @question_section.default_open, description: @question_section.description, many: @question_section.many, name: @question_section.name, restrict_controls: @question_section.restrict_controls } }
      end

      assert_redirected_to question_section_url(QuestionSection.last)
    end

    test "should show question_section" do
      get question_section_url(@question_section)
      assert_response :success
    end

    test "should get edit" do
      get edit_question_section_url(@question_section)
      assert_response :success
    end

    test "should update question_section" do
      patch question_section_url(@question_section), params: { question_section: { data_date: @question_section.data_date, default_open: @question_section.default_open, description: @question_section.description, many: @question_section.many, name: @question_section.name, restrict_controls: @question_section.restrict_controls } }
      assert_redirected_to question_section_url(@question_section)
    end

    test "should destroy question_section" do
      assert_difference('QuestionSection.count', -1) do
        delete question_section_url(@question_section)
      end

      assert_redirected_to question_sections_url
    end
  end
end
