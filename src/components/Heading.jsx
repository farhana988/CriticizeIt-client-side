/* eslint-disable react/prop-types */
import "animate.css";
import { motion } from "framer-motion";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <motion.h1
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
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
