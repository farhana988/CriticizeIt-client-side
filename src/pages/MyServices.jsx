// import React from 'react';

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyServicesCard from "../components/MyServicesCard";
import { TfiFaceSad } from "react-icons/tfi";
import Heading from "../components/Heading";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/myServices/${user?.email}`
        );
        console.log(data);
        setServices(data);
      } catch {
        console.log("first");
      }
    };
    fetchAllServices();
  }, [user]);
  return (
    <div className="pt-10  container mx-auto min-h-screen">
        <Heading
        title={'My Services'}></Heading>
    
      {services.length === 0 ? (
        <div
          className="flex flex-col justify-center items-center gap-5 my-40 active
            text-xl md:text-2xl lg:text-4xl font-bold"
        >
          <TfiFaceSad className="text-9xl " />
          <p className="opacity-50">No services found.</p>
          <p className="opacity-50">Start adding some services to your list!</p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                mx-5 mt-10"
        >
          {services.map((service) => (
            <MyServicesCard
              key={service._id}
              service={service}
            ></MyServicesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyServices;
