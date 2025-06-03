import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/ErrorPage";
import PageLayout from "../layout/PageLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews/MyReviews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import MyServices from "../pages/MyServices/MyServices";
import PrivacyPolicy from "../components/FooterLinks/PrivacyPolicy";
import FAQ from "../components/FooterLinks/FAQ";
import Support from "../components/FooterLinks/Support";
import TermsOfService from "../components/FooterLinks/TermsOfService";
import BecomePartner from "../components/Home/MeetOurPartners/BecomePartner";
import ServicePackages from "../pages/ServicePackages/ServicePackages";
import AboutUs from "../components/FooterLinks/AboutUs";
import Blogs from "../pages/Blogs";
import MeetOurPartners from "../components/Home/MeetOurPartners/MeetOurPartners";

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
        path: "/packages",
        element: <ServicePackages></ServicePackages>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            {" "}
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
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
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/terms",
        element: <TermsOfService></TermsOfService>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/partners",
        element: <MeetOurPartners></MeetOurPartners>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/become-partner",
        element: <BecomePartner></BecomePartner>,
      },
    ],
  },
]);

export default router;
