/* eslint-disable react/prop-types */
// import React from 'react';

const Partnercard = ({ partner }) => {
  const { logo, name, description } = partner || {};
  return (
    <div>
      <div
        className="relative rounded-2xl 
              overflow-hidden transform transition-all hover:scale-105 "
      >
        <div className="pt-16 ">
          {/*  Logo */}
          <div
            className="w-20 md:w-24 lg:w-32 z-10 mx-auto bg-gradient-to-r from-primary
                   via-secondary to-accent rounded-full p-1
                 absolute top-2 left-12 md:left-16 lg:left-20 animate-pulse"
          >
            <img
              src={logo}
              alt={`${name} Logo`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/*card Details */}
          <div
            className="card pt-9 md:pt-14 lg:pt-24 pb-4 md:pb-6 lg:pb-8 px-3 
                  rounded-2xl bg-[#ffffffb4] dark:bg-dCard 
               "
          >
            {/* partner name */}
            <h3
              className="font-semibold  text-sm md:text-lg lg:text-2xl 
                "
            >
              {name}
            </h3>
            {/* description  */}
            <p
              className=" mt-1 
                  text-xs lg:text-sm"
              title={description}
            >
              {description.substring(0, 60)}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnercard;
