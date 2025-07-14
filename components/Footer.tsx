"use client";

import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer: React.FC<{}> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className="relative bg-black/20 backdrop-blur-sm border-t border-white/10 px-4 sm:px-8 lg:px-20 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 border border-blue-500/30 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-green-500/30 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <div className="flex gap-6">
            {Social_Icons.map((social, index) => (
              <motion.div
                key={social.alt + '-' + index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block p-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                >
                  <Image
                    src={social.image}
                    height={24}
                    width={24}
                    alt={social.alt}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-gray-300 text-sm mb-4">
            © 2025 | Developed
            <motion.span
              className="inline-block text-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
            </motion.span>{" "}
            by{" "}
              <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                ahmzakif
              </span>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Link
              target="_blank"
              href="https://nextjs.org/"
              className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors duration-300"
            >
              <Image
                src="/icon/nextwhite.svg"
                alt="Next.js Logo"
                width={45}
                height={45}
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div 
          className="flex justify-center mt-8"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
