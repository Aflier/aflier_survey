require 'test_helper'

module AflierSurvey
  class CalcsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @calc = aflier_survey_calcs(:one)
    end

    test "should get index" do
      get calcs_url
      assert_response :success
    end

    test "should get new" do
      get new_calc_url
      assert_response :success
    end

    test "should create calc" do
      assert_difference('Calc.count') do
        post calcs_url, params: { calc: { a_decimal: @calc.a_decimal, first_calc_id: @calc.first_calc_id, first_question_id: @calc.first_question_id, name: @calc.name, operation: @calc.operation, second_calc_id: @calc.second_calc_id, second_question_id: @calc.second_question_id } }
      end

      assert_redirected_to calc_url(Calc.last)
    end

    test "should show calc" do
      get calc_url(@calc)
      assert_response :success
    end

    test "should get edit" do
      get edit_calc_url(@calc)
      assert_response :success
    end

    test "should update calc" do
      patch calc_url(@calc), params: { calc: { a_decimal: @calc.a_decimal, first_calc_id: @calc.first_calc_id, first_question_id: @calc.first_question_id, name: @calc.name, operation: @calc.operation, second_calc_id: @calc.second_calc_id, second_question_id: @calc.second_question_id } }
      assert_redirected_to calc_url(@calc)
    end

    test "should destroy calc" do
      assert_difference('Calc.count', -1) do
        delete calc_url(@calc)
      end

      assert_redirected_to calcs_url
    end
  end
end
