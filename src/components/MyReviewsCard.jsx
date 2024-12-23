/* eslint-disable react/prop-types */
import axios from "axios";
import Swal from "sweetalert2";
import UpdateReviewModal from "./UpdateReviewModal";
import { useState } from "react";

const MyReviewsCard = ({ review,  setReviews }) => {
   const [selectedReview, setSelectedReview] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);
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
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/review/${id}`
        );

         setReviews((prevReviews) => prevReviews.filter((review) => review._id !== id));

        Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
      }
    } catch{
      Swal.fire('Error', 'An error occurred while deleting the review.', 'error');
    }
  };

   //  Update Button
   const handleUpdateClick = () => {
    setSelectedReview(review); 
    setIsModalOpen(true); 
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 space-y-4">
      <div className="flex items-center space-x-4">
        {/* Service Image */}
        <div className="w-80 h-52 rounded-xl ml-6 border-2 border-red-700">
          <img
            src={serviceImage || "https://via.placeholder.com/300"}
            alt={serviceTitle}
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
          />
        </div>
        <div>
          {/* Service title */}
            <h2 className="text-xl font-bold text-gray-900 break-words">
              Service Title:
              <span className="text-base font-semibold text-gray-500">
                {" "}
                {serviceTitle}
              </span>
            </h2>
          {/* Category */}
          <p className="text-base font-semibold text-gray-700">
            <span className="text-xl font-bold text-gray-900 ">Category: </span>
            {category}
          </p>
          {/* Company name */}
          <p className="text-sm text-gray-500 mt-3">
            <span className="text-xl font-bold text-gray-900 ">
              Company Name:{" "}
            </span>
            <a
              className="text-blue-500 text-base font-medium hover:underline break-words"
              href={website}
            >
              {companyName}
            </a>
          </p>

          {/* Rating */}
          <div className="flex items-center font-semibold text-sm lg:font-bold lg:text-lg">
            <span className="mr-2">Rating:</span>
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
        </div>
      </div>

      <div>
        {/* Review Text */}
        <p className="text-gray-600">{reviewText}</p>

        {/* Review Date */}
        <p className="text-sm text-gray-500">
          {new Date(addedDate).toLocaleDateString()}
        </p>
      </div>

      {/* Buttons */}
      <div className="card-actions flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around gap-5 items-end pr-4 md:pr-0 lg:pr-0 py-2 md:py-6 lg:py-6">
        {/* Delete Button */}
        <button
          onClick={() => handleDelete(_id)}  
          className="btn bg-primary text-white lg:text-xl"
        >
          Delete 
        </button>

        {/* Update Button */}
        <button  onClick={handleUpdateClick} 
        className="btn bg-primary text-white lg:text-xl">
            Update
        </button>
      </div>
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
