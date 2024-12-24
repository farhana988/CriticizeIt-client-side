// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Heading from "../components/Heading";
import { TfiFaceSad } from "react-icons/tfi";
import MyReviewsCard from "../components/MyReviewsCard";
import { useLocation } from "react-router-dom";

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
      const fetchAllReviews = async () => {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/myReviews/${user?.email}`
          );
          setReviews(data);
        } catch {
          console.log("first");
        }
      };
      fetchAllReviews();
    }, [user]);

      // dynamic title
  const location =useLocation()
  if(location.pathname==='/myReviews')
        
      { document.title= 'CriticizeIt | My Reviews' }

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