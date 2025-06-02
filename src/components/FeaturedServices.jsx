import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "./shared/Heading";
import Swal from "sweetalert2";
import ServiceCard from "./cards/ServiceCard";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/services`
        );
        setServices(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };

    fetchAllServices();
  }, []);

  return (
    <div className="container mx-auto ">
      <Heading title={"Featured Services"} />
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6
            mx-5"
      >
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            showCategory={false}
            cardHeight="h-[220px] md:h-[226px] lg:h-[265px] xl:h-[305px]"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
