import React from "react";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const About = () => {
  return (
    <section className="mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto bg-gradient-to-r from-[#cc95c0] via-[#dbd4b4] to-[#7aa1d2] ">
      {/* <div className="max-w-4xl mx-auto p-6"> */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          About Me
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I'm{" "}
          <span className="font-semibold text-blue-600">Shubham Balgotra</span>,
          a self-taught MERN Stack Developer with a background in technical
          support and over{" "}
          <span className="font-medium">3.5 years of experience</span> in the
          e-governance sector. In my current role as a Technical Support
          Executive, I've successfully resolved more than{" "}
          <span className="font-medium">1,000 user-level issues</span>, helping
          streamline workflows for government departments.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          My journey into web development began from a desire to{" "}
          <span className="italic">create</span> and not just troubleshoot.
          Since then, I've built and deployed production-grade full-stack
          applications — from a modern e-commerce platform to a real-time news
          aggregator — using{" "}
          <span className="text-blue-600 font-medium">
            React, Node.js, MongoDB, and Tailwind CSS
          </span>
          .
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I’m passionate about problem-solving, clean code, and building
          user-focused products. Whether I'm designing a feature or debugging an
          issue, I thrive in environments that value growth, collaboration, and
          innovation.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          I’m now seeking opportunities where I can contribute to impactful
          projects, learn from talented teams, and grow into a more advanced
          developer — while delivering great user experiences along the way.
        </p>
        <br />
        <SocialMediaLinks />
      {/* </div> */}
    </section>
  );
};

export default About;
