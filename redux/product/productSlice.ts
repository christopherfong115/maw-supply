import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Rating {
  star: number;
  feedback: string;
  date: string;
  username: string;
  itemPurchased: productItem;
}

export interface productItem {
  id: string;
  name: string;
  price: string;
  description: string;
  company: string;
  sizes?: string[];
  variations?: productItem[];
  stock: number;
  sales: number;
  ratings: Rating[];
  section: string;
}

export interface productItemInitialState {
  productItems: productItem[];
}

const initialState: productItemInitialState = {
  productItems: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductItem: (state, action: PayloadAction<productItem>) => {
      state.productItems.push(action.payload);
      //add nanoid
      //make user have a form(card) that they submit to add item, will update database as well and update state
    },
    removeProductItem: (state, action: PayloadAction<productItem>) => {
      state.productItems = state.productItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addProductItem, removeProductItem } = productSlice.actions;
export default productSlice.reducer;
