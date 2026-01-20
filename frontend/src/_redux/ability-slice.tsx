import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AbilityState } from "./ability-state";
import type { Ability } from "@/models/ability";

const initialState: AbilityState = {
  ability: undefined,
  abilities: [],
};

export const abilitySlice = createSlice({
  name: "ability",
  initialState,
  reducers: {
    loadedAbilities: (
      state: AbilityState,
      action: PayloadAction<Ability[]>
    ) => {
      state.abilities = action.payload;
    },
    setShowAbility: (state: AbilityState, action: PayloadAction<Ability>) => {
      state.ability = action.payload;
    },
  },
});

// Use 'const' for the export and 'export default' for the reducer
export const abilityActions = abilitySlice.actions;
export default abilitySlice.reducer;
