"use client";

import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, User, CheckCircle } from "lucide-react";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    if (form.current) {
      const formData = new FormData(form.current);
      formData.append("access_key", "1c1075ab-5d45-4dd8-a5e0-583100cdd28a");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setSubmitted(true);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          setError("Failed to send message. Please try again.");
        }
      } catch (err) {
        setError("Failed to send message. Please check your internet connection and try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmzakif@gmail.com",
      link: "mailto:ahmzakif@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 821-2300-9494",
      link: "tel:+6282123009494"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      link: "#"
    }
  ];

  return (
    <motion.section 
      id="contact" 
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
            data-aos="zoom-in"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" data-aos="zoom-in">
            CONTACT
          </h2>
        </motion.div>
        
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
          <p className="tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-sm uppercase">
            Get In Touch
          </p>
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <motion.p 
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          I&apos;m currently available for collaboration, consultation, or discussion in Generative AI and Machine Learning. Feel free to reach out for opportunities, partnerships, or to explore the future of AI!
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s talk
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I&apos;m always open to discussing new opportunities, innovative projects, or creative ideas in Generative AI and Machine Learning.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-black/20 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/30 border border-white/5 transition-all duration-300 group"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
          >
            <motion.div
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              {submitted && (
                <motion.div
                  className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}
              
              {error && (
                <motion.div
                  className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-red-400">{error}</p>
                </motion.div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      placeholder="Enter your message"
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <a
                  href="mailto:ahmzakif@gmail.com?subject=Hello&body=Hi, I would like to discuss..."
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors duration-300"
                >
                  or start an email conversation
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
