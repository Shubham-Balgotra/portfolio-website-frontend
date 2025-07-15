import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/* 1 / Packages data – fleshed‑out feature lists                      */
/* ------------------------------------------------------------------ */
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
//       "1 round of revisions",
//       "Performance‑optimised",
//       "Basic on‑page SEO (meta title/description)",
//       "1 month of email support",
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
//       "Hosted on Vercel (free) or Hostinger (extra)",
//       "Custom color palette & basic logo",
//       "Contact form (Nodemailer)",
//       "Own domain mapping (client pays domain)",
//       "Hero‑section animation",
//       "Static blog (Markdown)",
//       "2 rounds of revisions",
//       "Uptime & performance monitoring",
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
//       "Hosted on Vercel (free) or Hostinger (extra)",
//       "Custom color palette & basic logo",
//       "Contact form (Nodemailer)",
//       "Blog module (static Markdown)",
//       "Basic SEO meta & Google Analytics",
//       "Uptime & performance monitoring",
//       "Advanced contact form (file uploads)",
//       "Google PageSpeed report & fixes",
//       "3 months of maintenance (bug/security)",
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
//       "Hosted on Vercel (free) or Hostinger (extra)",
//       "Custom color palette & basic logo",
//       "Contact form (Nodemailer)",
//       "Basic SEO meta & Google Analytics",
//       "Admin add / edit products",
//       "Payment gateway",
//       "Up to 50 products & training video",
//       "User auth with JWT ",
//       "Inventory dashboard",
//       "Razorpay / Stripe / PayPal choice",
//       "1 training videos",
//       "6 months of priority support",
//     ],
//   },
// ];
const plans = [
  {
    id: 1,
    name: "Starter Portfolio",
    price: 999,
    deliver: "2–3 days",
    features: [
      "1‑page React / Vite site (Home, About, Contact)",
      "Fully mobile‑responsive design",
      "Hosted on Vercel sub‑domain (free)",
      "1 round of revisions",
      "Basic performance setup",
      "On‑page SEO (title & description)",
      "1 month of email support",
    ],
  },
  {
    id: 2,
    name: "Professional Portfolio",
    price: 2999,
    deliver: "5 days",
    features: [
      "Up to 5 pages (React + Tailwind)",
      "Fully mobile‑responsive design",
      "Hosted on Vercel (free) or Hostinger (extra)",
      "Custom color palette & basic logo",
      "Contact form with Nodemailer",
      "Client's domain mapping (optional)",
      "Simple hero animation",
      "Static blog setup (Markdown)",
      "2 rounds of revisions",
    ],
  },
  {
    id: 3,
    name: "Business Website",
    price: 4999,
    deliver: "7–10 days",
    features: [
      "Up to 8 pages (React + Tailwind)",
      "Fully mobile‑responsive design",
      "Hosted on Vercel or Hostinger (client pays)",
      "Contact form (Nodemailer)",
      "Including Blog system with slugs",
      "Basic SEO & Google Analytics",
      "Simple CMS workflow using Markdown",
      "3 months bug fixing support",
    ],
  },
  {
    id: 4,
    name: "E‑commerce Starter",
    price: 10999,
    deliver: "2–3 weeks",
    features: [
      "MERN-based product store",
      "Fully mobile‑responsive design",
      "Admin panel to add/edit/delete products",
      "Payment integration (Razorpay/Stripe – test)",
      "Up to 50 products pre-listed",
      "Basic user authentication",
      "Training video for usage",
      "6 months of basic support",
    ],
  },
  {
  id: 5,
  name: "Custom Plan",
  price: "—",
  deliver: "Flexible",
  features: [
    "Tailored features based on your business needs",
    "Flexible page count, layout, and branding",
    "Choose your own tech stack (React / MERN / Blog / Ecommerce/ Restaurant)",
    "Guided scoping call or email consultation",
    "Custom timeline and cost based on complexity",
    "You explain, I build – crafted just for your idea",
  ],
}

];

/* ---------- 2 / PlanCard (updated to remove h-full) ------------------------------ */
const PlanCard = ({ plan, darkMode, showAll, toggleShowAll }) => {
  const { id, name, price, deliver, features } = plan;
  const isPopular = id === 2;

  const featuresToShow = showAll ? features : features.slice(0, 5);
  const hasExtra = features.length > 5;

  return (
    className={`
  rounded-2xl shadow-lg hover:shadow-xl transition-all border
  ${darkMode ? "bg-gray-950 border-gray-700" : "bg-white"}
  ${isPopular ? "ring-2 ring-blue-500" : ""}
  flex flex-col
`}

      {/* Header */}
      <div className="p-6 border-b border-dashed relative">
        {isPopular && (
          <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-2 py-[2px] rounded-full shadow">
            ★ Most Popular
          </span>
        )}
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-3xl font-bold text-blue-600">
          {price === "—" ? "Custom" : ₹${price}}
        </p>
        <p className="text-xs text-gray-400">Est. delivery — {deliver}</p>
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
            onClick={toggleShowAll}
            className="text-xs text-blue-600 underline mt-1"
          >
            {showAll ? "Show less" : "Show all features"}
          </button>
        )}
      </ul>

      {/* CTA */}
      <div className="px-6 pb-6">
        <Link
          to={/contact?plan=${encodeURIComponent(name)}}
          className="block w-full text-center bg-gradient-to-r
          from-blue-600 to-blue-700 hover:to-blue-800
          text-white font-semibold py-2 rounded-md transition"
        >
          {name === "Custom Plan" ? "Request Custom Quote" : "Contact to Order"}
        </Link>
      </div>
    </div>
  );
};
/* ------------------------------------------------------------------ */
/* 3 / Services section                                               */
/* ------------------------------------------------------------------ */
const Services = ({ darkMode }) => {
  const [showAllStates, setShowAllStates] = useState({});

  const toggleShowAll = (planId) =>
    setShowAllStates((prev) => ({ ...prev, [planId]: !prev[planId] }));

  return (
    <section
      className={`min-h-screen mt-14 px-4 py-12 md:px-12 lg:px-24 xl:px-32
        ${darkMode ? "text-gray-100" : "text-gray-800"}`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        💼 Web Development Packages
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Choose a plan that fits your vision — custom, fast, and affordable.
      </p>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid gap-8
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            darkMode={darkMode}
            showAll={showAllStates[plan.id] || false}
            toggleShowAll={() => toggleShowAll(plan.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
