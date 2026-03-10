import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
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
          }/all-services?filter=${filter}&search=${search}&sort=${sort}`,
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
    <div>
      {/* search and filter btns */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
        {/* search */}
        <div
          className="flex justify-center relative 
        items-center w-full"
        >
          <input
            className="px-4 py-1 border border-gray-300 bg-lCard dark:bg-dCard
             w-full rounded-lg pl-10 "
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

        {/* filter */}
        <select
          name="category"
          id="category"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="w-full md:w-80 border px-4 py-1 rounded-lg border-gray-300 bg-lCard dark:bg-dCard
            "
        >
          <option value="">Filter By Category</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          placeholder="filter"
          name="sort"
          id="sort"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          className="w-full md:w-60 border px-4 py-1 rounded-lg border-gray-300 bg-lCard dark:bg-dCard"
        >
          <option>Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* main card section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
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
