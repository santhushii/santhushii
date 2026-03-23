import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import SkillBar from '../components/ui/SkillBar';
import { skills } from '../content/skills';
import { getSkills } from '../utils/api';

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState(skills);

  useEffect(() => {
    getSkills()
      .then(res => setSkillsData(res.data))
      .catch(() => setSkillsData(skills));
  }, []);

  const categories = {
    programming: 'Programming & Tech',
    tools: 'Tools & Platforms',
    marketing: 'Digital Marketing',
    design: 'Design',
    other: 'Other'
  };

  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="pt-20">
      <Section
        title="Skills & Expertise"
        subtitle="Technologies and tools I work with to build amazing products"
      >
        {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              {categories[category as keyof typeof categories] || category}
            </h3>
            <Card hover={false}>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Skill Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
            All Skills Overview
          </h3>
          <Card hover={false}>
            <div className="flex flex-wrap gap-3">
              {skillsData.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="px-4 py-2 rounded-full glass border-white/20 text-sm font-medium"
                  style={{
                    borderColor: skill.color ? `${skill.color}40` : undefined
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>
    </div>
  );
};

export default Skills;
