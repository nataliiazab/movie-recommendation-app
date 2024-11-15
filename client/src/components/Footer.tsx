import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm font-light">
            &copy; {new Date().getFullYear()} Movie App. All rights reserved.
          </p>
        </div>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#privacy"
            className="text-sm hover:text-gray-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-sm hover:text-gray-400 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
