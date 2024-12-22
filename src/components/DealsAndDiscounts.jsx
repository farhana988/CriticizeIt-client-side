import Countdown from "react-countdown";
import { FaClock } from "react-icons/fa";
import Heading from "./Heading";

const deals = [
  {
    service: "Home Cleaning",
    discount: "30% OFF",
    description:
      "Enjoy sparkling clean homes with our professional cleaning services.",
    image: "https://i.ibb.co.com/RPn2wDt/Home-Cleaning.jpg",
    endDate: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000),
  },
  {
    service: "Personal Training",
    discount: "20% OFF",
    description:
      "Achieve your fitness goals with personalized training sessions.",
    image: "https://i.ibb.co.com/923xCX4/Personal-Training.webp",
    endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  },
  {
    service: "Pet Grooming",
    discount: "25% OFF",
    description:
      "Give your pets the care they deserve with our grooming services.",
    image: "https://i.ibb.co.com/9wR62zC/Pet-Grooming.jpg",
    endDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative bg-[#ffffff7a] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.service}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-6 pt-2 pb-8 ">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 my-2">
                  {deal.service}
                </h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                {/* discount badge */}
                <btn
                  className="text-lg font-semibold absolute rounded-bl-md
                top-0 z-10 right-0 bg-black px-3
                bg-gradient-to-r from-purple-500 to-blue-500
                 text-white  shadow-md hover:from-purple-600
                  hover:to-blue-600 transition-all "
                >
                  {deal.discount}
                </btn>

                <section className="flex items-center justify-between">
                  {/* Timer */}
                  <div
                    className="flex items-center justify-center text-primary 
                lg:text-lg"
                  >
                    <FaClock className="mr-2 text-primary" />
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
                    className="bg-gradient-to-r from-purple-500 to-blue-500
                 text-white lg:py-1 px-6 rounded-full shadow-md hover:from-purple-600
                  hover:to-blue-600 transition-all font-semibold"
                  >
                    Snag It!
                  </button>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsAndDiscounts;
