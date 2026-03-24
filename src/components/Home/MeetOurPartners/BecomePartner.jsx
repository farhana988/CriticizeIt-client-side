import { useState } from "react";
import Heading from "../../shared/Heading";
import TextAreaField from "../../shared/TextAreaField";
import InputField from "../../shared/InputField";
import { successToast } from "../../../utils/toast";

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

    successToast("Thank you for your interest! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Title */}
      <Heading
        title={" Become a Partner"}
        subtitle={
          " Join hands with us to create impactful solutions together. Fill out the form below to get started!"
        }
      ></Heading>

      {/* Form */}
      <div className="bg-lCard dark:bg-dCard shadow-md rounded-lg p-6 mx-auto max-w-3xl">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          {/* Email */}
          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />

          {/* Company */}
          <InputField
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name"
          />

          {/* Message */}
          <TextAreaField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your goals or any specific ideas..."
          />

          {/* Submit Button */}
          <div className="text-center flex justify-end">
            <button
              type="submit"
              className="px-3 md:px-6 py-1  text-black bg-gradient-to-r
                 from-primary via-secondary to-accent hover:from-primary
                  hover:to-primary rounded-full shadow-md font-semibold flex 
                  items-center justify-center gap-2
                  text-sm "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomePartner;
