"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Code2, Briefcase, FolderOpen, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        // Only close menu if user is actively scrolling (not programmatic scroll)
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setIsMenuOpen(false);
        }
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

  const navItems = [
    { href: "/about", label: "ABOUT", icon: User },
    { href: "/skills", label: "SKILLS", icon: Code2 },
    { href: "/experience", label: "EXPERIENCE", icon: Briefcase },
    { href: "/projects", label: "PROJECTS", icon: FolderOpen },
  ];

  return (
    <motion.nav
      className="w-full h-[65px] bg-black/20 backdrop-blur-md fixed z-50 px-4 sm:px-10 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        
        <motion.div 
          className="h-30 w-30 flex flex-row items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="Ahmad Zaki Firdaus - Developer"
              width={100}
              height={100}
              priority
              sizes="100vw"
              className="w-auto h-auto"
            />
          </Link>
        </motion.div>

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
              <motion.div
                className="relative block px-4 py-2 text-md text-white transition-colors duration-300 hover:text-blue-400 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href}>
                  {item.label}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
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
          <motion.div
            className="group relative z-[1] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full text-white py-2 px-6 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <span className="block group-hover:invisible transition-opacity duration-200">Contact</span>
              <span className="hidden group-hover:flex absolute left-0 top-0 w-full h-full items-center animate-marquee-fast min-w-[200%] pointer-events-none">
                <span className="whitespace-nowrap px-6 uppercase text-2xl font-bold">CONTACT ME</span>
                <span className="whitespace-nowrap px-6 uppercase text-2xl font-bold">CONTACT ME</span>
              </span>
            </Link>
          </motion.div>
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
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.ul
              className="p-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
                  >
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      <motion.div
                        className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/50 text-white"
                            : "bg-white/[0.03] border-white/5 text-gray-300 hover:bg-white/[0.07] hover:border-blue-500/30 hover:text-white"
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex items-center justify-center w-9 h-9 rounded-lg ${
                              isActive
                                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                                : "bg-white/5 text-blue-400"
                            }`}
                          >
                            <Icon className="w-[18px] h-[18px]" />
                          </span>
                          <span className="text-sm font-medium tracking-wide">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </motion.div>
                    </Link>
                  </motion.li>
                );
              })}

              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + navItems.length * 0.08 }}
                className="pt-2"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    className="flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold shadow-lg shadow-blue-900/40"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Mail className="w-[18px] h-[18px]" />
                    <span className="text-sm tracking-wide">CONTACT ME</span>
                  </motion.div>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
