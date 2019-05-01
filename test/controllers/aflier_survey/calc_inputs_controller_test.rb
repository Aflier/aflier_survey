require 'test_helper'

module AflierSurvey
  class CalcInputsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @calc_input = aflier_survey_calc_inputs(:one)
    end

    test "should get index" do
      get calc_inputs_url
      assert_response :success
    end

    test "should get new" do
      get new_calc_input_url
      assert_response :success
    end

    test "should create calc_input" do
      assert_difference('CalcInput.count') do
        post calc_inputs_url, params: { calc_input: { calc_id: @calc_input.calc_id, calc_input_id: @calc_input.calc_input_id } }
      end

      assert_redirected_to calc_input_url(CalcInput.last)
    end

    test "should show calc_input" do
      get calc_input_url(@calc_input)
      assert_response :success
    end

    test "should get edit" do
      get edit_calc_input_url(@calc_input)
      assert_response :success
    end

    test "should update calc_input" do
      patch calc_input_url(@calc_input), params: { calc_input: { calc_id: @calc_input.calc_id, calc_input_id: @calc_input.calc_input_id } }
      assert_redirected_to calc_input_url(@calc_input)
    end

    test "should destroy calc_input" do
      assert_difference('CalcInput.count', -1) do
        delete calc_input_url(@calc_input)
      end

      assert_redirected_to calc_inputs_url
    end
  end
end
