import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home";
import { CreateProduct } from "../pages/CreateProduct";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
