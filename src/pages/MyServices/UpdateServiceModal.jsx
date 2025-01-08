/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const UpdateServiceModal = ({ service, isOpen, onClose, setServices }) => {
  const axiosSecure = useAxiosSecure()
  const [formData, setFormData] = useState({
    serviceImage: "",
    serviceTitle: "",
    companyName: "",
    website: "",
    description: "",
    category: "",
    price: "",
    addedDate: "", 
    userEmail: "",
  });

  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    if (service) {
      setFormData({
        serviceImage: service.serviceImage || "",
        serviceTitle: service.serviceTitle || "",
        companyName: service.companyName || "",
        website: service.website || "",
        description: service.description || "",
        category: service.category || "",
        price: service.price || "",
        addedDate: new Date().toISOString().split("T")[0], 
        userEmail: service.userEmail || "",
      });
    }
  }, [service]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosSecure.put(
        `/update-service/${service._id}`,
        formData
      );

      if (response.data) {
        setServices((prevServices) =>
          prevServices.map((s) =>
            s._id === service._id ? { ...s, ...formData } : s
          )
        );
        Swal.fire("Success!", "Service updated successfully.", "success");
        onClose(); 
      }
    } catch {
      Swal.fire("Error", "Failed to update service.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center 
    justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg w-11/12 lg:w-9/12
      h-5/6 md:h-4/5 lg:h-3/5 overflow-y-scroll   ">
        <h2 className="text-primary font-semibold mb-6 text-center
        text-4xl  lg:text-7xl active">
          Update Service</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="grid gap-4 lg:gap-10 md:grid-cols-2">
            {/* Service Image */}
            <div>
              <label className="text-gray-900 font-semibold mb-32">
                Service Image
              </label>
              <input
                type="url"
                name="serviceImage"
                value={formData.serviceImage}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 rounded-md w-full"
                placeholder="Service Image URL"
                required
              />
            </div>

            {/* Service Title */}
            <div>
              <label className="text-gray-900 font-semibold">
                Service Title
              </label>
              <input
                type="text"
                name="serviceTitle"
                value={formData.serviceTitle}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 rounded-md w-full"
                required
              />
            </div>
          </section>

          <section className="grid gap-4 lg:gap-10 md:grid-cols-2">
            {/* Company Name */}
            <div>
              <label className="text-gray-900 font-semibold">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 rounded-md w-full"
                required
              />
            </div>

            {/* Website */}
            <div>
              <label className="text-gray-900 font-semibold">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 rounded-md w-full"
                placeholder="Website URL"
              />
            </div>
          </section>

          <section className="grid gap-4 lg:gap-10 md:grid-cols-2">
            {/* Category */}
            <div>
              <label className="text-gray-900 font-semibold">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 rounded-md w-full"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
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
                <option value="Eco-Friendly Services">
                  Eco-Friendly Services
                </option>
                <option value="Emergency Services">Emergency Services</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="text-gray-900 font-semibold">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 rounded-md w-full"
                required
              />
            </div>
          </section>

          <section className="grid gap-4 lg:gap-10 md:grid-cols-2">
            {/* Updated Date */}
            <div>
              <label className="text-gray-900 font-semibold">
                Updated Date
              </label>
              <input
                type="date"
                name="addedDate"
                value={formData.addedDate} 
                disabled
                className="px-4 py-2 border border-gray-200 rounded-md w-full bg-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-900 font-semibold">Email</label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                disabled
                className="px-4 py-2 border border-gray-200 rounded-md w-full bg-gray-100"
              />
            </div>
          </section>

          {/* Description */}
          <div>
            <label className="text-gray-900 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-200 rounded-md w-full"
              rows="4"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="submit"
              className={`px-6 py-2 text-white bg-primary rounded-md ${
                loading ? "cursor-not-allowed opacity-50" : "hover:bg-primary"
              }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Service"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateServiceModal;
