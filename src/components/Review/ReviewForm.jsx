/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CiLocationArrow1 } from "react-icons/ci";

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
    <div className="mt-6">
      {/* review section */}
      <form onSubmit={handleReviewSubmit}>
        <section className="relative">
          {/* Add Review */}
          <div>
            <h4 className=" font-semibold my-2">Leave a Review</h4>
            <div className="relative">
              <textarea
                className="w-full p-2 pr-10 rounded-md mb-4 dark:bg-dCard h-10 text-sm"
                placeholder="Share your experience or provide a helpful tip for others!"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                required
              ></textarea>

              {/* btn */}
              <button
                type="submit"
                className="absolute right-2 bottom-7 bg-black/40 p-1 rounded-full text-xl"
              >
                <CiLocationArrow1 />
              </button>
            </div>
          </div>
          {/* rating */}
          <div className="form-control absolute top-0 right-0">
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              type="text"
              size={20}
              placeholder="rating "
              required
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default ReviewForm;
