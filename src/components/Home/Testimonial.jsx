import React from "react";
import chinmay from "../../assets/testimonial/chinmay.jpeg";
import geetanjali from "../../assets/testimonial/geetanjali.jpeg";

const testimonials = [
  {
    name: "Geetanjali Joshi",
    role: "Manager IT, JakeGa",
    image: geetanjali,
    text: "Shubham is incredibly dedicated. I’ve seen him transition from tech support to full-stack development with consistent effort and passion. Proud of his journey!",
  },
  {
    name: "Chinmay Khiller",
    role: "Team Leader, Taskus",
    image: chinmay,
    text: "His attention to detail and eagerness to learn is amazing. If you’re looking for someone committed to delivering quality, Shubham is that person!",
  },
];

const Testimonial = ({ darkMode }) => {
  return (
    <section
      className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-14 lg:py-16 flex justify-center ${
        darkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`
          w-full max-w-[90%] sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1400px] 2xl:max-w-[1600px]
          scale-[0.92] sm:scale-[0.95] md:scale-[0.98] lg:scale-100 xl:scale-[1.04] 2xl:scale-[1.08] custom-3xl:scale-[1.12]
          transition-transform duration-500 ease-in-out
        `}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          💬 What People Say About Me
        </h2>

        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 sm:p-6 md:p-8 shadow-md transition-shadow hover:shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover object-top border-2 border-gray-200"
                />
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-semibold text-base sm:text-lg md:text-xl">{t.name}</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom scale for 1920px and up */}
      <style>{`
        @media (min-width: 1920px) {
          .custom-3xl\\:scale-\\[1\\.12\\] {
            transform: scale(1.12);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
