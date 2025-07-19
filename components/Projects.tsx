"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, ArrowUpRight } from "lucide-react";

const Projects: React.FC<{}> = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const projectsData = [
    {
      title: "StayAwake",
      description: "Android application for real-time monitoring of driver conditions such as fatigue and drowsiness using AI and computer vision.",
      image: "/project/stayAwakeProject.png",
      link: "https://youtu.be/nZXAyHOcGLk",
      category: "AI/ML",
      technologies: ["Android", "TensorFlow", "OpenCV", "Python"]
    },
    {
      title: "Zona Farm",
      description: "Image classification system to monitor chicken health, enhancing accuracy in poultry farming with machine learning.",
      image: "/project/ZonaFarmProject.png",
      link: "https://www.zonafarm.site/",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "Image Classification", "Web App"]
    },
    {
      title: "Gamaforce",
      description: "Autopilot Systems for various UAV, Quadrotor, Fixedwing, and Hybrid VTOL Plane with advanced control algorithms.",
      image: "/project/GamaforceProject.png",
      link: "https://www.metrotvnews.com/play/b2lCren7-gamaforce-kembali-juara-umum-di-krti-2023",
      category: "IoT/Robotics",
      technologies: ["Arduino", "C++", "Control Systems", "UAV"]
    },
    {
      title: "G-Connect",
      description: "Early Warning System to detect landslides and floods in disaster-prone areas using IoT sensors and data analysis.",
      image: "/project/GConnectProject.png",
      link: "https://cloud.wg.ugm.ac.id/category/g-connect/",
      category: "IoT",
      technologies: ["IoT", "Sensors", "Data Analysis", "Web Dashboard"]
    }
  ];

  return (
    <motion.section 
      className="flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-16"
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
            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            data-aos="zoom-in"
          >
            <FolderOpen className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" data-aos="zoom-in">
            PROJECTS
          </h2>
        </motion.div>
        
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
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
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          A showcase of my innovative projects in Generative AI, Machine Learning, and supporting technologies—demonstrating practical applications of cutting-edge artificial intelligence.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <Link
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
              className="block"
            >
              <motion.div
                className="bg-transparent backdrop-blur-0 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 h-full"
                whileHover={{ boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              >
                {/* Image */}
                <div className="relative flex items-center justify-center bg-transparent p-8">
                  <div className="relative w-32 h-32 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500 flex items-center justify-center shadow-xl shadow-blue-900/30">
                    {/* Kotak frame dengan gradient border */}
                    <div className="w-full h-full rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
                      <Image
                        src={project.image}
                        height={128}
                        width={128}
                        alt={`${project.title} - Project`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating category badge */}
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-blue-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-16"
        variants={itemVariants}
      >
        <motion.div
          className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Collaborating?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and innovative projects. 
            Let&apos;s create something amazing together!
          </p>
          <motion.button
            onClick={() => window.location.href = '/contact'}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
