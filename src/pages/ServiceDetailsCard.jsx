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
    <div className=" overflow-hidden ">
      <div className="flex flex-col ">
        <section className="flex flex-col md:flex-row gap-5 mt-5 ">
          {/* Service Image */}
          <div className="w-80 h-52   ml-6  ">
            <img
              src={serviceImage || "https://via.placeholder.com/300"}
              alt={serviceTitle}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* image side */}
          <div className="flex flex-col gap-3 md:pt-9 px-6 md:px-0 ">
            {/* Price */}
            <p className="text-xl font-bold text-gray-900 ">
              Price:{" "}
              <span className="text-base font-bold text-gray-500">
                ${price}
              </span>
            </p>

            {/* Added Date */}
            <p className="text-base text-gray-500 ">
              <span className="text-xl font-bold text-gray-900 ">
                Added on:{" "}
              </span>
              {new Date(addedDate).toLocaleDateString()}
            </p>
            {/* Category */}
            <p className="text-base font-semibold text-gray-700">
              <span className="text-xl font-bold text-gray-900 ">
                Category:{" "}
              </span>
              {category}
            </p>
          </div>
        </section>

        {/* Service Info */}
        <div className="px-6 pt-3">
          {/* service title */}
          <h2 className="text-xl font-bold text-gray-900 break-words">
            Service Title:
            <span className="text-base font-semibold text-gray-500">
              {" "}
              {serviceTitle?.substring(0, 100)}
            </span>
          </h2>

          {/* company name */}
          <p className="text-sm text-gray-500 mt-3">
            <span className="text-xl font-bold text-gray-900 ">
              Company Name:{" "}
            </span>

            <a
              className="text-blue-500 text-base font-medium hover:underline break-words"
              href={website}
            >
              {companyName?.substring(0, 100)}
            </a>
          </p>
          
            {/* Description */}
          <div className="mt-3">
            <p className="text-gray-600 break-words">
              <span className="text-xl font-bold text-gray-900 mb-1">
              Description : {" "}
              </span>
              {isExpanded
                ? description
                : `${description?.substring(0, 156)}...`}
            </p>
            <button
              onClick={toggle}
              className="text-blue-500 hover:underline mt-2"
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
