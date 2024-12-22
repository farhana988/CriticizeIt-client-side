// import React from 'react';

import Banner from "../components/Banner";
import DealsAndDiscounts from "../components/DealsAndDiscounts";
import FeaturedServices from "../components/FeaturedServices";
import MeetOurPartners from "../components/MeetOurPartners";
import UserTestimonialSpotlight from "../components/UserTestimonialSpotligh";

const Home = () => {
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
