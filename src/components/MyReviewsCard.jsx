/* eslint-disable react/prop-types */
// import React from 'react';



const MyReviewsCard = ({ review }) => {
  const {
    // userEmail,
    userName,
    userPhoto,
    reviewText,
    rating,
    // serviceId,
    addedDate,
  } = review || {};
  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={userPhoto || "https://via.placeholder.com/40"}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-lg">{userName}</div>
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

      {/* Review Text */}
      <p className="text-gray-600">{reviewText}</p>

      {/* Review Date */}
      <p className="text-sm text-gray-500">
        {new Date(addedDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default MyReviewsCard;
