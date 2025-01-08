// import React from 'react';

import { Outlet } from "react-router-dom";

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

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
