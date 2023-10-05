import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
  }
})