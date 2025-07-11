// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;
// // import spinner from "../assets/spinner.gif";


// const BlogHome = ({ darkMode }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`${backendBaseURL}/api/blogs`)
//       // .get("https://portfolio-website-backend-production-f66e.up.railway.app/api/blogs")
//       .then((res) => setBlogs(res.data))
//       .catch((err) => console.error("Error fetching blogs:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div
//         className={` min-h-screen flex items-center justify-center`}
//       >
// {/*         <img src={spinner} alt="Loading..." className="w-16 h-16" /> */}
//         <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <section
//       className={` mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto`}
//     >
//       <h2
//         className={`text-2xl md:text-3xl font-bold  mb-6 border-b pb-2 ${
//           darkMode ? "text-white" : "text-gray-800"
//         }`}
//       >
//         Blogs
//       </h2>
//       <p
//         className={`text-center text-gray-500 mb-12 ${
//           darkMode ? "text-gray-300" : "text-gray-800"
//         }`}
//       >
//         Articles, tutorials, and dev notes.
//       </p>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {blogs.map((post) => (
//           <div
//             key={post._id}
//             className={`${
//               darkMode
//                 ? "bg-black text-blue-400 hover:text-blue-600"
//                 : "bg-white text-gray-800 hover:text-blue-600"
//             } rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border hover:border-blue-400`}
//           >
// {/*             <div className="mb-4">
//               <p className="text-gray-400 text-xs tracking-wide uppercase">
//                 {new Date(post.date).toLocaleDateString()}
//               </p>
//               <h3 className="text-xl font-semibold transition-colors duration-200">
//                 {post.title}
//               </h3>
//             </div> */}
//             {post.imageURL && (
//               <img
//                 src={post.imageURL}
//                 alt={post.title}
//                 className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
//               />
//             )}

//             <div className="mb-4">
//             <p className="text-gray-400 text-xs tracking-wide uppercase">
//            {new Date(post.date).toLocaleDateString()}
//             </p>
//             <h3 className="text-xl font-semibold transition-colors duration-200">
//             {post.title}
//             </h3>
//             </div>


//             <p
//               className={`${
//                 darkMode ? "text-gray-300" : "text-gray-600"
//               } mb-4 line-clamp-3`}
//             >
//               {post.excerpt}
//             </p>

//             <div className="flex flex-wrap gap-2 text-sm mb-4">
//               {post.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>

//             <Link
//               to={`/blog/${post.slug}`}
//               className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
//             >
//               Read more →
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogHome;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const BlogHome = ({ darkMode }) => {
  const { pageNum } = useParams();
  const navigate = useNavigate();

  const currentPage = Math.max(parseInt(pageNum) || 1, 1);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendBaseURL}/api/blogs?page=${currentPage}`)
      .then((res) => {
        setBlogs(res.data.blogs);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    navigate(`/blog/page/${newPage}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto">
      <h2 className={`text-2xl md:text-3xl font-bold mb-6 border-b pb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
        Blogs
      </h2>
      <p className={`text-center text-gray-500 mb-6 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
        Articles, tutorials, and dev notes.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <div key={post._id} className={`${darkMode ? "bg-black text-blue-400 hover:text-blue-600" : "bg-white text-gray-800 hover:text-blue-600"} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border hover:border-blue-400`}>
            {post.imageURL && (
              <img src={post.imageURL} alt={post.title} className="w-full h-48 object-cover rounded-t-xl mb-2" />
            )}
            <div className="mb-2 px-3">
              <p className="text-gray-400 text-xs tracking-wide uppercase">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h3 className="text-l font-semibold transition-colors duration-200">{post.title}</h3>
            </div>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-2 text-xs line-clamp-3 px-3`}>
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-2 px-3">
              {post.tags.map((tag, i) => (
                <span key={i} className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-blue-50 text-blue-700"} px-1.5 py-0.5 rounded-full text-[10px] font-medium`}>
                  #{tag}
                </span>
              ))}
            </div>
            <Link to={`/blog/${post.slug}`} className="inline-block text-blue-600 hover:text-blue-900 font-semibold transition-colors duration-200 px-3 mb-3">
              Read more →
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
<div className="flex justify-center items-center mt-10 gap-1 flex-wrap">
  {/* Previous */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-3 py-1 rounded border ${darkMode?"text-gray-300 bg-gray-900":"text-gray-700 bg-gray-50"} text-sm font-medium disabled:opacity-50`}
  >
    ◀ Previous
  </button>

  {/* Page Numbers with Ellipsis */}
  {Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((page) => {
      return (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 2 && page <= currentPage + 2)
      );
    })
    .reduce((acc, page, idx, arr) => {
      if (idx > 0 && page - arr[idx - 1] > 1) {
        acc.push("ellipsis");
      }
      acc.push(page);
      return acc;
    }, [])
    .map((item, i) =>
      item === "ellipsis" ? (
        <span key={`ellipsis-${i}`} className="px-2 text-sm text-gray-400">
          ...
        </span>
      ) : (
        <button
          key={item}
          onClick={() => handlePageChange(item)}
          className={`px-3 py-1 rounded text-sm border ${
            currentPage === item
              ? "bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] text-white font-semibold"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          {item}
        </button>
      )
    )}

  {/* Next */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`px-3 py-1 rounded border ${darkMode?"text-gray-300 bg-gray-900":"text-gray-700 bg-gray-50"} text-sm font-medium disabled:opacity-50`}
  >
   Next ▶
  </button>
</div>

    </section>
  );
};

export default BlogHome;
