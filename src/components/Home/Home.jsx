import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import WhatICanOffer from "./WhatICanOffer";
import ServicesSection from "./ServicesSection";
import CallToAction from "./CallToAction";
import programmerGif from "../../assets/programmer.gif";
import ClientProcess from "./ClientProcess";
import Technologies from "./Technologies";
import Testimonial from "./Testimonial";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import Subscribe from "../Subscribe/Subscribe";

export default function Home({ darkMode }) {
  return (
    <>
      {/* === HERO SECTION === */}
      <section
        className={`relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between 
        px-4 sm:px-6 lg:px-20 xl:px-32 
        pt-28 sm:pt-32 lg:pt-24 pb-10 sm:pb-16 gap-10 overflow-hidden
        ${
          darkMode
            ? "bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white"
            : "bg-gradient-to-br from-[#e0f2fe] via-[#cbd5e1] to-[#93c5fd] text-gray-800"
        }`}
      >
        {/* Decorative Background Blobs */}
        {!darkMode && (
          <>
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-indigo-200 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl opacity-20 z-0" />
          </>
        )}

        {/* LEFT: TEXT */}
{/*       <div className="flex-1 text-center md:text-left max-w-xl z-10"> */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left max-w-xl z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] bg-clip-text text-transparent">
              Shubham Balgotra
            </span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium max-w-md mx-auto md:mx-0">
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

{/*           <div className="p-2 flex flex-wrap gap-4"> */}
        <div className="p-2 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Let’s Work Together
            </Link>
            <Link
              to="/blog/page=1"
              className={`px-6 py-3 rounded-md font-semibold transition border
      ${
        darkMode
          ? "border-white text-white hover:bg-white hover:text-black"
          : "border-black text-black hover:bg-black hover:text-white"
      }`}
            >
              Read Articles
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex-1 flex justify-center z-10">
          <div className="relative group">
            <div className="p-[8px] rounded-full bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
              <img
                src={programmerGif}
                alt="Shubham Balgotra"
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 xl:w-52 xl:h-52 rounded-full bg-white object-contain ring-4 ring-white transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-1 rounded-full blur-xl opacity-20 bg-gradient-to-r from-[#166472] via-[#1f538f] to-[#367baf] group-hover:opacity-40 transition duration-500 z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* === WHAT I CAN OFFER === */}
      <WhatICanOffer darkMode={darkMode} />

      {/* === SERVICES SECTION === */}
      <ServicesSection darkMode={darkMode} />

      {/* === CLIENT PROCESS === */}
      <ClientProcess darkMode={darkMode} />

      {/* === TECHNOLOGIES === */}
      <Technologies darkMode={darkMode} />

      <Testimonial darkMode={darkMode} />

      <Subscribe darkMode={darkMode} />

      {/* === CALL TO ACTION === */}
      <CallToAction darkMode={darkMode} />

      {/* === SOCIAL MEDIA === */}
      <section
        className={`w-full text-center py-2 px-4 sm:px-6 lg:px-20 xl:px-32 ${
          darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-800"
        }`}
      >
        <p className=" font-semibold text-lg">Social Media Links</p>
        <div className="flex justify-center gap-6 flex-wrap z-10 ">
          <SocialMediaLinks darkMode={darkMode} />
        </div>
      </section>
    </>
  );
}
