import { useState } from "react";
import Heading from "./shared/Heading";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ResponsiveText from "./shared/ResponsiveText";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Tips to Boost Your Productivity in life",
      description:
        "Discover proven techniques to enhance your daily productivity and achieve more in less time.",
      image: "https://via.placeholder.com/400x250",
      date: "January 5, 2025",
    },
    {
      id: 2,
      title: "How Our Services Can Simplify Your Life",
      description:
        "Learn how our tailored services are designed to make your life easier and stress-free.",
      image: "https://via.placeholder.com/400x250",
      date: "December 28, 2024",
    },
    {
      id: 3,
      title: "Success Stories from Our Community over the years",
      description:
        "Hear from our users about how they achieved their goals using our platform.",
      image: "https://via.placeholder.com/400x250",
      date: "December 20, 2024",
    },
    {
      id: 4,
      title: "Top 10 Tools for Efficient Time Management",
      description:
        "Explore the best tools and strategies to manage your time effectively and achieve your goals effortlessly.",
      image: "https://via.placeholder.com/400x250",
      date: "January 10, 2025",
    },
    {
      id: 5,
      title: "The Future of AI in Everyday Life",
      description:
        "Discover how artificial intelligence is shaping the future and making our daily lives smarter.",
      image: "https://via.placeholder.com/400x250",
      date: "January 12, 2025",
    },
    {
      id: 6,
      title: "10 Budget-Friendly Ways to Stay Healthy",
      description:
        "Learn simple and affordable tips to maintain your health and well-being on a budget.",
      image: "https://via.placeholder.com/400x250",
      date: "January 15, 2025",
    },
    {
      id: 7,
      title: "Why Customer Feedback is Key to Success",
      description:
        "Understand the importance of listening to your customers and improving your services based on their feedback.",
      image: "https://via.placeholder.com/400x250",
      date: "January 18, 2025",
    },
    {
      id: 8,
      title: "Work-Life Balance: Tips for a Happier Life",
      description:
        "Find out how to balance work and personal life to achieve happiness and reduce stress.",
      image: "https://via.placeholder.com/400x250",
      date: "January 20, 2025",
    },
  ];

  const [visiblePosts, setVisiblePosts] = useState(4);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (expanded) {
      setVisiblePosts(4);
    } else {
      setVisiblePosts(blogPosts.length);
    }
    setExpanded(!expanded);
  };

  return (
    <div className="pt-10 container mx-auto px-6">
      <Heading
        title="Community & Blog"
        subtitle="Stay informed with our latest articles, updates, and inspiring stories from our community."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {blogPosts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="rounded-xl shadow-xl transform transition-all hover:scale-105
             hover:shadow-xl shadow-primary bg-lCard dark:bg-dCard"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-t-xl object-cover w-full h-24 md:h-24 lg:h-36  
              "
            />
            {/* card content */}
            <div className="px-3 lg:px-6 py-3">
                {/* title */}
        
            <ResponsiveText
            text={post.title}
            className="text-sm md:text-base lg:text-xl  font-semibold mb-2"
            breakpoints={{lg: 45,md: 45, sm: 30, default: 35}}></ResponsiveText>
              <p className="text-sm mb-2">{post.date}</p>
               {/* description */}
        
            <ResponsiveText
            text={post.description}
            className="text-xs lg:text-sm mb-2"
            breakpoints={{lg: 60,md: 55, sm: 39, default: 35}}></ResponsiveText>
              <button className="font-semibold hover:underline border px-3 rounded-full
              text-xs lg:text-base">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 lg:mt-8 mb-5 md:mb-2 lg:mb-0 flex justify-end">
        <button
          onClick={handleToggle}
          className="text-sm md:text-base lg:text-xl font-semibold text-black
            bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary  rounded-full
             transition-all flex items-center gap-1 md:gap-2 lg:gap-3 
            px-3 md:px-5  border-2 border-primary"
          >
          {expanded ? (
                        <>
                          <FaLongArrowAltLeft /> Conceal
                        </>
                      ) : (
                        <>
                          Peep In <FaLongArrowAltRight />
                        </>
                      )}{" "}
        </button>
      </div>
    </div>
  );
};

export default Blog;
