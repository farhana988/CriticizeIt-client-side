import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import Banner from "../components/Home/Banner";

const PageLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar></Navbar>
      {location.pathname == "/" && (
        <div className="max-w-[1600px] mx-auto">
          <Banner />
        </div>
      )}
      <div className="min-h-screen max-w-7xl mx-auto px-5 pt-20">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default PageLayout;
