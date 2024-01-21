import { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import {
  ProductFormData,
  ProductFormProps,
} from "../interfaces/productInterface";

export const CreateForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: 0,
  });

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
        Crear Producto
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
          Registrar
        </Button>
      </form>
    </Container>
  );
};
