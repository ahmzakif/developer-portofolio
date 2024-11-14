"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          title="ahmzakif logo"
          href="/"
          className="h-30 w-30 flex flex-row items-center"
        >
          <Image
            src="/Logo.svg"
            alt="Ahmad Zaki Firdaus - Developer"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`mt-4 flex flex-col items-start text-sm opacity-0 md:opacity-100 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 mt-10" : "opacity-0 md:opacity-100"
          } ${
            isMenuOpen ? "right-0 absolute top-10" : "absolute right-[-100%] top-0"
          } md:static md:flex-row md:space-x-4`}
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:ahmzakif@gmail.com")}
            className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
          >
            Contact
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
