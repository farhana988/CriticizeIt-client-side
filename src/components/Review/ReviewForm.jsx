/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CiLocationArrow1 } from "react-icons/ci";
import { errorToast, successToast } from "../../utils/toast";

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
      errorToast("Missing Fields", "Please add review and rating");
      return;
    }
    if (!user) {
      errorToast("Login Required", "Please login to add a review");
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

      successToast("Review Added Successfully");

      onNewReview();
      setReviews([data, ...reviews]);
      setNewReview("");
      setRating(0);
    } catch {
      errorToast("Failed", "Something went wrong. Please try again!");
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
