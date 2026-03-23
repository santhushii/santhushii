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
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-max">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text pixel-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-neon-cyan/70 max-w-2xl mx-auto pixel-text">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
