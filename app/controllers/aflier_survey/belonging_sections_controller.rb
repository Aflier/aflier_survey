require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class BelongingSectionsController < ApplicationController
    before_action :set_belonging_section, only: [:up, :destroy]

    def up
      @previous_belonging_section = @belonging_section.questionnaire.belonging_sections.find_by(position: @belonging_section.position - 1)
      @previous_belonging_section.update_attribute(:position, @belonging_section.position)
      @belonging_section.update_attribute(:position, @belonging_section.position - 1)

      redirect_to edit_questionnaire_path(@belonging_section.questionnaire)
    end

    def destroy
      @questionnaire = @belonging_section.questionnaire
      @belonging_section.destroy

      redirect_to edit_questionnaire_path(@questionnaire)
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_belonging_section
      @belonging_section = BelongingSection.find(params[:id])
    end
  end

end
