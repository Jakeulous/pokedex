class Pokemon < ApplicationRecord
  belongs_to :element
  has_many :abilities

  def format
    {
      id: id,
      name: name,
      hp: hp,
      image_url: image_url,
      element: self.element,
      abilities: self.abilities
    }
  end
end
