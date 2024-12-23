// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "./Heading";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews`
        );
        setReviews(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchAllReviews();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <Heading title={"All Reviews"} />

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No reviews available yet.
            </p>
          ) : (
            reviews.map((review) => {
              const validRating =
                review.rating &&
                typeof review.rating === "number" &&
                !isNaN(review.rating)
                  ? Math.floor(review.rating)
                  : 0;

              return (
                <div
                  key={review._id}
                  className="flex flex-col bg-white shadow-md rounded-lg p-4 space-y-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={review.userPhoto || "https://via.placeholder.com/40"}
                      alt={review.userName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-lg">
                        {review.userName}
                      </div>
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
                  <p className="text-gray-600">{review.reviewText}</p>

                  {/* Review Date */}
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
