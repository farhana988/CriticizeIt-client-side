/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";
import ResponsiveText from "../shared/ResponsiveText";

const FeaturedServicesCard = ({ service }) => {
  const { serviceImage, serviceTitle, _id, description,  price } =
    service || {};
  return (
    <div
      className="group relative bg-lCard dark:bg-dCard rounded-xl shadow-xl 
      overflow-hidden 
        shadow-primary hover:shadow-2xl h-[220px] md:h-[226px] lg:h-[305px] "
    >
      {/* Image */}
      <div className="relative w-full p-3">
        <img
          src={serviceImage}
          alt={serviceTitle}
          className="object-cover w-full h-24 md:h-24 lg:h-36  
             rounded-xl  "
             referrerPolicy="no-referrer"
        />
      </div>

      {/* Card Content */}
      <div className="px-3 lg:px-6">
        {/* title */}
        <div
          className="  max-w-full sm:max-w-md 
           "
        >
          <div className="relative group">
            <div className="tooltip tooltip-top" data-tip={serviceTitle}>
              <p className="truncate  max-w-full sm:max-w-xs text-sm md:text-base lg:text-xl 
              font-bold">
            
               
                {/*title */}
                {serviceTitle.substring(0, 20)}
                {serviceTitle.length > 20 && "..."}
              </p>
            </div>
          </div>
        </div>

       
       
          {/* description */}
        
            <ResponsiveText
            text={description}
            className="text-xs lg:text-sm mb-2"
            breakpoints={{lg: 50,md: 52, sm: 30, default: 35}}></ResponsiveText>
             
             
 
            
           


        <div
          className="flex justify-between items-center mb-6
        "
        >
          {/* price */}
          <span className=" font-semibold text-sm lg:font-bold lg:text-lg ">
           ${price}
          </span>
          {/* "See Details" Button */}
          <Link
            to={`/serviceDetails/${_id}`}
            className=" bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary  px-3 py-1 rounded-xl 
             text-xs lg:text-lg text-black font-semibold"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServicesCard;
