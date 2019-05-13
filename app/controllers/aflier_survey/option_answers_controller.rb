require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class OptionAnswersController < ApplicationController
    before_action :set_option_answer, only: [:show, :edit, :update, :destroy]

    # GET /option_answers
    def index
      @option_answers = OptionAnswer.all
    end

    # GET /option_answers/1
    def show
    end

    # GET /option_answers/new
    def new
      @option_answer = OptionAnswer.new
    end

    # GET /option_answers/1/edit
    def edit
    end

    # POST /option_answers
    def create
      @option_answer = OptionAnswer.new(option_answer_params)

      if @option_answer.save
        redirect_to @option_answer, notice: 'Option answer was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /option_answers/1
    def update
      if @option_answer.update(option_answer_params)
        redirect_to @option_answer, notice: 'Option answer was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /option_answers/1
    def destroy
      @option_answer.destroy
      redirect_to option_answers_url, notice: 'Option answer was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_option_answer
        @option_answer = OptionAnswer.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def option_answer_params
        params.require(:option_answer).permit(:answer_id, :option_id, :unique_ident)
      end
  end
end
