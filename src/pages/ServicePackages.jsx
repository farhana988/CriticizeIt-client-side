import { useEffect, useState } from "react";
import Heading from "../components/shared/Heading";

const ServicePackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await fetch("packages.json")
        .then((res) => res.json())
        .catch((error) => console.error("Error fetching data:", error));

      setPackages(data);
    };

    fetchPackages();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Heading title={"     Service Packages"}></Heading>
      {/* Package Bundles */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 lg:gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-lCard dark:bg-dCard rounded-xl shadow-xl p-6
             shadow-primary hover:shadow-2xl h-[285px] md:h-[352px] lg:h-[405px] 
             flex flex-col justify-between overflow-y-scroll"
          >
            <div className="relative">
              <h2 className="text-xl lg;text-2xl font-semibold my-2">
                {pkg.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm lg:text-base">
                {pkg.description}
              </p>
              <p
                className=" text-sm md:text-base lg:text-lg font-semibold absolute 
                  rounded-bl-md -top-6 z-10 -right-5 text-black px-3
                 bg-gradient-to-r from-primary via-secondary to-accent
               transition-all"
              >
                {pkg.currency}
                {pkg.price}
              </p>
              <h2 className="font-semibold lg:text-lg mb-2">Services</h2>
              <ul className="text-gray-600 dark:text-gray-300 mb-4 pl-5 text-sm lg:text-base">
                {pkg.services.map((service, index) => (
                  <li key={index} className="list-disc ">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary px-3 py-1 rounded-xl w-20 lg:w-32
             text-xs lg:text-lg text-black font-semibold mt-auto"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePackages;
