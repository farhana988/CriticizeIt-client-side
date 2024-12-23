// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import FeaturedServicesCard from "../components/FeaturedServicesCard";

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
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchAllServices();
  }, [filter, search]);

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
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white
                 outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter Service Title"
            aria-label="Enter Service Title"
          />

          <button
            className="px-3 md:px-4 py-3 text-sm font-medium tracking-wider
               text-gray-100 uppercase transition-colors duration-300 transform
                bg-primary rounded-md hover:bg-gray-600 focus:bg-gray-600
                 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      {/* main card section */}

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
            mx-5 mt-10"
      >
        {services.map((service) => (
          <FeaturedServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
