import Countdown from "react-countdown";
import { FaClock } from "react-icons/fa";
import Heading from "./shared/Heading";

const deals = [
  {
    service: "Home Cleaning",
    discount: "30% OFF",
    description:
      "Enjoy sparkling clean homes with our professional cleaning services.",
    image: "https://i.ibb.co.com/RPn2wDt/Home-Cleaning.jpg",
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    service: "Personal Training",
    discount: "20% OFF",
    description:
      "Achieve your fitness goals with personalized training sessions.",
    image: "https://i.ibb.co.com/923xCX4/Personal-Training.webp",
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
  {
    service: "Pet Grooming",
    discount: "25% OFF",
    description:
      "Give your pets the care they deserve with our grooming services.",
    image: "https://i.ibb.co.com/9wR62zC/Pet-Grooming.jpg",
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
  {
    service: "Event Planning",
    discount: "15% OFF",
    description:
      "Plan your dream event with our professional event planning services.",
    image: "https://i.ibb.co.com/k84mykT/event.jpg",
    endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
  },
];

const DealsAndDiscounts = () => {
  return (
    <section className=" pt-10">
      <div className="container mx-auto px-6 text-center">
        <Heading
          title={"   Deals & Discounts"}
          subtitle={
            "Dont miss out on these amazing offers! Grab the best deals on our services."
          }
        ></Heading>

        {/* Deals */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative bg-lCard dark:bg-dCard shadow-xl shadow-primary 
              rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="w-full h-28 md:h-32 lg:h-44 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.service}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-2 pt-2 pb-3 lg:pb-5 ">
                <h3 className="text-sm md:text-lg lg:text-2xl  font-semibold ">
                  {deal.service}
                </h3>
                <p
                  className=" text-xs lg:text-sm mb-2"
                  title={deal.description}
                >
                  {deal.description.substring(0, 60)}...
                </p>
                {/* discount badge */}
                <btn
                  className="text-sm md:text-base lg:text-lg font-semibold absolute 
                  rounded-bl-md top-0 z-10 right-0 text-black px-3
                 bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary  transition-all "
                >
                  {deal.discount}
                </btn>

                {/* Timer */}
                <div
                  className="flex items-center justify-center text-primary dark:text-ivory 
                 text-sm lg:text-lg my-2"
                >
                  <FaClock className="mr-2 text-primary dark:text-ivory" />
                  <Countdown
                    date={deal.endDate}
                    renderer={({ days, hours, minutes, seconds }) => (
                      <span>
                        <span className="font-semibold">{days}</span>d{" "}
                        <span className="font-semibold">{hours}</span>h{" "}
                        <span className="font-semibold">{minutes}</span>m{" "}
                        <span className="font-semibold">{seconds}</span>s
                      </span>
                    )}
                  />
                </div>

                {/* Button */}
                <button
                  className="  bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary text-sm lg:text-base
                 text-black lg:py-1 px-6 rounded-full shadow-md 
                  transition-all font-semibold"
                >
                  Snag It!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsAndDiscounts;
