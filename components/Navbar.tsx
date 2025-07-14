"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
      const navbarHeight = 65; // atau samakan dengan className h-[65px]
      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#projects", label: "PROJECTS" },
  ];

  return (
    <motion.nav
      className="w-full h-[65px] bg-black/20 backdrop-blur-md fixed z-50 px-4 sm:px-10 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        
        <motion.a 
          href="/" 
          className="h-30 w-30 flex flex-row items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/Logo.svg"
            alt="Ahmad Zaki Firdaus - Developer"
            width={100}
            height={100}
            priority
            sizes="100vw"
            className="w-auto h-auto"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex flex-row items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <motion.a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href.slice(1))}
                className="relative block px-4 py-2 text-md text-white transition-colors duration-300 hover:text-blue-400 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Contact Button */}
        <motion.div 
          className="hidden md:flex flex-row gap-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="group relative z-[1] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full text-white py-2 px-6 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="block group-hover:invisible transition-opacity duration-200">Contact</span>
            <span className="hidden group-hover:flex absolute left-0 top-0 w-full h-full items-center animate-marquee-fast min-w-[200%] pointer-events-none">
              <span className="whitespace-nowrap px-6 uppercase text-2xl font-bold">CONTACT ME</span>
              <span className="whitespace-nowrap px-6 uppercase text-2xl font-bold">CONTACT ME</span>
            </span>
          </motion.a>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <motion.button
          className="md:hidden flex items-center justify-center p-2 text-white relative z-50"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.ul 
              className="py-6 px-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                <motion.a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href.slice(1))}
                  className="block px-4 py-3 text-white hover:text-blue-400 transition-colors duration-300 border-l-2 border-transparent hover:border-blue-500"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <motion.a
                  href="/#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-medium text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONTACT
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
