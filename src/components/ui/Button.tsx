import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
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
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-500 rounded-full disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-12 py-5 text-lg uppercase tracking-widest'
  };

  const variantClasses = {
    primary: 'btn-premium text-white shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40',
    secondary: 'btn-outline-premium text-white',
    outline: 'border-2 border-white/10 hover:border-white/40 text-white bg-white/5 backdrop-blur-md',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 shadow-lg'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
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