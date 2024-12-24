// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyServicesCard from "../components/MyServicesCard";
import Heading from "../components/Heading";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import NoData from "../components/NoData";

const MyServices = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axiosSecure.get(`/myServices/${user?.email}`, {
          params: { search: searchQuery },
        });

        setServices(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };
    fetchAllServices();
  }, [axiosSecure, searchQuery, user]);

  // dynamic title
  const location = useLocation();
  if (location.pathname === "/myServices") {
    document.title = "CriticizeIt | My Services";
  }

  return (
    <div className="pt-10  min-h-screen">
      <Heading title={"My Services"}></Heading>

      {/* Search Input Field */}
      <div
        className="mb-5 lg:mb-10 flex justify-center relative
        items-center "
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by service title"
          className="w-11/12 md:w-6/12 lg:w-5/12 px-4 py-2 border border-gray-300
           rounded-lg pl-10"
        />
        <FaSearch
          className="absolute left-8 md:left-52 lg:left-[435px]  
        top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>

      {services.length === 0 ? (
        <NoData
          title={"No services found."}
          subtitle={"Start adding some services tol your ist!"}
        ></NoData>
      ) : (
        <div
          className="group relative bg-[#ffffffb4] rounded-xl shadow-xl
         shadow-primary
         overflow-hidden hover:shadow-2xl mx-5 lg:mx-10"
        >
          {/* Table */}
          <div className="overflow-x-auto py-6">
            <table
              className=" 
              table table-xs"
            >
              <thead className="lg:text-xl text-gray-800 ">
                <tr>
                  <th className="   py-3">Service Image</th>
                  <th className="  py-3">Service Title</th>
                  <th className=" text-left  py-3">Company Name</th>
                  <th className=" text-left py-3">Category</th>
                  <th className=" text-left  py-3">Price</th>
                  <th className=" text-left  py-3">Description</th>
                  <th className=" text-center py-3">Actions</th>
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
