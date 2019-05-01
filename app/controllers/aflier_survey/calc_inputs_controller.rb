require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class CalcInputsController < ApplicationController
    before_action :set_calc_input, only: [:show, :edit, :update, :destroy]

    # GET /calc_inputs
    def index
      @calc_inputs = CalcInput.all
    end

    # GET /calc_inputs/1
    def show
    end

    # GET /calc_inputs/new
    def new
      @calc_input = CalcInput.new
    end

    # GET /calc_inputs/1/edit
    def edit
    end

    # POST /calc_inputs
    def create
      @calc_input = CalcInput.new(calc_input_params)

      if @calc_input.save
        redirect_to @calc_input, notice: 'Calc input was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /calc_inputs/1
    def update
      if @calc_input.update(calc_input_params)
        redirect_to @calc_input, notice: 'Calc input was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /calc_inputs/1
    def destroy
      @calc_input.destroy
      redirect_to calc_inputs_url, notice: 'Calc input was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_calc_input
        @calc_input = CalcInput.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def calc_input_params
        params.require(:calc_input).permit(:calc_id, :calc_input_id)
      end
  end
end
