import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { path: '#home', label: 'Home' },
  { path: '#about', label: 'About' },
  { path: '#skills', label: 'Skills' },
  { path: '#projects', label: 'Projects' },
  { path: '#experience', label: 'Experience' },
  { path: '#leadership', label: 'Leadership' },
  { path: '#education', label: 'Education' },
  { path: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black tracking-tighter"
            >
              <span className="text-white">SAN</span>
              <span className="text-purple-500 group-hover:text-pink-500 transition-colors">THUSHIE</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.path);
                }}
                className="px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-all rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-white/10">
              <a 
                href="/Santhushie_Nallaperuma.pdf" 
                download
                className="btn-premium py-2 px-6 text-sm"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-t border-white/10 overflow-hidden"
          >
            <div className="container-max px-4 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.path);
                  }}
                  className="text-2xl font-bold text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10">
                 <a 
                  href="/Santhushie_Nallaperuma.pdf" 
                  download
                  className="btn-premium w-full text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
