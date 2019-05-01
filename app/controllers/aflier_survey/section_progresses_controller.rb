require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class SectionProgressesController < ApplicationController
    before_action :set_section_progress, only: [:show, :edit, :update, :destroy]

    # GET /section_progresses
    def index
      @section_progresses = SectionProgress.all
    end

    # GET /section_progresses/1
    def show
    end

    # GET /section_progresses/new
    def new
      @section_progress = SectionProgress.new
    end

    # GET /section_progresses/1/edit
    def edit
    end

    # POST /section_progresses
    def create
      @section_progress = SectionProgress.new(section_progress_params)

      if @section_progress.save
        redirect_to @section_progress, notice: 'Section progress was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /section_progresses/1
    def update
      if @section_progress.update(section_progress_params)
        redirect_to @section_progress, notice: 'Section progress was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /section_progresses/1
    def destroy
      @section_progress.destroy
      redirect_to section_progresses_url, notice: 'Section progress was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_section_progress
        @section_progress = SectionProgress.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def section_progress_params
        params.require(:section_progress).permit(:user_id, :question_section_id, :status)
      end
  end
end
