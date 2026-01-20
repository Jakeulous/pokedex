import type { Pokemon } from "./pokemon";
export interface Ability {
  id: number;
  pokemonId: number;
  name: string;
  description: string;
  power: number;
  createdAt: string;
  updatedAt: string;
  pokemon?: Pokemon;
}
