// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import CountUp from "react-countup";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import NoData from "./NoData";

const ReviewCard = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews/${id}`
        );
        setReviews(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };

    fetchAllReviews();
  }, [id]);

  return (
    <div>
      <div className=" mx-6 lg:mx-14  lg:px-0">
        <Heading title={"All Reviews"} />

        {/* total reviews */}
        <p
          className="active text-primary text-2xl md:text-4xl lg:text-5xl 
      font-extrabold pb-6
      "
        >
          Total Reviews :{" "}
          <CountUp start={0} end={reviews.length} duration={3} separator="," />
        </p>

        {/* Reviews grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
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
                  className="flex flex-col bg-[#ffffff7a] shadow-xl shadow-primary
                 rounded-xl p-6 space-y-4 h-60
                 relative hover:shadow-2xl"
                >
                  <div
                    className="flex items-center space-x-4
                
                "
                  >
                    <img
                      src={review.userPhoto || "no photo"}
                      alt={review.userName}
                      className="w-10 md:w-12 lg:w-16  h-10 md:h-12 lg:h-16
                    rounded-full object-cover
                    ring-2 ring-offset-4 ring-primary"
                    />
                    <div className="">
                      {/* username */}
                      <div className="font-semibold text-xl break-words   ">
                        {review.userName?.slice(0, 20)}
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
                  <div
                    className="mt-3 flex flex-col justify-between flex-grow
                overflow-y-scroll"
                  >
                    <p className="text-gray-600 break-words">
                      {isExpanded
                        ? review.reviewText
                        : `${review.reviewText?.substring(0, 130)}...`}
                    </p>

                    {/* See More Button */}
                    <button
                      onClick={toggle}
                      className="text-primary hover:underline self-start"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  </div>

                  {/* Review Date */}
                  <p
                    className="text-lg  px-3 py-1 rounded-xl text-primary font-semibold absolute
                right-0 -top-4"
                  >
                    {new Date(review.addedDate).toLocaleDateString()}
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
