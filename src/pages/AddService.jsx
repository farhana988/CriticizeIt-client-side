import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Heading from "../components/Heading";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);
 
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
      await axios.post(`${import.meta.env.VITE_API_URL}/add-service`, formData);
      form.reset();
     Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added Successfully",
              showConfirmButton: false,
              timer: 1500
            });
    
    } catch  {
       Swal.fire({
                icon: 'error',
                title: 'Service adding failed',
                text: 'Something went wrong. Please try again!',
                confirmButtonText: 'Try Again',
              });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" py-10 container mx-auto px-6 md:px-10">
      <Heading title={"  Add New Service"}></Heading>
      <section className="p-6 lg:p-10 rounded-xl bg-[#dce4c98f] shadow-2xl
      shadow-primary w-full">

        <form onSubmit={handleSubmit}
        className="space-y-4">

          <section className="grid gap-4 lg:gap-10 lg:grid-cols-2">
                {/* Service Image */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Service Image
                </label>
                <input
                type="url"
                id="service_image"
                name="service_image"
                placeholder={"service image URL"}
                className="w-full px-4 py-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md focus:outline-none focus:ring
                  focus:ring-blue-300"
                required
                />
            </div>

            {/* Service Title */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Service Title
                </label>
                <input
                type="text"
                id="service_title"
                name="service_title"
                placeholder={"service title"}
                className="w-full px-4 py-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md focus:outline-none focus:ring
                  focus:ring-blue-300"
                required
                />
            </div>
          </section>

        <section className="grid gap-4 lg:gap-10 lg:grid-cols-2">
            {/* Company Name */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Company Name
                </label>
                <input
                type="text"
                id="company_name"
                name="company_name"
                placeholder={'Company Name'}
                className="w-full px-4 py-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md focus:outline-none focus:ring
                  focus:ring-blue-300"
                required
                />
            </div>

            {/* Website */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Website
                </label>
                <input
                type="url"
                id="website"
                name="website"
                placeholder={'Website URL'}
                className="w-full px-4 py-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md focus:outline-none focus:ring
                  focus:ring-blue-300"
                />
            </div>
        </section>

        <section className="grid gap-4 lg:gap-10 lg:grid-cols-2">
             {/* Category */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Category
                </label>
                <select
                id="category"
                name="category"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
                >
                <option value="" disabled selected>Pick a category </option>
                <option value="Home Services">Home Services</option>
                <option value="Health and Wellness">Health and Wellness</option>
                <option value="Education and Tutoring">Education and Tutoring</option>
                <option value="Business and Marketing">Business and Marketing</option>
                <option value="Technology Services">Technology Services</option>
                <option value="Travel and Transportation">Travel and Transportation</option>
                <option value="Pet Cares">Pet Cares</option>
                <option value="Event Planning">Event Planning</option>
                <option value="Beauty and Personal Care">Beauty and Personal Care</option>
                <option value="Eco-Friendly Services">Eco-Friendly Services</option>
                <option value="Emergency Services">Emergency Services</option>

                </select>
            </div>

            {/* Price */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Price
                </label>
                <input
                type="number"
                id="price"
                name="price"
                placeholder={'price'}
                className="w-full px-4 py-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md focus:outline-none focus:ring
                  focus:ring-blue-300"
                required
                />
            </div>
        </section>

        <section className="grid gap-4 lg:gap-10 lg:grid-cols-2">
            {/* Added date */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Added Date
                </label>
                <input
                type="text"
                id="added_date"
                name="added_date"
                value={addedDate}
                disabled
              
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border
                 border-gray-200 rounded-md focus:outline-none"
                />
            </div>

            {/* Email  */}
            <div className="">
                <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={user?.email || ""}
                disabled
      
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 
                border border-gray-200 rounded-md focus:outline-none"
                />
            </div>
        </section>

          {/* Description */}
          <div className="">
            <label className="text-gray-900 md:text-xl font-semibold block mb-1" >
              Description
            </label>
            <textarea
              id="description"
              name="description"
             placeholder={'Short Description of the service'}
              rows="4"
              className="w-full px-4 py-2 text-gray-700 bg-white border
               border-gray-200 rounded-md focus:outline-none focus:ring
                focus:ring-blue-300 break-words"
              required
            ></textarea>
          </div>

         
          {/*  Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className={`px-6 py-2 text-white bg-primary rounded-md 
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
