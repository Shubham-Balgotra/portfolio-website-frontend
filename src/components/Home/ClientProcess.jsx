// import React from "react";
// import { CheckCircle } from "lucide-react";

// const steps = [
//   {
//     title: "Discussion",
//     desc: "Understand client needs, gather ideas, and define project goals clearly.",
//   },
//   {
//     title: "Design & Build",
//     desc: "Craft user-friendly, responsive UI and implement scalable backend using MERN stack.",
//   },
//   {
//     title: "Review",
//     desc: "Present the working version for client feedback and refine accordingly.",
//   },
//   {
//     title: "Delivery",
//     desc: "Deploy the final application and ensure everything runs smoothly.",
//   },
//   {
//     title: "Support",
//     desc: "Provide post-launch support and ongoing maintenance as needed.",
//   },
// ];

// export default function ClientProcess({ darkMode }) {
//   return (
//     <section
//       className={`relative w-full px-4 py-10 lg:py-14 flex items-center justify-center min-h-[60vh] ${
//         darkMode ? "bg-[#030303] text-gray-300" : "bg-gray-50 text-gray-800"
//       }`}
//     >
//       <div
//         className={`
//           max-w-6xl w-full flex flex-col items-center justify-center
//           scale-[0.94] sm:scale-[0.98] md:scale-100
//           xl:scale-[1.04] 2xl:scale-[1.08] custom-3xl:scale-[1.12]
//           transition-transform duration-500 ease-in-out
//         `}
//       >
//         <div className={`w-full border-b ${darkMode ? "border-gray-300" : "border-gray-900"} mb-6 pb-2`}>
//           <h1
//             className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
//               darkMode ? "text-gray-300" : "text-gray-900"
//             } text-center mb-2`}
//           >
//             My Work Process
//           </h1>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-6 border transition duration-300 shadow-md hover:shadow-xl ${
//                 darkMode
//                   ? "bg-gray-900 text-gray-300 border-gray-700 shadow-gray-800"
//                   : "bg-white text-gray-700 border-gray-200 shadow-gray-100"
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <CheckCircle
//                   className={`${
//                     darkMode ? "text-green-400" : "text-green-600"
//                   }`}
//                   size={22}
//                 />
//                 <h3 className="text-lg font-semibold">
//                   {index + 1}. {step.title}
//                 </h3>
//               </div>
//               <p className="text-sm">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Add custom screen size for extra large screens */}
//       <style>{`
//         @media (min-width: 1920px) {
//           .custom-3xl\\:scale-\\[1\\.12\\] {
//             transform: scale(1.12);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



// import React from "react";
// import { CheckCircle } from "lucide-react";

// const steps = [
//   {
//     title: "Discussion",
//     desc: "Understand client needs, gather ideas, and define project goals clearly.",
//   },
//   {
//     title: "Design & Build",
//     desc: "Craft user-friendly, responsive UI and implement scalable backend using MERN stack.",
//   },
//   {
//     title: "Review",
//     desc: "Present the working version for client feedback and refine accordingly.",
//   },
//   {
//     title: "Delivery",
//     desc: "Deploy the final application and ensure everything runs smoothly.",
//   },
//   {
//     title: "Support",
//     desc: "Provide post-launch support and ongoing maintenance as needed.",
//   },
// ];

// export default function ClientProcess({ darkMode }) {
//   return (
//     <section
//       className={`relative w-full px-4 py-10 lg:py-14 flex items-center justify-center min-h-[60vh] ${
//         darkMode ? "bg-[#030303] text-gray-300" : "bg-gray-50 text-gray-800"
//       }`}
//     >
//       <div
//         className={`
//           relative z-10 flex flex-col items-center justify-center w-full max-w-7xl
//           scale-[0.95] sm:scale-[0.98] md:scale-100 xl:scale-[1.05] 2xl:scale-[1.1] custom-3xl:scale-[1.15]
//           transition-transform duration-500 ease-in-out
//         `}
//       >
//         <div
//           className={`w-full border-b ${
//             darkMode ? "border-gray-300" : "border-gray-900"
//           } mb-6 pb-2`}
//         >
//           <h1
//             className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 ${
//               darkMode ? "text-gray-300" : "text-gray-900"
//             }`}
//           >
//             My Work Process
//           </h1>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-6 border transition duration-300 shadow-md hover:shadow-xl ${
//                 darkMode
//                   ? "bg-gray-900 text-gray-300 border-gray-700 shadow-gray-800"
//                   : "bg-white text-gray-700 border-gray-200 shadow-gray-100"
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <CheckCircle
//                   className={`${
//                     darkMode ? "text-green-400" : "text-green-600"
//                   }`}
//                   size={22}
//                 />
//                 <h3 className="text-lg font-semibold">
//                   {index + 1}. {step.title}
//                 </h3>
//               </div>
//               <p className="text-sm">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom scale class for large screens */}
//       <style>{`
//         @media (min-width: 1920px) {
//           .custom-3xl\\:scale-\\[1\\.15\\] {
//             transform: scale(1.15);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

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
      className={`relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14 flex items-center justify-center min-h-[50vh] ${
        darkMode ? "bg-[#030303] text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`
          relative z-10 flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1400px] 2xl:max-w-[1600px]
          scale-[0.92] sm:scale-[0.95] md:scale-[0.98] lg:scale-100 xl:scale-[1.05] 2xl:scale-[1.1] custom-3xl:scale-[1.15]
          transition-transform duration-500 ease-in-out
        `}
      >
        <div
          className={`w-full border-b ${
            darkMode ? "border-gray-300" : "border-gray-900"
          } mb-6 sm:mb-8 md:mb-10 pb-2`}
        >
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 ${
              darkMode ? "text-gray-300" : "text-gray-900"
            }`}
          >
            My Work Process
          </h1>
        </div>

        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 sm:p-6 md:p-8 border transition duration-300 shadow-md hover:shadow-xl ${
                darkMode
                  ? "bg-gray-900 text-gray-300 border-gray-700 shadow-gray-800"
                  : "bg-white text-gray-700 border-gray-200 shadow-gray-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <CheckCircle
                  className={`${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                  size={20}
                />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {index + 1}. {step.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom scale class for large screens */}
      <style>{`
        @media (min-width: 1920px) {
          .custom-3xl\\:scale-\\[1\\.15\\] {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
}
