import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-black flex flex-center justify-center items-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 border-4 border-purple-500 border-t-blue-500 rounded-full mb-8 mx-auto shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black tracking-tighter"
        >
          <span className="text-white">SAN</span>
          <span className="text-purple-500">THUSHIE</span>
        </motion.h1>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xs text-gray-500 mt-4 uppercase tracking-[0.5em]"
        >
          Initializing Portfolio
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
