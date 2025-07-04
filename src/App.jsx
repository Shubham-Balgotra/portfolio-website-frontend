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

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <DynamicTitle />
      <Navbar />
      <main className="">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
