
import { useEffect, useState } from "react";
import Heading from "../shared/Heading";
import TestimonialCard from "./TestimonialCard";


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
        .catch((error) => console.error("Error fetching the blog posts:", error));
    }, []);
  return (
    <section className="pt-10">
      <div className="container mx-auto text-center px-6">
        <Heading title={" What Our Users Are Saying"}></Heading>

        {/* Testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {testimonials.map((testimonial, index) => (
           <TestimonialCard  key={index} testimonial={testimonial}></TestimonialCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestimonialSpotlight;
