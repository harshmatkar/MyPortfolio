import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          HARSHAWARDHAN MATKAR
        </h1>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (for larger screens) */}
        <nav className="hidden lg:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Side Panel (for mobile screens) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 left-4 text-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col space-y-6 p-6">
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
