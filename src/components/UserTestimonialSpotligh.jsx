import Lottie from "lottie-react";
import quote from "../assets/lottie/quote.json"
import Heading from "./Heading";

const testimonials = [
    {
      name: "John Doe",
      service: "Home Cleaning",
      quote: "This service was incredible! My home has never been cleaner, and the team was professional and friendly.",
      rating: 5
    },
    {
      name: "Jane Smith",
      service: "Personal Training",
      quote: "I had an amazing experience with the personal trainer. The sessions were tailored to my goals, and I saw great results.",
      rating: 4
    },
    {
      name: "Emily Johnson",
      service: "Pet Grooming",
      quote: "My dog looks amazing after the grooming session! The team was gentle and caring, and I couldn't be happier.",
      rating: 5
    }
  ];
  
  const UserTestimonialSpotlight = () => {
    return (
      <section className="pt-10">
        <div className="container mx-auto text-center px-6">
          
          <Heading
          title={' What Our Users Are Saying'}>

          </Heading>
  
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl shadow-lg transform 
                transition-all hover:scale-105 hover:shadow-lg hover:bg-indigo-50"
              >
                {/*  Image */}
                <div className="absolute w-20">
                 <Lottie animationData={quote}></Lottie>
                </div>
                {/* details */}
                <div className="py-10 px-2 lg:px-4 rounded-2xl bg-[#ffffff7a] shadow-xl shadow-primary">
                  <h3 className="text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.service}</p>
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
  
                  {/* rating  */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        stroke={i < testimonial.rating ? "none" : "currentColor"}
                        className="w-6 h-6 text-yellow-400 transition-all ease-in-out duration-300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.28 3.16 1.01-5.88-4.29-4.17 5.91-.87L10 0l2.65 5.24 5.91.87-4.29 4.17 1.01 5.88L10 15z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default UserTestimonialSpotlight;
  