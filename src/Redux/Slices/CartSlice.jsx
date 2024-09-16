import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    CartItems: [
      // Example item
      // { id: 1, name: "Product 1", unitPrice: 10, quantity: 1, price: 10, image: "" }
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.CartItems.push(item); 
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.CartItems = state.CartItems.filter((item) => item.id !== id); // Remove item by ID
    },
    updateItemQuantity: (state, action) => {
      const { id, unitPrice, quantity } = action.payload;
      const item = state.CartItems.find((item) => item.id === id);
      
        item.price = unitPrice * quantity;
 
    },
  },
});

// Export actions
export const { addItem, removeItem, updateItemQuantity } = CartSlice.actions;

// Export the reducer to be used in the store
export default CartSlice.reducer;
