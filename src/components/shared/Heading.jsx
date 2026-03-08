/* eslint-disable react/prop-types */
import "animate.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Heading = ({ title }) => {
  return (
    <div className="flex flex-col w-full mb-6 opacity-90">
      <div className="flex items-center gap-3 text-2xl md:text-3xl  ">
        <FaRegArrowAltCircleRight />
        <h1 className="font-semibold  ">{title}</h1>
      </div>
    </div>
  );
};

export default Heading;
