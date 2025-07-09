import { FaGithub, FaLinkedin,FaTwitter,FaPinterest,FaInstagram,FaMedium } from "react-icons/fa";

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
{/*       <p>or</p> */}
      <a
        href="https://x.com/BalgotraShubham/"
        target="_blank"
        rel="noopener noreferrer"
         className={`${darkMode?"hover:text-gray-600 text-xl":"hover:text-black text-xl"}`}
        aria-label="Twitter"
        title="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/shubham-balgotra"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 text-xl"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://medium.com/@shubhambalgotra1/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${darkMode?"hover:text-gray-600 text-xl":"hover:text-black text-xl"}`}
        aria-label="Medium"
        title="Medium"
      >
        <FaMedium />
      </a>
      <a
        href="https://in.pinterest.com/shubhambalgotra/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${darkMode?"hover:text-gray-600 text-xl":"hover:text-red-500 text-xl"}`}
        aria-label="Pinterest"
        title="Pinterest"
      >
        <FaPinterest />
      </a>
      <a
        href="https://www.instagram.com/shubhambalgotra/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${darkMode?"hover:text-gray-600 text-xl":"hover:text-pink-500 text-xl"}`}
        aria-label="Instagram"
        title="Instagram"
      >
        <FaInstagram />
      </a>
        {/* Gmail */}
        <a
          href="mailto:shubhambalgotra1@gmail.com"
          className={`transition-colors ${
            darkMode
              ? "text-white hover:text-red-500"
              : "text-gray-600 hover:text-red-500"
          }`}
          
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512">
            <path d="M502.3 190.8c6.2 4.9 9.7 12.4 9.7 20.4v212c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V211.2c0-8 3.6-15.5 9.7-20.4L241 67.4c11.3-9 27.7-9 39 0l222.3 123.4zM256 295.1L46.2 176.7 26.8 193.5 256 336l229.2-142.5-19.4-16.8L256 295.1z" />
          </svg>
        </a>
      
    </div>
  );
};

export default SocialMediaLinks;
