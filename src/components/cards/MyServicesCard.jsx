/* eslint-disable react/prop-types */
// import React from 'react';

import { useState } from "react";
import Swal from "sweetalert2";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateServiceModal from "../../pages/MyServices/UpdateServiceModal";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

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
      <tr className=" ">
        <td className="border">
          <img
            className="h-10 w-10 object-cover rounded-full "
            src={serviceImage}
            alt=""
          />
        </td>
        <td className=" break-words border">
          {serviceTitle.substring(0, 20)}...
        </td>

        <td className=" text-blue-600 hover:underline break-words border">
          <a href={website}>{companyName.substring(0, 20)}...</a>
        </td>

        <td className=" border">{category}</td>

        <td className=" border">${price}</td>

        <td className=" break-words border">
          {description.substring(0, 70)}...
        </td>

        <td
          className="flex  gap-5 items-center justify-center">
          {/* delete btn */}
          <button
            onClick={() => handleDelete(_id)}
            className="  font-semibold
              py-2 rounded-full  text-xl xl:text-3xl"
          >
           <MdDelete />
          </button>
          {/* update btn */}
          <button
            onClick={handleUpdateClick}
            className=" font-semibold
              py-2 rounded-full text-xl xl:text-3xl"
          >
              <CiEdit />
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
