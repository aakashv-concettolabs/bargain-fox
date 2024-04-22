import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./loginSlice";
import userCartCountReducer from "./cartSlice";
import userWishCountReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    cart: userCartCountReducer,
    wish: userWishCountReducer,
  },
});
