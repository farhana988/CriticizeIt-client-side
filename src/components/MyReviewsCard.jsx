/* eslint-disable react/prop-types */
import axios from "axios";
import Swal from "sweetalert2";
import UpdateReviewModal from "./UpdateReviewModal";
import { useState } from "react";

const MyReviewsCard = ({ review, setReviews }) => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded(!isExpanded);
  const {
    _id,
    reviewText,
    rating,
    serviceImage,
    companyName,
    website,
    category,
    serviceTitle,
    addedDate,
  } = review || {};

  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;

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
        await axios.delete(`${import.meta.env.VITE_API_URL}/review/${id}`);

        setReviews((prevReviews) =>
          prevReviews.filter((review) => review._id !== id)
        );

        Swal.fire("Deleted!", "Your review has been deleted.", "success");
      }
    } catch {
      Swal.fire(
        "Error",
        "An error occurred while deleting the review.",
        "error"
      );
    }
  };

  //  Update Button
  const handleUpdateClick = () => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl p-4 lg:p-8 space-y-4">
      <div className="flex gap-5  justify-between flex-row">
        <section className="flex lg:items-center gap-3 lg:gap-9  flex-col lg:flex-row">
          {/* Service Image */}
          <div className="w-60 h-28 md:w-96 md:h-52 rounded-xl ">
            <img
              src={serviceImage || "https://via.placeholder.com/300"}
              alt={serviceTitle}
              className="w-full h-full object-cover rounded-xl "
            />
          </div>

          {/* category & rating & date*/}
          <section className="space-y-2">
            {/* Category */}
            <p className="text-base lg:text-lg font-semibold text-gray-700">
              <span className="text-xl lg:text-2xl font-bold text-gray-900 ">
                Category:{" "}
              </span>
              {category}
            </p>

            {/* Rating */}
            <div className="flex items-center font-semibold text-sm lg:font-bold lg:text-lg">
              <span className="text-xl lg:text-2xl font-bold text-gray-900 mr-2">
                Rating:
              </span>
              {[...Array(validRating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 lg:w-7 lg:h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l-6.18 3.63 1.64-7.03L.46 6.93l7.19-.61L10 0l2.35 6.31 7.19.61-5.99 4.94 1.64 7.03L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>

            <div>
              {/* Review Date */}
              <p className="text-base lg:text-lg font-semibold text-gray-700">
                <span className="text-xl lg:text-2xl font-bold text-gray-900 ">
                  Review Date :{" "}
                </span>
                {new Date(addedDate).toLocaleDateString()}
              </p>
            </div>
          </section>
        </section>

        {/* Buttons */}
        <section>
          <div
            className="flex flex-col  md:flex-row
          gap-5   py-1 "
          >
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(_id)}
              className="px-3 py-1 rounded-xl bg-primary text-white lg:text-xl"
            >
              Delete
            </button>

            {/* Update Button */}
            <button
              onClick={handleUpdateClick}
              className="px-3 py-1 rounded-xl bg-primary text-white lg:text-xl"
            >
              Update
            </button>
          </div>
        </section>
      </div>

      {/* service info */}
      <section>
        {/* Service title */}
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 break-words">
          Service Title :
          <span className="text-base lg:text-lg font-semibold text-gray-700">
            {" "}
            {serviceTitle?.slice(0, 60)}
          </span>
        </h2>
        {/* Company name */}
        <p className="  my-3">
          <span className="text-xl lg:text-2xl  font-bold text-gray-900 ">
            Company Name:{" "}
          </span>
          <a
            className="text-blue-500 text-base lg:text-lg font-medium hover:underline break-words"
            href={website}
          >
            {companyName?.slice(0, 50)}
          </a>
        </p>
        {/* Review Text */}
      
         <div className="mt-3">
           <p className="text-base lg:text-lg font-semibold text-gray-500 break-words">
             <span className="text-xl lg:text-2xl font-bold text-gray-900 "> 
              Review : </span>
             {isExpanded
               ? reviewText
               : `${reviewText?.substring(0, 206)}...`}
           </p>
           <button
             onClick={toggle}
             className="text-primary hover:underline mt-2"
           >
             {isExpanded ? "Show Less" : "Read More"}
           </button>
         </div>


      </section>

      {/* Update Review Modal */}
      <UpdateReviewModal
        review={selectedReview}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setReviews={setReviews}
      />
    </div>
  );
};

export default MyReviewsCard;
