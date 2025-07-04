import React from "react";
import resume from '../../assets/ShubhamBalgotra.pdf'
const Resume = () => {
  return (
    <section className="mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto bg-gradient-to-r from-[#cc95c0] via-[#dbd4b4] to-[#7aa1d2] ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Resume</h2>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Shubham Balgotra</h1>
          <p className="text-gray-600">
            MERN Stack Developer | Technical Support Executive | Real-World Full-Stack & ML Projects
          </p>
          <p className="text-gray-500 mt-1">
            Jammu, India •{" "}
            <a href="mailto:shubhambalgotra1@gmail.com" className="text-blue-600 underline">
              shubhambalgotra1@gmail.com
            </a>
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/Shubham-Balgotra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="https://in.linkedin.com/in/shubham-balgotra-97b82518a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </div>

          {/* Resume Buttons */}
          <div className="mt-4 flex gap-4 flex-wrap border-b border-gray-300 pb-4">
            <a
              href={resume}
              download
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-blue-700 px-6 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Preview Resume
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Professional Summary</h2>
          <p className="text-gray-700  border-b border-gray-300 pb-4">
            Technical Support Executive with 3+ years of experience supporting e-governance systems for government
            organizations. Currently transitioning into a MERN Stack Developer with hands-on experience in building and
            deploying real-world web applications. Strong in troubleshooting, self-learning, and end-to-end application
            development.
          </p>
        </div>

        {/* Experience */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Professional Experience</h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Technical Support Executive – Net Creative Mind Pvt. Ltd.</h3>
            <p className="text-sm text-gray-500">Jan 2022 – Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1  border-b border-gray-300 pb-4">
              <li>Resolved 1,000+ user-level issues with 90% first-time resolution rate</li>
              <li>Managed user roles and access in E-Office & HRMS portals</li>
              <li>Conducted DMS training for 250+ employees</li>
              <li>Contributed to backend testing and documentation of 10+ core e-Services modules</li>
              <li>Collaborated with teams to resolve system-level bugs and escalations</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Projects</h2>

          <div className="mb-4">
            <h3 className="font-bold">Claim & Carry – E-commerce App</h3>
            <div className="flex gap-4 text-sm text-blue-600 mt-1">
              <a href="https://claimandcarry.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">
                Live App
              </a>
              <a href="https://github.com/Shubham-Balgotra/ecommerce" target="_blank" rel="noreferrer" className="hover:underline">
                GitHub Repo
              </a>
            </div>
            <p className="text-gray-700 mt-2">
              Full-stack e-commerce platform with user auth, product catalog, cart, address, and Stripe payment integration.
              Built using React.js, Node.js, MongoDB, Tailwind CSS, JWT, and deployed with Vercel + Render.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">AroundUs – News Aggregator App</h3>
            <div className="flex gap-4 text-sm text-blue-600 mt-1">
              <a href="https://aroundus.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">
                Live App
              </a>
              <a href="https://github.com/Shubham-Balgotra/news-app" target="_blank" rel="noreferrer" className="hover:underline">
                GitHub Repo
              </a>
            </div>
            <p className="text-gray-700 mt-2  border-b border-gray-300 pb-4">
              Responsive news app that fetches trending and categorized articles via NewsAPI. Built with React, Tailwind
              CSS, and Context API for state management.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 border-b border-gray-300 pb-4">
            <li>React.js, JavaScript, HTML5, CSS3, Tailwind CSS</li>
            <li>Node.js, Express.js, MongoDB, Firebase</li>
            <li>REST APIs, JWT, Git, GitHub, Postman</li>
            <li>Vercel, Render, VS Code, DMS</li>
            <li>Python (ML basics)</li>
          </ul>
        </div>

        {/* Education */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Education</h2>

          <div className="mb-4">
            <h3 className="font-bold">Bachelor of Technology (B.Tech) – Computer Science</h3>
            <p className="text-sm text-gray-500">HPTU – Vaishno Group of Colleges | 2017 – 2020 | CGPA: 7.8 / 10</p>
          </div>

          <div>
            <h3 className="font-bold">Diploma in Computer Science & Engineering</h3>
            <p className="text-sm text-gray-500  border-b border-gray-300 pb-4">
              J&K State Board of Technical Education – NITS Polytechnic | 2014 – 2017 | Percentage: 75%
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Languages</h2>
          <p className="text-gray-700">English, Hindi</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
