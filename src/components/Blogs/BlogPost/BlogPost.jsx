// import React, { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import axios from "axios";

// const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;
// const PAGE_SIZE = 9;

// const BlogList = ({ darkMode }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const page = parseInt(searchParams.get("page") || "1", 10);

//   useEffect(() => {
//     setLoading(true);
//     const url = `${backendBaseURL}/api/blogs?page=${page}`;
//     console.log("Fetching blogs from URL:", url);

//     axios
//       .get(url)
//       .then((res) => {
//         console.log("Raw response data:", res);
//         console.log("Response data body:", res.data);

//         if (!res.data || !Array.isArray(res.data.blogs)) {
//           console.warn("Warning: response data.blogs is not an array:", res.data.blogs);
//           setBlogs([]);
//           setTotalPages(1);
//           return;
//         }

//         setBlogs(res.data.blogs);
//         setTotalPages(res.data.totalPages);

//         console.log(`Set blogs state with ${res.data.blogs.length} items`);
//         console.log(`Set totalPages state to ${res.data.totalPages}`);
//       })
//       .catch((err) => {
//         console.error("Blog list error:", err);
//         setBlogs([]);
//         setTotalPages(1);
//       })
//       .finally(() => {
//         setLoading(false);
//         console.log("Loading set to false");
//       });
//   }, [page, backendBaseURL]);

//   if (loading) {
//     console.log("Loading spinner showing...");
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//       </div>
//     );
//   }

//   console.log("Rendering blog list, blogs count:", blogs.length);

//   return (
//     <div className="min-h-screen px-4 sm:px-6 lg:px-10 xl:px-24 py-10">
//       <h1 className="text-3xl font-bold mb-8">{darkMode ? "📚 Blogs" : "📚 Blogs"}</h1>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {blogs.map((b) => {
//           if (!b || !b._id) {
//             console.warn("Skipping invalid blog entry:", b);
//             return null;
//           }
//           return (
//             <Link
//               key={b._id}
//               to={`/blog/${b.slug}`}
//               className={`block rounded overflow-hidden shadow-lg transition hover:-translate-y-1 ${
//                 darkMode ? "bg-gray-800 text-gray-200" : "bg-white"
//               }`}
//             >
//               {b.imageURL && (
//                 <img
//                   src={b.imageURL}
//                   alt={b.title}
//                   className="h-40 w-full object-cover object-top"
//                 />
//               )}
//               <div className="p-4">
//                 <p className="text-xs text-blue-600 mb-1">
//                   {b.date ? new Date(b.date).toLocaleDateString() : "No date"}
//                 </p>
//                 <h2 className="text-lg font-semibold line-clamp-2">{b.title || "No Title"}</h2>
//                 <p className="text-sm mt-2 line-clamp-3">{b.excerpt || "No Excerpt"}</p>
//               </div>
//             </Link>
//           );
//         })}
//       </div>

//       <div className="mt-10 flex justify-center gap-2">
//         <button
//           disabled={page === 1}
//           onClick={() => setSearchParams({ page: page - 1 })}
//           className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white disabled:opacity-40"
//         >
//           « Prev
//         </button>

//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
//           <button
//             key={p}
//             onClick={() => setSearchParams({ page: p })}
//             className={`px-3 py-1 rounded ${
//               p === page
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-blue-100 dark:hover:bg-gray-700"
//             }`}
//           >
//             {p}
//           </button>
//         ))}

//         <button
//           disabled={page === totalPages}
//           onClick={() => setSearchParams({ page: page + 1 })}
//           className="px-3 py-1 rounded hover:bg-blue-600 hover:text-white disabled:opacity-40"
//         >
//           Next »
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet-async";

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
        setBlog(false); // Mark as not found
      });
  }, [slug]);

  // Show loading spinner
  if (blog === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show 404 fallback if blog is not found
  if (blog === false) {
    return (
      <>
        <Helmet>
          <title>Blog Not Found | Shubham's Blog</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-center text-gray-400 text-lg">Blog not found.</p>
        </div>
      </>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image":
      blog.imageURL || "https://shubhambalgotra.vercel.app/default-og.jpg",
    "author": {
      "@type": "Person",
      "name": "Shubham Balgotra",
      "url": "https://shubhambalgotra.vercel.app",
    },
    "datePublished": blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://shubhambalgotra.vercel.app/blog/${blog.slug}`,
    },
  };

  return (
    <>
      {/* Dynamic SEO Tags */}
      <Helmet>
        <title>{blog.title} | Shubham's Blog</title>
        <meta name="description" content={blog.excerpt} />
        <link
          rel="canonical"
          href={`https://shubhambalgotra.vercel.app/blog/${blog.slug}`}
        />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta
          property="og:image"
          content={
            blog.imageURL ||
            "https://shubhambalgotra.vercel.app/default-og.jpg"
          }
        />
        <meta
          property="og:url"
          content={`https://shubhambalgotra.vercel.app/blog/${blog.slug}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta
          name="twitter:image"
          content={
            blog.imageURL ||
            "https://shubhambalgotra.vercel.app/default-og.jpg"
          }
        />

        {/* Structured Data */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>

      </Helmet>

      {/* === Hero Section === */}
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
          <div className="relative z-20 h-full flex flex-col justify-end px-4 sm:px-10 pb-6 pt-12 md:pt-2 lg:pt-0 text-white">
            <p
              className={`text-xs sm:text-sm ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              🗓️ Written on:{" "}
              {new Date(blog.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1
              className={`text-xl sm:text-3xl md:text-4xl font-bold leading-tight mt-1 ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {blog.title}
            </h1>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="px-4 sm:px-6 md:px-10 mt-4 flex flex-wrap gap-2">
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

      {/* Markdown Content */}
      <div className="min-h-screen mt-6 px-4 sm:px-6 md:px-10 xl:px-32">
        <div
          className={`prose sm:prose-base md:prose-lg lg:prose-xl max-w-none leading-relaxed ${
            darkMode ? "prose-invert text-gray-300" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkBreaks, remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                return inline ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
            }}
          >
            {blog.content.replace(/\\n/g, '\n')}

          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
