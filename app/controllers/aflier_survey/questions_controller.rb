require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class QuestionsController < ApplicationController
    before_action :set_question, only: [:show, :edit, :update, :destroy, :up, :down, :toggle_other, :type, :following,
                                        :calc, :clone, :feed, :result_type, :result, :grouping]

    # GET /questions
    # GET /questions.json
    def index
      @questions = Question.all
      @question = Question.new
    end

    # GET /questions/1
    # GET /questions/1.json
    def show
      @user = User.find(params[:user_id])
      @answer = @question.make_answer(@user)
      @previous_question = @question.previous
      @next_question = @question.next
    end

    # GET /questions/new
    def new
      @question = Question.new
    end

    # GET /questions/1/edit
    def edit
      @options = @question.options.order(:position)
    end

    # POST /questions
    # POST /questions.json
    def create

      @question_section = QuestionSection.find(params[:question_section_id])
      @question = @question_section.questions.create!(question_params)
      @question.update_attribute(:position, 9999)

      @question_section.questions.order(:position).each_with_index do |question, index|
        question.position = index
        question.save!
      end

      redirect_to edit_question_section_path(@question_section)
    end

    # PATCH/PUT /questions/1
    # PATCH/PUT /questions/1.json
    def update
      respond_to do |format|
        if @question.update(question_params)
          format.html { redirect_to edit_question_path(@question), notice: 'Question was successfully updated.' }
          format.json { render :show, status: :ok, location: @question }
        else
          format.html { render :edit }
          format.json { render json: @question.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /questions/1
    # DELETE /questions/1.json
    def destroy
      @question_section = @question.question_section
      @question.destroy

      redirect_to edit_question_section_path(@question_section)
    end

    def up
      @previous_question = @question.question_section.questions.find_by(position: @question.position - 1)
      @previous_question.update_attribute(:position, @question.position)
      @question.update_attribute(:position, @question.position - 1)

      redirect_to edit_question_section_path(@question.question_section)
    end

    def down
      @next_question = @question.question_section.questions.find_by(position: @question.position + 1)
      @next_question.update_attribute(:position, @question.position)
      @question.update_attribute(:position, @question.position + 1)

      redirect_to edit_question_section_path(@question.question_section)
    end

    def toggle_other
      @question.update_attribute(:text_on_other, !@question.text_on_other)

      redirect_to edit_question_path(@question)
    end

    def type
      @question.update_attribute(:question_type, params[:question_type])

      redirect_to edit_question_path(@question)
    end

    def result
      @question.update_attribute(:result_type, params[:result_type])

      redirect_to edit_question_path(@question)
    end

    def result_type
      @question.update_attribute(:question_type, params[:question_type])

      redirect_to edit_question_path(@question)
    end

    def following
      @question_section = QuestionSection.find(params[:question_section_id])
      @question.update_attribute(:following_section_id, @question_section.id)

      redirect_to edit_question_path(@question)
    end

    def calc
      @question.update_attributes(calc_id: params[:calc_id], question_id: nil)
      redirect_to edit_question_path(@question)
    end

    def clone
      @new_question = @question.dup
      @new_question.name += ' (cloned)'
      @new_question.save!

      @question.options.each do |option|
        @new_question.options.create!(name: option.name, a_decimal: option.a_decimal, position: option.position)
      end

      redirect_to edit_question_path(@new_question)
    end

    def feed
      @selected_question = Question.find(params[:question_id])

      if @question.question.nil?
        @question.update_attributes(question_id: @selected_question.id, calc_id: nil)
      elsif @question.question_id == @selected_question.id
        @question.update_attributes(question_id: nil, calc_id: nil)
      elsif @question.question_y_id == @selected_question.id
        @question.update_attributes(question_y_id: nil, calc_id: nil)
      else
        @question.update_attributes(question_y_id: @selected_question.id, calc_id: nil)
      end

      redirect_to edit_question_path(@question)
    end

    def grouping
      @question.update_attribute(:result_grouping_id, params[:result_grouping_id])

      redirect_back fallback_location: root_path
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def question_params
      params.require(:question).permit(:name, :question_type, :help, :question_section_id, :allow_not_sure,
                                       :text_hint, :required, :value_true, :value_false, :bounds_x, :bounds_y, :details)
    end
  end
end
