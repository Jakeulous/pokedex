class PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render json: @pokemons
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render json: @pokemon.format()
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon.format, status: :created
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  def update
    @pokemon = Pokemon.find(params[:id])
    puts pokemon_params
    if @pokemon.update(pokemon_params)
      render json: @pokemon.format
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @pokemon = Pokemon.find(params[:id])
    @pokemon.destroy
    head :no_content
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :type, :hp)
  end
end
