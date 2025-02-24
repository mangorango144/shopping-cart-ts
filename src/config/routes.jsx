import { AuthGuard } from "../components";
import { Layout } from "../layouts";
import { Login, ProductDetails, Products } from "../routes";
import { ShoppingCart } from "../routes";
import { Shop } from "../routes";
import { Home } from "../routes";
import { ErrorPage } from "../routes";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "products/:id",
            element: <ProductDetails />,
          },
          {
            path: "shopping-cart",
            element: <ShoppingCart />,
          },
        ],
      },
      {
        path: "/login",
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
        ),
      },
    ],
  },
];
