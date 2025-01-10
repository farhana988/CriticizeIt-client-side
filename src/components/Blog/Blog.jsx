import { useEffect, useState } from "react";
import Heading from "../shared/Heading";
import {  FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

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
    <div className="pt-10 container mx-auto px-6">
      <Heading
        title="Community & Blog"
        subtitle="Stay informed with our latest articles, updates, and inspiring stories from our community."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {blogs.slice(0, 4).map((post) => (
         <BlogCard  key={post.id} post={post}></BlogCard>
        ))}
      </div>

      <div className="mt-5 lg:mt-8 mb-5 md:mb-2 lg:mb-0 flex justify-end">
        <button
        
          className="text-sm md:text-base lg:text-xl font-semibold text-black
            bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary  rounded-full
             transition-all flex items-center gap-1 md:gap-2 lg:gap-3 
            px-3 md:px-5  border-2 border-primary"
        >
           <Link className="flex items-center gap-2" to="/blogs">
              Peep In <FaLongArrowAltRight />
            </Link>
            
        
        </button>
      </div>
    </div>
  );
};

export default Blog;
