/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CiLocationArrow1 } from "react-icons/ci";

const UpdateReviewModal = ({ review, isOpen, onClose, setReviews }) => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    reviewText: "",
    rating: 0,
    addedDate: "",
    userEmail: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (review) {
      setFormData({
        reviewText: review.reviewText || "",
        rating: review.rating || 0,
        addedDate: new Date().toISOString().split("T")[0],
        userEmail: review.userEmail || "",
      });
    }
  }, [review]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (value) => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosSecure.put(
        `/update-review/${review._id}`,
        formData,
      );

      if (response.data) {
        setReviews((prevReviews) =>
          prevReviews.map((rev) =>
            rev._id === review._id ? { ...rev, ...formData } : rev,
          ),
        );
        Swal.fire("Success!", "Review updated successfully.", "success");
        onClose();
      }
    } catch {
      Swal.fire("Error", "Failed to update review.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white dark:bg-[#1f1e1e] p-4 rounded-lg w-11/12 md:w-9/12 lg:w-7/12 
        2xl:w-1/3 overflow-y-scroll relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h2
          className="text-4xl 
        text-center text-primary dark:text-ivory active font-semibold mb-6"
        >
          Update Review
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <section className="grid gap-5 md:grid-cols-2 mb-8">
            {/* Service Title */}
            <div>
              <label className="label font-semibold">Service Title</label>
              <input
                type="text"
                name="serviceTitle"
                value={review.serviceTitle || ""}
                readOnly
                className="input input-bordered border-gray-200 rounded-md w-full
                 bg-gray-100 dark:bg-dCard"
              />
            </div>
            {/* Added Date */}
            <div>
              <label className="label  font-semibold">Added Date</label>
              <input
                type="date"
                name="addedDate"
                value={formData.addedDate}
                disabled
                className="px-4 py-2 border border-gray-200 rounded-md w-full
                 bg-gray-100 dark:bg-dCard"
              />
            </div>
          </section>

          <section className="relative">
            {/* Add Review */}
            <div>
              <h4 className=" font-semibold my-2">Update Review</h4>
              <div className="relative">
                <textarea
                  className="w-full p-2 pr-10 rounded-md mb-4 dark:bg-dCard h-10 text-sm"
                  placeholder="Share your experience or provide a helpful tip for others!"
                  name="reviewText"
                  value={formData.reviewText}
                  onChange={handleChange}
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
                ratingValue={formData.rating}
                type="text"
                size={20}
                placeholder="rating "
                required
              />
            </div>
          </section>

          {/* Buttons */}
          <div className="flex justify-end gap-4  md:mt-10">
            <button
              type="submit"
              className={`px-6 py-0.5
                bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary text-black  font-semibold 
             rounded-md ${
               loading ? "cursor-not-allowed opacity-50" : "hover:bg-primary"
             }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReviewModal;
