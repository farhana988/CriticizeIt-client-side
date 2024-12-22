// import React from 'react';

import { useEffect, useState } from "react";

import slide1 from "../assets/slides/slide1.webp";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carousel w-full  bg-green-50 mt-[72px] ">
      {/* slide 1 */}
      <div
        id="slide1"
        className={`carousel-item relative w-full transition-all duration-700 ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img src={slide1} className="w-full h-60 md:h-96 lg:h-[550px]" />
        {/* the text of slide 1 */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center 
        items-center">
          <div className="text-center ">
            <h2 className="text-white text-2xl md:text-5xl font-extrabold mb-6 
            drop-shadow-xl">
              <span className="text-yellow-500 active text-4xl md:text-7xl lg:text-9xl">
                Discover {' '}</span> Amazing Services
            </h2>
            <p className="text-gray-200 text-sm md:text-xl lg:text-2xl font-medium  
            px-10
             max-w-4xl mx-auto drop-shadow-lg">
              Explore curated services that meet all your needs, all in one place.
            </p>
          </div>
        </div>
      </div>
      {/* slide2 */}
      <div
        id="slide2"
        className={`carousel-item relative w-full transition-all duration-700 ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img src={slide2} className="w-full h-60 md:h-96 lg:h-[550px]" />
        {/* the text of slide 2 */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="text-center ">
            <h2 className="text-white text-2xl md:text-5xl font-extrabold mb-6
             drop-shadow-xl">
              <span className="text-pink-500 active text-4xl md:text-7xl lg:text-9xl">
                Share {' '}</span> Your Experiences
            </h2>
            <p className="text-gray-200 text-sm md:text-xl lg:text-2xl font-medium 
             px-10
            max-w-4xl  mx-auto drop-shadow-lg">
              Inspire others by leaving impactful reviews and insights.
            </p>
          </div>
        </div>
      </div>
      {/* slide 3 */}
      <div
        id="slide3"
        className={`carousel-item relative w-full transition-all duration-700 ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img src={slide3} className="w-full h-60 md:h-96 lg:h-[550px]" />
        {/* the text of slide 3 */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="text-center ">
            <h2 className="text-white text-2xl md:text-5xl font-extrabold mb-6 
            drop-shadow-xl">
              <span className="text-green-500 active text-4xl md:text-7xl lg:text-9xl">
                Connect {' '}</span> with the Community
            </h2>
            <p className="text-gray-200 text-sm md:text-xl lg:text-2xl font-medium 
            px-10
            max-w-4xl mx-auto drop-shadow-lg">
              Be a part of a trusted network and engage with other users.
            </p>
          </div>
        </div>
      </div>
      {/* slide 4 */}
      <div
        id="slide4"
        className={`carousel-item relative w-full transition-all duration-700 ${
          currentSlide === 4 ? "block" : "hidden"
        }`}
      >
        <img src={slide4} className="w-full h-60 md:h-96 lg:h-[550px]" />
        {/* the text of slide 4 */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center 
        items-center">
          <div className="text-center ">
            <h2 className="text-white text-2xl md:text-5xl font-extrabold mb-6 
            drop-shadow-xl">
             <span className="text-blue-500 active text-4xl md:text-7xl lg:text-9xl"> 
                Build Trust {' '}</span> with Reviews
            </h2>
            <p className="text-gray-200 text-sm md:text-xl lg:text-2xl font-medium 
            px-10
            max-w-4xl mx-auto drop-shadow-lg">
              Promote transparency and quality by sharing honest feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
