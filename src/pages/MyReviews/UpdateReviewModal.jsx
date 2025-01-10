/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const UpdateReviewModal = ({ review, isOpen, onClose, setReviews }) => {
  const axiosSecure = useAxiosSecure()
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
        formData
      );

      if (response.data) {
        setReviews((prevReviews) =>
          prevReviews.map((rev) =>
            rev._id === review._id ? { ...rev, ...formData } : rev
          )
        );
        Swal.fire("Success!", "Review updated successfully.", "success");
        onClose(); 
      }
    } catch  {
      Swal.fire("Error", "Failed to update review.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1f1e1e] p-6 rounded-lg w-11/12 md:w-9/12 lg:w-7/12 
      h-5/6 md:h-3/5 lg:h-3/6 overflow-y-scroll">
        <h2 className="  text-5xl  lg:text-8xl 
        text-center text-primary dark:text-ivory active font-semibold mb-6">
          Update Review</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="grid gap-5 lg:gap-10 md:grid-cols-2">
            {/* Service Title */}
            <div>
              <label className="label text-xl font-semibold">
                Service Title</label>
              <input
                type="text"
                name="serviceTitle"
                value={review.serviceTitle || ""}
                readOnly
                className="input input-bordered border-gray-200 rounded-md w-full
                 bg-gray-100 dark:bg-dCard"
              />
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className=" text-xl font-semibold">Rating</span>
              </label>

              <div className="rating-container flex justify-between input input-bordered
              dark:bg-dCard">
                <Rating
                  onClick={handleRating}
                  ratingValue={formData.rating}
                  emptySymbol="far fa-star text-gray-300"
                  fullSymbol="fas fa-star text-yellow-400"
                  className="text-xl "
                  placeholder="rating"
                  required
                />

                <div name="rating" className="p-3">
                  {formData.rating} 
                </div>
              </div>
            </div>
          </section>

          {/* Review Text */}
          <div>
            <label className="label text-lg font-semibold">
              Review Text</label>
            <textarea
              name="reviewText"
              value={formData.reviewText}
              onChange={handleChange}
              className="px-4 py-2 border dark:bg-dCard border-gray-200 rounded-md w-full"
            
              required
            />
          </div>

          <section className="grid gap-5 md:gap-10 md:grid-cols-2 ">
            {/* Added Date */}
            <div>
              <label className="label  text-xl font-semibold">
                Added Date</label>
              <input
                type="date"
                name="addedDate"
                value={formData.addedDate} 
                disabled
                className="px-4 py-2 border border-gray-200 rounded-md w-full
                 bg-gray-100 dark:bg-dCard"
              />
            </div>

           {/* Buttons */}
           <div className="flex justify-end gap-4  md:mt-10">
            <button
              type="submit"
              className={`px-3 lg:px-6 py-1 
                bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary text-black  font-semibold 
             text-sm lg:text-lg rounded-md ${
                loading ? "cursor-not-allowed opacity-50" : "hover:bg-primary"
              }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Review"}
            </button>
          </div>
          </section>

         
        </form>
      </div>
    </div>
  );
};

export default UpdateReviewModal;
