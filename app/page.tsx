"use client";

import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skilss";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main 
      className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-20">
        <motion.div variants={sectionVariants}>
          <Banner />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </div>
    </motion.main>
  );
}
