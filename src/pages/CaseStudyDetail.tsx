import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { caseStudies } from '../content/caseStudies';
import type { CaseStudy } from '../content/caseStudies';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [study, setStudy] = useState<CaseStudy | null>(
    caseStudies.find(s => s.slug === slug) || null
  );

  useEffect(() => {
    if (slug) {
      const foundStudy = caseStudies.find(s => s.slug === slug);
      setStudy(foundStudy || null);
    }
  }, [slug]);

  if (!study) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
          <Button to="/case-studies" variant="primary">
            Back to Case Studies
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
          <Link to="/case-studies" className="inline-flex items-center text-purple-400 mb-8 hover:text-purple-300">
            <HiArrowLeft className="mr-2" /> Back to Case Studies
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{study.title}</h1>
            <p className="text-xl text-gray-300">{study.summary}</p>
          </div>

          {study.thumbnail && (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={study.thumbnail}
              alt={study.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
          )}

          {/* Context */}
          {study.context && (
            <Card hover={false} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Context</h3>
              <p className="text-gray-300 whitespace-pre-line">{study.context}</p>
            </Card>
          )}

          {/* Challenge */}
          {study.challenge && (
            <Card hover={false} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Challenge</h3>
              <p className="text-gray-300 whitespace-pre-line">{study.challenge}</p>
            </Card>
          )}

          {/* Strategy */}
          {study.strategy && (
            <Card hover={false} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Strategy</h3>
              <p className="text-gray-300 whitespace-pre-line">{study.strategy}</p>
            </Card>
          )}

          {/* Execution */}
          {study.execution && (
            <Card hover={false} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Execution</h3>
              <p className="text-gray-300 whitespace-pre-line">{study.execution}</p>
            </Card>
          )}

          {/* Results */}
          {study.results && study.results.length > 0 && (
            <Card hover={false} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {study.results.map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">{result.value}</div>
                    <div className="text-gray-400">{result.metric}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Learnings */}
          {study.learnings && study.learnings.length > 0 && (
            <Card hover={false} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Learnings</h3>
              <ul className="space-y-3">
                {study.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-3">▹</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Tech Stack & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card hover={false}>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full glass border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card hover={false}>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full glass border-white/20">
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4">
            {study.liveUrl && (
              <Button href={study.liveUrl} variant="primary">
                View Live Site
              </Button>
            )}
            {study.githubUrl && (
              <Button href={study.githubUrl} variant="secondary">
                View on GitHub
              </Button>
            )}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default CaseStudyDetail;
