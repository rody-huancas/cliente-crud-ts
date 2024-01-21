import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export const Header = () => {
  return (
    <AppBar position="static" color="default" style={{ marginBottom: "2rem" }}>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant={"h1"}
              color={"black"}
              fontSize={"30px"}
              fontWeight={900}
            >
              CRUD - REDUX
            </Typography>
          </Link>

          <Link
            to="/create"
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              backgroundColor: "#007cf8",
              borderRadius: ".5rem",
              padding: "0.7rem 1rem",
              color: "white",
              fontWeight: "500",
              fontFamily: "monospace",
            }}
          >
            Agregar
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
};
