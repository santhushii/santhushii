import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { profile } from '../content/profile';
import { experiences } from '../content/experience';
import Timeline from '../components/ui/Timeline';
import { getProfile } from '../utils/api';

const About: React.FC = () => {
  const [profileData, setProfileData] = useState(profile);

  useEffect(() => {
    getProfile()
      .then(res => setProfileData(res.data))
      .catch(() => setProfileData(profile));
  }, []);

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section title="About Me" subtitle={profileData.tagline}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
            {profileData.story}
          </p>
        </motion.div>
      </Section>

      {/* Tech Side vs Marketing Side */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {profileData.techSide.title}
              </h3>
              <p className="text-gray-300 mb-6">{profileData.techSide.description}</p>
              <ul className="space-y-2">
                {profileData.techSide.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <span className="text-purple-400 mr-2">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {profileData.marketingSide.title}
              </h3>
              <p className="text-gray-300 mb-6">{profileData.marketingSide.description}</p>
              <ul className="space-y-2">
                {profileData.marketingSide.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <span className="text-pink-400 mr-2">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section title="Core Values">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false} className="text-center h-full">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-lg font-semibold text-white">{value}</h4>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Timeline" subtitle="My journey through education and career">
        <Timeline items={experiences} />
      </Section>
    </div>
  );
};

export default About;
