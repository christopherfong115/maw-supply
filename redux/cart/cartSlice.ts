import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productItem } from "../product/productSlice";

export interface shoppingCartInitialState {
  cart: productItem[];
}

const initialState: shoppingCartInitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productItem>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<productItem>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
