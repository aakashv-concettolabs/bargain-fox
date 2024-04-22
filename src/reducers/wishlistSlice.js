import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishCount: 0,
};

const cartSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    updateWishCount(state, action) {
      state.wishCount = action.payload;
    },
  },
});

export const { updateWishCount } = cartSlice.actions;

export default cartSlice.reducer;
