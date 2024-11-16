"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div
      className={`w-full h-[65px] bg-[#111] fixed backdrop-blur-sm z-50 px-4 sm:px-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <a title="ahmzakif logo" href="/" className="h-30 w-30 flex flex-row items-center">
          <Image
            src="/images/Logo.svg"
            alt="Ahmad Zaki Firdaus - Developer"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row items-center space-x-4 md:space-x-4" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex flex-row gap-5">
          <a
            href="/#contact"
            className="z-[1] bg-[#2E2E2E] padding-10 cursor-pointer hover:bg-white hover:text-black rounded-xl text-white py-2 px-5 alive"
          >
            Contact
          </a>
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-16 right-0 bg-transparent z-50 w-[180px] py-5 px-4 text-right">
          <li className="menu-item">
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline text-white" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline text-white" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline text-white" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline text-white" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              href="/#contact"
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-white"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
