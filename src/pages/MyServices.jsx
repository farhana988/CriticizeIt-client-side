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
      <Heading title={"My Services"}></Heading>

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
        <div className="group relative bg-[#ffffffb4] rounded-xl shadow-lg
         overflow-hidden hover:shadow-2xl mx-5">
          {/* Table */}
          <div className="overflow-x-auto ">
            <table className="min-w-full divide-y divide-gray-300 divide-dashed border-collapse 
            text-sm table-fixed">
              <thead className="text-xl text-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left w-3/8">Service Title</th>
                  <th className="px-6 py-3 text-left w-2/8">Category</th>
                
                  <th className="px-6 py-3 text-left w-1/8">Price</th>
                  <th className="px-6 py-3 text-center w-2/8"> Actions</th>
                
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <MyServicesCard
                    key={service._id}
                    service={service}
                    setServices={setServices}
                  ></MyServicesCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyServices;
