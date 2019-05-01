require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class QuestionInputsController < ApplicationController
    before_action :set_question_input, only: [:show, :edit, :update, :destroy]

    # GET /question_inputs
    def index
      @question_inputs = QuestionInput.all
    end

    # GET /question_inputs/1
    def show
    end

    # GET /question_inputs/new
    def new
      @question_input = QuestionInput.new
    end

    # GET /question_inputs/1/edit
    def edit
    end

    # POST /question_inputs
    def create
      @question_input = QuestionInput.new(question_input_params)

      if @question_input.save
        redirect_to @question_input, notice: 'Question input was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /question_inputs/1
    def update
      if @question_input.update(question_input_params)
        redirect_to @question_input, notice: 'Question input was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /question_inputs/1
    def destroy
      @question_input.destroy
      redirect_to question_inputs_url, notice: 'Question input was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_question_input
        @question_input = QuestionInput.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def question_input_params
        params.require(:question_input).permit(:calc_id, :question_id)
      end
  end
end
