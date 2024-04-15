import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./loginSlice";
import userCartCountReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    cart: userCartCountReducer,
  },
});
