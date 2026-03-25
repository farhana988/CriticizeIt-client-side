/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { errorToast, successToast } from "../../utils/toast";
import InputField from "../../components/shared/InputField";
import TextAreaField from "../../components/shared/TextAreaField";

const UpdateServiceModal = ({ service, isOpen, onClose, setServices }) => {
  const axiosSecure = useAxiosSecure();
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
        formData,
      );

      if (response.data) {
        setServices((prevServices) =>
          prevServices.map((s) =>
            s._id === service._id ? { ...s, ...formData } : s,
          ),
        );
        successToast("Service updated successfully");
        onClose();
      }
    } catch {
      errorToast("Update Failed", "Failed to update service.");
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
      <div
        className="bg-white dark:bg-[#1f1e1e] p-6 rounded-lg w-11/12 lg:w-9/12
      2xl:w-1/3  overflow-y-scroll relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h2
          className="text-primary dark:text-ivory font-semibold mb-6 text-center
        text-4xl  active"
        >
          Update Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="grid gap-6 md:grid-cols-2">
            <InputField
              label="Service Image"
              type="url"
              name="serviceImage"
              value={formData.serviceImage}
              onChange={handleChange}
              placeholder="Service Image URL"
            />

            <InputField
              label="Service Title"
              name="serviceTitle"
              value={formData.serviceTitle}
              onChange={handleChange}
            />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <InputField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />

            <InputField
              label="Website"
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website URL"
            />
          </section>
          <section className="grid gap-4 lg:gap-10 md:grid-cols-2">
            {/* Category */}
            <div>
              <label className=" font-semibold">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-200 dark:bg-dCard rounded-md w-full"
                required
              >
                <option value="" disabled selected>
                  Pick a category{" "}
                </option>
                {[
                  "Home Services",
                  "Health and Wellness",
                  "Education and Tutoring",
                  "Business and Marketing",
                  "Technology Services",
                  "Travel and Transportation",
                  "Pet Cares",
                  "Event Planning",
                  "Beauty and Personal Care",
                  "Eco-Friendly Services",
                  "Emergency Services",
                ].map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <InputField
              label="Price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </section>

          {/* Description */}
          <TextAreaField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="submit"
              className={`px-6 py-0.5 bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary text-black  font-semibold 
              rounded-md ${
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
