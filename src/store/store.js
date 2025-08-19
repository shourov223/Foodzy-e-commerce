"use client"
import cartSlice from "../features/cartSlice"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart : cartSlice
  },
})