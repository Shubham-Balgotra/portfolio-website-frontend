import React, { useState } from "react";

const Subscribe = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch (err) {
      console.error("Subscription failed", err);
    }
  };

  return (
    <section
      className={`w-full ${
        darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-gray-800"
      } px-4 py-10 md:py-14 lg:py-20 sm:py-14`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">📬 Get new blog post updates in your inbox — subscribe now.</h2>

        {submitted ? (
          <p className="text-green-500 font-medium">You're subscribed! Thank you.</p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className={`w-full sm:max-w-md px-4 py-2 rounded-md border ${
                darkMode
                  ? "bg-gray-900 text-gray-200 border-gray-700"
                  : "bg-white text-gray-800 border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
