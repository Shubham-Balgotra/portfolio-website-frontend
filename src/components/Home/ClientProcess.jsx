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
      className={`w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto ${
        darkMode ? "bg-black text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2">
        🧩 My Work Process
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 border transition duration-300 shadow-md hover:shadow-xl ${
              darkMode
                ? "bg-[#000000] text-gray-300 border-gray-700 shadow-gray-800"
                : "bg-white text-gray-700 border-gray-200 shadow-gray-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
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
    </section>
  );
}
