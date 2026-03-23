export interface Skill {
  name: string;
  category: 'programming' | 'tools' | 'marketing' | 'design' | 'other';
  level: number; // 0-100
  icon?: string;
  color?: string;
}

export const skills: Skill[] = [
  // Programming & Tech
  { name: 'JavaScript/TypeScript', category: 'programming', level: 85, color: '#F7DF1E' },
  { name: 'React', category: 'programming', level: 85, color: '#61DAFB' },
  { name: 'Node.js', category: 'programming', level: 80, color: '#339933' },
  { name: 'Express.js', category: 'programming', level: 80, color: '#000000' },
  { name: 'MongoDB', category: 'programming', level: 75, color: '#47A248' },
  { name: 'Mongoose', category: 'programming', level: 75, color: '#880000' },
  { name: 'REST APIs', category: 'programming', level: 85, color: '#FF6B6B' },
  { name: 'Git & GitHub', category: 'programming', level: 85, color: '#F05032' },
  { name: 'HTML/CSS', category: 'programming', level: 90, color: '#E34F26' },
  { name: 'Tailwind CSS', category: 'programming', level: 85, color: '#06B6D4' },
  
  // Tools
  { name: 'VS Code', category: 'tools', level: 90, color: '#007ACC' },
  { name: 'Postman', category: 'tools', level: 80, color: '#FF6C37' },
  { name: 'Figma', category: 'tools', level: 75, color: '#F24E1E' },
  { name: 'Jira', category: 'tools', level: 85, color: '#0052CC' },
  { name: 'Notion', category: 'tools', level: 80, color: '#000000' },
  { name: 'Slack', category: 'tools', level: 85, color: '#4A154B' },
  { name: 'Trello', category: 'tools', level: 75, color: '#0079BF' },
  { name: 'Asana', category: 'tools', level: 70, color: '#F06A6A' },
  
  // Digital Marketing
  { name: 'Google Analytics', category: 'marketing', level: 80, color: '#F4B400' },
  { name: 'Google Ads', category: 'marketing', level: 75, color: '#4285F4' },
  { name: 'Meta Ads', category: 'marketing', level: 80, color: '#0084FF' },
  { name: 'SEO/SEM', category: 'marketing', level: 75, color: '#4285F4' },
  { name: 'Social Media Marketing', category: 'marketing', level: 80, color: '#E1306C' },
  { name: 'Content Marketing', category: 'marketing', level: 75, color: '#FF6B6B' },
  { name: 'Email Marketing', category: 'marketing', level: 70, color: '#EA4335' },
  { name: 'Google Tag Manager', category: 'marketing', level: 70, color: '#FF6D01' },
  
  // Design
  { name: 'UI/UX Design', category: 'design', level: 70, color: '#FF6B6B' },
  { name: 'Prototyping', category: 'design', level: 75, color: '#F24E1E' },
  { name: 'Design Systems', category: 'design', level: 65, color: '#6366F1' }
];
