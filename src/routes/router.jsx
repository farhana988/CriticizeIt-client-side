import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

import PageLayout from "../layout/PageLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import MyServices from "../pages/MyServices";

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
        element: <PrivateRoute><AddService></AddService></PrivateRoute> ,
      },
      {
        path: "/myServices",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute> ,
      },
      {
        path: "/myReviews",
        element:  <PrivateRoute> <MyReviews></MyReviews></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/serviceDetails/:id',
        element: <ServiceDetails></ServiceDetails>
      },
      
    ],
  },
]);

export default router;
