// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import FeaturedServicesCard from "../components/FeaturedServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        const fetchAllServices = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-services`);
                setServices(data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchAllServices();
    }, []);
    return (
        <div className="container mx-auto py-10">
            
        <Heading title={'All Services'} />

        
      
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
             
              <option value="" >Filter By Category</option>
                <option value="Home Services">Home Services</option>
                <option value="Health & Wellness">Health & Wellness</option>
                <option value="Education & Tutoring">Education & Tutoring</option>
                <option value="Business & Marketing">Business & Marketing</option>
                <option value="Technology Services">Technology Services</option>
                <option value="Travel & Transportation">Travel & Transportation</option>
                <option value="Pet Cares">Pet Cares</option>
                <option value="Event Planning">Event Planning</option>
                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                <option value="Eco-Friendly Services">Eco-Friendly Services</option>
                <option value="Emergency Services">Emergency Services</option>
            </select>
          </div>

          <form>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white
                 outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Service Title'
                aria-label='Enter Service Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider
               text-gray-100 uppercase transition-colors duration-300 transform
                bg-primary rounded-md hover:bg-gray-600 focus:bg-gray-600
                 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          
       
        
      </div>
   




        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
            {services.map(service => (
                <FeaturedServicesCard key={service._id} service={service} />
            ))}
        </div>
    </div>
    );
};

export default Services;