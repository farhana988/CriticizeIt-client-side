/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const FeaturedServicesCard = ({ service }) => {
  const { serviceImage, serviceTitle, _id, description,  price } =
    service || {};
  return (
    <div
      className="group relative bg-[#ffffff7a] rounded-xl shadow-xl overflow-hidden 
        shadow-primary hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative w-full h-64 p-5">
        <img
          src={serviceImage}
          alt={serviceTitle}
          className="object-cover w-full h-full 
             rounded-xl  "
        />
      </div>

      {/* Card Content */}
      <div className="px-6">
        {/* title */}
        <div
          className="text-gray-800  max-w-full sm:max-w-md 
           "
        >
          <div className="relative group">
            <div className="tooltip tooltip-top" data-tip={serviceTitle}>
              <p className="truncate  max-w-full sm:max-w-xs">
                {/* des title */}
                <span className="text-xl font-semibold text-gray-800">
                Service Title :{" "}
                </span>
                {/* des title */}
                {serviceTitle.substring(0, 20)}
                {serviceTitle.length > 20 && "..."}
              </p>
            </div>
          </div>
        </div>

       
        {/* description */}
        <div
          className="text-gray-800 text-sm mb-2  max-w-full sm:max-w-md 
           "
        >
          <div className="relative group">
            <div className="tooltip tooltip-top" data-tip={description}>
              <p className="truncate  max-w-full sm:max-w-xs ">
                {/* des title */}
                <span className="text-xl font-semibold text-gray-800">
                  Description:{" "}
                </span>
                {/* des title */}
                {description.substring(0, 20)}
                {description.length > 20 && "..."}
              </p>
            </div>
          </div>
        </div>


        <div
          className="flex justify-between items-center mb-6
        "
        >
          {/* price */}
          <span className="  text-gray-800">
            <span className="text-xl font-semibold">Price: </span>${price}
          </span>
          {/* "See Details" Button */}
          <Link
            to={`/serviceDetails/${_id}`}
            className="bg-primary px-3 py-1 rounded-xl lg:text-lg
             text-white font-semibold hover:text-blue-600 transition-colors"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServicesCard;
