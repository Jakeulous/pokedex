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
    loadedPokemon: (state: PokemonState, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    setShowPokemon: (state: PokemonState, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload;
    },
  },
});

// Use 'const' for the export and 'export default' for the reducer
export const pokemonActions = pokemonSlice.actions;
export default pokemonSlice.reducer;
