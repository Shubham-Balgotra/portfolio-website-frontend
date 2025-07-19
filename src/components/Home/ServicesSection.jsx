// import React from "react";
// import serviceBg from "../../assets/servicesBG.jpg";

// const services = [
//   {
//     title: "Frontend Development",
//     desc: "Modern, responsive UI using React.js, Tailwind CSS, and component-driven design.",
//   },
//   {
//     title: "Full Stack Web Apps",
//     desc: "Build complete MERN stack applications with secure user authentication and real-time features.",
//   },
//   {
//     title: "API Integration",
//     desc: "Consume and integrate third-party APIs such as NewsAPI, Stripe, and Firebase for business logic.",
//   },
//   {
//     title: "Bug Fixing & Debugging",
//     desc: "Fix layout issues, JavaScript errors, or backend bugs with detailed analysis and testing.",
//   },
//   {
//     title: "Admin Panel Setup",
//     desc: "Develop dashboards for orders, users, and products with proper access control.",
//   },
//   {
//     title: "Hosting & Deployment",
//     desc: "Deploy and host sites using Vercel, Render, Netlify, or GitHub Pages with custom domains.",
//   },
// ];

// export default function ServicesSection({ darkMode }) {
//   return (
//    <section
//   className={`relative w-full px-4 py-10 lg:py-14 bg-cover bg-center bg-no-repeat overflow-hidden ${
//     darkMode ? "text-gray-300" : "text-gray-800"
//   }`}
//   style={{ backgroundImage: `url(${serviceBg})` }}
// >
//   {/* Overlay for dark mode */}
//   {darkMode && <div className="absolute inset-0 bg-black/70 z-0" />}

//   {/* ✅ Bottom Gradient Mask to bg-gray-50 */}
//   {!darkMode && (
//     <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-50 z-10 pointer-events-none" />
//   )}


//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
//         <div className={`w-full border-b ${darkMode?"border-gray-300":"border-gray-900"}   mb-6 pb-2`}>
//           <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${darkMode?"text-gray-300":"text-gray-900"}  text-center mb-2`}>
//             Services
//           </h1>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-4 max-w-6xl w-full justify-items-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`w-full max-w-xs p-5 rounded-lg shadow hover:shadow-md transition backdrop-blur-sm ${
//                 darkMode
//                   ? "bg-gray-950/80 text-gray-300"
//                   : "bg-white text-gray-700"
//               }`}
//             >
//               <h3 className="text-lg font-semibold text-blue-600 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-sm leading-relaxed">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }import React from "react";
// import serviceBg from "../../assets/servicesBG.jpg";

// const services = [
//   {
//     title: "Frontend Development",
//     desc: "Modern, responsive UI using React.js, Tailwind CSS, and component-driven design.",
//   },
//   {
//     title: "Full Stack Web Apps",
//     desc: "Build complete MERN stack applications with secure user authentication and real-time features.",
//   },
//   {
//     title: "API Integration",
//     desc: "Consume and integrate third-party APIs such as NewsAPI, Stripe, and Firebase for business logic.",
//   },
//   {
//     title: "Bug Fixing & Debugging",
//     desc: "Fix layout issues, JavaScript errors, or backend bugs with detailed analysis and testing.",
//   },
//   {
//     title: "Admin Panel Setup",
//     desc: "Develop dashboards for orders, users, and products with proper access control.",
//   },
//   {
//     title: "Hosting & Deployment",
//     desc: "Deploy and host sites using Vercel, Render, Netlify, or GitHub Pages with custom domains.",
//   },
// ];

// export default function ServicesSection({ darkMode }) {
//   return (
//     <section
//       className={`relative w-full px-8 py-10 lg:py-14 bg-cover bg-center bg-no-repeat overflow-hidden ${
//         darkMode ? "text-gray-300" : "text-gray-800"
//       }`}
//       style={{ backgroundImage: `url(${serviceBg})` }}
//     >
//       {/* Overlay for dark mode */}
//       {darkMode && <div className="absolute inset-0 bg-black/70 z-0" />}

//       {/* Light gradient at bottom */}
//       {!darkMode && (
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-50 z-10 pointer-events-none" />
//       )}

//       <div
//         className={`
//           relative z-10 flex flex-col items-center justify-center min-h-[60vh]
//           scale-[0.95] sm:scale-[0.98] md:scale-100 xl:scale-[1.05] 2xl:scale-[1.1] custom-3xl:scale-[1.15]
//           transition-transform duration-500 ease-in-out
//         `}
//       >
//         {/* Header */}
//         <div
//           className={`w-full border-b ${
//             darkMode ? "border-gray-300" : "border-gray-900"
//           } mb-6 pb-2`}
//         >
//           <h1
//             className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${
//               darkMode ? "text-gray-300" : "text-gray-900"
//             } text-center mb-2`}
//           >
//             Services
//           </h1>
//         </div>

//         {/* Services Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 px-2 md:px-4 lg:px-8 xl:px-10 max-w-[1440px] w-full justify-items-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`w-full max-w-xs p-5 rounded-lg shadow hover:shadow-md transition backdrop-blur-sm ${
//                 darkMode
//                   ? "bg-gray-950/80 text-gray-300"
//                   : "bg-white text-gray-700"
//               }`}
//             >
//               <h3 className="text-lg font-semibold text-blue-600 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-sm leading-relaxed">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom style for 1920px+ */}
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
      className={`relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14 bg-cover bg-center bg-no-repeat overflow-hidden ${
        darkMode ? "text-gray-300" : "text-gray-800"
      }`}
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      {/* Overlay for dark mode */}
      {darkMode && <div className="absolute inset-0 bg-black/70 z-0" />}

      {/* Light gradient at bottom */}
      {!darkMode && (
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-b from-transparent to-gray-50 z-10 pointer-events-none" />
      )}

      <div
        className={`
          relative z-10 flex flex-col items-center justify-center min-h-[50vh]
          scale-[0.92] sm:scale-[0.95] md:scale-[0.98] lg:scale-100 xl:scale-[1.05] 2xl:scale-[1.1] custom-3xl:scale-[1.15]
          transition-transform duration-500 ease-in-out
        `}
      >
        {/* Header */}
        <div
          className={`w-full border-b ${
            darkMode ? "border-gray-300" : "border-gray-900"
          } mb-6 sm:mb-8 md:mb-10 pb-2`}
        >
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-2 sm:mb-3 ${
              darkMode ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 max-w-[90%] sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1400px] 2xl:max-w-[1600px] w-full justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full max-w-[320px] p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition backdrop-blur-sm ${
                darkMode
                  ? "bg-gray-950/80 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom style for 1920px+ */}
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
