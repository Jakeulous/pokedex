class Ability < ApplicationRecord
  belongs_to :pokemon
  def format
    {
      id: id,
      name: name,
      power: power,
      description: description,
      pokemon: self.pokemon.format,
    }
  end
end
