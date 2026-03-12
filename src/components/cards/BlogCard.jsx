/* eslint-disable react/prop-types */

import ResponsiveText from "../shared/ResponsiveText";

const BlogCard = ({ post }) => {
  const { image, title, date, description } = post || {};
  return (
    <div>
      <div
        className="rounded-xl shadow-md transform transition-all hover:scale-105
             hover:shadow-xl shadow-primary bg-lCard dark:bg-dCard"
      >
        <img
          src={image}
          alt={title}
          className="rounded-t-xl object-cover w-full h-40  
              "
        />
        {/* card content */}
        <div className="px-3 py-3">
          {/* title */}

          <ResponsiveText
            text={title}
            className="text-sm md:text-base font-semibold mb-2"
            breakpoints={{ lg: 35, md: 45, sm: 30, default: 35 }}
          ></ResponsiveText>
          <p className="text-xs mb-2">{date}</p>
          {/* description */}

          <ResponsiveText
            text={description}
            className="text-xs mb-2"
            breakpoints={{ lg: 55, md: 55, sm: 39, default: 35 }}
          ></ResponsiveText>
          {/* Button */}
          <a
            href={"https://example.com/full-blog-post"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline border px-3 rounded-full text-xs 
            xl:text-base"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
