import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },
});
