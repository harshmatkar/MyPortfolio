import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-4 md:mb-0">
            Harshawardhan Matkar
          </h2>
          <div className="flex space-x-6">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Harshawardhan Matkar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
