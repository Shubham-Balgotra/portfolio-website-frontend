import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const BlogPost = ({ darkMode }) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!slug) return;

    axios
      .get(`${backendBaseURL}/api/blogs/slug/${slug}`)
      // .get(`https://portfolio-website-backend-production-f66e.up.railway.app/api/blogs/slug/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setBlog(false);
      });
  }, [slug]);

  // Loading Spinner
  if (!blog) {
    return (
      <div
        className={` min-h-screen flex items-center justify-center`}
      >
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      className={` mt-3 max-w-screen-2xl mx-auto px-10 py-16 `}
    >
      {/* Date */}
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"} mb-2`}>
        🗓️ Written on:&nbsp;
        {new Date(blog.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Title */}
      <h1
        className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-6 leading-snug`}
      >
        {blog.title}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {blog.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Markdown Content */}
      <div
        className={`prose prose-lg max-w-none leading-relaxed ${
          darkMode ? "text-gray-300" : "text-gray-900"
        }`}
        style={{
          fontFamily: "'Merriweather', serif",
          fontSize: "1.125rem",
          // textAlign: "justify",
        }}
      >
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
