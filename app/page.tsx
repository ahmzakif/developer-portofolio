"use client";

import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import { User, Code, Briefcase, FolderOpen, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

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

  const navigationCards = [
    {
      title: "ABOUT ME",
      description: "Learn more about my background, passion, and expertise in AI & Machine Learning",
      icon: User,
      href: "/about",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "SKILLS",
      description: "Explore my technical skills and technologies I work with",
      icon: Code,
      href: "/skills",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "EXPERIENCES",
      description: "View my professional experience and career journey",
      icon: Briefcase,
      href: "/experience",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "PROJECTS",
      description: "Check out my innovative projects and creative solutions",
      icon: FolderOpen,
      href: "/projects",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "CONTACT",
      description: "Get in touch for collaborations, opportunities, or discussions",
      icon: MessageCircle,
      href: "/contact",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute top-40 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
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

      <div className="relative z-10">
        <Cursor />
        <motion.div variants={sectionVariants}>
          <Banner />
        </motion.div>
        
        {/* Navigation Cards */}
        <motion.div 
          variants={sectionVariants}
          className="px-4 sm:px-8 lg:px-20 py-20"
        >
          <motion.div 
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore My Portfolio
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Navigate through different sections to learn more about my skills, experience, and projects
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {navigationCards.map((card, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-sm"
              >
                <Link href={card.href} className="block">
                  <motion.div
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full min-h-[280px] group flex flex-col"
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)"
                    }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <card.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight className="w-5 h-5 text-blue-400" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">
                      {card.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
