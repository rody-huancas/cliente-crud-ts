import { useNavigate } from "react-router-dom";
import { CreateForm } from "../components/CreateForm";
import { ProductFormData } from "../interfaces/productInterface";
import { useAppDispatch } from "../redux/hooks/hooks";
import { createProduct } from "../redux/slices/thunks";

export const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (data: ProductFormData) => {
    dispatch(createProduct(data));
    navigate("/");
  };
  return (
    <>
      <CreateForm onSubmit={handleFormSubmit} />
    </>
  );
};
