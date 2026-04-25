export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Core Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Rust', 'Solidity', 'Java', 'Python', 'PHP', 'MySQL', 'C++']
  },
  {
    category: 'Frontend & Logic',
    items: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'Redux', 'HTML5/CSS3', 'Godot Scripting']
  },
  {
    category: 'Backend & Web3',
    items: ['Node.js', 'Express', 'MongoDB', 'Hardhat', 'Web3.js', 'Ethers.js', 'Smart Contracts']
  },
  {
    category: 'Tools & Design',
    items: ['Git/GitHub', 'Google Analytics', 'SEO Mastery', 'UI/UX Design', 'Figma', 'Postman']
  },
  {
    category: 'Japanese (N4)',
    items: ['JLPT N4 Proficiency', 'Kanji Mastery', 'Keigo', 'Cultural Integration']
  },
  {
    category: 'Interests',
    items: ['Chess (National)', 'Badminton', 'Netball', 'Philanthropy']
  }
];
