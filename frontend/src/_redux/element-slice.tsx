import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Element } from "@/models/element";
import type { ElementState } from "./element-state";

const initialState: ElementState = {
  element: undefined,
  elements: [],
};

export const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    loadedElements: (state: ElementState, action: PayloadAction<Element[]>) => {
      state.elements = action.payload;
    },
    setShowElement: (state: ElementState, action: PayloadAction<Element>) => {
      state.element = action.payload;
    },
  },
});

// Use 'const' for the export and 'export default' for the reducer
export const elementActions = elementSlice.actions;
export default elementSlice.reducer;
