import { useContext, useEffect, useState } from "react";
import Heading from "../../components/shared/Heading";
import ServicePackagesModal from "./ServicePackagesModal";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

import { FaStar, FaCheckCircle } from "react-icons/fa";
import { MdAccessTime, MdSupportAgent } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";

const ServicePackages = () => {
  const [packages, setPackages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await fetch("packages.json")
        .then((res) => res.json())
        .catch((error) => console.error("Error fetching data:", error));

      setPackages(data);
    };

    fetchPackages();
  }, []);

  const handleModalOpen = (pkg) => {
    if (!user) {
      Swal.fire({
        title: "You need to log in!",
        text: "Please log in to proceed with booking.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      setSelectedPackage(pkg);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="space-y-10">
      <Heading title={"Service Packages"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative group bg-lCard dark:bg-dCard border border-gray-200 
            dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between
            shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Recommended */}
            {(pkg.recommended || pkg.starter) && (
              <div className="mb-2 absolute -top-2.5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
                  {pkg.recommended ? "Recommended" : "Starter"}
                </span>
              </div>
            )}

            <div className="space-y-2">
              {/* Title */}
              <h2 className="text-xl font-semibold">{pkg.name}</h2>
              {/* Price */}
              <div className="text-2xl font-bold rounded-full">
                {pkg.currency}
                {pkg.price}
              </div>
              {/* Rating */}
              <div className="flex items-center gap-2 text-yellow-500">
                <FaStar />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {pkg.rating}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">
                {pkg.description}
              </p>

              {/* Package Details */}
              <div className="text-xs text-gray-500 space-y-1">
                <p className="flex items-center gap-2">
                  <MdAccessTime className="text-primary" />
                  Duration: {pkg.duration}
                </p>

                <p className="flex items-center gap-2">
                  <BsBoxSeam className="text-primary" />
                  Type: {pkg.bookingType}
                </p>

                <p className="flex items-center gap-2">
                  <MdSupportAgent className="text-primary" />
                  {pkg.support}
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Services Included
                </h3>

                <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
                  {pkg.services.slice(0, 3).map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 text-xs" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => handleModalOpen(pkg)}
              className="mt-6 w-full bg-gradient-to-r from-primary via-secondary to-accent 
              hover:from-primary hover:to-primary text-black font-semibold py-0.5 rounded-lg 
              transition duration-200"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <ServicePackagesModal
        isOpen={isModalOpen}
        closeModal={handleModalClose}
        packageDetails={selectedPackage}
      />
    </div>
  );
};

export default ServicePackages;
