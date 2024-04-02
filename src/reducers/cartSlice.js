import { createSlice } from "@reduxjs/toolkit";

export const userCartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addtocart: (action, state) => {},
    removefromcart: (action, state) => {},
  },
});

export const { addtocart, removefromcart } = userCartSlice.actions;

export default userCartSlice.reducer;
