import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Heading from "./shared/Heading";
import { useEffect, useState } from "react";
import "animate.css";
import { motion } from "framer-motion";

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
  {
    name: "GreenTech Solutions",
    logo: "https://i.ibb.co/1Ry6KkX/Green-Tech-Solutions.jpg",
    description:
      "Focused on sustainable technology to help businesses go green.",
  },
 
  {
    name: "NextGen Robotics",
    logo: "https://i.ibb.co/hF8RC2v/Next-Gen-Robotics.jpg",
    description:
      "Developing advanced robotics for automation and industry innovation.",
  },
  {
    name: "SecureNet Solutions",
    logo: "https://i.ibb.co/zFxppb5/Secure-Net-Solutions.jpg",
    description:
      "Experts in cybersecurity, ensuring your data and systems remain protected.",
  },
  {
    name: "BrightPath Education",
    logo: "https://i.ibb.co/TtdD2Zx/Bright-Path-Education.jpg",
    description:
      "Providing educational tools and resources to empower learning and growth.",
  },
  {
    name: "GlobalTrade Logistics",
    logo: "https://i.ibb.co/VxB6KdN/Global-Trade-Logistics.jpg",
    description:
      "Streamlining international trade with efficient logistics solutions.",
  },
  {
    name: "FutureFit AI",
    logo: "https://i.ibb.co/7XJwhty/Future-Fit-AI.jpg",
    description:
      "Pioneering AI technologies for smarter decision-making and automation.",
  },
  {
    name: "Zenith HealthTech",
    logo: "https://i.ibb.co/QPM9LtP/Zenith-Health-Tech.jpg",
    description:
      "Revolutionizing healthcare with innovative tech and patient-focused solutions.",
  },
  {
    name: "EcoBuilders Co.",
    logo: "https://i.ibb.co/wRx5mLn/Eco-Builders-Co.jpg",
    description:
      "Leaders in sustainable construction practices and eco-friendly design.",
  },
  {
    name: "UrbanScape Architects",
    logo: "https://i.ibb.co/0qYMYrD/Urban-Scape-Architects.jpg",
    description:
      "Designing modern architectural solutions for urban living.",
  },
  {
    name: "Spark Innovations Lab",
    logo: "https://i.ibb.co/yS9YWXz/Spark-Innovations-Lab.jpg",
    description:
      "Fueling startups with innovative ideas and strategic guidance.",
  },
  {
    name: "Visionary Tech",
    logo: "https://i.ibb.co/Xj3x4Pg/Visionary-Tech-Solutions.jpg",
    description:
      "Innovating technology to shape the future of businesses worldwide.",
  },
  {
    name: "EcoVision Consulting",
    logo: "https://i.ibb.co/y6RjD3Q/EcoVision-Consulting.jpg",
    description:
      "Providing strategic insights for businesses to embrace sustainability and growth.",
  },
];

const MeetOurPartners = () => {
  const [showMore, setShowMore] = useState(false);

  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(showMore ? partners.length : 4);
      } else if (window.innerWidth >= 768) {
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
          {partners.slice(0, visibleCards).map((partner, index) => (
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
            onClick={() => setShowMore(!showMore)}
            className="text-sm md:text-base lg:text-xl font-semibold text-black
            bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary  rounded-full
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
