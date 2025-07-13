"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Brain, Zap, Target } from "lucide-react";

const About: React.FC<{}> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 },
  };

  return (
    <motion.section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden px-4 sm:px-8 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-pink-500/30 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-500/30 rounded-full" />
      </motion.div>

      <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-8"
          variants={itemVariants}
        >
          <motion.div
            variants={iconVariants}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
            data-aos="zoom-in"
          >
            <User className="w-6 h-6 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" data-aos="zoom-in">
            ABOUT ME
          </h1>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 mb-12"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
          <p className="tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-sm uppercase">
            Explore Now
          </p>
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <motion.div
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Expertise</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              As a passionate AI engineer, I thrive on the intricate balance between logic and innovation. 
              Currently immersed in the dynamic field of artificial intelligence, my expertise lies in 
              machine learning, object detection, and image classification.
            </p>
          </motion.div>

          <motion.div
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Innovation Focus</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I seamlessly integrate cutting-edge technologies with impactful solutions. 
              My journey involves translating concepts into robust machine learning models, 
              advancing object detection and image classification systems.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">IoT & Future Tech</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am also deeply interested in IoT, exploring how interconnected devices can enhance 
            intelligent systems. Constantly pushing the boundaries of innovation in AI and IoT, 
            I navigate the ever-evolving landscape of artificial intelligence.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
