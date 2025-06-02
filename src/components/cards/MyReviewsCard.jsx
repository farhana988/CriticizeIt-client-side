/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateReviewModal from "../../pages/MyReviews/UpdateReviewModal";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const MyReviewsCard = ({ review, setReviews }) => {
  const axiosSecure = useAxiosSecure();
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded(!isExpanded);
  const { _id, reviewText, rating, serviceImage, serviceTitle, addedDate } =
    review || {};

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
        await axiosSecure.delete(`/review/${id}`);

        setReviews((prevReviews) =>
          prevReviews.filter((review) => review._id !== id)
        );

        Swal.fire("Deleted!", "Your review has been deleted.", "success");
      }
    } catch {
      Swal.fire(
        "Error",
        "An error occurred while deleting the review.",
        "error"
      );
    }
  };

  //  Update Button
  const handleUpdateClick = () => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  return (
    <div
      className="flex flex-col bg-[#dce4c98f] dark:bg-dCard shadow-lg hover:shadow-xl
     shadow-primary rounded-xl p-4 lg:p-8 space-y-4"
    >
      <div className="flex gap-5  justify-between flex-row">
        <section
          className="flex lg:items-center gap-3 lg:gap-9  flex-row 
        
        "
        >
          {/* Service Image */}
          <div className="rounded-full">
            <img
              src={serviceImage || "https://via.placeholder.com/300"}
              alt={serviceTitle}
              className="w-20 h-20 md:w-32 lg:w-40 lg:h-24 object-cover rounded-full md:rounded-xl "
            />
          </div>

          {/* card content */}
          <section className=" flex-1">
            {/* Service title */}
            <h2 className="text-lg lg:text-2xl font-bold  break-words">
              {serviceTitle?.slice(0, 20)}
            </h2>

            {/* Rating */}
            <div className="flex items-center font-semibold text-sm lg:font-bold lg:text-lg">
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
            {/* Review Date */}

            <p className="text-sm lg:text-lg font-semibold ">
              {new Date(addedDate).toLocaleDateString()}
            </p>
          </section>
          {/* Buttons */}
          <section className="absolute right-10 lg:right-32 flex flex-col">
            <div
              className="flex flex-col  
          gap-5   py-1 "
            >
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(_id)}
                className="  font-semibold md:text-xl lg:text-3xl"
              >
              <MdDelete />
              </button>

              {/* Update Button */}
              <button
                onClick={handleUpdateClick}
                className=" font-semibold md:text-xl lg:text-3xl"
              >
                <CiEdit />
              </button>
            </div>
          </section>
        </section>
      </div>
      {/* Review Text */}

      <div className="mt-3  mr-10">
        <p className="text-xs lg:text-base font-semibold  break-words">
          {isExpanded ? reviewText : `${reviewText?.substring(0, 206)}...`}
        </p>
        <button onClick={toggle} 
        className="border px-3 rounded-full text-xs lg:text-base  mt-2">
          {isExpanded ? "Show Less" : "Read More"}
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
