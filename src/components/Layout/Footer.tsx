import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:contact@santhushie.com', label: 'Email' },
  ];

  return (
    <footer className="glass-dark border-t border-neon-cyan/30 mt-auto">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 
              className="text-2xl md:text-3xl font-bold pixel-text mb-4 text-white"
              style={{
                textShadow: 
                  '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 0 0 45px rgba(0, 255, 255, 0.4)',
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
                letterSpacing: '3px',
              }}
            >
              Santhushie Nallaperuma
            </h3>
            <p className="text-neon-cyan/70 text-sm pixel-text">
              IT Undergraduate • Associate Project Manager<br />
              Tech & Digital Marketing Enthusiast
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan pixel-text">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-neon-cyan/70 hover:text-neon-cyan transition-colors pixel-text">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neon-cyan/70 hover:text-neon-cyan transition-colors pixel-text">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neon-cyan/70 hover:text-neon-cyan transition-colors pixel-text">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neon-cyan/70 hover:text-neon-cyan transition-colors pixel-text">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan pixel-text">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass border-neon-cyan/50 hover:border-neon-cyan transition-colors text-neon-cyan"
                  style={{ border: '1px solid rgba(0, 255, 255, 0.5)' }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neon-cyan/30 text-center text-sm text-neon-cyan/70">
          <p className="pixel-text">
            © {currentYear} Santhushie Nallaperuma. All rights reserved.
          </p>
          <p className="mt-2 pixel-text">
            Designed & built with <span className="neon-text font-semibold">MERN stack</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
