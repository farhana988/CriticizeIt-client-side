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
    <div className=" overflow-hidden border-primary border-dashed ">
      <div className="flex flex-col ">
        <section className="flex flex-col md:flex-row gap-5">
          {/* Service Image */}
          <div className="w-full md:w-2/3 ">
            <img
              src={serviceImage || "https://via.placeholder.com/300"}
              alt={serviceTitle}
              className="w-full h-52 md:h-64 lg:h-96 object-cover rounded-md "
            />
          </div>
          {/* image side */}
          <div className="flex flex-col gap-1 justify-center">
            {/* service title */}
            <h2 className="text-lg lg:text-xl font-bold  break-words">
              {serviceTitle?.substring(0, 20)}
            </h2>
            {/* Category */}
            <p className="text-xs md:text-sm font-semibold ">{category}</p>
            {/* company name */}
            <p className="text-sm ">
              <a
                className="text-blue-500 text-xs  font-medium
                 hover:underline break-words"
                href={website}
              >
                {companyName?.substring(0, 100)}
              </a>
            </p>
            {/* Price */}
            <p className="text-xs md:text-xl font-bold  ">${price}</p>

            {/* Added Date */}
            <p className="text-xs   ">
              {new Date(addedDate).toLocaleDateString()}
            </p>

            {/* Service Info */}
            <div className="pt-3 text-xs">
              {/* Description */}
              <div className="mt-1">
                <p className=" break-words">
                  {isExpanded
                    ? description
                    : `${description?.substring(0, 156)}...`}
                </p>
                <button
                  onClick={toggle}
                  className="border-2 border-primary px-3 rounded-full mt-2 text-xs "
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
