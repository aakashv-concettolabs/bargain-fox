import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./loginSlice";
import userCart from "./cartSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    cart: userCart,
  },
});
