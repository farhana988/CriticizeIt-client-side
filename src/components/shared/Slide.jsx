/* eslint-disable react/prop-types */

const Slide = ({ image, isActive, heading, highlight, paragraph, color }) => {
  return (
    <div
      className={`carousel-item relative w-full transition-all duration-700  ${
        isActive ? "block" : "hidden"
      }`}
    >
      <img
        src={image}
        className="w-full h-60 md:h-96 lg:h-[550px] object-cover"
        alt="slide"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-white text-2xl md:text-3xl xl:text-4xl font-extrabold mb-6 drop-shadow-xl">
            <span
              className={`text-${color}-500 text-4xl md:text-6xl xl:text-7xl `}
            >
              {highlight}{" "}
            </span>
            {heading}
          </h2>
          <p className="text-gray-200 text-sm md:text-sm xl:text-lg font-medium px-10 max-w-4xl mx-auto drop-shadow-lg">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
