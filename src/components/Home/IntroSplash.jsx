// src/components/IntroSplash.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function IntroSplash({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // hides the splash after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center 
                 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] text-white"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-bold mb-4"
      >
        Full Stack Developer
      </motion.h1>

      <motion.div
        className="flex gap-6 text-4xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FaReact className="text-cyan-400 animate-[spin_8s_linear_infinite]" />
        <FaNodeJs className="text-green-500" />
        <SiExpress className="text-gray-300" />
        <SiMongodb className="text-green-600" />
      </motion.div>
    </motion.div>
  );
}
