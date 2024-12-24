// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Users = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/users`
        );
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchAllServices();
  }, []);
  return (
    <div>
     
      {/* total users */}
      <p
        className="active text-primary  text-2xl md:text-4xl lg:text-5xl 
         font-extrabold px-6 pt-3
      "
      >
        Total Registered users :{" "}
        <CountUp start={0} end={services.length} duration={3} separator="," />
      </p>
    </div>
  );
};

export default Users;
