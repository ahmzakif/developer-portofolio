"use client";

import { skillsImage } from '@/utils/skill-image';
import { skillsData } from '@/utils/skills';
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Code, Zap, Brain } from "lucide-react";

const Skilss = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section 
      id="skills"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        variants={itemVariants}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Code className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            SKILLS
          </h2>
        </motion.div>
        
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          variants={itemVariants}
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
          <p className="tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-sm uppercase">
            Explore Now
          </p>
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <motion.p 
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          My technical expertise spans across modern web technologies, AI/ML frameworks, 
          and cutting-edge development tools that enable me to build innovative solutions.
        </motion.p>
      </motion.div>

      {/* Skills Categories */}
      <motion.div 
        className="grid md:grid-cols-3 gap-8 mb-16"
        variants={itemVariants}
      >
        <motion.div
          className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
          variants={skillCardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Frontend & Web</h3>
          </div>
          <p className="text-gray-300 text-sm">
            React, Next.js, TypeScript, Tailwind CSS, and modern web technologies
          </p>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
          variants={skillCardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
          </div>
          <p className="text-gray-300 text-sm">
            TensorFlow, PyTorch, OpenCV, YOLO, and computer vision technologies
          </p>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
          variants={skillCardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">IoT & Hardware</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Arduino, Raspberry Pi, embedded systems, and IoT development
          </p>
        </motion.div>
      </motion.div>

      {/* Skills Marquee */}
      <motion.div 
        className="w-full"
        variants={itemVariants}
      >
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
          
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            className="py-8"
          >
            {skillsData.map((skill, id) => (
              <motion.div 
                key={id}
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center m-3 sm:m-5 rounded-xl group relative cursor-pointer bg-black/20 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: id * 0.1 }}
              >
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <motion.div 
                    className="h-12 w-12 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={skillsImage(skill)}
                      alt={skill}
                      width={48}
                      height={48}
                      className="h-full w-auto rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                  <p className="text-gray-300 text-sm font-medium text-center group-hover:text-purple-400 transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </motion.div>

      {/* Skills Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
        variants={itemVariants}
      >
        {[
          { number: "1.5+", label: "Years Experience" },
          { number: "5+", label: "Projects Completed" },
          { number: "15+", label: "Technologies" },
          // { number: "100%", label: "Client Satisfaction" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
            variants={skillCardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            >
              {stat.number}
            </motion.div>
            <p className="text-gray-300 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skilss;