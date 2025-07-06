
import React, { useState } from "react";
import contactImg from "../../assets/contact.jpg";
import contactImgDark from "../../assets/contactDark.png";

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone)) {
      errs.phone = "Enter a 10-digit phone number.";
    }
    if (!form.message.trim()) {
      errs.message = "Message is required.";
    } else if (form.message.length < 10) {
      errs.message = "Message should be at least 10 characters.";
    }
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      try {
        const response = await fetch(
          "https://portfolio-website-backend-production-f66e.up.railway.app/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert("✅ Message sent successfully!");
          setForm({ fullName: "", email: "", phone: "", message: "" });
        } else {
          alert("❌ Failed to send message: " + data.message);
        }
      } catch (err) {
        console.error("Error submitting contact form:", err);
        alert("❌ Something went wrong. Try again later.");
      }
    }
  };

  return (
    // <section id="contact" className="relative min-h-screen mt-10 overflow-hidden">
    //   {/* Gradient Background */}
    //   <div
    //     className={`absolute inset-0 z-0 ${
    //       darkMode
    //         ? "bg-gradient-to-r from-[#000000] via-[#121b27] to-[#010d1b]"
    //         : "bg-gradient-to-r from-[#cc95c0] via-[#dbd4b4] to-[#7aa1d2]"
    //     }`}
    //   />

    //   {/* Background Image Layer */}
    //   <div
    //     className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
    //     style={{
    //       backgroundImage: `url(${darkMode ? contactImgDark : contactImg})`,
    //     }}
    //   />

    //   {/* Main Content */}
    //   <div className="relative z-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto">
    //     <h2
    //       className={`text-2xl md:text-3xl font-bold mb-6 border-b pb-2 ${
    //         darkMode ? "text-white" : "text-gray-800"
    //       }`}
    //     >
    //       Contact Me
    //     </h2>

    //     <div
    //       className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center backdrop-blur-sm p-10 rounded-xl shadow-2xl ${
    //         darkMode ? "bg-black/95 text-gray-300" : "bg-white/60 text-gray-800"
    //       }`}
    //       style={darkMode ? { opacity: 0.9 } : {}}
    //     >
    //       {/* Left Side Text */}
    //       <div className="text-left">
    //         <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
    //           Have a project in mind or just want to say hello? <br />
    //           Fill out the form and I’ll get back to you as soon as I can.
    //         </p>
    //         <br />
    //         <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
    //           You can also find my work and connect with me on GitHub and LinkedIn
    //           – see the About section.
    //         </p>
    //       </div>    <section
      id="contact"
      className={`mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto ${
        darkMode
          ? "bg-cover bg-center bg-no-repeat bg-gray-800 text-white"
          : "bg-cover bg-center bg-no-repeat text-gray-800"
      }`}
      style={
        !darkMode
          ? { backgroundImage: `url(${contactImg})` }
          : { backgroundImage: `url(${contactImgDark})` }
      }
    >
      <h2
        className={`text-2xl md:text-3xl font-bold  mb-6 border-b pb-2 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Contact Me
      </h2>
      {/* Optional Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-100 z-0"></div>

      <div
        className={`relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center             : "bg-white/60 text-gray-800"
         backdrop-blur-sm p-10 rounded-xl shadow-2xl ${darkMode?"bg-black/95":"bg-white/25"}`}
        style={darkMode ? { opacity: 0.9 } : {}}
      >
        {/* Left: Contact Title */}
        <div className="text-left">
          {/* <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2> */}
          <p
            className={`${
              darkMode ? "text-gray-300 " : "text-gray-700 "
            }text-lg`}
          >
            Have a project in mind or just want to say hello? <br />
            Fill out the form and I’ll get back to you as soon as I can.
          </p>
          <br />
          <p
            className={`${
              darkMode ? "text-gray-300 " : "text-gray-700 "
            }text-lg`}
          >
            You can also find my work and connect with me on Github and LinkedIn
            - see the About section.
          </p>
        </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode ? "text-gray-400" : ""
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode ? "text-gray-400" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode ? "text-gray-400" : ""
                  }`}
                  maxLength={10}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode ? "text-gray-400" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
