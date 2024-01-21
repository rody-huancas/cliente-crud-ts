import { useState, useEffect } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import {
  ProductFormProps,
  ProductInterface,
} from "../interfaces/productInterface";

interface EditFormProps extends ProductFormProps {
  productDetails: ProductInterface;
}

export const EditForm: React.FC<EditFormProps> = ({
  productDetails,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ProductInterface>({
    _id: "",
    name: "",
    description: "",
    price: 0,
  });

  useEffect(() => {
    setFormData({
      _id: productDetails?._id || "",
      name: productDetails?.name || "",
      description: productDetails?.description || "",
      price: productDetails?.price || 0,
    });
  }, [productDetails]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Editar Producto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Descripción"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            type="number"
            label="Precio"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Guardar Cambios
        </Button>
      </form>
    </Container>
  );
};
