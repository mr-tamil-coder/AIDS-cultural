import React from 'react';
import { motion } from 'framer-motion';

const CyberLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-[#0F0C29] to-[#24243e] space-y-6">
      <motion.div
        className="relative w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full" />
        
        {/* Animated segments */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent rounded-full"
          style={{
            borderImage: 'linear-gradient(45deg, #7F7FD5, #91EAE4) 1',
            clipPath: 'inset(0 50% 0 0)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner glow */}
        <div className="absolute inset-4 bg-purple-500/10 rounded-full animate-pulse" />
      </motion.div>

      {/* Progress text */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
        Hold on... The cultural vibes are loading!
        </h3>
        <p className="text-sm text-gray-400 font-mono"></p>
      </div>

      {/* Binary animation */}
      <div className="absolute bottom-8 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="text-gray-400 font-mono mx-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              delay: Math.random() * 1
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default CyberLoader;