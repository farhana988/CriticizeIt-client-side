/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import NoData from "../shared/NoData";

const ReviewCard = ({ triggerFetch }) => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews/${id}`,
        );
        setReviews(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };

    fetchAllReviews();
  }, [id, triggerFetch]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {/* Reviews grid */}
      <div
        className="space-y-3
     "
      >
        {reviews.length === 0 ? (
          <NoData title={"No reviews found."}></NoData>
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
                className="flex flex-col bg-lCard dark:bg-dCard rounded-md p-2 space-y-2 relative "
              >
                <div className="flex items-center space-x-3">
                  <img
                    referrerPolicy="no-referrer"
                    src={review.userPhoto || "no photo"}
                    alt={review.userName}
                    className="w-8 h-8 rounded-full object-cover"
                  />

                  {/* username */}
                  <div className="font-semibold break-words">
                    {review.userName}
                  </div>
                </div>

                <div className="space-y-0.5">
                  {/* Review Text */}
                  <p className="break-words text-xs">{review.reviewText}</p>
                  {/* Review Date */}
                  <p className="text-[10px] text-primary dark:text-ivory">
                    {formatDate(review.addedDate)}
                  </p>
                </div>

                {/* Rating */}
                <div
                  className="flex items-center font-semibold text-xs
                        md:text-sm lg:font-bold xl:text-lg absolute right-2 top-0"
                >
                  {[...Array(validRating)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4  xl:w-7 xl:h-7 text-yellow-400"
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
            );
          })
        )}
      </div>
    </>
  );
};

export default ReviewCard;
