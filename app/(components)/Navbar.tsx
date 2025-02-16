/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md p-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75"
            alt="logo"
            width={30}
            height={30}
          />
          <h6 className="text-black dark:text-white font-extrabold text-lg">
            Aceternity UI
          </h6>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-black dark:hover:text-white">
            Components
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Templates
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Pricing
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Showcase
          </a>
        </div>

        {/* Dark Mode Toggle */}
     

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="p-4 space-y-4 text-gray-700 dark:text-gray-300">
          <li>
            <a href="#" className="block hover:text-black dark:hover:text-white">
              Components
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-black dark:hover:text-white">
              Templates
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-black dark:hover:text-white">
              Showcase
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-black dark:hover:text-white">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
