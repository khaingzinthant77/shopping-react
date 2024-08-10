import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import MainLayout from "../MainLayout";
import ProductDetail from "../pages/ProductDetail";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default routers;
