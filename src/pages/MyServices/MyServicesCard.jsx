/* eslint-disable react/prop-types */
// import React from 'react';

import { useState } from "react";
import Swal from "sweetalert2";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateServiceModal from "./UpdateServiceModal";

const MyServicesCard = ({ service, setServices }) => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const {
    serviceTitle,
    _id,
    category,
    price,
    serviceImage,
    companyName,
    description,
    website,
  } = service || {};

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
        await axiosSecure.delete(`/service/${id}`);

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
      <tr className=" border-b hover:bg-gray-100 ">
        <td className="border-2">
          <img
            className="h-24 w-32 object-cover rounded-xl "
            src={serviceImage}
            alt=""
          />
        </td>
        <td className="lg:text-lg break-words border-2">
          {serviceTitle.substring(0, 20)}...
        </td>

        <td className="lg:text-lg text-blue-600 hover:underline break-words border-2">
          <a href={website}>{companyName.substring(0, 20)}...</a>
        </td>

        <td className="lg:text-lg border-2">{category}</td>

        <td className="lg:text-lg border-2">${price}</td>

        <td className="lg:text-lg break-words border-2">
          {description.substring(0, 70)}...
        </td>

        <td
          className="flex flex-col lg:flex-row gap-5 lg:gap-2 text-white 
      items-center justify-center py-5 md:py-3 lg:py-8  border-2 "
        >
          {/* delete btn */}
          <button
            onClick={() => handleDelete(_id)}
            className="bg-primary px-4 py-2 rounded-full lg:text-lg"
          >
            delete
          </button>
          {/* update btn */}
          <button
            onClick={handleUpdateClick}
            className="bg-primary px-4 py-2 rounded-full lg:text-lg"
          >
            update
          </button>
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
