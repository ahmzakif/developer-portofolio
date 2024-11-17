"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false); 
        setIsAnimating(false); 
      }, 800); 
    } else {
      setIsMenuOpen(true); 
    }
  };

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
  
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
  
      setIsMenuOpen(false);
    }
  };
  

  return (
    <div
      className={`w-full h-[65px] bg-[#111] fixed backdrop-blur-sm z-50 px-4 sm:px-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        
        <a href="/" className="h-30 w-30 flex flex-row items-center">
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
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleLinkClick(e, "skills")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleLinkClick(e, "experience")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "projects")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex flex-row gap-5">
          <a
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
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
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-0 left-0 w-full h-[3px] block bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-[10.5px]" : ""
              }`}
            ></span>
            <span
              className={`absolute top-[10px] left-0 w-full h-[3px]  block bg-white transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "scale-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[3px]  block bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-[10.5px]" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <ul className={`md:hidden absolute top-16 right-0 bg-gradient-to-r from-gray-900/100 to-transparent rounded-[1.1rem] z-50 w-[140px] py-5 px-4 text-center ${
          isAnimating ? "menu-item-exit" : ""
          }`}
        >
          <li className={`menu-item ${isAnimating ? "menu-item-exit" : ""}`}>
            <a 
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-white">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li className={`menu-item ${isAnimating ? "menu-item-exit" : ""}`}>
            <a 
              href="#skills" 
              onClick={(e) => handleLinkClick(e, "skills")} 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-white">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li className={`menu-item ${isAnimating ? "menu-item-exit" : ""}`}>
            <a 
              href="#experience" onClick={(e) => handleLinkClick(e, "experience")} 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-white">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li className={`menu-item ${isAnimating ? "menu-item-exit" : ""}`}>
            <a 
              href="#projects" 
              onClick={(e) => handleLinkClick(e, "projects")} 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-white">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
          <li className={`menu-item ${isAnimating ? "menu-item-exit" : ""}`}>
            <a
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-white"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
