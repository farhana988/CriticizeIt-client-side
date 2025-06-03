import { useState } from "react";

import Swal from "sweetalert2";
import Heading from "../../shared/Heading";

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Thank you for your interest!",
      text: "We will get in touch soon.",
      confirmButtonText: "OK",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="relative pt-14 min-h-screen">
      <div className="container mx-auto px-6 md:px-20 lg:px-12 text-center">
        {/* Title */}
        <Heading
          title={" Become a Partner"}
          subtitle={
            " Join hands with us to create impactful solutions together. Fill out the form below to get started!"
          }
        ></Heading>

        {/* Form */}
        <div className="bg-lCard dark:bg-dCard shadow-md rounded-lg p-6 lg:p-10 mx-auto max-w-3xl">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <label className="block text-left text-lg font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                bg-lCard dark:bg-dCard 
                focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-left text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                bg-lCard dark:bg-dCard 
                 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email address"
              />
            </div>

            {/* Company */}
            <div className="mb-6">
              <label className="block text-left text-lg font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                bg-lCard dark:bg-dCard 
                 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your company name"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-left text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                bg-lCard dark:bg-dCard 
                 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your goals or any specific ideas..."
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-3 md:px-6 py-1 md:py-2 text-black bg-gradient-to-r
                 from-primary via-secondary to-accent hover:from-primary
                  hover:to-primary rounded-full shadow-md font-semibold flex 
                  items-center justify-center gap-2
                  text-sm  lg:text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
