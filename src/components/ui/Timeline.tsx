import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { Experience } from '../../content/experience';

interface TimelineProps {
  items: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-1/2" />
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 z-10" />
            
            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
              <Card hover={false}>
                <div className="flex flex-col space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-purple-400 font-semibold">{item.company}</p>
                    {item.location && (
                      <p className="text-gray-400 text-sm">{item.location}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full glass border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 text-sm">
                    {new Date(item.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} -{' '}
                    {item.isCurrent ? 'Present' : item.endDate ? new Date(item.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
                  </p>
                  
                  <p className="text-gray-300 text-sm">{item.description}</p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                      {item.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
