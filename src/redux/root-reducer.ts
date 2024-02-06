import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./User/userSlice";
import { cartSlice } from "./Cart/cartSlice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
