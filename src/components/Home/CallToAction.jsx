// import React from "react";

// export default function CallToAction({darkMode}) {
//   return (
//     <section className="w-full py-12 px-4 bg-gradient-to-br from-[#072126] via-[#102E50] to-[#1F4562] text-white text-center">
//       <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode?"text-gray-300":"text-gray-300"}`}>
//         Let’s Work Together
//       </h2>
//       <p className={`max-w-xl mx-auto text-sm md:text-base mb-6 ${darkMode?"text-gray-300":"text-gray-300"}`}>
//         Whether you're ready to start a project or just want to say hello,
//         I’m excited to hear from you. Let's build something amazing together!
//       </p>

//       <p className={`text-base mb-4 ${darkMode?"text-gray-300":"text-gray-300"}`}>
//         👉 You can reach out to me directly through the contact page:
//       </p>

      

     
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction({ darkMode }) {
  return (
    <section
      className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#072126] via-[#102E50] to-[#1F4562] text-white text-center overflow-hidden`}
    >
      <div
        className={`
          relative z-10 flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1400px] 2xl:max-w-[1600px]
          scale-[0.92] sm:scale-[0.95] md:scale-[0.98] lg:scale-100 xl:scale-[1.05] 2xl:scale-[1.1] custom-3xl:scale-[1.15]
          transition-transform duration-500 ease-in-out
        `}
      >
        <h2
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-300"
          }`}
        >
          Let’s Work Together
        </h2>
        <p
          className={`max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg mb-6 sm:mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-300"
          }`}
        >
          Whether you're ready to start a project or just want to say hello,
          I’m excited to hear from you. Let's build something amazing together!
        </p>

        <p
          className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-300"
          }`}
        >
          👉 You can reach out to me directly through the contact page:
        </p>

        <Link
          to="/contact"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition text-sm sm:text-base md:text-lg"
        >
          Contact Me
        </Link>
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
