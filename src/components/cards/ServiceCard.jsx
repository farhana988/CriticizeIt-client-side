/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ResponsiveText from "../shared/ResponsiveText";

const ServiceCard = ({
  service,

  cardHeight = "h-[245px] md:h-[252px] lg:h-[290px] xl:h-[335px]",
}) => {
  const { serviceImage, serviceTitle, _id, description, price } = service || {};

  return (
    <div
      className={`group relative bg-lCard dark:bg-dCard rounded-lg shadow-md 
      overflow-hidden flex flex-col shadow-primary hover:shadow-xl ${cardHeight}`}
    >
      {/* Image */}
      <div className="relative w-full p-1">
        <img
          src={serviceImage}
          alt={serviceTitle}
          className="object-cover w-full h-36 xl:h-48 rounded-lg"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Card Content */}
      <div className="px-3 pb-3 flex flex-col flex-grow">
        {/* Title */}
        <div className="max-w-full">
          <div className="relative group">
            <div className="tooltip tooltip-top" data-tip={serviceTitle}>
              <p className="truncate max-w-full sm:max-w-xs xl:text-lg font-bold">
                {serviceTitle.substring(0, 20)}
                {serviceTitle.length > 20 && "..."}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <ResponsiveText
          text={description}
          className="text-xs mb-2 "
          breakpoints={{ lg: 50, md: 52, sm: 30, default: 35 }}
        />

        {/* Price and See Details */}
        <div className="flex justify-between items-center mt-auto">
          <span className="font-semibold text-sm ">${price}</span>
          <Link
            to={`/serviceDetails/${_id}`}
            className="bg-gradient-to-r from-primary via-secondary to-accent
              hover:from-primary hover:to-primary px-3 py-1 rounded-xl 
              text-xs text-black font-semibold"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
