import type { Pokemon } from "@/models/pokemon";

export interface PokemonState {
  pokemons: Pokemon[];
  pokemon?: Pokemon;
}
