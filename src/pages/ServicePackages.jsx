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
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className=" bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold text-nav dark:text-ivory mb-2">
              {pkg.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {pkg.description}
            </p>
            <p className="text-lg font-bold text-nav dark:text-ivory mb-4">
              {pkg.currency}
              {pkg.price}
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-4">
              {pkg.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePackages;
