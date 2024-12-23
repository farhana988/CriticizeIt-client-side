// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";
import Heading from "../components/Heading";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchAllDetails = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/serviceDetails/${id}`
        );
        setDetails(data);
        // setReviews(data.reviews || []);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchAllDetails();
  }, [id]);

  return (
    <div className="pt-20 ">
      <Heading title={"Service Details"}></Heading>

      <section className="grid grid-cols-1 lg:grid-cols-2  mx-6">

      <ServiceDetailsCard details={details}></ServiceDetailsCard>

      <div className="bg-white">aa</div>
      </section>
      

      {/* review section */}
    </div>
  );
};

export default ServiceDetails;
