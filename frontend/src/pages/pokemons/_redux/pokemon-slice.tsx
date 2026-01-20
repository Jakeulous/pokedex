import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Pokemon } from "@/models/pokemon";
import { type PokemonState } from "./pokemon-state";

const initialState: PokemonState = {
  pokemon: undefined,
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // Added missing curly braces and fixed function syntax
    loadedPokemon: (state: PokemonState, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    // If you had other reducers like setPokemon, add them here
  },
});

// Use 'const' for the export and 'export default' for the reducer
export const pokemonActions = pokemonSlice.actions;
export default pokemonSlice.reducer;
