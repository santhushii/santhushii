import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { caseStudies } from '../content/caseStudies';
import type { CaseStudy } from '../content/caseStudies';

const CaseStudies: React.FC = () => {
  const [caseStudiesData, setCaseStudiesData] = useState<CaseStudy[]>(caseStudies);

  // In a real app, you'd fetch from API
  useEffect(() => {
    setCaseStudiesData(caseStudies);
  }, []);

  return (
    <div className="pt-20">
      <Section
        title="Case Studies"
        subtitle="Deep dives into my projects and campaigns"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/case-studies/${study.slug}`}>
                <Card className="h-full">
                  <div className="h-full flex flex-col">
                    {study.thumbnail && (
                      <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h3 className="text-xl font-bold mb-2 text-white">{study.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{study.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.category.map((cat, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full glass border-white/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-purple-400 text-sm font-semibold">
                      Read Case Study <HiArrowRight className="ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
