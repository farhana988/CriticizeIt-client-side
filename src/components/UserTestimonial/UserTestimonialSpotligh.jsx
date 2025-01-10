import { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../shared/Heading";
import TestimonialCard from "./TestimonialCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserTestimonialSpotlight = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("./testimonials.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto text-center px-5 ">
        <Heading title={"What Our Users Are Saying"} />

        {/* React Slick Carousel */}
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div className="px-1 lg:px-3 " key={index}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UserTestimonialSpotlight;
