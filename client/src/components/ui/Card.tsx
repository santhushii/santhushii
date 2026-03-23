import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, onClick }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      className={`glass p-6 ${hover ? 'card-hover cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      style={{
        border: '1px solid rgba(0, 255, 255, 0.3)',
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
