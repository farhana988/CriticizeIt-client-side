

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";
import Heading from "../../components/shared/Heading";
import ReviewForm from "../../components/Review/ReviewForm";
import Swal from "sweetalert2";
import ReviewCard from "../../components/cards/ReviewCard";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchAllDetails = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/serviceDetails/${id}`
        );
        setDetails(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };

    fetchAllDetails();
  }, [id]);

  // dynamic title
  const location = useLocation();
  if (location.pathname === `/serviceDetails/${id}`) {
    document.title = "CriticizeIt | Service Details";
  }

  // fetch new review
  const handleNewReview = () => {
    setTriggerFetch((prev) => !prev);
  };

  return (
    <div className="pt-20 min-h-screen">
      <Heading title={"Service Details & Review"}></Heading>

      <section
        className="grid grid-cols-1 lg:grid-cols-2  rounded-xl
      "
      >
        {/* details card */}
        <ServiceDetailsCard details={details}></ServiceDetailsCard>

        {/* review form  */}
        <div className="">
          <h2 className="text-center active text-primary text-5xl font-extrabold pb-4 pt-8 lg:pt-0">
           Add Review 
          </h2>
          <ReviewForm
            details={details}
            onNewReview={handleNewReview}
          ></ReviewForm>
        </div>
      </section>

      {/* review card */}
      <ReviewCard triggerFetch={triggerFetch}></ReviewCard>

      {/* review section */}
    </div>
  );
};

export default ServiceDetails;
