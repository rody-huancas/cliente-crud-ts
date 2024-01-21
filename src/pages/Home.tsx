import { Box, Button, CircularProgress } from "@mui/material";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../redux/slices/thunks";
import { ProductInterface } from "../interfaces/productInterface";

export const Home = () => {
  const { products, isLoading } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productsData = products?.data;

  const handleDelete = (productId: string) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <Container>
      <Typography variant={"h1"} fontSize={30} fontWeight={900} color="#007cf8">
        PRODUCTOS
      </Typography>

      {isLoading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer style={{ marginTop: "1rem" }}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead style={{ backgroundColor: "#007cf8" }}>
              <TableRow style={{ textTransform: "uppercase" }}>
                <TableCell align="center" style={{ color: "white" }}>
                  Nombre
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Descripción
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Precio
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(productsData) &&
                productsData.map((product: ProductInterface) => (
                  <TableRow key={product._id}>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.description}</TableCell>
                    <TableCell align="center">{product.price}</TableCell>
                    <TableCell align="center">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <Link
                          to={`/update/${product._id}`}
                          style={{
                            textDecoration: "none",
                            fontSize: "1rem",
                            backgroundColor: "#007cf8",
                            borderRadius: ".3rem",
                            padding: "0.45rem 1.3rem",
                            color: "white",
                            fontFamily: "monospace",
                          }}
                        >
                          EDITAR
                        </Link>

                        <Button
                          onClick={() => handleDelete(`${product._id}`)}
                          variant="contained"
                          color="error"
                        >
                          Eliminar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};
