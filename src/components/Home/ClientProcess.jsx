import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discussion",
    desc: "Understand client needs, gather ideas, and define project goals clearly.",
  },
  {
    title: "Design & Build",
    desc: "Craft user-friendly, responsive UI and implement scalable backend using MERN stack.",
  },
  {
    title: "Review",
    desc: "Present the working version for client feedback and refine accordingly.",
  },
  {
    title: "Delivery",
    desc: "Deploy the final application and ensure everything runs smoothly.",
  },
  {
    title: "Support",
    desc: "Provide post-launch support and ongoing maintenance as needed.",
  },
];

export default function ClientProcess({ darkMode }) {
  return (
    <section
      className={`relative w-full px-4 py-10 lg:py-14 flex items-center justify-center min-h-screen ${
        darkMode ? "bg-gray-950 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-6xl w-full flex flex-col items-center justify-center">
        <div className={`w-full border-b ${darkMode?"border-gray-300":"border-gray-900"}   mb-6 pb-2`}>
          <h1 className={`text-2xl md:text-3xl lg:text-4xl  font-bold ${darkMode?"text-gray-300":"text-gray-900"}  text-center mb-2`}>
            My Work Process
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border transition duration-300 shadow-md hover:shadow-xl ${
                darkMode
                  ? "bg-gray-900 text-gray-300 border-gray-700 shadow-gray-800"
                  : "bg-white text-gray-700 border-gray-200 shadow-gray-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle
                  className={`${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                  size={22}
                />
                <h3 className="text-lg font-semibold">
                  {index + 1}. {step.title}
                </h3>
              </div>
              <p className="text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
