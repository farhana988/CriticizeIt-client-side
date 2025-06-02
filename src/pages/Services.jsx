import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../components/shared/Heading";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import CountUp from "react-countup";
import Swal from "sweetalert2";
import ServiceCard from "../components/cards/ServiceCard";

const categoryOptions = [
  "Home Services",
  "Health and Wellness",
  "Education and Tutoring",
  "Business and Marketing",
  "Technology Services",
  "Travel and Transportation",
  "Pet Cares",
  "Event Planning",
  "Beauty and Personal Care",
  "Eco-Friendly Services",
  "Emergency Services",
];

const Services = () => {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/all-services?filter=${filter}&search=${search}&sort=${sort}`
        );
        setServices(data);
      } catch {
        Swal.fire("Error", "An error occurred", "error");
      }
    };

    fetchAllServices();
  }, [filter, search, sort]);

  // dynamic title
  const location = useLocation();
  if (location.pathname === "/services") {
    document.title = "CriticizeIt | Services";
  }

  return (
    <div className="container mx-auto py-10 min-h-screen">
      <Heading title={"All Services"} />

      {/* search and filter btns */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {/* filter */}
        <select
          name="category"
          id="category"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="border p-4 rounded-lg border-gray-300 bg-lCard dark:bg-dCard
            "
        >
          <option value="">Filter By Category</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* search */}
        <div
          className="flex justify-center relative 
        items-center "
        >
          <input
            className=" p-4 border border-gray-300 bg-lCard dark:bg-dCard lg:w-96
           rounded-lg pl-10 "
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by service title"
            aria-label="Enter Service Title"
          />

          <FaSearch
            className="absolute left-4  top-1/2 transform -translate-y-1/2
         text-gray-500  "
          />
        </div>

        {/* Sort */}
        <select
          placeholder="filter"
          name="sort"
          id="sort"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          className="border p-4 rounded-lg border-gray-300 bg-lCard dark:bg-dCard"
        >
          <option>Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* total services */}
      <p
        className="active text-primary  text-2xl md:text-4xl lg:text-5xl 
       font-extrabold px-5 my-6"
      >
        Total Services :{" "}
        <CountUp start={0} end={services.length} duration={3} separator="," />
      </p>

      {/* main card section */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6
        mx-5"
      >
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            showCategory={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
