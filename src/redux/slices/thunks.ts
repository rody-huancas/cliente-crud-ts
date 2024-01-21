import AppThunk from '../types/types';
import { configApi } from "../../api/configApi";
import { startLoadingProducts, setProducts, setSelectedProduct } from "../slices/productsSlice";
import { ProductFormData, ProductInterface } from '../../interfaces/productInterface';

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

export const getProductById = (id: string): AppThunk => {
  return async (dispatch) => {
    try {
      const { data } = await configApi(`/products/${id}`);
      dispatch(setSelectedProduct({ product: data }));
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

export const deleteProduct = (productId: string): AppThunk => {
  return async (dispatch) => {
    try {
      await configApi.delete(`/products/${productId}`);
      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  };
}

export const editProduct = (updatedProduct: ProductInterface): AppThunk => {
  return async (dispatch) => {
    dispatch(startLoadingProducts());

    try {
      const { data } = await configApi.put(`/products/${updatedProduct._id}`, updatedProduct);
      dispatch(setProducts({ products: data }));
    } catch (error) {
      console.log(error);
    }
  };
};