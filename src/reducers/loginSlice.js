import { createSlice } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    email: "",
  },
  reducers: {
    addLoginEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addLoginEmail } = userLoginSlice.actions;

export default userLoginSlice.reducer;
