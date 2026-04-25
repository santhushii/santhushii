import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HiArrowRight, 
  HiDownload, 
  HiMail, 
  HiBriefcase, 
  HiAcademicCap, 
  HiLightningBolt, 
  HiCode,
  HiGlobeAlt,
  HiDeviceMobile,
  HiChatAlt2
} from 'react-icons/hi';
import { 
  SiLinkedin, 
  SiGithub, 
  SiWhatsapp,
  SiFiverr
} from 'react-icons/si';

import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import TypingEffect from '../components/ui/TypingEffect';

import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { experiences } from '../content/experience';
import { skillCategories } from '../content/skills';
import { education } from '../content/education';
import { research } from '../content/research';
import profileSecondary from '../assets/profile_secondary.png';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 grid-pattern overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 glass border-purple-500/30 text-purple-400 rounded-full text-sm font-bold mb-6"
              >
                ✨ AVAILABLE FOR OPPORTUNITIES
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
                Hello, I&apos;m <br />
                <span className="neon-text">{profile.name}</span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-bold mb-8 text-gray-300 h-12">
                <TypingEffect 
                  texts={[
                    'React Developer',
                    'MERN Stack Engineer',
                    'Web3 Specialist',
                    'UI Designer',
                    'Problem Solver'
                  ]}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                />
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {profile.bio}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button to="#projects" variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                  View Projects <HiArrowRight className="ml-2" />
                </Button>
                <Button href="/Santhushie_Nallaperuma.pdf" variant="secondary">
                  Download CV <HiDownload className="ml-2" />
                </Button>
                <Button to="#contact" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Contact Me
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <SiGithub size={28} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <SiLinkedin size={28} />
                </a>
                <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-purple-500 transition-colors">
                  <HiMail size={32} />
                </a>
                <a href="https://wa.me/94762004123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <SiWhatsapp size={28} />
                </a>
                <a href={profile.fiverr} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                  <SiFiverr size={36} />
                </a>
              </div>
            </motion.div>

            {/* Right Side: Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] mx-auto">
                {/* Background Blobs */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full opacity-10 animate-float" />
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-[40px] overflow-hidden glass border-white/10 shadow-2xl z-10 group">
                  <img 
                    src={profile.avatar} 
                    alt={profile.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Decorative Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 glass p-4 rounded-2xl border-white/10 z-20 shadow-xl hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <HiCode size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Expertise</div>
                      <div className="text-sm font-bold">React & Web3</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl border-white/10 z-20 shadow-xl hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <HiLightningBolt size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Focus</div>
                      <div className="text-sm font-bold">Solving Problems</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" subtitle="My journey and passion for building technology">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative group"
          >
            <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden glass border-white/10 shadow-2xl">
              <img 
                src={profileSecondary} 
                alt="Santhushie Secondary" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-purple-500/30 shadow-xl">
              <div className="text-4xl font-black text-purple-400">4+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Years Exp.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
              A dedicated Software Engineer with a passion for <span className="text-purple-400">Innovation</span> and <span className="text-blue-400">Scalability</span>.
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
              {profile.story}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {profile.values.map((value, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-300 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="aspect-square flex flex-col justify-center items-center text-center p-8">
              <HiCode className="w-12 h-12 text-purple-500 mb-4" />
              <div className="text-3xl font-black mb-2">15+</div>
              <div className="text-sm text-gray-400 uppercase font-bold">Projects Done</div>
            </Card>
            <Card className="aspect-square flex flex-col justify-center items-center text-center p-8 mt-8">
              <HiBriefcase className="w-12 h-12 text-blue-500 mb-4" />
              <div className="text-3xl font-black mb-2">4+</div>
              <div className="text-sm text-gray-400 uppercase font-bold">Years Experience</div>
            </Card>
            <Card className="aspect-square flex flex-col justify-center items-center text-center p-8 -mt-8">
              <HiAcademicCap className="w-12 h-12 text-pink-500 mb-4" />
              <div className="text-3xl font-black mb-2">10+</div>
              <div className="text-sm text-gray-400 uppercase font-bold">Tech Mastered</div>
            </Card>
            <Card className="aspect-square flex flex-col justify-center items-center text-center p-8">
              <HiGlobeAlt className="w-12 h-12 text-cyan-500 mb-4" />
              <div className="text-3xl font-black mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase font-bold">Passion</div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Toolbelt" subtitle="Technologies I leverage to build modern applications" className="bg-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                    <HiLightningBolt />
                  </span>
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-gray-300">{skill.name}</span>
                        <span className="text-sm font-bold text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" subtitle="A selection of my best work in engineering and research">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="group overflow-hidden p-0 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10 group-hover:opacity-0 transition-opacity" />
                  <img 
                    src={project.thumbnail || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.category.map((cat, ci) => (
                      <span key={ci} className="px-3 py-1 glass text-[10px] font-black uppercase tracking-widest text-white rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, ti) => (
                      <span key={ti} className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} variant="primary" className="py-2 px-6 text-sm">Live Demo</Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} variant="secondary" className="py-2 px-6 text-sm">GitHub</Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Journey" subtitle="My career milestones and contributions" className="bg-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 md:gap-12"
            >
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                  <HiBriefcase size={24} />
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent mt-4" />
              </div>
              <div className="flex-1">
                <Card>
                  <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="text-purple-400 font-bold text-lg">{exp.company}</div>
                    </div>
                    <div className="text-gray-400 font-bold bg-white/5 px-4 py-2 rounded-xl h-fit">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-400 font-medium">
                        <span className="text-purple-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" subtitle="My academic foundations and certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  <HiAcademicCap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <div className="text-blue-400 font-bold mb-4">{edu.institution}</div>
                <div className="flex justify-between text-sm text-gray-500 font-bold uppercase tracking-wider">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
                {edu.details && (
                  <p className="mt-4 text-gray-400 text-sm italic font-medium">{edu.details}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Research & Publications" subtitle="Contributing to the technical community" className="bg-white/5">
        <div className="max-w-4xl mx-auto">
          {research.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-pink-500">
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                  <h3 className="text-2xl font-bold leading-tight flex-1">&quot;{pub.title}&quot;</h3>
                  <div className="px-4 py-2 bg-pink-500/10 text-pink-400 font-bold rounded-xl h-fit border border-pink-500/20">
                    {pub.year}
                  </div>
                </div>
                <div className="text-pink-400 font-bold text-lg mb-6">{pub.conference}</div>
                <ul className="space-y-4">
                  {pub.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 font-medium">
                      <span className="text-pink-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Leadership & Interests Section */}
      <Section id="leadership" title="Leadership & Interests" subtitle="Beyond engineering: Community and Sports">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold mb-4">Leo Club of SLIIT</h3>
            <div className="text-yellow-500 font-bold mb-2">Leader (2022-2025)</div>
            <p className="text-gray-400 font-medium">
              Active community leadership and philanthropy, organizing major charitable events and managing team collaborations.
            </p>
          </Card>
          <Card className="border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-4">Competitive Sports</h3>
            <div className="text-green-500 font-bold mb-2">National Athlete</div>
            <p className="text-gray-400 font-medium">
              Represented SLIIT in Chess, Badminton, and Netball. Competitive spirit translated into a drive for technical excellence.
            </p>
          </Card>
        </div>
      </Section>

      {/* Achievements / Stats Section */}
      <Section title="Achievements" subtitle="Numbers that reflect my dedication">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="text-5xl md:text-7xl font-black text-white mb-2">15+</div>
            <div className="text-purple-400 font-bold uppercase tracking-widest text-xs">Projects Completed</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="text-5xl md:text-7xl font-black text-white mb-2">10+</div>
            <div className="text-blue-400 font-bold uppercase tracking-widest text-xs">Technologies Learned</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="col-span-2 md:col-span-1">
            <div className="text-5xl md:text-7xl font-black text-white mb-2">100%</div>
            <div className="text-pink-400 font-bold uppercase tracking-widest text-xs">Passion for Coding</div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Let&apos;s build something amazing together" className="bg-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <HiMail size={32} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase">Email</div>
                  <a href={`mailto:${profile.email}`} className="text-xl font-bold hover:text-purple-400 transition-colors">{profile.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <HiDeviceMobile size={32} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase">Phone</div>
                  <a href="tel:+94762004123" className="text-xl font-bold hover:text-blue-400 transition-colors">+94-762004123</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <SiWhatsapp size={32} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase">WhatsApp</div>
                  <a href="https://wa.me/94762004123" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-pink-400 transition-colors">Chat on WhatsApp</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-bold mb-6 text-gray-400 uppercase tracking-widest">Find me on</h4>
              <div className="flex gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"><SiGithub size={24} /></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-colors text-blue-400"><SiLinkedin size={24} /></a>
                <a href={profile.fiverr} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-green-500/20 transition-colors text-green-400"><SiFiverr size={32} /></a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">Message</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-white resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Send Message <HiArrowRight className="ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center">
        <div className="container-max px-4">
          <div className="text-2xl font-black mb-6">
            <span className="text-white">SAN</span>
            <span className="text-purple-500">THUSHIE</span>
          </div>
          <p className="text-gray-500 font-medium">Made with ❤️ by Santhushie Nallaperuma</p>
          <p className="text-gray-600 text-xs mt-4 uppercase tracking-[0.3em]">&copy; 2026 ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
