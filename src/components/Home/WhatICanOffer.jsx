import React from "react";
import whatICanOfferBg from '../../assets/WhatICanOfferBG.jpg';

export default function WhatICanOffer({ darkMode }) {
  return (
    <section
      className={`relative w-full px-4 py-10 lg:py-14 mx-auto bg-cover bg-center bg-no-repeat ${
        darkMode ? "text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
      style={{ backgroundImage: `url(${whatICanOfferBg})` }}
    >
      {/* Black overlay for darkMode */}
      {darkMode && <div className="absolute inset-0 bg-black/70 z-0" />}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh]">
       <div className={`w-full border-b ${darkMode?"border-gray-300":"border-gray-900"}   mb-6 pb-2`}>
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${darkMode?"text-gray-300":"text-gray-100"}  text-center mb-2`}>
            What I Can Offer
          </h1>
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-4 max-w-6xl w-full justify-items-center">
          {[
            {
              title: "Full-Stack Web Development",
              desc: "I can design and build full MERN stack applications with authentication, REST APIs, and secure deployment using Vercel/Render.",
            },
            {
              title: "Frontend UI Development",
              desc: "Pixel-perfect, responsive frontend using React.js and Tailwind CSS with clean component structures and state management.",
            },
            {
              title: "Bug Fixing & Debugging",
              desc: "I can debug and fix JavaScript, React, and API issues with strong troubleshooting skills gained from tech support experience.",
            },
            {
              title: "Backend Integration",
              desc: "Experienced in connecting frontend apps to Node.js/Express servers and integrating MongoDB databases with secure JWT-based auth.",
            },
            {
              title: "API Integration",
              desc: "I work with third-party APIs (e.g., NewsAPI, Stripe) and handle data fetch, error management, and client-server interactions smoothly.",
            },
            {
              title: "Deployment & Hosting",
              desc: "I can host your project on Vercel or Render, with custom domains, environment variables, and version control via GitHub.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className={`w-full max-w-xs p-5 rounded-lg shadow hover:shadow-md transition backdrop-blur-sm ${
                darkMode
                  ? "bg-gray-950/80 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
