import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { projects } from '../content/projects';
import { getProject } from '../utils/api';
import type { Project } from '../content/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(
    projects.find(p => p.slug === slug) || null
  );

  useEffect(() => {
    if (slug) {
      getProject(slug)
        .then(res => setProject(res.data))
        .catch(() => {
          const foundProject = projects.find(p => p.slug === slug);
          setProject(foundProject || null);
        });
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Button to="/projects" variant="primary">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <Link to="/projects" className="inline-flex items-center text-purple-400 mb-8 hover:text-purple-300">
            <HiArrowLeft className="mr-2" /> Back to Projects
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{project.title}</h1>
            <p className="text-xl text-gray-300">{project.summary}</p>
          </div>

          {project.thumbnail && (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card hover={false}>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Category</h3>
              <div className="flex flex-wrap gap-2">
                {project.category.map((cat, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full glass border-white/20">
                    {cat}
                  </span>
                ))}
              </div>
            </Card>

            <Card hover={false}>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full glass border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card hover={false}>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full glass border-white/20">
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {project.problem && (
              <Card hover={false}>
                <h3 className="text-xl font-bold mb-4 text-white">Problem</h3>
                <p className="text-gray-300">{project.problem}</p>
              </Card>
            )}

            {project.solution && (
              <Card hover={false}>
                <h3 className="text-xl font-bold mb-4 text-white">Solution</h3>
                <p className="text-gray-300">{project.solution}</p>
              </Card>
            )}
          </div>

          {project.description && (
            <Card hover={false} className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">Description</h3>
              <p className="text-gray-300 whitespace-pre-line">{project.description}</p>
            </Card>
          )}

          {project.myRole && (
            <Card hover={false} className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">My Role</h3>
              <p className="text-gray-300">{project.myRole}</p>
            </Card>
          )}

          {project.results && project.results.length > 0 && (
            <Card hover={false} className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.results.map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{result.value}</div>
                    <div className="text-gray-400 text-sm">{result.metric}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary">
                View Live Site
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="secondary">
                View on GitHub
              </Button>
            )}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default ProjectDetail;
