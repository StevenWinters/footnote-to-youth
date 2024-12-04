import { createBrowserRouter } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ShowcasePage from "./pages/ShowcasePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MenuPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "showcase",
        element: <ShowcasePage />,
      },
    ],
  },
]);

export default router;
