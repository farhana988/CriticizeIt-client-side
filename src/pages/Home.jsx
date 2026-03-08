import { useLocation } from "react-router-dom";
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
    <div className="space-y-10 xl:space-y-16">
      <FeaturedServices />
      <MeetOurPartners />
      <UserTestimonialSpotlight />
      <DealsAndDiscounts />
      <Blogs />
      <Newsletter />
    </div>
  );
};

export default Home;
