import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const variantClasses = {
    primary: 'btn-premium text-white',
    secondary: 'btn-outline-premium text-white',
    outline: 'border-2 border-white/20 hover:border-white/50 text-white rounded-full px-8 py-4'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  const content = (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={classes}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className="bg-transparent border-none p-0 cursor-pointer"
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;