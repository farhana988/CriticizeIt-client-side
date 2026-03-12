import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Heading from "../components/shared/Heading";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogCard from "../components/cards/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    fetch("./blogs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching the blog posts:", error));
  }, []);

  return (
    <div>
      <Heading
        title="Community & Blog"
        subtitle="Stay informed with our latest articles, updates, and inspiring stories from our community."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {(isHomePage ? blogs.slice(0, 5) : blogs).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {isHomePage && (
        <div className="mt-5 lg:mt-8 mb-5 md:mb-2 lg:mb-0 flex justify-end">
          <button
            className="text-sm md:text-base lg:text-xl font-semibold text-black
              bg-gradient-to-r from-primary via-secondary to-accent
              hover:from-primary hover:to-primary  rounded-full
              transition-all flex items-center gap-1 md:gap-2 lg:gap-3 
              px-3 md:px-5  border-2 border-primary"
          >
            <Link className="flex text-base items-center gap-2" to="/blogs">
              Peep In <FaLongArrowAltRight />
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
