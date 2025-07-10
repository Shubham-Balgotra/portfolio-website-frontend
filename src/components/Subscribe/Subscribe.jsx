
import React, { useState } from "react";
const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;
const Subscribe = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); // 🔸 Add error state

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError(""); // Clear any old errors

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch(`${backendURL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json(); // 🔸 Parse response

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
        setError(""); // Clear error if successful
      } else {
        setError(data.error || "Subscription failed");
      }
    } catch (err) {
      console.error("Subscription failed", err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <section
      className={`w-full ${
        darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-gray-800"
      } px-4 py-10 md:py-14 lg:py-20 sm:py-14`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          📬 Get new blog posts in your inbox — subscribe now
        </h2>

        {submitted ? (
          <p className="text-green-500 font-medium">You're subscribed! Thank you.</p>
        ) : (
          <>
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

            {error && (
              <p className="text-red-500 font-medium mt-3">{error}</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Subscribe;

