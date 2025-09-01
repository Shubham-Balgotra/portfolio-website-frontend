import React from "react";
import ecommerce from "../../assets/ecommerce.jpg";
import aroundus from "../../assets/aroundus.png";

const projects = [
  {
    title: "Claim & Carry – E-commerce App",
    tech: "React, Node.js, MongoDB, Stripe, Tailwind CSS",
    live: "https://claimandcarry.vercel.app",
    github: "https://github.com/Shubham-Balgotra/ecommerce",
    desc: "A full-stack e-commerce platform with user login, product catalog, cart, checkout, and admin features.",
    image: ecommerce,
  },
  {
    title: "AroundUs – News Aggregator App",
    tech: "React, NewsAPI, Tailwind CSS",
    live: "https://aroundus.vercel.app",
    github: "https://github.com/Shubham-Balgotra/news-app",
    desc: "A responsive app that fetches and displays categorized news articles using NewsAPI.",
    image: aroundus,
  },
  {
  title: "SheStyle – Women’s Shopping Platform",
  tech: "React, Node.js, Express.js, MongoDB, Tailwind CSS",
  live: "https://shestyle.vercel.app",
  github: "https://github.com/Shubham-Balgotra/shestyle-frontend",
  desc: "A modern and responsive e-commerce platform designed for women’s fashion, featuring product listings, filters, cart, and a seamless shopping experience.",
  image: shestyle,
},

];

export default function Projects({ darkMode }) {
  return (
    <section
      className={` mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto`}
    >
      {" "}
       <h2
        className={`text-2xl md:text-3xl font-bold  mb-6 border-b pb-2 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className={`${darkMode?"bg-black border hover:border-blue-400":"bg-white"} shadow rounded-lg p-6`}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title + " Screenshot"}
                className="w-full h-auto rounded mb-4 hover:scale-105 transition duration-300 shadow"
              />
            )}
            <h3 className={`text-lg font-semibold ${darkMode?"text-gray-300":"text-gray-800"} mb-2`}>
              {project.title}
            </h3>
            <p className={`text-sm ${darkMode?"text-gray-400":"text-gray-600"} mb-2`}>{project.desc}</p>
            <p className="text-xs text-gray-500 mb-3 italic">
              Tech: {project.tech}
            </p>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                🌐 Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

