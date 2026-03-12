import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Heading from "../shared/Heading";
import ServiceCard from "../cards/ServiceCard";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/services`,
        );
        setServices(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };

    fetchAllServices();
  }, []);

  return (
    <div>
      <Heading title={"Featured Services"} />
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6
           "
      >
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            showCategory={false}
            cardHeight="h-[260px] md:h-[270px] xl:h-[315px]"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
