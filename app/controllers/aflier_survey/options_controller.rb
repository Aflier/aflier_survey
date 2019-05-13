require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class OptionsController < ApplicationController
    before_action :set_option, only: [:show, :edit, :update, :destroy, :up]

    # GET /options
    # GET /options.json
    def index
      @options = Option.all
    end

    # GET /options/1
    # GET /options/1.json
    def show
    end

    # GET /options/new
    def new
      @option = Option.new
    end

    # GET /options/1/edit
    def edit
    end

    # POST /options
    # POST /options.json
    def create
      @question = Question.find(params[:question_id])
      @option = @question.options.create!(option_params)
      @option.update_attribute(:position, 9999)

      @question.options.each_with_index do |question, index|
        question.position = index
        question.save!
      end

      redirect_to edit_question_path(@question)
    end

    # PATCH/PUT /options/1
    # PATCH/PUT /options/1.json
    def update
      respond_to do |format|
        if @option.update(option_params)
          format.html { redirect_to edit_question_path(@option.question), notice: 'Option was successfully updated.' }
          format.json { render :show, status: :ok, location: @option }
        else
          format.html { render :edit }
          format.json { render json: @option.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /options/1
    # DELETE /options/1.json
    def destroy
      @option.destroy
      respond_to do |format|
        format.html { redirect_to options_url, notice: 'Option was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    def up
      @previous_option = @option.question.options.find_by(position: @option.position - 1)
      @previous_option.update_attribute(:position, @option.position)
      @option.update_attribute(:position, @option.position - 1)

      redirect_to edit_question_path(@option.question)
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_option
      @option = Option.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def option_params
      params.require(:option).permit(:name, :question_id, :a_decimal)
    end
  end
end
