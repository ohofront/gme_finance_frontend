import Loader from "components/Loader";
import Introduction from "contents/aboutus/introduction";
import Why from "contents/aboutus/introduction/why";
import Careers from "contents/careers";
import ContactUs from "contents/contact";
import Countries from "contents/countries";
import Bangladesh from "contents/countries/bangladesh";
import Products from "contents/products";
import CountryLayout from "layout/CountryLayout";
import MainLayout from "layout/MainLayout";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Main = Loader(lazy(() => import("contents/main")));

const Routes = () => {
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
  const careersRoutes = {
    path: "/careers",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Careers />,
      },
    ],
  };
  const countriesRoutes = {
    path: "/countries",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Countries />,
      },
    ],
  };
  const bangladeshRoutes = {
    path: "/bangladesh",
    element: <CountryLayout />,
    children: [
      {
        path: "",
        element: <Bangladesh />,
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
    careersRoutes,
    countriesRoutes,
    bangladeshRoutes,
  ];
  return useRoutes(routes);
};
export default Routes;
