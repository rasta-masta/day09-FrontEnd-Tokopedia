import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : 'carts',
  initialState: {
    value : []
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload   
    }
  }
})

export const { setData } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


export default cartSlice;
