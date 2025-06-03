/* eslint-disable react/prop-types */
// import React from 'react';

import { useState } from "react";

const ServiceDetailsCard = ({ details }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded(!isExpanded);

  const {
    serviceImage,
    serviceTitle,
    companyName,
    website,
    description,
    category,
    price,
    addedDate,
  } = details || {};

  return (
    <div className=" overflow-hidden lg:border-r border-primary border-dashed ">
      <div className="flex flex-col ">
        <section className="flex flex-row md:gap-5 mt-5 ">
          {/* Service Image */}
          <div className="w-40 h-32 md:w-80 md:h-52   ml-6  ">
            <img
              src={serviceImage || "https://via.placeholder.com/300"}
              alt={serviceTitle}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* image side */}
          <div className="flex flex-col gap-1 justify-center px-6 md:px-0 ">
            {/* service title */}
            <h2 className="text-sm lg:text-lg xl:text-xl font-bold  break-words">
              {serviceTitle?.substring(0, 20)}
            </h2>
              {/* Category */}
              <p className="text-xs md:text-base font-semibold ">{category}</p>
            {/* company name */}
            <p className="text-sm ">
              <a
                className="text-blue-500 text-xs md:text-base font-medium
                 hover:underline break-words"
                href={website}
              >
                {companyName?.substring(0, 100)}
              </a>
            </p>
            {/* Price */}
            <p className="text-xs md:text-xl font-bold  ">${price}</p>

            {/* Added Date */}
            <p className="text-xs md:text-base  ">
              {new Date(addedDate).toLocaleDateString()}
            </p>
          
            
          </div>
        </section>

        {/* Service Info */}
        <div className="px-6 pt-3 text-sm xl:text-lg md:mr-6">
          {/* Description */}
          <div className="mt-1">
            <p className=" break-words">
              {isExpanded
                ? description
                : `${description?.substring(0, 156)}...`}
            </p>
            <button
              onClick={toggle}
              className="border-2 border-primary px-3 rounded-full mt-2 text-xs 
              xl:text-base"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
