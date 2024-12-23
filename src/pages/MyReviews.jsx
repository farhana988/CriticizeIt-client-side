// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Heading from "../components/Heading";
import { TfiFaceSad } from "react-icons/tfi";
import MyReviewsCard from "../components/MyReviewsCard";

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
      const fetchAllReviews = async () => {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/myReviews/${user?.email}`
          );
          console.log(data);
          setReviews(data);
        } catch {
          console.log("first");
        }
      };
      fetchAllReviews();
    }, [user]);
    return (
        <div className="pt-10  container mx-auto min-h-screen">
        <Heading
        title={'My reviews'}></Heading>
    
      {reviews.length === 0 ? (
        <div
          className="flex flex-col justify-center items-center gap-5 my-40 active
            text-xl md:text-2xl lg:text-4xl font-bold"
        >
          <TfiFaceSad className="text-9xl " />
          <p className="opacity-50">No reviews found.</p>
          <p className="opacity-50">Start adding some reviews to your list!</p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                mx-5 mt-10"
        >
          {reviews.map((review) => (
            <MyReviewsCard
              key={review._id}
              review={review}
            ></MyReviewsCard>
          ))}
        </div>
      )}
    </div>
    );
};

export default MyReviews;