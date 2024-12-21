import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

import PageLayout from "../layout/PageLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout></PageLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
