import Loader from "components/Loader";
import Introduction from "contents/aboutus/introduction";
import Why from "contents/aboutus/introduction/why";
import ContactUs from "contents/contact";
import Products from "contents/products";
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
  const aboutusRoutes = {
    path: "/about-us",
    element: <MainLayout />,
    children: [
      {
        path: "introduction",
        element: <Introduction />,
      },
      {
        path: "why",
        element: <Why />,
      },
    ],
  };
  const contactusRoutes = {
    path: "/contact-us",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <ContactUs />,
      },
    ],
  };
  const productRoutes = {
    path: "/products",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Products />,
      },
    ],
  };
  const routes = [
    rootRoutes,
    noMatchRoutes,
    mainRoutes,
    aboutusRoutes,
    contactusRoutes,
    productRoutes,
  ];
  return useRoutes(routes);
};
export default Router;
