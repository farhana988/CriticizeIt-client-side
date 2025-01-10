import { useEffect, useState } from "react";
import Heading from "../shared/Heading";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
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
        {blogs.map((post) => (
         <BlogCard  key={post.id} post={post}></BlogCard>
        ))}
      </div>

    
    </div>
    );
};

export default AllBlogs;