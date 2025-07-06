import React from "react";

import Typewriter from "react-typewriter-effect";
import WhatICanOffer from "./WhatICanOffer";
import ServicesSection from "./ServicesSection";
import CallToAction from "./CallToAction";
import programmerGif from "../../assets/programmer.gif";
import { Link } from "react-router-dom";

export default function Home({ darkMode }) {
  return (
   <section
  className={`min-h-screen mt-16 w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden ${
    darkMode
      ? "bg-black text-white"
      : "bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800"
  }`}
>

      {/* Background Animation */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-transparent to-blue-200/30 animate-pulse"></div> */}

      {/* Profile Image */}
      <div className="relative mt-4 mb-8 inline-block group">
        <div className="p-[8px] rounded-full bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
          <img
            src={programmerGif}
            alt="Shubham Balgotra"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white object-contain ring-4 ring-white transition-transform duration-500"
          />
        </div>

        {/* Optional glow behind the image */}
        <div className="absolute -inset-1 rounded-full blur-xl opacity-20 bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] group-hover:opacity-40 transition duration-500 z-[-1]"></div>
      </div>

      {/* Main Heading with Typewriter Effect */}
      <h1 className={`text-4xl md:text-6xl font-extrabold mb-4 dark-section`}>
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] bg-clip-text text-transparent">
          Shubham Balgotra
        </span>
      </h1>

      <div className="text-lg md:text-2xl text-gray-600 max-w-2xl mb-6 font-medium">
        <Typewriter
          textStyle={{
            color: darkMode ? "#FFFFFF" : "#1F2937",
            fontWeight: 500,
          }}
          startDelay={100}
          cursorColor={darkMode ? "#FFF" : "#2563EB"}
          multiText={[
            "MERN Stack Developer",
            "Technical Support Executive",
            "Building Responsive Web Apps",
            "Solving Real-World Tech Problems",
          ]}
          multiTextDelay={2000}
          typeSpeed={100}
          deleteSpeed={50}
          loop={true}
        />
      </div>

      <WhatICanOffer darkMode={darkMode} />
      <ServicesSection  darkMode={darkMode}/>
      <CallToAction  darkMode={darkMode}/>

      <p className={`m-2 ${darkMode ? "dark-text" : ""}`}>Social Media Links</p>
      <div className=" flex justify-center gap-6 z-10 mb-2">
        <a
          href="https://github.com/Shubham-Balgotra"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            darkMode
              ? "text-white hover:text-gray-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          href="https://in.linkedin.com/in/shubham-balgotra-97b82518a"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            darkMode
              ? "text-white hover:text-blue-500"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.35V9.756h3.415v1.561h.048c.477-.9 1.638-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.53zM5.337 8.195c-1.144 0-2.063-.93-2.063-2.078 0-1.148.919-2.078 2.063-2.078 1.143 0 2.063.93 2.063 2.078 0 1.148-.92 2.078-2.063 2.078zm1.777 12.257H3.56V9.756h3.554v10.696zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
        {/* Gmail */}
        <a
          href="mailto:shubhambalgotra1@gmail.com"
          className={`transition-colors ${
            darkMode
              ? "text-white hover:text-red-500"
              : "text-gray-600 hover:text-red-500"
          }`}
          
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512">
            <path d="M502.3 190.8c6.2 4.9 9.7 12.4 9.7 20.4v212c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V211.2c0-8 3.6-15.5 9.7-20.4L241 67.4c11.3-9 27.7-9 39 0l222.3 123.4zM256 295.1L46.2 176.7 26.8 193.5 256 336l229.2-142.5-19.4-16.8L256 295.1z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
