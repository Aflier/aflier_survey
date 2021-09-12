require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class QuestionnairesController < ApplicationController
    before_action :set_questionnaire, only: [:show, :edit, :update, :destroy, :submit, :assign, :save]

    # GET /questionnaires
    # GET /questionnaires.json
    def index
      @questionnaires = Questionnaire.all
      @questionnaire = Questionnaire.new
    end

    # GET /questionnaires/1
    # GET /questionnaires/1.json
    def show
      @user = current_user
      @belonging_sections = @questionnaire.belonging_sections.order(:position)
    end

    # GET /questionnaires/new
    def new
      @questionnaire = Questionnaire.new
    end

    # GET /questionnaires/1/edit
    def edit
      @belonging_sections = @questionnaire.belonging_sections
      @all_sections = QuestionSection.all

      # Should not always neede this.
      @belonging_sections.order(:position).each_with_index do |belonging_section, index|
        belonging_section.update_attribute(:position, index)
      end
    end

    # POST /questionnaires
    # POST /questionnaires.json
    def create
      @questionnaire = Questionnaire.new(questionnaire_params)

      respond_to do |format|
        if @questionnaire.save
          format.html { redirect_to edit_questionnaire_path(@questionnaire), notice: 'Questionnaire was successfully created.' }
          format.json { render :show, status: :created, location: @questionnaire }
        else
          format.html { render :new }
          format.json { render json: @questionnaire.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /questionnaires/1
    # PATCH/PUT /questionnaires/1.json
    def update
      respond_to do |format|
        if @questionnaire.update(questionnaire_params)
          format.html { redirect_to edit_questionnaire_path(@questionnaire), notice: 'Questionnaire was successfully updated.' }
          format.json { render :show, status: :ok, location: @questionnaire }
        else
          format.html { render :edit }
          format.json { render json: @questionnaire.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /questionnaires/1
    # DELETE /questionnaires/1.json
    def destroy
      @questionnaire.destroy
      respond_to do |format|
        format.html { redirect_to questionnaires_url, notice: 'Questionnaire was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    def submit
      @unique_ident             = params[:unique_ident]
      @questionnaire_submission = @questionnaire.questionnaire_submissions.find_or_create_by!(unique_ident: @unique_ident)

      if @questionnaire.is_complete?(@unique_ident)
        @questionnaire_submission.update_attribute(:status, QuestionnaireSubmission::SUBMITTED)
#        User.where(notify_submission: true).each do |user|
#          QuestionnaireMailer.submission(user, @unique_ident).deliver_now
#        end
      else
        @show_required = true
        @scroll_to_top = true
      end
    end

    def save
      @unique_ident             = params[:unique_ident]
      @questionnaire_submission = @questionnaire.questionnaire_submissions.find_or_create_by!(unique_ident: @unique_ident)
      @questionnaire_submission.update_attribute(:status, QuestionnaireSubmission::SAVED)
    end

    def assign
      @user = User.find(params[:user_id])
      @user.update_attribute(:questionnaire_id, @questionnaire.id)

      @questionnaire.assigned_to(@user)

      redirect_to dashboard_manage_user_path(@user)
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_questionnaire
      @questionnaire = Questionnaire.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def questionnaire_params
      params.require(:questionnaire).permit(:include_submit, :name, :description, :thank_you, :key, :purpose, :on_completion,
                                            :complete_on_sections, question_section_ids: [])
    end
  end
end
