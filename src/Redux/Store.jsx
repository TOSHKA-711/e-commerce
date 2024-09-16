

// store.js
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './Slices/CartSlice';
import WishListSlice from './Slices/WishListSlice';


export const store = configureStore({
  reducer: {
    CartSlice: CartSlice,
    WishSlice: WishListSlice,
  },
});