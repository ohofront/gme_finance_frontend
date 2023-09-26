import Loader from "components/Loader";
import MainLayout from "layout/MainLayout";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Main = Loader(lazy(() => import("contents/main")));

const Router = () => {
  const rootRoutes = {
    path: "/",
    element: <Navigate to="/main" />,
  };
  const noMatchRoutes = {
    path: "*",
    element: <Navigate to="/main" />,
  };
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "main",
        element: <Main />,
      },
    ],
  };
  const routes = [rootRoutes, noMatchRoutes, mainRoutes];
  return useRoutes(routes);
};
export default Router;
