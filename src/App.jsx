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
      <Navbar  darkMode={darkMode} setDarkMode={setDarkMode}/>

      {/* Apply dark/light mode styles to full layout */}
        <Routes>
          <Route path="/" element={<Home  darkMode={darkMode}/>} />
          <Route path="/about" element={<About  darkMode={darkMode}/>} />
          <Route path="/blog" element={<BlogHome  darkMode={darkMode}/>} />
          <Route path="/blog/:slug" element={<BlogPost  darkMode={darkMode}/>} />
          <Route path="/project" element={<Projects  darkMode={darkMode}/>} />
          <Route path="/resume" element={<Resume  darkMode={darkMode}/>} />
          <Route path="/contact" element={<Contact  darkMode={darkMode}/>} />
        </Routes>
      

      <Footer darkMode={darkMode} />
    </Router>
  );
}

export default App;
