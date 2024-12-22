// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
      fetchAllServices()
    }, [])
  
    const fetchAllServices = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
      setServices(data)
    }
    console.log(services)
    return (
       <div>
          fff {services.length}
        {/* <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {services.map(service => (
            <FeaturedServices key={service._id} service={service} ></FeaturedServices>
          ))}
        </div> */}
       </div>
    );
};

export default FeaturedServices;