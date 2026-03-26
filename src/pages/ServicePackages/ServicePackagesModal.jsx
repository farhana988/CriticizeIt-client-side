/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import InputField from "../../components/shared/InputField";
import TextAreaField from "../../components/shared/TextAreaField";
import { RxCross2 } from "react-icons/rx";
import { successToast } from "../../utils/toast";

const ServicePackagesModal = ({ isOpen, closeModal, packageDetails }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const email = form.email.value;
    // const name = form.name.value;
    // const phone = form.phone.value;
    // const address = form.address.value;

    Swal.fire({
      title: "Confirm Booking",
      text: `Are you sure you want to book the service?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        closeModal();
        successToast("Booking Confirmed!");
      } else {
        closeModal();
      }
    });
  };
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center 
    items-center z-50"
    >
      <div
        className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg w-11/12 md:w-1/2
      xl:w-4/12 relative"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-500"
        >
          <RxCross2 />
        </button>
        <h2 className="text-2xl font-semibold text-nav dark:text-ivory mb-4">
          Book {packageDetails.name}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <InputField
            label="Name"
            name="name"
            value={user?.displayName}
            readOnly
          />

          {/* Email */}
          <InputField
            label="Email"
            type="email"
            name="email"
            value={user?.email}
            readOnly
          />

          {/* Phone */}
          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />

          {/* Address */}
          <TextAreaField
            label="Address"
            name="address"
            placeholder="Enter your address"
            rows={3}
          />

          {/* Buttons  */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary px-3 py-1 rounded-md 
             text-sm text-black font-semibold mt-auto"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicePackagesModal;
