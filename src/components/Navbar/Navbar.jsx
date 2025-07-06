import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blog" },
    { name: "Projects", path: "/project" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`shadow-md fixed top-0 left-0 w-full z-50 ${darkMode ? "bg-[#0d0d0d]" : "bg-white"}`}>
      <div className="w-full max-w-[2100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div
            className={`font-bold transition-all duration-300 ${
              isOpen ? "text-md" : "text-sm lg:text-3xl 2xl:text-4xl"
            }`}
          >
            <span className="bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] bg-clip-text text-transparent">
              &lt;Shubham Balgotra/&gt;
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 2xl:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition duration-300 font-medium text-base lg:text-lg ${
                  darkMode ? "text-white" : "text-gray-700"
                } hover:text-blue-600`}
              >
                {link.name}
              </Link>
            ))}
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-3 py-1 text-sm rounded transition ${
                darkMode ? "bg-[#fff7f7] text-black" : "bg-black text-white"
              }`}
            >
              {darkMode ? "☀️ Light" :"🌙 Dark"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${darkMode ? "text-white" : "text-gray-700"} focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className={`md:hidden shadow-md px-4 pb-4 space-y-2 ${darkMode ? "bg-[#0d0d0d]" : "bg-white"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 transition duration-300 font-medium ${
                darkMode ? "text-white" : "text-gray-700"
              } hover:text-blue-600`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-full py-2 rounded transition ${
              darkMode ? "bg-[#fff7f7] text-black" : "bg-black text-white"
            }`}
          >
            {darkMode ? "☀️ Light Mode" :"🌙 Dark Mode" }
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
