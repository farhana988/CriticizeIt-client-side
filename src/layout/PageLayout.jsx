// import React from 'react';

import { Outlet } from "react-router-dom";

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const PageLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <section
        className="bg-gradient-to-r from-indigo-200
         via-transparent to-indigo-100"
      >
        <Outlet></Outlet>

        <Footer></Footer>
      </section>
    </div>
  );
};

export default PageLayout;
