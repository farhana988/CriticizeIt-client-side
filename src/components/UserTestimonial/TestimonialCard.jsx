/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import quote from "../../assets/lottie/quote.json";

const TestimonialCard = ({testimonial}) => {
    return (
        <div>
             <div
             
              className="rounded-xl shadow-xl transform 
                transition-all hover:scale-105 hover:shadow-xl  shadow-primary"
            >
              {/*  Image */}
              <div className="absolute w-14 lg:w-20">
                <Lottie animationData={quote}></Lottie>
              </div>
              {/*card details */}
              <div
                className="py-6 lg:py-10 px-3 lg:px-4 rounded-2xl bg-lCard
                 dark:bg-dCard "
              >
                <h3 className="text-sm md:text-lg lg:text-2xl  font-semibold ">
                  {testimonial.name}
                </h3>
                <p className="text-sm lg:text-base mb-2">
                  {testimonial.service}
                </p>
                <p
                  className="italic mb-2 text-xs lg:text-sm"
                  title={testimonial.quote}
                >
                  {testimonial.quote.substring(0, 90)}...
                </p>

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
        </div>
    );
};

export default TestimonialCard;