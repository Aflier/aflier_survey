class FirstNamesController < ApplicationController
  before_action :set_first_name, only: [:show, :edit, :update, :destroy]

  # GET /first_names
  def index
    @first_names = FirstName.all
  end

  # GET /first_names/1
  def show
  end

  # GET /first_names/new
  def new
    @first_name = FirstName.new
  end

  # GET /first_names/1/edit
  def edit
  end

  # POST /first_names
  def create
    @first_name = FirstName.new(first_name_params)

    if @first_name.save
      redirect_to @first_name, notice: 'First name was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /first_names/1
  def update
    if @first_name.update(first_name_params)
      redirect_to @first_name, notice: 'First name was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /first_names/1
  def destroy
    @first_name.destroy
    redirect_to first_names_url, notice: 'First name was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_first_name
      @first_name = FirstName.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def first_name_params
      params.require(:first_name).permit(:last_name)
    end
end
