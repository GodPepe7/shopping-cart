import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductPage from "./pages/ProductPage";
import App from "./App";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/shop",
          element: <ShoppingPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/shop/:productId",
          element: <ProductPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
