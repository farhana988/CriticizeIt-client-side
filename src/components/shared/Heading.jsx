/* eslint-disable react/prop-types */
import "animate.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full container mx-auto px-5 xl:px-0 my-12 opacity-90">
      <div className="flex items-center gap-3 text-2xl md:text-3xl xl:text-4xl ">
        <FaRegArrowAltCircleRight />
        <h1 className="font-bold  ">{title}</h1>
      </div>
      <p
        className="text-xs lg:text-lg mt-4 text-start font-thin"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
