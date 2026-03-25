import Countdown from "react-countdown";
import { FaClock } from "react-icons/fa";
import Heading from "../shared/Heading";
import Swal from "sweetalert2";
import { deals } from "../../data/deals";

const DealsAndDiscounts = () => {
  const handleButtonClick = (deal) => {
    Swal.fire({
      icon: "success",
      title: "Deal Snagged!",
      text: `You have successfully grabbed the ${deal.service} deal! Enjoy your discount!`,
      footer: `<strong>Coupon Code: ${deal.couponCode}</strong>`,
      confirmButtonText: "OK!",
    });
  };
  return (
    <section>
      <div className="text-center">
        <Heading
          title={"Deals & Discounts"}
          subtitle={
            "Dont miss out on these amazing offers! Grab the best deals on our services."
          }
        ></Heading>

        {/* Deals */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative bg-lCard dark:bg-dCard shadow-md shadow-primary 
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
                <h3 className="text-sm md:text-lg font-semibold ">
                  {deal.service}
                </h3>
                <p className=" text-xs  mb-2" title={deal.description}>
                  {deal.description.substring(0, 60)}...
                </p>
                {/* discount badge */}
                <btn
                  className="text-sm font-semibold absolute 
                  rounded-bl-md top-0 z-10 right-0 text-black px-3
                 bg-gradient-to-r from-primary via-secondary to-accent
               transition-all "
                >
                  {deal.discount}
                </btn>

                {/* Timer */}
                <div
                  className="flex items-center justify-center text-primary dark:text-ivory 
                 text-sm my-2"
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
                  onClick={() => handleButtonClick(deal)}
                  className="  bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary text-sm 
                 text-black py-0.5 px-4 rounded-full shadow-md 
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
