// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import FeaturedServicesCard from "../components/FeaturedServicesCard";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import CountUp from "react-countup";
import Swal from "sweetalert2";

const Services = () => {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/all-services?filter=${filter}&search=${search}`
        );
        setServices(data);
      } catch {
        Swal.fire(
                             "Error",
                             "An error occurred",
                             "error"
                           );
      }
    };

    fetchAllServices();
  }, [filter, search]);

  // dynamic title
  const location = useLocation();
  if (location.pathname === "/services") {
    document.title = "CriticizeIt | Services";
  }

  return (
    <div className="container mx-auto py-10 min-h-screen">
      <Heading title={"All Services"} />

      {/* search and filter btns */}

      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {/* filter */}
        <div>
          <select
            name="category"
            id="category"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="Home Services">Home Services</option>
            <option value="Health and Wellness">Health and Wellness</option>
            <option value="Education and Tutoring">
              Education and Tutoring
            </option>
            <option value="Business and Marketing">
              Business and Marketing
            </option>
            <option value="Technology Services">Technology Services</option>
            <option value="Travel and Transportation">
              Travel and Transportation
            </option>
            <option value="Pet Cares">Pet Cares</option>
            <option value="Event Planning">Event Planning</option>
            <option value="Beauty and Personal Care">
              Beauty and Personal Care
            </option>
            <option value="Eco-Friendly Services">Eco-Friendly Services</option>
            <option value="Emergency Services">Emergency Services</option>
          </select>
        </div>

        {/* search */}
        <div
          className="flex justify-center relative 
        items-center "
        >
          <input
            className=" p-4 border border-gray-300 lg:w-96
           rounded-lg pl-10"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by service title"
            aria-label="Enter Service Title"
          />

          <FaSearch
            className="absolute left-4  top-1/2 transform -translate-y-1/2
         text-gray-400"
          />
        </div>
      </div>

     
      {/* total services */}
      <p className="active text-primary  text-2xl md:text-4xl lg:text-5xl 
       font-extrabold px-5 my-6">

        Total Services :{" "}

        <CountUp start={0} 
        end={services.length} 
        duration={3} 
        separator="," />
      </p>

       {/* main card section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
            mx-5"
      >
        {services.map((service) => (
          <FeaturedServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
