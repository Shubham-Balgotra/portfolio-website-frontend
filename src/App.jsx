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

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       <ScrollToTop />
//       <DynamicTitle />
//       <Navbar  darkMode={darkMode} setDarkMode={setDarkMode}/>

//       {/* Apply dark/light mode styles to full layout */}
//          <main className="min-h-svh">
//         <Routes>
//           <Route path="/" element={<Home  darkMode={darkMode}/>} />
//           <Route path="/about" element={<About  darkMode={darkMode}/>} />
//           <Route path="/blog" element={<BlogHome  darkMode={darkMode}/>} />
//           <Route path="/blog/:slug" element={<BlogPost  darkMode={darkMode}/>} />
//           <Route path="/project" element={<Projects  darkMode={darkMode}/>} />
//           <Route path="/resume" element={<Resume  darkMode={darkMode}/>} />
//           <Route path="/contact" element={<Contact  darkMode={darkMode}/>} />
//         </Routes>
//       </main>

//       <Footer darkMode={darkMode} />
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

// function App() {
//   return (
//     <Router>
//       <ScrollToTop/>
//       <DynamicTitle />
//       <Navbar />
//       <main className="">
//         <Routes>

//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/blog" element={<BlogHome />} />
//           <Route path="/blog/:slug" element={<BlogPost />} />
//           <Route path="/project" element={<Projects />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
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

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <DynamicTitle />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Apply dark/light mode styles to full layout */}
      <main className="min-h-svh">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/blog" element={<BlogHome darkMode={darkMode} />} />
          <Route
            path="/blog/:slug"
            element={<BlogPost darkMode={darkMode} />}
          />
          <Route path="/project" element={<Projects darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </main>

      <Footer darkMode={darkMode} />
    </Router>
  );
}

export default App;


//     </Router>
//   );
// }

// export default App;
