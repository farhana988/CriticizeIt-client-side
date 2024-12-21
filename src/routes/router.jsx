import {
    createBrowserRouter,
   
  } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

import PageLayout from "../layout/PageLayout";







const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout></PageLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <PageLayout></PageLayout>,
          
          },
      ]
    },
  ]);

  
  export default router;