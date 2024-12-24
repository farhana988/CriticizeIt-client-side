// import React from 'react';

import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import DealsAndDiscounts from "../components/DealsAndDiscounts";
import FeaturedServices from "../components/FeaturedServices";
import MeetOurPartners from "../components/MeetOurPartners";
import UserTestimonialSpotlight from "../components/UserTestimonialSpotligh";

const Home = () => {
  const location =useLocation()
  if(location.pathname==='/')
        
      { document.title= 'CriticizeIt | Home' }
  return (
    <div>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
        <MeetOurPartners></MeetOurPartners>
        <UserTestimonialSpotlight></UserTestimonialSpotlight>
        <DealsAndDiscounts></DealsAndDiscounts>
   
    </div>
  );
};

export default Home;
