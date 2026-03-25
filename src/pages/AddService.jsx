import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Heading from "../components/shared/Heading";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { errorToast, successToast } from "../utils/toast";
import InputField from "../components/shared/InputField";
import TextAreaField from "../components/shared/TextAreaField";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const addedDate = new Date().toLocaleDateString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const serviceImage = form.service_image.value;
    const serviceTitle = form.service_title.value;
    const companyName = form.company_name.value;
    const website = form.website.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const userEmail = user?.email;

    const formData = {
      serviceImage,
      serviceTitle,
      companyName,
      website,
      description,
      category,
      price,
      addedDate,
      userEmail,
    };

    try {
      await axiosSecure.post(`/add-service`, formData);
      form.reset();
      successToast("Service Added Successfully");
    } catch {
      errorToast(
        "Service Adding Failed",
        "Something went wrong. Please try again!",
      );
    } finally {
      setLoading(false);
    }
  };

  // dynamic title
  const location = useLocation();
  if (location.pathname === "/addService") {
    document.title = "CriticizeIt | Add Service";
  }

  return (
    <div className="">
      <Heading title={"  Add New Service"}></Heading>
      <section
        className="rounded bg-[#dce4c98f] dark:bg-dCard shadow-md p-4
      shadow-primary w-full"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <section className="grid gap-6 lg:grid-cols-2">
            {/* Service Image */}
            <InputField
              label="Service Image"
              type="url"
              name="service_image"
              placeholder="Service image URL"
            />

            {/* Service Title */}
            <InputField
              label="Service Title"
              name="service_title"
              placeholder="Service title"
            />
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            {/* Company Name */}
            <InputField
              label="Company Name"
              name="company_name"
              placeholder="Company Name"
            />

            {/* Website */}
            <InputField
              label="Website"
              type="url"
              name="website"
              placeholder="Website URL"
            />
          </section>

          <section className="grid gap-4 lg:gap-10 lg:grid-cols-2">
            {/* Category */}
            <div className="">
              <label className="font-semibold block mb-1">Category</label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-2 bg-ivory dark:bg-[#212121] border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-primary"
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
              placeholder="Price"
            />
          </section>

          {/* Description */}
          <TextAreaField
            label="Description"
            name="description"
            placeholder="Short Description of the service"
          />

          {/*  Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className={`px-6 py-0.5 bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary
                 text-black  rounded-md font-semibold
                focus:outline-none focus:ring ${
                  loading ? "cursor-not-allowed opacity-50" : "hover:bg-primary"
                }`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Add Service"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddService;
