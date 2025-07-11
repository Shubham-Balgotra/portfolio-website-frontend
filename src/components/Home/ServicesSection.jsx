import React from "react";
import serviceBg from "../../assets/servicesBG.jpg";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern, responsive UI using React.js, Tailwind CSS, and component-driven design.",
  },
  {
    title: "Full Stack Web Apps",
    desc: "Build complete MERN stack applications with secure user authentication and real-time features.",
  },
  {
    title: "API Integration",
    desc: "Consume and integrate third-party APIs such as NewsAPI, Stripe, and Firebase for business logic.",
  },
  {
    title: "Bug Fixing & Debugging",
    desc: "Fix layout issues, JavaScript errors, or backend bugs with detailed analysis and testing.",
  },
  {
    title: "Admin Panel Setup",
    desc: "Develop dashboards for orders, users, and products with proper access control.",
  },
  {
    title: "Hosting & Deployment",
    desc: "Deploy and host sites using Vercel, Render, Netlify, or GitHub Pages with custom domains.",
  },
];

export default function ServicesSection({ darkMode }) {
  return (
    <section
      className={`relative w-full px-4 py-10 lg:py-14 bg-cover bg-center bg-no-repeat ${
        darkMode ? "text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      {/* Dark overlay when darkMode is true */}
      {darkMode && <div className="absolute inset-0 bg-black/70 z-0" />}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <div className={`w-full border-b ${darkMode?"border-gray-300":"border-gray-900"}   mb-6 pb-2`}>
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${darkMode?"text-gray-300":"text-gray-900"}  text-center mb-2`}>
            Services
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-4 max-w-6xl w-full justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full max-w-xs p-5 rounded-lg shadow hover:shadow-md transition backdrop-blur-sm ${
                darkMode
                  ? "bg-gray-950/80 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
