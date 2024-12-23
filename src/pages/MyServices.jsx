// import React from 'react';

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyServicesCard from "../components/MyServicesCard";
import { TfiFaceSad } from "react-icons/tfi";
import Heading from "../components/Heading";
import { FaSearch } from "react-icons/fa";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
    
  
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/myServices/${user?.email}`,
          { params: { search: searchQuery } }
        );

        setServices(data);
      } catch {
        console.log("first");
      }
    };
    fetchAllServices();
  }, [searchQuery, user]);
  return (
    <div className="pt-10  container mx-auto min-h-screen">
      <Heading title={"My Services"}></Heading>

       {/* Search Input Field */}
       <div className="mb-5 flex justify-center relative
        items-center ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search by service title"
          className="w-11/12 md:w-6/12 lg:w-5/12 px-4 py-2 border border-gray-300
           rounded-lg pl-10"
        />
        <FaSearch className="absolute left-8 md:left-52 lg:left-96  top-1/2 transform -translate-y-1/2
         text-gray-400" /> 
      </div>

      

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
