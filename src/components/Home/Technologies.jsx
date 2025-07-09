import React from "react";
import reactLogo from "../../assets/tech/react.png";
import nodeLogo from "../../assets/tech/nodejs.png";
import mongoLogo from "../../assets/tech/mongodb.png";
import firebaseLogo from "../../assets/tech/firebase.png";
import githubLogo from "../../assets/tech/github.png";
import vercelLogo from "../../assets/tech/vercel.png";
import renderLogo from "../../assets/tech/render.png";
import railwayLogo from "../../assets/tech/railway.png";
import gitLogo from "../../assets/tech/git.png";
import postmanLogo from "../../assets/tech/postman.png";
import tailwindcssLogo from "../../assets/tech/tailwindcss.png";
import javascriptLogo from "../../assets/tech/javascript.png";

const technologies = [
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "Vercel", logo: vercelLogo },
  { name: "Render", logo: renderLogo },
  { name: "Railway", logo: railwayLogo },
  { name: "Git", logo: gitLogo },
  { name: "PostMan", logo: postmanLogo },
  { name: "Tailwind CSS", logo: tailwindcssLogo },
  { name: "HTML, JS, CSS", logo: javascriptLogo },
];

export default function Technologies({ darkMode }) {
  return (
    <section className="w-full px-4 py-12 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b pb-2 text-center">
        Technologies & Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`h-29 w-31 flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition hover:scale-105 ${
              darkMode
                ? "bg-black text-gray-300 shadow-gray-800"
                : "bg-white text-gray-800 shadow-gray-200"
            }`}
          >
            <div
              className={`w-16 h-16 p-2 rounded-md flex items-center justify-center shadow-md ${
                darkMode ? "bg-gray-300" : "bg-gray-100"
              }`}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
