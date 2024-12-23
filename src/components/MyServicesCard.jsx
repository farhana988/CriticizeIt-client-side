/* eslint-disable react/prop-types */
// import React from 'react';

const MyServicesCard = ({service}) => {
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
          <p className="text-gray-600 text-sm mb-4">
            { description.substring(0,100)}</p>
  
          {/* Category and Price */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">{category}</span>
            <span className="text-lg font-bold text-gray-800">${price}</span>
          </div>
        </div>
  
      </div>
    );
};

export default MyServicesCard;