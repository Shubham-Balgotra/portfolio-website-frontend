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
  const repeated = [...technologies, ...technologies]; // repeat logos for loop

  return (
    <section
      className={w-full px-4 py-10 ${
        darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-gray-800"
      }}
    >
      <div className="min-w-screen mx-auto flex flex-col items-center">
        <div
          className={w-full border-b ${
            darkMode ? "border-gray-300" : "border-gray-900"
          } mb-6 pb-2}
        >
          <h1
            className={text-2xl md:text-3xl lg:text-4xl font-bold ${
              darkMode ? "text-gray-300" : "text-gray-900"
            } text-center mb-2}
          >
            Technologies & Tools
          </h1>
        </div>

        <div className="relative w-full overflow-hidden scrolling-container">
          <div className="scrolling-track">
            {repeated.map((tech, index) => (
              <div
                key={index}
                className={w-full max-w-[140px] h-auto flex flex-col items-center gap-3 p-4 rounded-lg shadow-md transition hover:scale-105 ${
                  darkMode
                    ? "bg-gray-950 text-gray-300 shadow-gray-800"
                    : "bg-white text-gray-800 shadow-gray-200"
                }}
              >
                <div
                  className={w-16 h-16 p-2 rounded-md flex items-center justify-center shadow ${
                    darkMode ? "bg-gray-300" : "bg-gray-100"
                  }}
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
      </div>

      {/* Animation styles */}
      <style>{`
  @keyframes scroll-left-continuous {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .scrolling-container {
    width: 100%;
  }

  .scrolling-track {
    display: flex;
    width: max-content;
    animation: scroll-left-continuous 30s linear infinite;
    gap: 2rem; /* default gap */
  }

  @media (min-width: 640px) {
    .scrolling-track {
      gap: 3rem;
    }
  }

  @media (min-width: 768px) {
    .scrolling-track {
      gap: 4rem;
    }
  }

  @media (min-width: 1024px) {
    .scrolling-track {
      gap: 5.5rem;
    }
  }
`}</style>

    </section>
  );
}
