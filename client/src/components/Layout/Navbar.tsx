import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../../contexts/ThemeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold neon-text pixel-text"
            >
              SN
            </motion.span>
            <span className="hidden sm:inline text-lg font-semibold text-neon-cyan pixel-text">CHECKPOINT</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-300 pixel-text ${
                  location.pathname === link.path
                    ? 'text-neon-cyan'
                    : 'text-neon-cyan/70 hover:text-neon-cyan'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan"
                    style={{ boxShadow: '0 0 10px #00ffff' }}
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 glass border-neon-cyan/50 hover:border-neon-cyan transition-colors text-neon-cyan"
              style={{ border: '1px solid rgba(0, 255, 255, 0.5)' }}
            >
              {theme === 'dark' ? <HiMoon className="w-5 h-5" /> : <HiSun className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 glass border-neon-cyan/50 hover:border-neon-cyan transition-colors text-neon-cyan"
              style={{ border: '1px solid rgba(0, 255, 255, 0.5)' }}
            >
              {theme === 'dark' ? <HiMoon className="w-5 h-5" /> : <HiSun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 glass border-neon-cyan/50 hover:border-neon-cyan transition-colors text-neon-cyan"
              style={{ border: '1px solid rgba(0, 255, 255, 0.5)' }}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-neon-cyan/30"
          >
            <div className="container-max px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 transition-colors pixel-text ${
                    location.pathname === link.path
                      ? 'bg-neon-cyan/20 text-neon-cyan border-l-2 border-neon-cyan'
                      : 'text-neon-cyan/70 hover:bg-neon-cyan/10 hover:text-neon-cyan'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
