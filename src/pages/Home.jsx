// import React from 'react';

import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import DealsAndDiscounts from "../components/DealsAndDiscounts";
import FeaturedServices from "../components/FeaturedServices/FeaturedServices";
import MeetOurPartners from "../components/MeetOurPartners";
import UserTestimonialSpotlight from "../components/UserTestimonialSpotligh";
import Users from "../components/Users";
import Blog from "../components/Blog";

const Home = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    document.title = "CriticizeIt | Home";
  }
  return (
    <div>
      <Banner></Banner>
      <Users></Users>
      <FeaturedServices></FeaturedServices>
      <MeetOurPartners></MeetOurPartners>
      <UserTestimonialSpotlight></UserTestimonialSpotlight>
      <DealsAndDiscounts></DealsAndDiscounts>
      <Blog></Blog>
    </div>
  );
};

export default Home;
