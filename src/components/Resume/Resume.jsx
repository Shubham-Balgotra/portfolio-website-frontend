import React from "react";
import resume from "../../assets/ShubhamBalgotra.pdf";

const Resume = ({ darkMode }) => {
  return (
    <section
      className={`mt-10 w-full px-4 py-10 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto`}
    >
      <h2
        className={`text-2xl md:text-3xl font-bold mb-6 border-b pb-2 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Resume
      </h2>

      <div
        className={`max-w-6xl mx-auto ${
          darkMode ? "bg-black text-gray-300" : "bg-white"
        } shadow-lg rounded-lg p-8`}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Shubham Balgotra
          </h1>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            MERN Stack Developer | Technical Support Executive | Building
            Real-World Full-Stack & ML Projects
          </p>
          <p className="text-gray-500 mt-1">
            Jammu, India • +91-7889574065 •{" "}
            <a
              href="mailto:shubhambalgotra1@gmail.com"
              className="text-blue-600 underline"
            >
              shubhambalgotra1@gmail.com
            </a>
          </p>
          <div className="flex gap-4 mt-2 flex-wrap">
            <a
              href="https://github.com/Shubham-Balgotra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://in.linkedin.com/in/shubham-balgotra-97b82518a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://shubhambalgotra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Portfolio
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
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Professional Summary
          </h2>
          <p
            className={`${
              darkMode
                ? "text-gray-400"
                : "text-gray-700 border-b border-gray-300 pb-4"
            }`}
          >
            Technical Support Executive with 3+ years of experience in supporting
            and optimizing e-governance systems for government organizations.
            Now transitioning into a MERN Stack Developer, with proven ability to
            design, build, and deploy real-world web applications. Known for
            quick problem-solving, rapid learning, and delivering end-to-end
            solutions that align with business needs. Bringing a unique blend of
            technical support expertise and modern full-stack development skills
            to create impactful digital solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Technical Skills
          </h2>
          <ul
            className={`list-disc list-inside ${
              darkMode ? "text-gray-400" : "text-gray-700"
            } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 border-b border-gray-300 pb-4`}
          >
            <li>
              <span className="font-bold">Frontend:</span> React.js, Next.js,
              JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
            </li>
            <li>
              <span className="font-bold">Backend:</span> Node.js, Express.js,
              MongoDB, Firebase
            </li>
            <li>
              <span className="font-bold">Tools & Deployment:</span> VS Code,
              Git, GitHub, Postman, Hostinger, Vercel, Render, Railway, etc.
            </li>
            <li>
              <span className="font-bold">Other:</span> REST APIs, JWT, DMS
              (Document Management System), Python (ML basics libraries)
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Projects</h2>

          <div className="mb-4">
            <h3 className="font-bold">Claim & Carry – E-commerce App</h3>
            <div className="flex gap-4 text-sm text-blue-600 mt-1">
              <a
                href="https://claimandcarry.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Live
              </a>
              <a
                href="https://github.com/Shubham-Balgotra/ecommerce"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-700"
              } mt-2`}
            >
              A full-stack e-commerce platform with user auth, product catalog,
              cart, address, and Stripe sandbox payment integration.
              <br />• React.js frontend with Tailwind CSS, responsive UI
              <br />• Node.js & Express backend, MongoDB database
              <br />• JWT authentication, Vercel + Render deployment
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">AroundUs – News Aggregator App</h3>
            <div className="flex gap-4 text-sm text-blue-600 mt-1">
              <a
                href="https://aroundus.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Live
              </a>
              <a
                href="https://github.com/Shubham-Balgotra/news-app"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-700"
              } mt-2`}
            >
              Built with NewsAPI integration to display trending and categorized
              news articles in a clean, responsive layout.
              <br />• React with Context API for state management
              <br />• Responsive cards UI, API error handling
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">SheStyle – E-commerce App</h3>
            <div className="flex gap-4 text-sm text-blue-600 mt-1">
              <a
                href="https://shestyle.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Live
              </a>
              <span className="text-gray-500">Ongoing project…</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Professional Experience
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">
              Technical Support Executive – Net Creative Mind Pvt. Ltd.
            </h3>
            <p className="text-sm text-gray-500">Jan 2022 – Present</p>
            <ul
              className={`list-disc list-inside ${
                darkMode ? "text-gray-400" : "text-gray-700"
              } mt-2 space-y-1 border-b border-gray-300 pb-4`}
            >
              <li>
                Delivered 1,000+ successful issue resolutions with a 90%
                first-contact fix rate, boosting user satisfaction.
              </li>
              <li>
                Administered user roles, permissions, and access control for
                E-Office & HRMS portals, ensuring smooth operations.
              </li>
              <li>
                Designed and conducted DMS training sessions for 250+ employees,
                enhancing productivity and adoption.
              </li>
              <li>
                Led a team of 7 Customer Service agents, cutting average
                handling time by 20% through process optimization.
              </li>
              <li>
                Collaborated with cross-functional teams to identify,
                troubleshoot, and resolve critical system-level bugs and
                escalations.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="font-bold">
              Bachelor of Technology (B.Tech) – Computer Science
            </h3>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              } text-sm`}
            >
              Himachal Pradesh Technical University (HPTU) – Vaishno Group of
              Colleges | Aug 2017 – Feb 2020 | CGPA: 7.8 / 10
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              Diploma in Computer Science & Engineering
            </h3>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              } text-sm border-b border-gray-300 pb-4`}
            >
              J&K State Board of Technical Education – NITS Polytechnic | Apr
              2014 – Aug 2017 | Percentage: 75%
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Languages
          </h2>
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-700"
            } mt-2`}
          >
            English, Hindi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;

