import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./User/userSlice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
