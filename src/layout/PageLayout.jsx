// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>

        <Outlet></Outlet>
     

      <Footer></Footer>
    </div>
  );
};

export default PageLayout;
