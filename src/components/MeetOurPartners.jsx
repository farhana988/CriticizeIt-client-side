import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Heading from "./Heading";
import { useEffect, useState } from "react";

// import React from 'react';
const partners = [
  {
    name: "TechSphere Solutions",
    logo: "https://i.ibb.co/y5dRsVG/Tech-Sphere-Solutions.jpg",
    description:
      "Providing cutting-edge technology services for seamless integration.",
  },
  {
    name: "Bright Media Agency",
    logo: "https://i.ibb.co/NVqR6Nd/Bright-Media-Agency.png",
    description:
      "Experts in digital marketing and content creation for impactful branding.",
  },
  {
    name: "CloudWorks Inc.",
    logo: "https://i.ibb.co/djj7Hsb/Cloud-Works-Inc-2.jpg",
    description:
      "Specializing in cloud solutions to ensure secure and scalable operations.",
  },
  {
    name: "Innovate Design Labs",
    logo: "https://i.ibb.co/y6S7R9c/Innovate-Design-Labs.jpg",
    description:
      "Creators of innovative UI/UX designs to elevate user experiences.",
  },
];

const MeetOurPartners = () => {
  const [showMore, setShowMore] = useState(false);

  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(showMore ? partners.length : 3);
      } else {
        setVisibleCards(showMore ? partners.length : 2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMore]);

  return (
    <section
      className="relative pt-14"
    >
      <div className="container mx-auto px-6 text-center">
        {/*  Title */}
        <Heading
          title={"Meet Our Partners"}
          subtitle={
            " We proudly collaborate with innovative partners who drive impactful solutions and services. Together, we achieve excellence."
          }
        ></Heading>

        {/* Partner card*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.slice(0, visibleCards).map((partner, index) => (
            <div
              key={index}
              className="relative rounded-2xl 
              overflow-hidden transform transition-all hover:scale-125 "
            >
              <div className="pt-16 ">
                {/*  Logo */}
                <div
                  className="w-36 h-36 z-10 mx-auto bg-gradient-to-r
                 from-indigo-500 to-purple-500 rounded-full p-1
                 absolute top-2 left-28 md:left-24 lg:left-32 animate-pulse"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {/* Details */}
                <div className="card pt-24 pb-14 px-3 rounded-2xl bg-[#ffffffb4]
               ">
                  <h3
                    className="text-2xl font-semibold text-gray-700 mt-4
                "
                  >
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 mt-2 px-3 lg:px-8">{partner.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-5 lg:mt-8 mb-5 md:mb-2 lg:mb-0 flex justify-end">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm md:text-base lg:text-xl font-semibold text-white
            bg-gradient-to-r from-purple-500 to-blue-500
             hover:from-purple-600 hover:to-blue-600   rounded-full
             transition-all flex items-center gap-1 md:gap-2 lg:gap-3 
            px-3 md:px-5  border-2 border-primary"
          >
            {showMore ? (
              <>
                <FaLongArrowAltLeft /> Conceal
              </>
            ) : (
              <>
                Peep In <FaLongArrowAltRight />
              </>
            )}{" "}
          </button>
        </div>

        {/* become a partner */}
        <div className="">
          <p className= "text-sm md:text-lg lg:text-xl text-gray-700 mb-4">
            Want to partner with us and make a difference together?
          </p>
          <div
            className="btn lg:btn-lg text-sm lg:text-lg text-white py-3
           px-6 rounded-full 
           bg-gradient-to-r from-purple-500 to-blue-500
             hover:from-purple-600 hover:to-blue-600
          font-semibold shadow-lg 
          "
          >
            Become a Partner <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurPartners;
