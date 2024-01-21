import AppThunk from '../types/types';
import { configApi } from "../../api/configApi";
import { startLoadingProducts, setProducts } from "../slices/productsSlice";

export const getProducts = (): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());

    try {
      const { data } = await configApi(`/products`);
      dispatch(setProducts({ products: data }));
    } catch (error) {
      console.log(error);
    }
  };
};
