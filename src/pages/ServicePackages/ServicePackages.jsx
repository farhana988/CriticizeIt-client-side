import { useContext, useEffect, useState } from "react";
import Heading from "../../components/shared/Heading";
import ServicePackagesModal from "./ServicePackagesModal";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

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

  // modal
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
    <div>
      <Heading title={"Service Packages"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative bg-lCard dark:bg-dCard border border-gray-200 
            dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl 
            transition duration-300 p-6 flex flex-col justify-between"
          >
            {/* Price Badge */}
            <div
              className="absolute top-4 right-4 bg-gradient-to-r from-primary
             via-secondary to-accent text-black font-bold px-4 py-1 
             rounded-full text-xs shadow"
            >
              {pkg.currency}
              {pkg.price}
            </div>

            {/* Package Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>

              <p className="text-gray-600 dark:text-gray-300 text-xs mb-4">
                {pkg.description}
              </p>

              <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-500">
                Services Included
              </h3>

              <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
                {pkg.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button
              onClick={() => handleModalOpen(pkg)}
              className="mt-6 w-full bg-gradient-to-r from-primary via-secondary to-accent 
              hover:opacity-90 text-black font-semibold py-0.5 rounded-lg 
              transition duration-200"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ServicePackagesModal
        isOpen={isModalOpen}
        closeModal={handleModalClose}
        packageDetails={selectedPackage}
      />
    </div>
  );
};

export default ServicePackages;
