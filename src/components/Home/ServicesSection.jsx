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

export default function ServicesSection({darkMode}) {
  return (
    <section
      className="w-full px-4 py-12 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto bg-gray-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        Services
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={` p-5 rounded-lg shadow hover:shadow-md transition ${darkMode?"bg-black text-gray-300 " :"bg-white text-gray-700"}`}>
          
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              {service.title}
            </h3>
            <p className={`text-sm ${darkMode? "text-grey-100":"text-gray-700"} leading-relaxed`}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
