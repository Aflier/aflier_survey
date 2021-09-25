require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class RepeatSectionsController < ApplicationController
    before_action :set_repeat_section, only: [:show, :edit, :update, :destroy]

    # GET /repeat_sections
    # GET /repeat_sections.json
    def index
      @repeat_sections = RepeatSection.all
    end

    # GET /repeat_sections/1
    # GET /repeat_sections/1.json
    def show
    end

    # GET /repeat_sections/new
    def new
      @repeat_section = RepeatSection.new
    end

    # GET /repeat_sections/1/edit
    def edit
    end

    # POST /repeat_sections
    # POST /repeat_sections.json
    def create
      @repeat_section = RepeatSection.new(repeat_section_params)

      respond_to do |format|
        if @repeat_section.save
          format.html { redirect_to @repeat_section, notice: 'Repeat section was successfully created.' }
          format.json { render :show, status: :created, location: @repeat_section }
        else
          format.html { render :new }
          format.json { render json: @repeat_section.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /repeat_sections/1
    # PATCH/PUT /repeat_sections/1.json
    def update
      respond_to do |format|
        if @repeat_section.update(repeat_section_params)
          format.html { redirect_to @repeat_section, notice: 'Repeat section was successfully updated.' }
          format.json { render :show, status: :ok, location: @repeat_section }
          format.js
        else
          format.html { render :edit }
          format.json { render json: @repeat_section.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /repeat_sections/1
    # DELETE /repeat_sections/1.json
    def destroy
      @repeat_section.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_repeat_section
      @repeat_section = RepeatSection.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def repeat_section_params
      params.require(:repeat_section).permit(:question_section, :user, :data_date)
    end
  end
end