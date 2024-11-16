"use client"; // Pastikan ini ada di bagian paling atas

import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    if (form.current) {
      const formData = new FormData(form.current);
      formData.append("access_key", "1c1075ab-5d45-4dd8-a5e0-583100cdd28a"); // Ganti dengan Access Key Web3Forms Anda

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

  return (
    <section id="contact" className="flex flex-col items-center p-10 text-white">
      <div className="w-full text-center mb-10">
        <h1 className="text-6xl font-semibold">CONTACT</h1>
      </div>

      <div className="max-w-[900px] flex flex-col md:flex-row justify-between items-start md:space-x-10">
        <div className="md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
          <h2 className="text-4xl font-semibold text-gradient mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500">Let's talk</span>
          </h2>
          <p className="mb-5 text-gray-400">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-xl mr-3" />
            <p className="text-gray-400">ahmzakif@gmail.com</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-xl mr-3" />
            <p className="text-gray-400">+62 821-2300-9494</p>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-xl mr-3" />
            <p className="text-gray-400">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="z-[1] md:w-1/2">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {submitted && (
              <p className="text-green-500 text-center">Thank you! Your message has been sent.</p>
            )}
            {error && (
              <p className="text-red-500 text-center">{error}</p>
            )}
            <label className="text-gray-300">
              Your Name
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-2 w-full p-3 bg-[#1f1f2e] rounded-md border border-gray-600 text-white placeholder-gray-500 focus:outline-none"
                required
              />
            </label>
            <label className="text-gray-300">
              Your Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 w-full p-3 bg-[#1f1f2e] rounded-md border border-gray-600 text-white placeholder-gray-500 focus:outline-none"
                required
              />
            </label>
            <label className="text-gray-300">
              Write your message here
              <textarea
                name="message"
                placeholder="Enter your message"
                className="mt-2 w-full p-3 bg-[#1f1f2e] rounded-md border border-gray-600 text-white placeholder-gray-500 focus:outline-none h-32 resize-none"
                required
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="p-4 w-full rounded-md text-white font-semibold bg-gradient-to-r from-purple-700 to-orange-500 hover:from-purple-600 hover:to-orange-400"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <a
              href="mailto:ahmzakif@gmail.com?subject=Hello&body=Hi, I would like to discuss..."
              className="block text-center mt-4 text-white hover:text-blue-500 font-thin text-xs"
            >
              or start an email conversation
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;