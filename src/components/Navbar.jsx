import React, { useState } from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/images/github.png"; // Import GitHub icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#e4f3a6] text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Jomi</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <a
            href="https://www.linkedin.com/in/jomiloju-okuwobi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/oJomiloju"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-6 h-6 flex justify-center items-center focus:outline-none"
          >
            {!isOpen && (
              <div
                className="flex flex-col justify-between w-full h-full absolute transition-transform duration-500 ease-in-out scale-100"
                style={{ transformOrigin: "center" }}
              >
                <span className="block w-full h-0.5 bg-black"></span>
                <span className="block w-full h-0.5 bg-black"></span>
              </div>
            )}

            {isOpen && (
              <div
                className="absolute scale-100 transition-transform duration-500 ease-in-out"
                style={{ transformOrigin: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#e4f3a6] flex flex-col justify-center items-center text-2xl font-bold z-50 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {/* Menu Links */}
        <Link
          to="/"
          className="py-4 hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <a
          href="https://www.linkedin.com/in/jomiloju-okuwobi/"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 hover:underline"
          onClick={() => setIsOpen(false)}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/oJomiloju"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 hover:underline"
          onClick={() => setIsOpen(false)}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
