import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../components/layout/Main";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import AllProducts from "../Pages/AllProducts/AllProducts";
import AllProductsByCategory from "../Pages/AllProducts/AllProductsByCategory";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/all-products/:category",
        element: <AllProductsByCategory></AllProductsByCategory>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
