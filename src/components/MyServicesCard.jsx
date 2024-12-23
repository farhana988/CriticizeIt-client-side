/* eslint-disable react/prop-types */
// import React from 'react';

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import UpdateServiceModal from "./UpdateServiceModal";

const MyServicesCard = ({ service, setServices }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const {serviceTitle, _id, category, price, } = service || {};

  // Delete function
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`);

        setServices((prevServices) =>
          prevServices.filter((service) => service._id !== id)
        );

        Swal.fire("Deleted!", "Your service has been deleted.", "success");
      }
    } catch {
      Swal.fire(
        "Error",
        "An error occurred while deleting the service.",
        "error"
      );
    }
  };

    //  Update Button
    const handleUpdateClick = () => {
      setSelectedService(service); 
      setIsModalOpen(true); 
    };

  return (
    <>
      <tr className=" border-b hover:bg-gray-100 transition-colors duration-200">
      <td className="px-6 py-4">{serviceTitle ? serviceTitle : "N/A"}</td>
      <td className="px-6 py-4">{category}</td>

      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4 flex flex-col lg:flex-row gap-4 text-white justify-center">
        {/* delete btn */}
        <div
          onClick={() => handleDelete(_id)}
          className="bg-primary px-3 py-1 rounded-full text-lg"
        >
          delete
        </div>
        {/* update btn */}
        <div   onClick={handleUpdateClick} 
        className="bg-primary px-3 py-1 rounded-full text-lg">update</div>
      </td>
    </tr>
        {/* Update Service Modal */}
        <UpdateServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
        setServices={setServices}
      />
    </>
  );
};

export default MyServicesCard;
