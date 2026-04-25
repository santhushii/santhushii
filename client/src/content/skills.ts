export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Core Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Rust', level: 75 },
      { name: 'Solidity', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'PHP', level: 65 },
      { name: 'MySQL', level: 80 }
    ]
  },
  {
    title: 'Frontend & Logic',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Redux', level: 85 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3/Flexbox/Grid', level: 95 },
      { name: 'Godot Scripting', level: 70 }
    ]
  },
  {
    title: 'Backend & Web3',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB Atlas', level: 80 },
      { name: 'Hardhat', level: 85 },
      { name: 'Web3.js/Ethers.js', level: 90 }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git Ecosystem', level: 90 },
      { name: 'Google Analytics', level: 85 },
      { name: 'SEO Tools', level: 80 },
      { name: 'UI/UX Design', level: 85 }
    ]
  }
];
