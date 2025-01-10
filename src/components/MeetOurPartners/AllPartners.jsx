import Heading from "../shared/Heading";
import { useEffect, useState } from "react";
import "animate.css";
import Partnercard from "./Partnercard";

const AllPartners = () => {
      const [partners, setPartners] = useState([]);
    
      useEffect(() => {
        fetch('./partners.json')
          .then(response => response.json())
          .then(data => setPartners(data))
          .catch(error => console.error('Error fetching JSON:', error));
      }, []);
    return (
        <section className="relative pt-14">
      <div className="container mx-auto px-6 text-center">
        {/*  Title */}
        <Heading
          title={"Meet Our Partners"}
          subtitle={
            " We proudly collaborate with innovative partners who drive impactful solutions and services. Together, we achieve excellence."
          }
        ></Heading>

        {/* Partner card*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {partners.map((partner, index) => (
           <Partnercard  key={index} partner={partner}></Partnercard>
          ))}
        </div>

      

    
      </div>
    </section>
    );
};

export default AllPartners;