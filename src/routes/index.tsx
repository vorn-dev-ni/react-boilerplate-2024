import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";
import RootLayout from "../pages/_layout";
import NotFoundPage from "../pages/not_found";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,

      }
    ]
  }
])

export default router 