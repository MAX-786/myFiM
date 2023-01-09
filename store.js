import { configureStore } from "@reduxjs/toolkit";
import userReducer from "Data/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
