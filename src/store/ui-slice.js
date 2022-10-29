import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartVisible: false,
  },
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
      if (state.cartVisible === false) {
        document.body.style.overflow = "unset";
      } else {
        document.body.style.overflowY = "hidden";
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
