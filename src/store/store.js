"use client"
import cartSlice from "../features/cartSlice"
import wishlistSlice from "../features/wishlistSlice"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice
  },
})