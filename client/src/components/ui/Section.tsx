import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, title, subtitle, className = '', id }) => {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}>
      <div className="container-max relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            {title && (
              <h2 className="section-title">
                <span className="neon-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-8 rounded-full opacity-50" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
