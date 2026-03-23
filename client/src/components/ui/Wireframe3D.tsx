import React from 'react';
import { motion } from 'framer-motion';

interface Wireframe3DProps {
  className?: string;
}

const Wireframe3D: React.FC<Wireframe3DProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Wireframe Shape 1 - Speech Bubble */}
      <motion.div
        className="absolute"
        initial={{ opacity: 0, rotateX: -20 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          rotateY: [0, 360],
          rotateX: [-20, 20, -20]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="text-neon-cyan"
          style={{ filter: 'drop-shadow(0 0 10px #00ffff)' }}
        >
          {/* Front face */}
          <polygon
            points="50,50 150,50 150,120 100,120 80,150 80,120 50,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
          />
          {/* Back face (offset) */}
          <polygon
            points="60,60 160,60 160,130 110,130 90,160 90,130 60,130"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
          />
          {/* Connecting lines */}
          <line x1="50" y1="50" x2="60" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="150" y1="50" x2="160" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="150" y1="120" x2="160" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="80" y1="150" x2="90" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Wireframe Shape 2 - Crystal */}
      <motion.div
        className="absolute top-20 left-32"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          rotateZ: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          className="text-neon-cyan"
          style={{ filter: 'drop-shadow(0 0 8px #00ffff)' }}
        >
          {/* Hexagonal crystal shape */}
          <polygon
            points="75,20 120,50 120,100 75,130 30,100 30,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          />
          {/* Inner lines */}
          <line x1="75" y1="20" x2="75" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="30" y1="50" x2="120" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="120" y1="50" x2="30" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Wireframe Shape 3 - Abstract Cube */}
      <motion.div
        className="absolute top-40 left-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.25, 0.45, 0.25],
          rotateX: [0, 360],
          rotateY: [0, -360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="text-neon-cyan"
          style={{ filter: 'drop-shadow(0 0 6px #00ffff)' }}
        >
          {/* Front face */}
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          {/* Back face (offset) */}
          <rect x="35" y="35" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
          {/* Connecting lines */}
          <line x1="20" y1="20" x2="35" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="80" y1="20" x2="95" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="80" y1="80" x2="95" y2="95" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="20" y1="80" x2="35" y2="95" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Wireframe3D;

