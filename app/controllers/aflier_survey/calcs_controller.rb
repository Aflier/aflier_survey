require_dependency "aflier_survey/application_controller"

module AflierSurvey
  class CalcsController < ApplicationController
    before_action :set_calc, only: [:show, :edit, :update, :destroy, :var_one, :var_two, :operator, :calc_one,
                                    :calc_two, :choice, :grouping, :question_choice]

    # GET /calcs
    # GET /calcs.json
    def index
      @calcs = Calc.all.order(:name)
      @calc = Calc.new
    end

    # GET /calcs/1
    # GET /calcs/1.json
    def show
      if @calc.operation == Calc::ADD
        if @calc.calc_first
          @calc.calc_inputs.create(calc_input_id: @calc.first_calc_id)
          @calc.update_attribute(:first_calc_id, nil)
        end

        if @calc.calc_second
          @calc.calc_inputs.create(calc_input_id: @calc.second_calc_id)
          @calc.update_attribute(:second_calc_id, nil)
        end

        if @calc.question_first
          @calc.question_inputs.create(question_id: @calc.first_question_id)
          @calc.update_attribute(:first_question_id, nil)
        end

        if @calc.question_second
          @calc.question_inputs.create(question_id: @calc.second_question_id)
          @calc.update_attribute(:second_question_id, nil)
        end
      end
    end

    # GET /calcs/new
    def new
      @calc = Calc.new
    end

    # GET /calcs/1/edit
    def edit
    end

    # POST /calcs
    # POST /calcs.json
    def create
      @calc = Calc.new(calc_params)

      respond_to do |format|
        if @calc.save!
          format.html { redirect_to @calc, notice: 'Calc was successfully created.' }
          format.json { render :show, status: :created, location: @calc }
        else
          format.html { render :new }
          format.json { render json: @calc.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /calcs/1
    # PATCH/PUT /calcs/1.json
    def update
      respond_to do |format|
        if @calc.update(calc_params)
          format.html { redirect_to @calc, notice: 'Calc was successfully updated.' }
          format.json { render :show, status: :ok, location: @calc }
        else
          format.html { render :edit }
          format.json { render json: @calc.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /calcs/1
    # DELETE /calcs/1.json
    def destroy
      @calc.destroy
      respond_to do |format|
        format.html { redirect_to calcs_url, notice: 'Calc was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    def var_one
      if @calc.operation == Calc::ADD or
          @calc.operation == Calc::CHOICE or
          @calc.operation == Calc::LOWEST

        existing_calc = @calc.question_inputs.find_by(question_id: params[:question_id])

        if existing_calc
          existing_calc.destroy
        else
          @calc.question_inputs.find_or_create_by!(question_id: params[:question_id])
        end
      else
        @calc.update_attributes(first_question_id: params[:question_id], first_calc_id: nil)
      end

      redirect_to @calc
    end

    def var_two
      @calc.update_attributes(second_question_id: params[:question_id], second_calc_id: nil)

      redirect_to @calc
    end

    def calc_one
      if @calc.operation == Calc::ADD or @calc.operation == Calc::CHOICE
        existing_calc = @calc.calc_inputs.find_by(calc_input_id: params[:calc_id])

        if existing_calc
          existing_calc.destroy
        else
          @calc.calc_inputs.find_or_create_by(calc_input_id: params[:calc_id])
        end
      else
        @calc.update_attributes(first_calc_id: params[:calc_id], first_question_id: nil)
      end

      redirect_to @calc
    end

    def grouping
      if @calc.operation == Calc::COLLECTION
        result_grouping = @calc.grouping_inputs.find_by(result_grouping_id: params[:result_grouping_id])

        if result_grouping
          result_grouping.destroy
        else
          @calc.grouping_inputs.find_or_create_by(result_grouping_id: params[:result_grouping_id])
        end
      else
        @calc.update_attributes(first_calc_id: params[:calc_id], first_question_id: nil)
      end

      redirect_to @calc
    end

    def calc_two
      @calc.update_attributes(second_calc_id: params[:calc_id], second_question_id: nil)

      redirect_to @calc
    end

    def operator
      @calc.update_attribute(:operation, params[:operator])
      redirect_to @calc
    end

    def choice
      @calc_choice = @calc.calc_choices.find_or_create_by!(option_id: params[:option_id])
      @calc_choice.update_attributes(calc_result_id: params[:calc_result_id])

      redirect_to @calc
    end

    def question_choice
      @question_choice = @calc.question_choices.find_or_create_by!(option_id: params[:option_id])
      @question_choice.update_attributes(question_id: params[:question_id])

      redirect_to @calc
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_calc
      @calc = Calc.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def calc_params
      params.require(:calc).permit(:name, :first_question_id, :second_question_id, :operation, :a_decimal,
                                   :treat_repeat)
    end
  end
end
