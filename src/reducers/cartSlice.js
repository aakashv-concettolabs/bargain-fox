import { createSlice } from "@reduxjs/toolkit";

export const userCartSlice = createSlice({
  name: "cart",
  initialState: {
    productCount: null,
  },
  reducers: {
    addProductCount: (state, action) => {
      state.productCount = action.payload;
    },
  },
});

export const { addProductCount } = userCartSlice.actions;

export default userCartSlice.reducer;
