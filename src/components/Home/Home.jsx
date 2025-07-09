import React from "react";

import Typewriter from "react-typewriter-effect";
import WhatICanOffer from "./WhatICanOffer";
import ServicesSection from "./ServicesSection";
import CallToAction from "./CallToAction";
import programmerGif from "../../assets/programmer.gif";
import { Link } from "react-router-dom";
import ClientProcess from "./ClientProcess";
import Technologies from "./Technologies";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export default function Home({ darkMode }) {
  return (
    <section
      className={`mt-16 w-full min-h-[90vh] flex flex-col items-center justify-center text-center  relative overflow-hidden ${
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
      <ServicesSection darkMode={darkMode} />
      <ClientProcess darkMode={darkMode} />
      <Technologies darkMode={darkMode} />
      <CallToAction darkMode={darkMode} />

      <p className={`m-2 ${darkMode ? "dark-text" : ""}`}>Social Media Links</p>
      <div className=" flex justify-center gap-6 z-10 mb-2">
       <SocialMediaLinks darkMode={darkMode} />
      </div>
    </section>
  );
}
