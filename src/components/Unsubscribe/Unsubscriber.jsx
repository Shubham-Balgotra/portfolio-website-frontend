import React, { useState, useEffect } from "react";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("loading"); // loading | confirm | success | error

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const userEmail = query.get("email");
    if (userEmail) {
      setEmail(userEmail);
      setStatus("confirm");
    } else {
      setStatus("error");
    }
  }, []);

  const handleUnsubscribe = async () => {
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) setStatus("success");
      else throw new Error("Failed");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center p-6 border rounded-md shadow-sm">
        {status === "loading" && <p>Loading...</p>}

        {status === "confirm" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Unsubscribe?</h2>
            <p className="mb-4 text-gray-600">
              You’re about to unsubscribe <strong>{email}</strong> from blog updates.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Confirm Unsubscribe
            </button>
          </>
        )}

        {status === "success" && (
          <p className="text-green-600 font-medium">
            You've been unsubscribed from future emails.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 font-medium">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
};

export default Unsubscribe;
