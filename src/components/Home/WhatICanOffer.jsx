// import React from "react";
// import whatICanOfferBg from '../../assets/WhatICanOfferBG.jpg'
// export default function WhatICanOffer({darkMode}) {
//   return (
//     <section className="w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto bg-gray-50 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${whatICanOfferBg})` }}
//         >
//       <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b pb-2">What I Can Offer</h2>

//       <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 " >
//         <li className={` p-5 rounded-lg shadow hover:shadow-md transition ${darkMode?"bg-black text-gray-300 " :"bg-white text-gray-700"}`}>
//           <h3 className="font-semibold text-lg mb-2 text-blue-600">Full-Stack Web Development</h3>
//           <p>I can design and build full MERN stack applications with authentication, REST APIs, and secure deployment using Vercel/Render.</p>
//         </li>

//         <li className={` p-5 rounded-lg shadow hover:shadow-md transition ${darkMode?"bg-black text-gray-300 " :"bg-white text-gray-700"}`}>
//           <h3 className="font-semibold text-lg mb-2 text-blue-600">Frontend UI Development</h3>
//           <p>Pixel-perfect, responsive frontend using React.js and Tailwind CSS with clean component structures and state management.</p>
//         </li>

//         <li className={` p-5 rounded-lg shadow hover:shadow-md transition ${darkMode?"bg-black text-gray-300 " :"bg-white text-gray-700"}`}>
//           <h3 className="font-semibold text-lg mb-2 text-blue-600">Bug Fixing & Debugging</h3>
//           <p>I can debug and fix JavaScript, React, and API issues with strong troubleshooting skills gained from tech support experience.</p>
//         </li>

//         <li className={` p-5 rounded-lg shadow hover:shadow-md transition ${darkMode?"bg-black text-gray-300 " :"bg-white text-gray-700"}`}>
//           <h3 className="font-semibold text-lg mb-2 text-blue-600">Backend Integration</h3>
//           <p>Experienced in connecting frontend apps to Node.js/Express servers and integrating MongoDB databases with secure JWT-based auth.</p>
//         </li>

//         <li className={` p-5 rounded-lg shadow hover:shadow-md transition ${darkMode?"bg-black text-gray-300 " :"bg-white text-gray-700"}`}>
//           <h3 className="font-semibold text-lg mb-2 text-blue-600">API Integration</h3>
//           <p>I work with third-party APIs (e.g., NewsAPI, Stripe) and handle data fetch, error management, and client-server interactions smoothly.</p>
//         </li>

//         <li className={` p-5 rounded-lg shadow hover:shadow-md transition ${darkMode?"bg-black text-gray-300 " :"bg-white text-gray-700"}`}>
//           <h3 className="font-semibold text-lg mb-2 text-blue-600">Deployment & Hosting</h3>
//           <p>I can host your project on Vercel or Render, with custom domains, environment variables, and version control via GitHub.</p>
//         </li>
//       </ul>
//     </section>
//   );
// }


import React from "react";
import whatICanOfferBg from '../../assets/WhatICanOfferBG.jpg';

export default function WhatICanOffer({ darkMode }) {
  return (
    <section className="relative w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${whatICanOfferBg})` }}
    >
      {/* Overlay */}
      {darkMode && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b pb-2">
          What I Can Offer
        </h2>

        <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Full-Stack Web Development",
              desc: "I can design and build full MERN stack applications with authentication, REST APIs, and secure deployment using Vercel/Render.",
            },
            {
              title: "Frontend UI Development",
              desc: "Pixel-perfect, responsive frontend using React.js and Tailwind CSS with clean component structures and state management.",
            },
            {
              title: "Bug Fixing & Debugging",
              desc: "I can debug and fix JavaScript, React, and API issues with strong troubleshooting skills gained from tech support experience.",
            },
            {
              title: "Backend Integration",
              desc: "Experienced in connecting frontend apps to Node.js/Express servers and integrating MongoDB databases with secure JWT-based auth.",
            },
            {
              title: "API Integration",
              desc: "I work with third-party APIs (e.g., NewsAPI, Stripe) and handle data fetch, error management, and client-server interactions smoothly.",
            },
            {
              title: "Deployment & Hosting",
              desc: "I can host your project on Vercel or Render, with custom domains, environment variables, and version control via GitHub.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className={`p-5 rounded-lg shadow hover:shadow-md transition ${
                darkMode ? "bg-black text-gray-300" : "bg-white text-gray-700"
              }`}
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
