import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface, ProductsState } from '../../interfaces/productInterface';

const initialState: ProductsState = {
  products: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action: PayloadAction<{ products: ProductInterface[] }>) => {
      state.isLoading = false;
      state.products = action.payload.products;
    },
  },
});

export const { startLoadingProducts, setProducts } = productsSlice.actions;