import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const PageLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen max-w-[1600px] mx-auto shadow-2xl">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default PageLayout;
