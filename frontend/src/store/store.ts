import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "@/_redux/pokemon-slice";
import elementReducer from "@/_redux/element-slice";

export const store = configureStore({
  reducer: {
    // Pass the reducer function here, not the whole slice object
    pokemonState: pokemonReducer,
    elementState: elementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
