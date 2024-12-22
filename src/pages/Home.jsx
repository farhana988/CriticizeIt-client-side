// import React from 'react';

import Banner from "../components/Banner";
import DealsAndDiscounts from "../components/DealsAndDiscounts";
import MeetOurPartners from "../components/MeetOurPartners";
import UserTestimonialSpotlight from "../components/UserTestimonialSpotligh";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
        <MeetOurPartners></MeetOurPartners>
        <UserTestimonialSpotlight></UserTestimonialSpotlight>
        <DealsAndDiscounts></DealsAndDiscounts>
   
    </div>
  );
};

export default Home;
