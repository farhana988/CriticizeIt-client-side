import { useEffect, useState } from "react";
import slide1 from "../../assets/slides/slide1.webp";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";
import slide4 from "../../assets/slides/slide4.jpg";
import Slide from "../shared/Slide";

const slidesData = [
  {
    image: slide1,
    heading: "Amazing Services",
    highlight: "Discover",
    paragraph:
      "Explore curated services that meet all your needs, all in one place.",
    color: "red",
  },
  {
    image: slide2,
    heading: "Your Experiences",
    highlight: "Share",
    paragraph: "Inspire others by leaving impactful reviews and insights.",
    color: "orange",
  },
  {
    image: slide3,
    heading: "with the Community",
    highlight: "Connect",
    paragraph: "Be a part of a trusted network and engage with other users.",
    color: "green",
  },
  {
    image: slide4,
    heading: "with Reviews",
    highlight: "Build Trust",
    paragraph: "Promote transparency and quality by sharing honest feedback.",
    color: "blue",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full bg-green-50 mt-16 lg:mt-[68px]">
      {slidesData.map((slide, index) => (
        <Slide
          key={index}
          image={slide.image}
          heading={slide.heading}
          highlight={slide.highlight}
          paragraph={slide.paragraph}
          color={slide.color}
          isActive={index === currentSlide}
        />
      ))}
    </div>
  );
};

export default Banner;
