require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class QuestionSectionsController < ApplicationController
    before_action :set_question_section, only: [:show, :edit, :update, :destroy, :report, :repeat, :complete, :include,
                                                :exclude]

    # GET /question_sections
    # GET /question_sections.json
    def index
      @question_sections = QuestionSection.all.order(:name)
      @question_section = QuestionSection.new
    end

    # GET /question_sections/1
    # GET /question_sections/1.json
    def show
      @questionnaire = Questionnaire.where(name: 'MVL').first
      @questionnaire = Questionnaire.all.first if @questionnaire.nil?
      @unique_ident = params[:unique_ident]
    end

    # GET /question_sections/new
    def new
      @question_section = QuestionSection.new
    end

    # GET /question_sections/1/edit
    def edit
      @question_section.questions.order(:position).each_with_index do |question, index|
        question.position = index
        question.save!
      end

      @questions = @question_section.questions.order(:position)
    end

    # POST /question_sections
    # POST /question_sections.json
    def create
      @question_section = QuestionSection.create!(question_section_params)

      render json: { html: render_to_string(partial: 'aflier_survey/question_sections/question_section_tr',
                                            locals: { question_section: @question_section} ),
                     form: render_to_string(partial: 'aflier_survey/question_sections/form_create') }
    end

    # PATCH/PUT /question_sections/1
    # PATCH/PUT /question_sections/1.json
    def update
      @question_section.update(question_section_params)

      redirect_to edit_question_section_path @question_section
    end

    # DELETE /question_sections/1
    # DELETE /question_sections/1.json
    def destroy
      @question_section.destroy
      respond_to do |format|
        format.html { redirect_to question_sections_url, notice: 'Question section was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    def report
      @user = User.find(params[:user_id])
    end

    def repeat
      @questionnaire = Questionnaire.find(params[:questionnaire_id])
      @old_repeats = @question_section.repeat_sections.where(user_id: params[:user_id])
      @repeat_section = @question_section.repeat_sections.create(user_id: params[:user_id])
      @user = current_user
    end

    def complete
      @user = User.find(params[:user_id])
      @question_section.tag_as_complete(@user)
    end

    def include
      @questionnaire = Questionnaire.find(params[:questionnaire_id])
      @question_section.belonging_sections.create(questionnaire_id: @questionnaire.id, position: 9999)

      redirect_to edit_questionnaire_path(@questionnaire)
    end

    def exclude
      @questionnaire = Questionnaire.find(params[:questionnaire_id])
      @question_section.belonging_sections.find_by(questionnaire_id: @questionnaire.id).destroy

      redirect_to edit_questionnaire_path(@questionnaire)
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_question_section
      @question_section = QuestionSection.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def question_section_params
      params.require(:question_section).permit(:name, :description, :section_description, :position, :many,
                                               :default_open, :restrict_controls, :repeat_has_date)
    end
  end
end
