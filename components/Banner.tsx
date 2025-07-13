"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, Code, Zap } from "lucide-react";

const Banner: React.FC<{}> = () => {
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



  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-[100px] z-[20] min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Content */}
      <motion.div 
        className="flex flex-col justify-center text-center lg:text-left lg:w-1/2"
        variants={itemVariants}
      >
        <motion.div 
          className="flex items-center justify-center lg:justify-start gap-2 mb-4"
          variants={itemVariants}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6"
          >
            <Sparkles className="w-6 h-6 text-purple-500" />
          </motion.div>
          <span className="text-purple-400 text-sm font-medium tracking-wider">
            AI ENGINEER & DEVELOPER
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Ahmad <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">Zaki</span>{" "}
          <span>Firdaus</span>
        </motion.h1>

        <motion.div 
          className="flex items-center justify-center lg:justify-start gap-3 mb-6"
          variants={itemVariants}
        >
          <Code className="w-6 h-6 text-blue-400" />
          <p className="text-xl sm:text-2xl font-medium text-gray-300">
            I do Code &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
            <Image
              src="/icon/popcorn.gif"
              height={40}
              width={40}
              alt="Chill"
              className="rounded-full"
            />
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg text-gray-300 mb-8 max-w-[600px] leading-relaxed"
          variants={itemVariants}
        >
          Passionate AI Engineer specializing in machine learning and deep learning, 
          focused on creating efficient, impactful AI solutions. I am also deeply 
          interested in IoT, exploring how interconnected devices can enhance the way we live and work.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => window?.open('/docs/Ahmad_Zaki_Firdaus-Resume.pdf', '_blank')}
            className="group relative z-[1] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold py-4 px-8 border-0 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span>Get Resume</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.6)",
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative z-[1] bg-transparent border-2 border-purple-500 hover:border-purple-400 rounded-full text-white font-semibold py-4 px-8 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Let&apos;s Talk</span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div 
        className="flex justify-center lg:w-1/2 mt-12 lg:mt-0"
        variants={itemVariants}
      >
        <motion.div
          className="relative"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="relative rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              priority
              src="/images/Me.png"
              height={300}
              width={300}
              alt="Ahmad Zaki Firdaus"
              className="object-cover"
            />
          </motion.div>
          
          {/* Floating elements around the image */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code className="w-4 h-4 text-white" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
            animate={{
              y: [5, -5, 5],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
