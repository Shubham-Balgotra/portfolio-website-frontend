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
import vscodeLogo from "../../assets/tech/vscode.png";
import reduxLogo from "../../assets/tech/redux.png";

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
  { name: "Redux", logo: reduxLogo },
  { name: "VS Code", logo: vscodeLogo },
];

export default function Technologies({ darkMode }) {
  return (
    <section
      className={`w-full px-4 py-10 ${
        darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className={`w-full border-b ${darkMode?"border-gray-300":"border-gray-900"}   mb-6 pb-2`}>
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${darkMode?"text-gray-300":"text-gray-900"}  text-center mb-2`}>
            Technologies & Tools
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center w-full">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`w-full max-w-[140px] h-auto flex flex-col items-center gap-3 p-4 rounded-lg shadow-md transition hover:scale-105 ${
                darkMode
                  ? "bg-gray-950 text-gray-300 shadow-gray-800"
                  : "bg-white text-gray-800 shadow-gray-200"
              }`}
            >
              <div
                className={`w-16 h-16 p-2 rounded-md flex items-center justify-center shadow ${
                  darkMode ? "bg-gray-300" : "bg-gray-100"
                }`}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <p className="text-sm text-center font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
