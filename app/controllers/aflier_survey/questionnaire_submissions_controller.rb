require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class QuestionnaireSubmissionsController < ApplicationController
    before_action :set_questionnaire_submission, only: [:show, :edit, :update, :destroy]

    # GET /questionnaire_submissions
    def index
      @questionnaire_submissions = QuestionnaireSubmission.all
    end

    # GET /questionnaire_submissions/1
    def show
    end

    # GET /questionnaire_submissions/new
    def new
      @questionnaire_submission = QuestionnaireSubmission.new
    end

    # GET /questionnaire_submissions/1/edit
    def edit
    end

    # POST /questionnaire_submissions
    def create
      @questionnaire_submission = QuestionnaireSubmission.new(questionnaire_submission_params)

      if @questionnaire_submission.save
        redirect_to @questionnaire_submission, notice: 'Questionnaire submission was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /questionnaire_submissions/1
    def update
      if @questionnaire_submission.update(questionnaire_submission_params)
        redirect_to @questionnaire_submission, notice: 'Questionnaire submission was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /questionnaire_submissions/1
    def destroy
      @questionnaire_submission.destroy
      redirect_to questionnaire_submissions_url, notice: 'Questionnaire submission was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_questionnaire_submission
        @questionnaire_submission = QuestionnaireSubmission.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def questionnaire_submission_params
        params.require(:questionnaire_submission).permit(:user_id, :questionnaire_id, :status)
      end
  end
end
