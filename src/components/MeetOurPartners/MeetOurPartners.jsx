import { FaLongArrowAltRight } from "react-icons/fa";
import Heading from "../shared/Heading";
import { useEffect, useState } from "react";
import "animate.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Partnercard from "../cards/Partnercard";

const MeetOurPartners = () => {
  const [partners, setPartners] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    fetch("./partners.json")
      .then((response) => response.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("Error fetching JSON:", error));
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

        {/* Partner cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {(isHomePage ? partners.slice(0, 4) : partners).map(
            (partner, index) => (
              <Partnercard key={index} partner={partner} />
            )
          )}
        </div>

        {/* Show More Button */}
        {isHomePage && (
          <>
            <div className="mt-5 lg:mt-8 mb-5 md:mb-2 lg:mb-0 flex justify-end">
              <button
                className="text-sm md:text-base lg:text-xl font-semibold text-black
            bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary  rounded-full
             transition-all flex items-center gap-1 md:gap-2 lg:gap-3 
            px-3 md:px-5  border-2 border-primary"
              >
                <Link className="flex items-center gap-2" to="/partners">
                  Peep In <FaLongArrowAltRight />
                </Link>
              </button>
            </div>

            {/* become a partner */}
            <div>
              <p className="text-sm md:text-lg xl:text-xl  mb-4">
                Want to partner with us and make a difference together?
              </p>
              <div
                className="btn text-sm xl:text-lg py-1
           px-6 rounded-full text-black
            bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary
          font-semibold shadow-lg 
          "
              >
                <Link to="/become-partner">Become a Partner</Link>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                >
                  <FaLongArrowAltRight />
                </motion.span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MeetOurPartners;
