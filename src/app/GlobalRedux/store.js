"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Feauters/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
