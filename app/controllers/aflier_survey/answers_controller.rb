require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class AnswersController < ApplicationController
    before_action :set_answer, only: [:show, :edit, :update, :destroy, :choice, :option_choice, :other]

    skip_before_action :verify_authenticity_token

    # GET /answers
    # GET /answers.json
    def index
      @answers = Answer.all
    end

    # GET /answers/1
    # GET /answers/1.json
    def show
    end

    # GET /answers/new
    def new
      @answer = Answer.new
    end

    # GET /answers/1/edit
    def edit
    end

    # POST /answers
    # POST /answers.json
    def create
      @answer = Answer.create!(answer_params)

      if @next_question.nil?
        redirect_to @answer.question.question_section
      else
        redirect_to @next_question
      end
    end

    # PATCH/PUT /answers/1
    # PATCH/PUT /answers/1.json
    def update
      # @questionnaire = Questionnaire.find(params[:answer][:questionnaire_id])

      @unique_ident = @answer.unique_ident
      @answer.update!(answer_params)
      @question = @answer.question
      @repeat_section = @answer.repeat_section
      @question_section = @answer.question.question_section
      @many = @question_section.many

      @required_warning = @question.is_required?(@unique_ident)

      respond_to do |format|
        # format.html { redirect_to question_section_path(@answer.question.question_section, unique_ident: unique_ident), notice: 'Option was successfully updated.' }

#        format.html { render 'update.js.erb'}
        format.js
        format.json
      end
    end

    # DELETE /answers/1
    # DELETE /answers/1.json
    def destroy
      @answer.destroy
      respond_to do |format|
        format.html { redirect_to answers_url, notice: 'Answer was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    def choice
      @admin = false # TODO - Will be taken from call

      @questionnaire    = Questionnaire.find(params[:questionnaire_id])
      @question         = @answer.question
      @unique_ident     = @answer.unique_ident
      @repeat_section   = @answer.repeat_section
      @question_section = @question.question_section

      new_answer = params[:choice]

      @answer.update_on_button_press(new_answer)

      @required_warning = @question.is_required?(@unique_ident)
    end

    def option_choice
      @admin = false # TODO - Will be taken from call

      @questionnaire  = Questionnaire.find(params[:questionnaire_id])
      @unique_ident   = @answer.unique_ident
      @repeat_section = @answer.repeat_section if @answer.question.question_section.many?

      if @answer.question.question_type == Question::SELECT_ONE
        @answer.option_answers.destroy_all
        @answer.option_answers.find_or_create_by!(option_id: params[:option_id], unique_ident: @unique_ident)
        @answer.update_attribute(:other, false)
      else
        @option_answers = @answer.option_answers.where(option_id: params[:option_id])
        if @option_answers.empty?
          @answer.option_answers.create!(option_id: params[:option_id], unique_ident: @unique_ident)
        else
          @option_answers.destroy_all
        end
      end

      @question = @answer.question
      @answer.update(not_sure: false)

      @required_warning = @question.is_required?(@unique_ident)
      @questionnaire.updated_questionnaire(@unique_ident)
    end

    def other
      @questionnaire    = Questionnaire.find(params[:questionnaire_id])
      @unique_ident     = @answer.unique_ident
      @question         = @answer.question
      @repeat_section   = @answer.repeat_section
      @question_section = @question.question_section

      if @answer.question.question_type == Question::SELECT_ONE
        @answer.option_answers.destroy_all
        @answer.update(other: true)
      else
        @answer.update(other: !@answer.option)
      end

      @questionnaire.updated_questionnaire(@unique_ident)
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_answer
      @answer = Answer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def answer_params
      params.require(:answer).permit(:question_id, :user_id, :a_string, :some_text, :a_decimal, :an_integer, :a_date,
                                     :a_time, :file)
    end
  end

end
