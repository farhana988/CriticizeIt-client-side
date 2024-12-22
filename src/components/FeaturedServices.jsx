import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import FeaturedServicesCard from "./FeaturedServicesCard";

const FeaturedServices = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        const fetchAllServices = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`);
                setServices(data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchAllServices();
    }, []);

    return (
        <div className="container mx-auto">
            <Heading title={'Featured Services'} />
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                {services.map(service => (
                    <FeaturedServicesCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedServices;
