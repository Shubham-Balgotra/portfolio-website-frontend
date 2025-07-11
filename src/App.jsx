
// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import About from "./components/About/About";
// import Projects from "./components/Project/Projects";
// import Resume from "./components/Resume/Resume";
// import Contact from "./components/Contact/Contact";
// import Home from "./components/Home/Home";
// import DynamicTitle from "./components/Routes/DynamicTitle";
// import ScrollToTop from "./components/ScroolToTop";
// import BlogHome from "./components/Blogs/BlogHome";
// import BlogPost from "./components/Blogs/BlogPost/BlogPost";
// import Unsubscribe from "./components/Unsubscribe/Unsubscribe";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
 
//   return (
//     <Router>
//       <ScrollToTop />
//       <DynamicTitle />
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       {/* Apply dark/light mode styles to full layout  px-10*/}
// {/*       <main className={`min-h-screen min-w-screen mt-3 max-w-screen mx-auto  py-4 ${darkMode
//           ? "bg-gradient-to-r from-[#000000] via-[#121b27] to-[#010d1b] text-gray-400"
//           : "bg-gradient-to-r from-[#ffffff] via-[#96b3d4] to-[#6797da] text-gray-700"
//       }`}> */}
//         <main className={`min-h-screen  max-w-screen mx-auto  ${darkMode
//           ? "bg-gradient-to-r from-[#000000] via-[#121b27] to-[#010d1b] text-gray-400"
//           : "bg-gradient-to-r from-[#ffffff] via-[#96b3d4] to-[#6797da] text-gray-700"
//       }`}>
//         <Routes>
//           <Route path="/" element={<Home darkMode={darkMode} />} />
//           <Route path="/about" element={<About darkMode={darkMode} />} />
//           <Route path="/blog" element={<BlogHome darkMode={darkMode} />} />
//           <Route
//             path="/blog/:slug"
//             element={<BlogPost darkMode={darkMode} />}
//           />
//           <Route path="/project" element={<Projects darkMode={darkMode} />} />
//           <Route path="/resume" element={<Resume darkMode={darkMode} />} />
//           <Route path="/contact" element={<Contact darkMode={darkMode} />} />
//           <Route path="/unsubscribe" element={<Unsubscribe />} />
//         </Routes>
//       </main>

//       <Footer darkMode={darkMode} />
//     </Router>
//   );
// }

// export default App;


import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import DynamicTitle from "./components/Routes/DynamicTitle";
import ScrollToTop from "./components/ScroolToTop";
import BlogHome from "./components/Blogs/BlogHome";
import BlogPost from "./components/Blogs/BlogPost/BlogPost";
import Unsubscribe from "./components/Unsubscribe/Unsubscribe";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <DynamicTitle />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main
        className={`min-h-screen max-w-screen mx-auto ${
          darkMode
            ? "bg-gradient-to-r from-[#000000] via-[#121b27] to-[#010d1b] text-gray-400"
            : "bg-gradient-to-r from-[#ffffff] via-[#96b3d4] to-[#6797da] text-gray-700"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />

          {/* Blog routes */}
          <Route path="/blog" element={<BlogHome darkMode={darkMode} />} />
          <Route path="/blog/page/:pageNum" element={<BlogHome darkMode={darkMode} />} />
          <Route path="/blog/:slug" element={<BlogPost darkMode={darkMode} />} />

          <Route path="/project" element={<Projects darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </main>

      <Footer darkMode={darkMode} />
    </Router>
  );
}

export default App;

