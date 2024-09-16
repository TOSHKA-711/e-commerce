// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const WishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [
      // { id: 1, name: "Product 1", price: 10 }
    ],
  },
  reducers: {
    addWish: (state, action) => {
      state.wishList.push(action.payload); // Adding new item to the wishlist
    },
    removeWish: (state, action) => {
      const id = action.payload;
      state.wishList = state.wishList.filter((item) => item.id !== id);
      // Removing an item by ID
    },
  },
});

// Export actions
export const { addWish, removeWish } = WishListSlice.actions;

// Export the reducer to be used in the store
export default WishListSlice.reducer;
