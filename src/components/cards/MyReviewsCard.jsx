/* eslint-disable react/prop-types */

import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateReviewModal from "../../pages/MyReviews/UpdateReviewModal";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { confirmDialog, errorToast, successToast } from "../../utils/toast";

const MyReviewsCard = ({ review, setReviews }) => {
  const axiosSecure = useAxiosSecure();
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { _id, reviewText, rating, serviceImage, serviceTitle, addedDate } =
    review || {};

  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;

  // Delete function
  const handleDelete = async (id) => {
    try {
      const confirmed = await confirmDialog(
        "Delete Review?",
        "You won't be able to revert this!",
      );

      if (!confirmed) return;
      await axiosSecure.delete(`/review/${id}`);

      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== id),
      );

      successToast("Review deleted successfully");
    } catch {
      errorToast(
        "Delete Failed",
        "An error occurred while deleting the review.",
      );
    }
  };

  //  Update Button
  const handleUpdateClick = () => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  return (
    <>
      <tr className="bg-[#ffffffb4] dark:bg-dCard ">
        <td className="border border-gray-300 p-1">
          <img
            src={serviceImage}
            alt={serviceTitle}
            className="h-10 w-10 object-cover rounded"
          />
        </td>

        <td className="border border-gray-300 p-1 font-semibold">
          {serviceTitle}
        </td>

        <td className="border border-gray-300 p-1">
          {[...Array(validRating)].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </td>

        <td className="border border-gray-300 p-1 max-w-xs">
          {reviewText?.substring(0, 120)}...
        </td>

        <td className="border border-gray-300 p-1">
          {new Date(addedDate).toLocaleDateString()}
        </td>

        <td className=" border-gray-300 py-3 flex gap-6 justify-center text-xl">
          <button onClick={() => handleDelete(_id)}>
            <MdDelete />
          </button>

          <button onClick={handleUpdateClick}>
            <CiEdit />
          </button>
        </td>
      </tr>

      <UpdateReviewModal
        review={selectedReview}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setReviews={setReviews}
      />
    </>
  );
};

export default MyReviewsCard;
