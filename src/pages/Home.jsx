import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import DealsAndDiscounts from "../components/DealsAndDiscounts";
import MeetOurPartners from "../components/MeetOurPartners/MeetOurPartners";
import UserTestimonialSpotlight from "../components/UserTestimonial/UserTestimonialSpotligh";
import Newsletter from "../components/Newsletter";
import FeaturedServices from "../components/FeaturedServices";
import Blogs from "./Blogs";

const Home = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    document.title = "CriticizeIt | Home";
  }
  return (
    <>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
      <MeetOurPartners></MeetOurPartners>
      <UserTestimonialSpotlight></UserTestimonialSpotlight>
      <DealsAndDiscounts></DealsAndDiscounts>
      <Blogs></Blogs>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
