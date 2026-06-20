"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Preloader: React.FC<{}> = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll while the preloader is visible
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease towards 100: bigger steps early, smaller near the end
        const step = Math.max(1, Math.round((100 - prev) / 8));
        return Math.min(100, prev + step);
      });
    }, 90);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setDone(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Ahmad </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400">
              Zaki
            </span>
            <span className="text-white"> Firdaus</span>
          </motion.h1>

          <motion.p
            className="mt-3 text-sm sm:text-base font-medium tracking-widest text-gray-400 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            AI Engineer &amp; Developer
          </motion.p>

          {/* Progress bar */}
          <div className="mt-10 h-2 w-[280px] sm:w-[340px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            />
          </div>

          <p className="mt-4 text-sm font-medium text-gray-300">
            Loading... {progress}%
          </p>

          {/* Bouncing dots */}
          <div className="mt-6 flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
