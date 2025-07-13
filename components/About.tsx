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
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-green-500/30 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-500/30 rounded-full" />
      </motion.div>

      <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={itemVariants}
        >
          <motion.div
            variants={iconVariants}
            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center"
            data-aos="zoom-in"
          >
            <User className="w-6 h-6 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" data-aos="zoom-in">
            ABOUT ME
          </h1>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 mb-6"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
          <p className="tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 text-sm uppercase">
            Explore Now
          </p>
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
        </motion.div>

        <motion.p 
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Passionate AI Engineer specializing in Generative AI and Machine Learning, 
          focused on creating innovative solutions that bridge the gap between human creativity and artificial intelligence. 
          I am deeply committed to advancing the field of AI while building practical, impactful applications.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-6"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <motion.div
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              As a dedicated AI Engineer, my primary focus is on <span className="text-blue-400 font-semibold">Generative AI</span>—from large language models (LLMs) to generative vision and creative AI systems. I specialize in building, fine-tuning, and deploying generative models that can create, assist, and inspire.
            </p>
          </motion.div>

          <motion.div
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I build robust, scalable applications using modern technologies like React, Next.js, Node.js, and Python. My expertise spans from frontend user experiences to backend API development and database design.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Generative AI & Future Vision</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            My mission is to advance the field of Generative AI, enabling machines to create, assist, and inspire. I am always exploring new frontiers in AI, from creative content generation to intelligent automation, and am committed to continuous learning and innovation in this rapidly evolving space.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
