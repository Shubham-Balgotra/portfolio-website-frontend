
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import remarkBreaks from "remark-breaks";
// import remarkGfm from "remark-gfm";
// import { Helmet } from "react-helmet-async";

// const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

// const BlogPost = ({ darkMode }) => {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     if (!slug) return;

//     axios
//       .get(`${backendBaseURL}/api/blogs/slug/${slug}`)
//       .then((res) => setBlog(res.data))
//       .catch((err) => {
//         console.error("Error fetching blog:", err);
//         setBlog(false); // Mark as not found
//       });
//   }, [slug]);

//   // Show loading spinner
//   if (blog === null) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   // Show 404 fallback if blog is not found
//   if (blog === false) {
//     return (
//       <>
//         <Helmet>
//           <title>Blog Not Found | Shubham's Blog</title>
//           <meta name="robots" content="noindex" />
//         </Helmet>
//         <div className="min-h-screen flex items-center justify-center">
//           <p className="text-center text-gray-400 text-lg">Blog not found.</p>
//         </div>
//       </>
//     );
//   }

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     "headline": blog.title,
//     "description": blog.excerpt,
//     "image":
//       blog.imageURL || "https://shubhambalgotra.vercel.app/default-og.jpg",
//     "author": {
//       "@type": "Person",
//       "name": "Shubham Balgotra",
//       "url": "https://shubhambalgotra.vercel.app",
//     },
//     "datePublished": blog.date,
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": `https://shubhambalgotra.vercel.app/blog/${blog.slug}`,
//     },
//   };

//   return (
//     <>
//       {/* Dynamic SEO Tags */}
//       <Helmet>
//         <title>{blog.title} | Shubham's Blog</title>
//         <meta name="description" content={blog.excerpt} />
//         <link
//           rel="canonical"
//           href={`https://shubhambalgotra.vercel.app/blog/${blog.slug}`}
//         />

//         {/* Open Graph (Facebook, LinkedIn, etc.) */}
//         <meta property="og:title" content={blog.title} />
//         <meta property="og:description" content={blog.excerpt} />
//         <meta
//           property="og:image"
//           content={
//             blog.imageURL ||
//             "https://shubhambalgotra.vercel.app/default-og.jpg"
//           }
//         />
//         <meta
//           property="og:url"
//           content={`https://shubhambalgotra.vercel.app/blog/${blog.slug}`}
//         />
//         <meta property="og:type" content="article" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={blog.title} />
//         <meta name="twitter:description" content={blog.excerpt} />
//         <meta
//           name="twitter:image"
//           content={
//             blog.imageURL ||
//             "https://shubhambalgotra.vercel.app/default-og.jpg"
//           }
//         />

//         {/* Structured Data */}
//         <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         ></script>

//       </Helmet>

//       {/* === Hero Section === */}
//       {blog.imageURL && (
//         <div className="relative w-full h-72 sm:h-96 md:h-[28rem] overflow-hidden">
//           <div
//             className="absolute inset-0 bg-cover bg-bottom lg:bg-center"
//             style={{
//               backgroundImage: `url(${blog.imageURL})`,
//               WebkitMaskImage:
//                 "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
//               maskImage:
//                 "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
//             }}
//           ></div>
//           <div className="relative z-20 h-full flex flex-col justify-end px-4 sm:px-10 pb-6 pt-12 md:pt-2 lg:pt-0 text-white">
//             <p
//               className={`text-xs sm:text-sm ${
//                 darkMode ? "text-gray-300" : "text-gray-900"
//               }`}
//             >
//               🗓️ Written on:{" "}
//               {new Date(blog.date).toLocaleDateString(undefined, {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>
//             <h1
//               className={`text-xl sm:text-3xl md:text-4xl font-bold leading-tight mt-1 ${
//                 darkMode ? "text-gray-300" : "text-gray-900"
//               }`}
//             >
//               {blog.title}
//             </h1>
//           </div>
//         </div>
//       )}

//       {/* Tags */}
//       <div className="px-4 sm:px-6 md:px-10 mt-4 flex flex-wrap gap-2">
//         {blog.tags.map((tag, i) => (
//           <span
//             key={i}
//             className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
//               darkMode
//                 ? "bg-gray-900 text-gray-300"
//                 : "bg-blue-50 text-blue-700"
//             }`}
//           >
//             #{tag}
//           </span>
//         ))}
//       </div>

//       {/* Markdown Content */}
//       <div className="min-h-screen mt-6 px-4 sm:px-6 md:px-10 xl:px-32 pb-10">
//   <div
//     className={`prose sm:prose-base md:prose-lg lg:prose-xl max-w-none leading-relaxed ${
//       darkMode ? "prose-invert text-gray-300" : "text-gray-900"
//     }`}
//     style={{ fontFamily: "'Merriweather', serif" }}
//   >
//     <ReactMarkdown
//       remarkPlugins={[remarkBreaks, remarkGfm]}
//       components={{
//         code({ node, inline, className, children, ...props }) {
//           return inline ? (
//             <code className={className} {...props}>
//               {children}
//             </code>
//           ) : (
//             <pre
//               className={`
//                 not-prose 
//                 overflow-x-auto 
//                 max-w-full 
//                 whitespace-pre 
//                 break-words ${darkMode?"bg-black text-gray-300":"bg-gray-900 text-gray-100"}
                
//                 text-sm sm:text-base 
//                 p-4 rounded`}
//             >
//               <code className={className} {...props}>
//                 {children}
//               </code>
//             </pre>
//           );
//         },
//       }}
//     >
//       {blog.content}
//     </ReactMarkdown>
//   </div>
// </div>

//     </>
//   );
// };

// export default BlogPost;


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
      <div className="min-h-screen mt-6 px-4 sm:px-6 md:px-10 xl:px-32 pb-10">
        <div
          className={`prose sm:prose-base md:prose-lg lg:prose-xl max-w-none leading-relaxed ${
            darkMode ? "prose-invert text-gray-300" : "text-gray-900"
          } prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:mb-6 prose-hr:my-10 prose-hr:border-t-2 ${
            darkMode ? "prose-hr:border-gray-700" : "prose-hr:border-gray-300"
          }`}
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          <ReactMarkdown
            remarkPlugins={[[remarkBreaks, { strict: true }], remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                return inline ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <pre
                    className={`
                      not-prose 
                      overflow-x-auto 
                      max-w-full 
                      whitespace-pre 
                      break-words ${
                        darkMode ? "bg-black text-gray-300" : "bg-gray-900 text-gray-100"
                      }
                      text-sm sm:text-base 
                      p-4 rounded
                      my-6
                    `}
                  >
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
              hr() {
                return (
                  <hr
                    className={`my-10 border-t-2 ${
                      darkMode ? "border-gray-700" : "border-gray-300"
                    }`}
                  />
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
