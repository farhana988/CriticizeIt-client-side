import {FaLongArrowAltRight } from "react-icons/fa";
import Heading from "../shared/Heading";
import { useEffect, useState } from "react";
import "animate.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import React from 'react';


const MeetOurPartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch('./partners.json')
      .then(response => response.json())
      .then(data => setPartners(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);





  return (
    <section className="relative pt-14">
      <div className="container mx-auto px-6 text-center">
        {/*  Title */}
        <Heading
          title={"Meet Our Partners"}
          subtitle={
            " We proudly collaborate with innovative partners who drive impactful solutions and services. Together, we achieve excellence."
          }
        ></Heading>

        {/* Partner card*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {partners.slice(0, 4).map((partner, index) => (
            <div
              key={index}
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
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
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
                    {partner.name}
                  </h3>
                  {/* description  */}
                  <p
                    className=" mt-1 
                  text-xs lg:text-sm"
                    title={partner.description}
                  >
                    {partner.description.substring(0, 60)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-5 lg:mt-8 mb-5 md:mb-2 lg:mb-0 flex justify-end">
          <button
          
            className="text-sm md:text-base lg:text-xl font-semibold text-black
            bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary  rounded-full
             transition-all flex items-center gap-1 md:gap-2 lg:gap-3 
            px-3 md:px-5  border-2 border-primary"
          >
          
              <Link className="flex items-center gap-2" to='/partners'>
              Peep In <FaLongArrowAltRight />
              </Link> 
       
        
          </button>
        </div>

        {/* become a partner */}
        <div className="">
          <p className="text-sm md:text-lg lg:text-xl  mb-4">
            Want to partner with us and make a difference together?
          </p>
          <div
            className="btn lg:btn-lg text-sm lg:text-lg py-3
           px-6 rounded-full text-black
            bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary
          font-semibold shadow-lg 
          "
          >
            Become a Partner
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              <FaLongArrowAltRight />
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurPartners;
