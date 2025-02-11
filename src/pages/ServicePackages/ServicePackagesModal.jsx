/* eslint-disable react/prop-types */

const ServicePackagesModal = ({ isOpen, closeModal, packageDetails }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    console.log("Booking Details:", {
      name,
      email,
      phone,
      address,
      packageDetails,
    });
    closeModal();
  };

  

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center 
    items-center z-50">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl lg:text-3xl font-semibold text-nav dark:text-ivory mb-4">
          Book {packageDetails.name}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Buttons  */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="px-3 py-1 rounded-xl 
             text-xs lg:text-lg font-semibold
              bg-red-400 text-black  hover:bg-red-700 hover:text-white"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary px-3 py-1 rounded-xl 
             text-xs lg:text-lg text-black font-semibold mt-auto"
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
