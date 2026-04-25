import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGithub, SiLinkedin, SiFiverr } from 'react-icons/si';
import { HiDownload, HiArrowRight, HiMail, HiPhone, HiCode, HiBriefcase, HiAcademicCap, HiGlobeAlt } from 'react-icons/hi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TypingEffect from '../components/ui/TypingEffect';
import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { experience } from '../content/experienceData';
import { education } from '../content/educationData';
import { skills } from '../content/skillData';
import { research } from '../content/researchData';

const Home: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative pt-20">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 glass rounded-full text-purple-400 font-bold text-xs uppercase tracking-widest mb-6"
              >
                Available for New Projects
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
                HI, I'M <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
                  SANTHUSHIE
                </span>
              </h1>
              <div className="h-12 mb-8">
                <TypingEffect 
                  words={profile.roles}
                  className="text-2xl md:text-3xl font-bold text-gray-400"
                />
              </div>
              <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
                {profile.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('projects')} variant="primary" size="lg">
                  View My Work <HiArrowRight className="ml-2" />
                </Button>
                <Button href="/Santhushie_Nallaperuma.pdf" variant="outline" size="lg">
                  Resume <HiDownload className="ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden glass p-4 border-white/10 group">
                <img 
                  src="/santhushie.png" 
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white font-bold text-xl mb-2">Santhushie Nallaperuma</p>
                  <p className="text-purple-400 text-sm">Software Engineer | Blockchain Specialist</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/30 blur-3xl rounded-full -z-10 animate-pulse-slow" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full -z-10 animate-pulse-slow" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Stats Section */}
      <Section id="about" title="About Me" subtitle="Engineering excellence through passion and research">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold mb-8 text-white leading-snug">
              I build scalable web applications and secure blockchain solutions that bridge technical gaps for users worldwide.
            </p>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              With a background in Software Engineering and Digital Marketing, I combine technical precision with user-centric design. My research focus on education technology and blockchain security allows me to build products that are not just functional, but meaningful.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass rounded-2xl border-l-4 border-purple-500">
                <div className="text-3xl font-black mb-1">15+</div>
                <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Projects Done</div>
              </div>
              <div className="p-6 glass rounded-2xl border-l-4 border-blue-500">
                <div className="text-3xl font-black mb-1">4+</div>
                <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Years Experience</div>
              </div>
              <div className="p-6 glass rounded-2xl border-l-4 border-pink-500">
                <div className="text-3xl font-black mb-1">10+</div>
                <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Tech Mastered</div>
              </div>
              <div className="p-6 glass rounded-2xl border-l-4 border-cyan-500">
                <div className="text-3xl font-black mb-1">100%</div>
                <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Passion</div>
              </div>
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
      <Section id="skills" title="Technical Toolbelt" subtitle="My core stack and professional toolkit">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-t-4 border-purple-500">
                <h3 className="text-2xl font-bold mb-6 text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, si) => (
                    <span key={si} className="px-4 py-2 glass rounded-xl text-xs font-bold text-gray-300 border border-white/5 hover:border-purple-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" subtitle="A selection of my best work in engineering and research">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'tech', 'blockchain', 'game', 'fullstack', 'tourism'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                filter === cat 
                  ? 'bg-white text-black border-white shadow-xl' 
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects
              .filter(p => filter === 'all' || p.category.includes(filter as any))
              .map((project) => (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="group overflow-hidden p-0 flex flex-col h-full border-white/5 hover:border-purple-500/30 transition-all duration-500">
                    <div className="relative h-72 overflow-hidden">
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
                          <span key={ti} className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">{tech}</span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-auto">
                        {project.liveUrl && (
                          <Button href={project.liveUrl} variant="primary" className="py-2 px-6 text-sm">Live Site</Button>
                        )}
                        {project.githubUrl && (
                          <Button href={project.githubUrl} variant="secondary" className="py-2 px-6 text-sm">GitHub</Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" subtitle="My journey through the tech industry">
        <div className="max-w-4xl mx-auto space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors">
                  {exp.period.split('–')[0]}
                </div>
                <div className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-2">{exp.period}</div>
                <h3 className="text-3xl font-black mb-2">{exp.role}</h3>
                <div className="text-xl text-blue-400 font-bold mb-6">{exp.company} | {exp.location}</div>
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, hi) => (
                    <li key={hi} className="flex items-start text-gray-400 leading-relaxed">
                      <HiArrowRight className="mt-1.5 mr-3 text-purple-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Research & Publications" subtitle="Academic contributions to EdTech and Security">
        <div className="max-w-4xl mx-auto">
          {research.map((res, idx) => (
            <Card key={idx} className="border-l-4 border-blue-500">
              <div className="text-blue-500 font-bold mb-2 uppercase tracking-widest">{res.venue} | {res.year}</div>
              <h3 className="text-2xl font-bold mb-4">{res.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{res.summary}</p>
              <div className="flex flex-wrap gap-2">
                {res.tags.map((tag, ti) => (
                  <span key={ti} className="px-3 py-1 glass text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
                ))}
              </div>
            </Card>
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
          <div className="p-8 glass rounded-3xl">
            <div className="text-5xl font-black text-purple-500 mb-2">N4</div>
            <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Japanese Proficiency</div>
          </div>
          <div className="p-8 glass rounded-3xl">
            <div className="text-5xl font-black text-blue-500 mb-2">100+</div>
            <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Active Students</div>
          </div>
          <div className="p-8 glass rounded-3xl col-span-2 md:col-span-1">
            <div className="text-5xl font-black text-pink-500 mb-2">3.4+</div>
            <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Undergrad GPA</div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" subtitle="My academic background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <Card key={idx} className="border-t-4 border-white/5 group hover:border-purple-500/50 transition-all">
              <div className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-4">{edu.period}</div>
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <div className="text-purple-400 font-bold mb-4">{edu.institution}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Let's build something amazing together">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-black mb-8 leading-tight">HAVE A PROJECT <br /> IN MIND?</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                  <HiMail className="text-2xl text-purple-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">Email Me</div>
                  <a href={`mailto:${profile.email}`} className="text-xl font-bold hover:text-purple-400 transition-colors">{profile.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <HiPhone className="text-2xl text-blue-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">Call Me</div>
                  <a href={`tel:${profile.phone}`} className="text-xl font-bold hover:text-blue-400 transition-colors">{profile.phone}</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="text-xs text-gray-500 uppercase font-black tracking-widest mb-6">Social Handshake</div>
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
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Subject</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-colors" placeholder="Collaboration" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-colors resize-none" placeholder="Let's build something amazing..." />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Send Message <HiArrowRight className="ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
