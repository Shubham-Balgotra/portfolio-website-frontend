// src/Service/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    id: 1,
    name: "Starter Portfolio",
    price: 999,
    deliver: "2–3 days",
    features: [
      "1‑page React / Vite site (Home, About, Contact)",
      "Mobile‑responsive",
      "Hosted on Vercel sub‑domain",
    ],
  },
  {
    id: 2,
    name: "Professional Portfolio",
    price: 2999,
    deliver: "5 days",
    features: [
      "Up to 5 pages",
      "Custom color palette & basic logo",
      "Contact form (Nodemailer)",
      "Own domain mapping (client pays domain)",
    ],
  },
  {
    id: 3,
    name: "Business Website",
    price: 4999,
    deliver: "7–10 days",
    features: [
      "Up to 8 pages",
      "Blog module (static Markdown)",
      "Basic SEO meta & Google Analytics",
    ],
  },
  {
    id: 4,
    name: "E‑commerce Starter",
    price: 10999,
    deliver: "2–3 weeks",
    features: [
      "MERN storefront",
      "Admin add / edit products",
      "Payment gateway sandbox",
      "Up to 50 products & training video",
    ],
  },
];

const Services = ({ darkMode }) => {
  return (
    <section
      className={`min-h-screen mt-10 px-4 py-12 md:px-12 lg:px-24 xl:px-32 ${
        darkMode ? "bg-black text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        💼 Web Development Packages
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Choose a plan that fits your vision — custom, fast, and affordable.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`rounded-2xl shadow-lg hover:shadow-xl transition-all border ${
              darkMode ? "bg-gray-900 border-gray-700" : "bg-white"
            } flex flex-col`}
          >
            {/* Header */}
            <div className="p-6 border-b border-dashed">
              <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
              <p className="text-3xl font-bold text-blue-600">₹{p.price}</p>
              <p className="text-xs text-gray-400">Est. delivery — {p.deliver}</p>
            </div>

            {/* Feature list */}
            <ul className="flex-1 px-6 py-5 text-sm space-y-2">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 mt-[2px]">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="px-6 pb-6">
              <Link
                to={`/contact?plan=${encodeURIComponent(p.name)}`}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-md transition"
              >
                Contact to Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
