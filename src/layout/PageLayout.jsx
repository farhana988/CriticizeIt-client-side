// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>

      <div className="pt-20 container mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PageLayout;
