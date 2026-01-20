class AbilitiesController < ApplicationController
  def index
    @abilities = Ability.all
    render json: @abilities
  end

  def show
    @ability = Ability.find(params[:id])
    render json: @ability.format
  end

  def create
    @ability = Ability.new(ability_params)
    if @ability.save
      render json: @ability, status: :created
    else
      render json: @ability.errors, status: :unprocessable_entity
    end
  end

  def update
    @ability = Ability.find(params[:id])
    if @ability.update(ability_params)
      render json: @ability.format
    else
      render json: @ability.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @ability = Ability.find(params[:id])
    @ability.destroy
    head :no_content
  end

  private

  def ability_params
    params.require(:ability).permit(:name, :description, :power)
  end
end
