// // src/Service/Services.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const plans = [
//   {
//     id: 1,
//     name: "Starter Portfolio",
//     price: 999,
//     deliver: "2–3 days",
//     features: [
//       "1‑page React / Vite site (Home, About, Contact)",
//       "Fully mobile‑responsive design",
//       "Hosted on Vercel sub‑domain",
//     ],
//   },
//   {
//     id: 2,
//     name: "Professional Portfolio",
//     price: 2999,
//     deliver: "5 days",
//     features: [
//       "Up to 5 pages",
//       "Fully mobile‑responsive design",
//       "Hosted on Vercel(free) or hostinger(extra charges)",
//       "Custom color palette & basic logo",
//       "Contact form (Nodemailer)",
//       "Own domain mapping (client pays domain)",
//     ],
//   },
//   {
//     id: 3,
//     name: "Business Website",
//     price: 4999,
//     deliver: "7–10 days",
//     features: [
//       "Up to 8 pages",
//       "Fully mobile‑responsive design",
//       "Hosted on Vercel(free) or hostinger(extra charges)",
//       "Custom color palette & basic logo",
//       "Contact form (Nodemailer)",
//       "Blog module (static Markdown)",
//       "Basic SEO meta & Google Analytics",
//     ],
//   },
//   {
//     id: 4,
//     name: "E‑commerce Starter",
//     price: 10999,
//     deliver: "2–3 weeks",
//     features: [
//       "MERN storefront",
//       "Fully mobile‑responsive design",
//       "Hosted on Vercel(free) or hostinger(extra charges)",
//       "Custom color palette & basic logo",
//       "Contact form (Nodemailer)",
//       "Basic SEO meta & Google Analytics",
//       "Admin add / edit products",
//       "Payment gateway ",
//       "Up to 50 products & training video",
//     ],
//   },
// ];

// const Services = ({ darkMode }) => {
//   return (
//     <section
//       className={`min-h-screen mt-14 px-4 py-12 md:px-12 lg:px-24 xl:px-32 ${
//         // darkMode ? "bg-black text-gray-100" : "bg-gray-50 text-gray-800"
//          darkMode ? " text-gray-100" : " text-gray-800"
//       }`}
//     >
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
//         💼 Web Development Packages
//       </h1>
//       <p className="text-center text-gray-500 mb-12">
//         Choose a plan that fits your vision — custom, fast, and affordable.
//       </p>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
//         {plans.map((p) => (
//           <div
//             key={p.id}
//             className={`rounded-2xl shadow-lg hover:shadow-xl transition-all border ${
//               darkMode ? "bg-gray-900 border-gray-700" : "bg-white"
//             } flex flex-col`}
//           >
//             {/* Header */}
//             <div className="p-6 border-b border-dashed">
//               <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
//               <p className="text-3xl font-bold text-blue-600">₹{p.price}</p>
//               <p className="text-xs text-gray-400">Est. delivery — {p.deliver}</p>
//             </div>

//             {/* Feature list */}
//             <ul className="flex-1 px-6 py-5 text-sm space-y-2">
//               {p.features.map((f, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   <span className="text-green-500 mt-[2px]">✔</span>
//                   <span>{f}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <div className="px-6 pb-6">
//               <Link
//                 to={`/contact?plan=${encodeURIComponent(p.name)}`}
//                 className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-md transition"
//               >
//                 Contact to Order
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

