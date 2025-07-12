import React from "react";
import chinmay from "../../assets/testimonial/chinmay.jpeg";
import geetanjali from "../../assets/testimonial/geetanjali.jpeg";
const testimonials = [
  {
    name: "Geetanjali Joshi",
    role: "Manager IT,JakeGa", 
    image: geetanjali, // put the image in public/images/
    text: "Shubham is incredibly dedicated. I’ve seen him transition from tech support to full-stack development with consistent effort and passion. Proud of his journey!",
  },
  {
    name: "Chinmay Khiller",
    role: "Team Leader,Taskus",
    image: chinmay,
    text: "His attention to detail and eagerness to learn is amazing. If you’re looking for someone committed to delivering quality, Shubham is that person!",
  },
];

const Testimonial = ({ darkMode }) => {
  return (
    <section
      className={`w-full px-4 py-14 md:px-12 lg:px-24 xl:px-48 max-w-screen mx-auto ${
        darkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        💬 What People Say About Me
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-gray-200"

              />
              <div className="ml-4">
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
