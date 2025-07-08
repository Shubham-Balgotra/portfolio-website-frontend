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
      .then((res) => setBlog(res.data))
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setBlog(false);
      });
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* === Hero Image Section === */}
      {blog.imageURL && (
        <div className="relative w-full h-72 sm:h-96 md:h-[28rem] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-bottom lg:bg-center"
            style={{
              backgroundImage: `url(${blog.imageURL})`,
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
          ></div>

          {/* Optional dark overlay for better text contrast */}

          {/* Text Overlay */}
          <div className="relative z-20 h-full flex flex-col justify-end px-4 sm:px-10 pb-6 text-white">

            <p
              className={`text-xs sm:text-sm  ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              🗓️{" "} Written on: {" "}
              {new Date(blog.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className={`text-xl sm:text-3xl md:text-4xl font-bold leading-tight mt-1 ${
            darkMode ? "text-gray-300" : "text-gray-900"
          }`}>
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-2">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                    darkMode
                      ? "bg-gray-900 text-gray-300"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === Blog Markdown Content === */}
      <div className="min-h-screen mt-4  mx-auto sm:px-3 md:px-10 ">
        <div
          className={`prose prose-sm sm:prose-base md:prose-lg max-w-none leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-900"
          }`}
          style={{
            fontFamily: "'Merriweather', serif",
            // textAlign: "justify",
          }}
        >
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
