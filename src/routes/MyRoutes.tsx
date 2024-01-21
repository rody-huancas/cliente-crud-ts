import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home";
import { CreateProduct } from "../pages/CreateProduct";
import { EditProduct } from "../pages/EditProduct";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
