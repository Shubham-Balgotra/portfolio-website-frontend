import React from "react";
import reactLogo from "../../assets/tech/react.svg";
import nodeLogo from "../../assets/tech/nodejs.svg";
import mongoLogo from "../../assets/tech/mongodb.svg";
import firebaseLogo from "../../assets/tech/firebase.svg";
import githubLogo from "../../assets/tech/github.svg";
import vercelLogo from "../../assets/tech/vercel.svg";

const technologies = [
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "Vercel", logo: vercelLogo },
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
            className={`flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition hover:scale-105 ${
              darkMode
                ? "bg-black text-gray-300 shadow-gray-800"
                : "bg-white text-gray-800 shadow-gray-200"
            }`}
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
