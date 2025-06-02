/* eslint-disable react/prop-types */

const Slide = ({ image, isActive, heading, highlight, paragraph, color }) => {
  return (
    <div
      className={`carousel-item relative w-full transition-all duration-700 ${
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
          <h2 className="text-white text-2xl md:text-5xl font-extrabold mb-6 drop-shadow-xl">
            <span
              className={`text-${color}-500 text-4xl md:text-7xl lg:text-9xl`}
            >
              {highlight}{" "}
            </span>
            {heading}
          </h2>
          <p className="text-gray-200 text-sm md:text-xl lg:text-2xl font-medium px-10 max-w-4xl mx-auto drop-shadow-lg">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
