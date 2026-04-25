import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { projects } from '../content/projects';
import { getProjects } from '../utils/api';
import type { Project } from '../content/projects';

const Projects: React.FC = () => {
  const [projectsData, setProjectsData] = useState<Project[]>(projects);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    getProjects()
      .then(res => setProjectsData(res.data))
      .catch(() => setProjectsData(projects));
  }, []);

  const categories = ['all', 'tech', 'marketing', 'hybrid'];
  const categoryLabels: Record<string, string> = {
    all: 'All Projects',
    tech: 'Tech',
    marketing: 'Marketing',
    hybrid: 'Hybrid'
  };

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category.includes(selectedCategory as any));

  return (
    <div className="pt-20">
      <Section title="Projects" subtitle="A showcase of my work across tech and marketing">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-semibold transition-all duration-300 pixel-text cursor-pointer ${
                selectedCategory === category
                  ? 'bg-neon-cyan text-black border-2 border-neon-cyan'
                  : 'glass border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10'
              }`}
              style={{
                boxShadow: selectedCategory === category 
                  ? '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)'
                  : '0 0 10px rgba(0, 255, 255, 0.2)'
              }}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow">{project.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.category.map((cat, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full glass border-white/20"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-purple-400 text-sm font-semibold">
                        View Project <HiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Projects;
