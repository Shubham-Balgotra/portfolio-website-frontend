// import { useState, useEffect, useRef } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null); // Ref for the mobile dropdown menu

//   // Toggle dark mode body class
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [darkMode]);

//   // Close mobile menu on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Blogs", path: "/blog/" },
//     { name: "Projects", path: "/project" },
//     { name: "Resume", path: "/resume" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className={`shadow-md fixed top-0 left-0 w-full z-50 ${darkMode ? "bg-[#0d0d0d]" : "bg-white"}`}>
//       <div className="w-full max-w-[2100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
//         <div className="flex justify-between items-center h-16">
//           {/* Brand */}
//           <div
//             className={`font-bold transition-all duration-300 ${
//             isOpen ? "text-sm" : "text-xs lg:text-xl 2xl:text-2xl"
//             }`}
//             >
//             <span className="bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] bg-clip-text text-transparent">
//             &lt;Shubham Balgotra/&gt;
//             </span>
//           </div>


//           {/* Desktop Nav Links */}
//           <div className="hidden  md:flex items-center space-x-4 lg:space-x-6 2xl:space-x-12">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`transition duration-300 font-medium  text-sm lg:text-md ${
//                   darkMode ? "text-white" : "text-gray-700"
//                 } hover:text-blue-600`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             {/* Dark Mode Toggle */}
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`px-3 py-1 text-sm rounded transition ${
//                 darkMode ? "bg-[#fff7f7] text-black" : "bg-black text-white"
//               }`}
//             >
//               {darkMode ? "☀️ Light" : "🌙 Dark"}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`${darkMode ? "text-white" : "text-gray-700"} focus:outline-none`}
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Dropdown */}
//       {isOpen && (
//         <div
//           ref={menuRef}
//           className={`md:hidden shadow-md px-4 pb-4 space-y-2 ${darkMode ? "bg-[#0d0d0d]" : "bg-white"}`}
//         >
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`block py-2 transition duration-300 font-medium ${
//                 darkMode ? "text-white" : "text-gray-700"
//               } hover:text-blue-600`}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Dark Mode Toggle for Mobile */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className={`w-full py-2 rounded transition ${
//               darkMode ? "bg-[#fff7f7] text-black" : "bg-black text-white"
//             }`}
//           >
//             {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  /* -------------- dark‑mode body class -------------- */
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  /* -------------- click‑outside to close -------------- */
  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, [isOpen]);

  /* -------------- lock body scroll when drawer open -------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  /* -------------- nav data -------------- */
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blog/" },
    { name: "Projects", path: "/project" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  /* -------------- custom MUI switch -------------- */
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

  return (
    <>
      {/* ---------- overlay ---------- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ---------- top nav bar ---------- */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full shadow-md ${
          darkMode ? "bg-[#0d0d0d]" : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[2100px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
          {/* Brand */}
          <div
            className={`font-bold transition-all duration-300 ${
              isOpen ? "text-sm" : "text-xs lg:text-xl 2xl:text-2xl"
            }`}
          >
            <span className="bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] bg-clip-text text-transparent">
              &lt;Shubham&nbsp;Balgotra/&gt;
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden items-center space-x-4 lg:space-x-6 2xl:space-x-12 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm lg:text-md transition duration-300 ${
                  darkMode ? "text-white" : "text-gray-700"
                } hover:text-blue-600`}
              >
                {link.name}
              </Link>
            ))}
            <MaterialUISwitch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${darkMode ? "text-white" : "text-gray-700"}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ---------- slide‑in mobile drawer ---------- */}
      <div
        ref={menuRef}
        className={`pt-15 fixed inset-y-0 right-0 z-50 w-1/2 transform transition-transform duration-300 ease-out md:hidden px-4 pb-4 space-y-2 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${darkMode ? "bg-[#0d0d0d]" : "bg-white"}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-medium transition duration-300 ${
              darkMode ? "text-white" : "text-gray-700"
            } hover:text-blue-600`}
          >
            {link.name}
          </Link>
        ))}

        <MaterialUISwitch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </>
  );
};

export default Navbar;
