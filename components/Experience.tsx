"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Code, Brain, Users } from "lucide-react";

const Experience: React.FC<{}> = () => {
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

  const experienceData = [
    {
      company: "BPJS Kesehatan",
      position: "AI Software Developer",
      period: "May 2025 - Present",
      location: "Central Jakarta, Indonesia",
      logo: "/images/BPJS.png",
      description: [
        "Building an on-premise Anti-Fraud system powered by LLMs with end-to-end responsibilities",
        "Achieved high-throughput document processing (1,000+ docs/hour) with parallel workers, cloud storage (S3) integration, and automated error handling",
        "Developed multi-modal AI pipelines leveraging computer vision and LLMs for automated classification, extraction, and verification of 15+ medical document types",
        "Built multi-stage automatic validation and verification systems ensuring 99%+ data integrity and regulatory compliance, reducing manual review by 80%",
        "Engineered modular, scalable frontend architecture using Next.js, enabling seamless integration with backend services",
        "Developed RESTful APIs using FastAPI with SQL Server integration, ensuring secure communication between frontend and backend systems"
      ],
      technologies: ["Python", "PyTorch", "LangChain", "Ollama", "OpenAI", "FastAPI", "SQL Server", "AWS", "Docker", "Next.js"]
    },
    {
      company: "Universitas Gadjah Mada",
      position: "AI Research Assistant",
      period: "Mar 2025 - May 2025",
      location: "Yogyakarta, Indonesia",
      logo: "/images/UGM.png",
      description: [
        "Designed semantic segmentation framework using multi-modal data for cultural heritage preservation",
        "Developed pixel-wise segmentation models to accurately segment Borobudur temple reliefs using UNet, SegNet, PSPNet, DeepLabV3+, and YOLO",
        "Established comprehensive evaluation protocol incorporating segmentation quality and reconstruction metrics"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV"]
    },
    {
      company: "StayAwake",
      position: "ML Engineer",
      period: "Aug 2023 - Jan 2024",
      location: "Remote",
      logo: "/images/Bangkit.png",
      description: [
        "Led development of Android-based real-time driver monitoring application using Single Shot Detector (SSD) MobileNetV2",
        "Implemented driver distraction and fatigue detection system with deep learning and image processing",
        "Collaborated with cross-functional team of ML engineers, cloud computing engineers, and mobile developers",
        "Enhanced technical expertise in deep learning, computer vision, and team leadership"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV"]
    }
  ];

  return (
    <motion.section 
      className="flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
            <Briefcase className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" data-aos="zoom-in">
            EXPERIENCE
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
          My professional journey as an AI Engineer is focused on Generative AI and Machine Learning, working on innovative projects that push the boundaries of what AI can create and deliver real-world impact.
        </motion.p>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={exp.logo}
                      height={40}
                      width={40}
                      alt={`${exp.company} logo`}
                      className="rounded-lg"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {exp.description.map((desc, descIndex) => (
                    <motion.div
                      key={descIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: descIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-blue-400" />
                  <h4 className="text-white font-semibold">Technologies Used</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Achievement Section */}
      <motion.div 
        className="mt-16"
        variants={itemVariants}
      >
        <motion.div
          className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-300"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Bangkit Academy Achievement</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            Successfully completed the prestigious Bangkit Academy program, a career readiness 
            initiative designed by Google, Tokopedia, Gojek, and Traveloka. This intensive 
            program enhanced my skills in machine learning, cloud computing, and mobile development, 
            culminating in a successful capstone project that demonstrated real-world impact.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
      );
  };

export default Experience;
    
