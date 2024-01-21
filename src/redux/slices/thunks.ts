import AppThunk from '../types/types';
import { configApi } from "../../api/configApi";
import { startLoadingProducts, setProducts } from "../slices/productsSlice";
import { ProductFormData } from '../../interfaces/productInterface';

export const getProducts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(startLoadingProducts());

    try {
      const { data } = await configApi(`/products`);
      dispatch(setProducts({ products: data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (productData: ProductFormData): AppThunk => {
  return async (dispatch) => {
    try {
      await configApi.post("/products", productData);

      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  };
};