import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Timeline from '../components/ui/Timeline';
import { experiences } from '../content/experience';
import { getExperience } from '../utils/api';

const Experience: React.FC = () => {
  const [experiencesData, setExperiencesData] = useState(experiences);

  useEffect(() => {
    getExperience()
      .then(res => setExperiencesData(res.data))
      .catch(() => setExperiencesData(experiences));
  }, []);

  return (
    <div className="pt-20">
      <Section
        title="Experience"
        subtitle="My professional journey and key achievements"
      >
        <Timeline items={experiencesData} />
      </Section>
    </div>
  );
};

export default Experience;