// src/Service/Services.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/* 1 / Packages data – fleshed‑out feature lists                      */
/* ------------------------------------------------------------------ */
const plans = [
  {
    id: 1,
    name: "Starter Portfolio",
    price: 999,
    deliver: "2–3 days",
    features: [
      "1‑page React / Vite site (Home, About, Contact)",
      "Fully mobile‑responsive design",
      "Hosted on Vercel sub‑domain",
      "1 round of revisions",
      "Performance‑optimised",
      "Basic on‑page SEO (meta title/description)",
      "1 month of email support",
    ],
  },
  {
    id: 2, // Highlight as “Most popular”
    name: "Professional Portfolio",
    price: 2999,
    deliver: "5 days",
    features: [
      "Up to 5 pages",
      "Fully mobile‑responsive design",
      "Hosted on Vercel (free) or Hostinger (extra)",
      "Custom color palette & basic logo",
      "Contact form (Nodemailer)",
      "Own domain mapping (client pays domain)",
      "Hero‑section animation",
      "Static blog (Markdown)",
      "2 rounds of revisions",
      "Uptime & performance monitoring",
    ],
  },
  {
    id: 3,
    name: "Business Website",
    price: 4999,
    deliver: "7–10 days",
    features: [
      "Up to 8 pages",
      "Fully mobile‑responsive design",
      "Hosted on Vercel (free) or Hostinger (extra)",
      "Custom color palette & basic logo",
      "Contact form (Nodemailer)",
      "Blog module (static Markdown)",
      "Basic SEO meta & Google Analytics",
      "Headless CMS option",
      "Uptime & performance monitoring",
      "Advanced contact form (file uploads)",
      "Google PageSpeed report & fixes",
      "3 months of maintenance (bug/security)",
    ],
  },
  {
    id: 4,
    name: "E‑commerce Starter",
    price: 10999,
    deliver: "2–3 weeks",
    features: [
      "MERN storefront",
      "Fully mobile‑responsive design",
      "Hosted on Vercel (free) or Hostinger (extra)",
      "Custom color palette & basic logo",
      "Contact form (Nodemailer)",
      "Basic SEO meta & Google Analytics",
      "Admin add / edit products",
      "Payment gateway",
      "Up to 50 products & training video",
      "User auth with JWT ",
      "Inventory dashboard",
      "Coupon / discount codes",
      "Order email notifications",
      "Razorpay / Stripe / PayPal choice",
      "1 training videos",
      "6 months of priority support",
    ],
  },
];

/* ---------- 2 / PlanCard (unchanged) ------------------------------ */
const PlanCard = ({ plan, darkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const { id, name, price, deliver, features } = plan;
  const isPopular = id === 2;

  const featuresToShow = showAll ? features : features.slice(0, 5);
  const hasExtra = features.length > 5;

  return (
    <div
      className={`rounded-2xl shadow-lg hover:shadow-xl transition-all border
        ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white"}
        ${isPopular ? "ring-2 ring-blue-500" : ""} flex flex-col h-full`}
    >
      {/* Header */}
      <div className="p-6 border-b border-dashed relative">
        {isPopular && (
          <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-2 py-[2px] rounded-full shadow">
            ★ Most Popular
          </span>
        )}
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-3xl font-bold text-blue-600">₹{price}</p>
        <p className="text-xs text-gray-400">Est. delivery — {deliver}</p>
      </div>

      {/* Features */}
      <ul className="flex-1 px-6 py-5 text-sm space-y-2">
        {featuresToShow.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-[2px]" />
            <span>{f}</span>
          </li>
        ))}

        {hasExtra && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-blue-600 underline mt-1"
          >
            {showAll ? "Show less" : "Show all features"}
          </button>
        )}
      </ul>

      {/* CTA */}
      <div className="px-6 pb-6">
        <Link
          to={`/contact?plan=${encodeURIComponent(name)}`}
          className="block w-full text-center bg-gradient-to-r
            from-blue-600 to-blue-700 hover:to-blue-800
            text-white font-semibold py-2 rounded-md transition"
        >
          Start my project
        </Link>
      </div>
    </div>
  );
};

/* ---------- 3 / Wrapper section (flex instead of grid) ------------- */
const Services = ({ darkMode }) => {
  return (
    <section
      className={`min-h-screen mt-14 px-4 py-12 md:px-12 lg:px-24 xl:px-32
        ${darkMode ? "text-gray-100" : "text-gray-800"}`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        💼 Web Development Packages
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Choose a plan that fits your vision — custom, fast, and affordable.
      </p>

      {/* flex container */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="w-full sm:w-1/2 lg:w-1/4 flex"  {/* keeps equal column counts */}
          >
            <PlanCard plan={plan} darkMode={darkMode} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
