import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = ({ className = "" ,darkMode}) => {
  return (
    <div className={`flex items-center space-x-4 ${darkMode?"text-gray-400":"text-gray-700"} text-base mt-4 ${className}`}>
      <p>
        I’m always looking to grow my network and showcase my work.
        Check out my
      </p>
      <a
        href="https://github.com/Shubham-Balgotra"
        target="_blank"
        rel="noopener noreferrer"
        className={`${darkMode?"hover:text-gray-600 text-xl":"hover:text-black text-xl"}`}
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <p>or</p>
      <a
        href="https://www.linkedin.com/in/shubham-balgotra-97b82518a"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 text-xl"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
