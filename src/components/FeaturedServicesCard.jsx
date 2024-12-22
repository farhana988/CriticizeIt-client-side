/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const FeaturedServicesCard = ({service}) => {
    const { serviceImage,
        serviceTitle,
      
        description,
        category,
        price,
        } =
    service || {}
    return (
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        {/* Image */}
        <div className="relative w-full h-48">
          <img
            src={ serviceImage}
            alt={serviceTitle}
            className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
          />
        </div>
  
        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{serviceTitle}</h3>
          <p className="text-gray-600 text-sm mb-4">{ description}</p>
  
          {/* Category and Price */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">{category}</span>
            <span className="text-lg font-bold text-gray-800">${price}</span>
          </div>
  
          {/* "See Details" Button */}
          <Link
            to={`/services/${service.id}`} // assuming each service has a unique ID
            className="text-blue-500 font-semibold hover:text-blue-600 transition-colors"
          >
            See Details
          </Link>
        </div>
  
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity"></div>
      </div>
    );
};

export default FeaturedServicesCard;