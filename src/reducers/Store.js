import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./loginSlice";
import userCartCount from "./cartSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    cart: userCartCount,
  },
});
