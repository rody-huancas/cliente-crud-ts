import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EditForm } from "../components/EditForm";
import { ProductFormData } from "../interfaces/productInterface";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import {
  getProductById,
  editProduct,
  getProducts,
} from "../redux/slices/thunks";

export const EditProduct = () => {
  const { id } = useParams<{ id: string }>() || { id: "" };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedProduct, isLoading } = useAppSelector(
    (state) => state?.products
  );

  useEffect(() => {
    dispatch(getProductById(`${id}`));
  }, [dispatch, id]);

  const handleFormSubmit = (formData: ProductFormData) => {
    const updatedProduct = {
      _id: id,
      name: formData.name,
      description: formData.description,
      price: formData.price,
    };

    dispatch(editProduct(updatedProduct));
    dispatch(getProducts());
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <EditForm
          onSubmit={handleFormSubmit}
          productDetails={selectedProduct?.data}
        />
      )}
    </>
  );
};
