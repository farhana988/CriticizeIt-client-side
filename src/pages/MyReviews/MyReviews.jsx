// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Heading from "../../components/shared/Heading";
import MyReviewsCard from "./MyReviewsCard";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import NoData from "../../components/shared/NoData";

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
    <div className="pt-10  container mx-auto min-h-screen">
      <Heading title={"My reviews"}></Heading>

      {reviews.length === 0 ? (
        <NoData
          title={"No reviews found."}
          subtitle="Start adding some reviews to your list!"
        ></NoData>
      ) : (
        <div
          className="grid grid-cols-1 gap-6
                mx-5 "
        >
          {reviews.map((review) => (
            <MyReviewsCard
              key={review._id}
              review={review}
              setReviews={setReviews}
            ></MyReviewsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
