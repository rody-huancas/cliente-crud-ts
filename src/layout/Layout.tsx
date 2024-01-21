import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <div style={{ padding: "2rem 5rem" }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
