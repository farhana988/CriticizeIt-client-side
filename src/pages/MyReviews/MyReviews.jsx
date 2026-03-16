import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Heading from "../../components/shared/Heading";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import NoData from "../../components/shared/NoData";
import MyReviewsCard from "../../components/cards/MyReviewsCard";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const { data } = await axiosSecure.get(`/myReviews/${user?.email}`);
        setReviews(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };
    fetchAllReviews();
  }, [axiosSecure, user]);

  // dynamic title
  const location = useLocation();
  if (location.pathname === "/myReviews") {
    document.title = "CriticizeIt | My Reviews";
  }

  return (
    <div className=" min-h-screen">
      <Heading title={"My reviews"}></Heading>

      {reviews.length === 0 ? (
        <NoData
          title={"No reviews found."}
          subtitle="Start adding some reviews to your list!"
        ></NoData>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 border-collapse">
            <thead className="bg-gray-200 dark:bg-gray-700 text-left">
              <tr>
                <th className="border border-gray-300 p-1">Image</th>
                <th className="border border-gray-300 p-1">Service</th>
                <th className="border border-gray-300 p-1">Rating</th>
                <th className="border border-gray-300 p-1">Review</th>
                <th className="border border-gray-300 p-1">Date</th>
                <th className="border border-gray-300 p-1 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((review) => (
                <MyReviewsCard
                  key={review._id}
                  review={review}
                  setReviews={setReviews}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
