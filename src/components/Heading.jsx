/* eslint-disable react/prop-types */
import "animate.css";
import { motion } from "framer-motion";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <motion.h1
        animate={{ color: 
          [
            '#80eb80', 
            '#FFDAB9', 
            '#87CEEB', 
            '#74ad90', 
            '#FFB6C1', 
            '#6e6e5e', 
            '#d1add1',
            '#F08080', 
            '#d4c85b',
            '#5d9fb6', 
            '#D2B48C', 
            '#e9a6b6', 
            '#B0C4DE', 
            '#969165', 
            '#DAA520', 
            '#a09e9e', 
            '#4C585B',
            '#8EB486',
            '#997C70',
            '#a64d7ad3'
          ]
        }}
        transition={{
          duration: 20, 
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut"
        }}
        className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-primary"
      >
        {title}
      </motion.h1>
      <p className="text-xs lg:text-lg md:px-20 lg:px-80 text-primary text-center 
      font-thin">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
