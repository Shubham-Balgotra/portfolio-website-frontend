// export default BlogHome;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogHome = ({ darkMode }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs") // "https://portfolio-website-backend-production-f66e.up.railway.app/api/contact"
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section
      className={`mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto ${
        darkMode
          ? "bg-gradient-to-r from-[#000000] via-[#121b27] to-[#010d1b] text-gray-400"
          : "bg-gradient-to-r from-[#cc95c0] via-[#dbd4b4] to-[#7aa1d2] text-gray-700"
      }`}
    >
      <h2
        className={`text-2xl md:text-3xl font-bold  mb-6 border-b pb-2 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Blogs
      </h2>
      <p className={`text-center text-gray-500 mb-12 ${
          darkMode ? "text-gray-300" : "text-gray-800"
        }`}>
        Articles, tutorials, and dev notes.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <div
            key={post._id}
            className={`${darkMode?"bg-black text-blue-400 hover:text-blue-600":"bg-white text-gray-800 hover:text-blue-600 "} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border hover:border-blue-400"   `}       >
            <div className="mb-4">
              <p className="text-gray-400 text-xs tracking-wide uppercase">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <h3 className="text-xl font-semibold  transition-colors duration-200">
                {post.title}
              </h3>
            </div>

            <p className={`${darkMode?"text-gray-300":"text-gray-600"} mb-4 line-clamp-3`}>{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogHome;
