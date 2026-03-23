import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Wireframe3D from '../components/ui/Wireframe3D';
import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { testimonials } from '../content/testimonials';
import { getProfile } from '../utils/api';

const Home: React.FC = () => {
  const [profileData, setProfileData] = useState(profile);

  useEffect(() => {
    // Try to fetch from API, fallback to static content
    getProfile()
      .then(res => setProfileData(res.data))
      .catch(() => setProfileData(profile));
  }, []);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredTestimonials = testimonials.filter(t => t.featured).slice(0, 3);

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 grid-pattern">
        {/* 3D Wireframe Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Wireframe3D className="absolute top-20 left-10 opacity-40" />
          <Wireframe3D className="absolute bottom-20 right-10 opacity-30" />
        </div>

        {/* Animated Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-3xl"
            style={{ boxShadow: '0 0 200px rgba(0, 255, 255, 0.3)' }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-game-blue rounded-full blur-3xl"
            style={{ boxShadow: '0 0 200px rgba(0, 217, 255, 0.3)' }}
          />
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <motion.div
                className="relative w-56 h-56 md:w-72 md:h-72 cursor-pointer"
                animate={{
                  y: [0, -10, 0],
                }}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Outer glowing ring */}
                <motion.div
                  className="absolute inset-0"
                    animate={{
                      boxShadow: [
                        '0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.4), 0 0 120px rgba(0, 255, 255, 0.2)',
                        '0 0 60px rgba(0, 255, 255, 0.8), 0 0 100px rgba(0, 217, 255, 0.6), 0 0 150px rgba(0, 255, 255, 0.4)',
                        '0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.4), 0 0 120px rgba(0, 255, 255, 0.2)',
                      ],
                    }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Rotating gradient border */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #00ffff, #00d9ff, #00ffff)',
                      padding: '3px',
                    }}
                  >
                    <div className="w-full h-full bg-black" />
                  </div>
                </motion.div>
                
                {/* Profile Image Container */}
                <div className="absolute inset-[12px] overflow-hidden border-2 border-neon-cyan bg-black">
                  <img
                    src={profileData.avatar || '/avatar.jpg'}
                    alt={profileData.name}
                    className="w-full h-full object-cover pixelated"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profileData.name)}&size=256&background=000000&color=ff00ff&bold=true`;
                    }}
                  />
                  
                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%)',
                    }}
                    animate={{
                      y: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Pulsing inner glow */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      boxShadow: [
                        'inset 0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 60px rgba(0, 217, 255, 0.15)',
                        'inset 0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 80px rgba(0, 217, 255, 0.2)',
                        'inset 0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 60px rgba(0, 217, 255, 0.15)',
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
                <span 
                  className="pixel-text block text-white"
                  style={{
                    textShadow: 
                      '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 80px rgba(0, 255, 255, 0.3)',
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
                    letterSpacing: '4px',
                  }}
                >
                  {profileData.name}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {profileData.roles.map((role, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glass border-neon-cyan/50 text-neon-cyan text-sm pixel-text"
                    style={{ border: '1px solid rgba(0, 255, 255, 0.5)' }}
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-neon-cyan mb-2 pixel-text">
                {profileData.tagline}
              </p>
              <p className="text-neon-cyan/70 pixel-text">{profileData.location}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button to="/projects" variant="primary">
                View Projects <HiArrowRight className="ml-2" />
              </Button>
              <Button to="/contact" variant="secondary">
                Let's Collaborate
              </Button>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <Card hover={false} className="text-center">
              <div className="stat-number mb-2">
                {profileData.stats.yearsExperience}+
              </div>
              <div className="text-neon-cyan/70 pixel-text uppercase text-sm">Years Experience</div>
            </Card>
            <Card hover={false} className="text-center">
              <div className="stat-number mb-2">
                {profileData.stats.projectsCount}+
              </div>
              <div className="text-neon-cyan/70 pixel-text uppercase text-sm">Projects Completed</div>
            </Card>
            <Card hover={false} className="text-center">
              <div className="stat-number mb-2">
                {profileData.stats.keyTools.length}+
              </div>
              <div className="text-neon-cyan/70 pixel-text uppercase text-sm">Tools & Technologies</div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section title="Featured Projects" subtitle="A selection of my recent work">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/projects/${project.slug}`}>
                  <Card className="h-full">
                    <div className="h-full flex flex-col">
                      {project.thumbnail && (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      <h3 className="text-xl font-bold mb-2 text-neon-cyan pixel-text">{project.title}</h3>
                      <p className="text-neon-cyan/70 text-sm mb-4 flex-grow">{project.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.category.slice(0, 3).map((cat, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs glass border-neon-cyan/50 text-neon-cyan pixel-text"
                            style={{ border: '1px solid rgba(0, 255, 255, 0.5)' }}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-neon-cyan text-sm font-semibold pixel-text">
                        View Project <HiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/projects" variant="primary">
              View All Projects
            </Button>
          </div>
        </Section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <Section title="What People Say" subtitle="Testimonials from clients and colleagues">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false} className="h-full">
                  <div className="mb-4">
                    {testimonial.rating && (
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    )}
                    <p className="text-neon-cyan/80 italic mb-4">&quot;{testimonial.content}&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neon-cyan pixel-text">{testimonial.name}</p>
                    <p className="text-sm text-neon-cyan/60 pixel-text">
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
};

export default Home;
