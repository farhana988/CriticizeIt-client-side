/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ReviewForm = ({ details, onNewReview }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const addedDate = new Date().toLocaleDateString();

  const {
    serviceImage,
    serviceTitle,
    companyName,
    website,

    category,
  } = details || {};

  // rating
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!newReview || rating === 0) {
      Swal.fire({
        position: "top-end",
        width: 220,
        color: "#d82222",
        title: "rating field  is empty",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    if (!user) {
      Swal.fire({
        position: "top-end",
        width: 250,
        color: "#d82222",
        title: "please login to review",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/login");
      return;
    }

    try {
      const reviewData = {
        userEmail: user.email,
        userName: user.displayName,
        userPhoto: user.photoURL,
        reviewText: newReview,
        rating: rating,
        serviceId: id,
        addedDate,
        serviceImage,
        serviceTitle,
        companyName,
        website,

        category,
      };

      const { data } = await axiosSecure.post(`/add-review`, reviewData);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Review Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      onNewReview();
      setReviews([data, ...reviews]);
      setNewReview("");
      setRating(0);
    } catch {
      Swal.fire({
        icon: "error",
        text: "Something went wrong. Please try again!",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="">
      {/* review section */}
      <form onSubmit={handleReviewSubmit} className=" px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          {/* Added date */}
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold ">
                Review Added Date{" "}
              </span>
            </label>
            <input
              type="text"
              id="added_date"
              name="added_date"
              value={addedDate}
              readOnly
              className="input input-bordered   bg-gray-100 dark:bg-dCard border
                 border-gray-200 rounded-md focus:outline-none"
            />
          </div>

          {/* rating */}
          <div className="form-control">
            <label className="label">
              <span className={`text-xl font-semibold `}>
                Rating{" "}
              </span>
            </label>

            <div
              className={`rating-container flex justify-between input input-bordered
                dark:bg-dCard
                 `}
            >
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                type="text"
                placeholder="rating "
                required
              />

              <div name="rating" className="p-3">
                {rating}
              </div>
            </div>
          </div>
        </section>

        {/* Add Review */}

        <div>
          <h4 className="text-xl font-semibold my-2">Add a Review</h4>

          <textarea
            className="w-full p-4 border rounded-lg mb-4 dark:bg-dCard"
            placeholder="Write your review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            required
          ></textarea>
        </div>

        {/* btn */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-3 py-2 lg:px-5 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary text-sm lg:text-lg
                 text-black font-semibold
             shadow-md hover:bg-indigo-500"
          >
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
