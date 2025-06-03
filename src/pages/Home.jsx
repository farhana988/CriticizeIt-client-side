import { useLocation } from "react-router-dom";
import Banner from "../components/Home/Banner";
import FeaturedServices from "../components/Home/FeaturedServices";
import MeetOurPartners from "../components/Home/MeetOurPartners/MeetOurPartners";
import UserTestimonialSpotlight from "../components/Home/UserTestimonialSpotligh";
import DealsAndDiscounts from "../components/Home/DealsAndDiscounts";
import Blogs from "./Blogs";
import Newsletter from "../components/Home/Newsletter";

const Home = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    document.title = "CriticizeIt | Home";
  }
  return (
    <>
      <Banner />
      <FeaturedServices />
      <MeetOurPartners />
      <UserTestimonialSpotlight />
      <DealsAndDiscounts/>
      <Blogs/>
      <Newsletter/>
    </>
  );
};

export default Home;
