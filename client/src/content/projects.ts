export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  category: ('tech' | 'blockchain' | 'learning' | 'fullstack')[];
  tags: string[];
  techStack: string[];
  tools: string[];
  problem?: string;
  solution?: string;
  myRole?: string;
  results?: {
    metric: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: boolean;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'JLPT N4 Master App',
    slug: 'jlpt-n4-master',
    summary: 'Gamified learning platform for JLPT N4 students',
    description: 'Engineered a full-syllabus React application for JLPT N4 students featuring Local Storage persistence and real-time quiz logic. Designed an interactive Hiragana/Katakana tracking system that visualizes learning progress through dynamic UI charts.',
    thumbnail: '/jlpt_app.png',
    category: ['tech', 'learning'],
    tags: ['React', 'Gamification', 'E-Learning'],
    techStack: ['React', 'JavaScript', 'Local Storage', 'Recharts'],
    tools: ['Figma', 'VS Code'],
    featured: true,
    githubUrl: 'https://github.com/santhushii/jlpt-master'
  },
  {
    title: 'HENNGE Password Validation',
    slug: 'hennge-challenge',
    summary: 'Enterprise-grade authentication portal with strict accessibility',
    description: 'Developed a production-grade authentication portal following strict WCAG 2.1 AAA Accessibility guidelines. Implemented complex declarative validation rules using high-order functional programming concepts in React.',
    thumbnail: '/password_val.png',
    category: ['tech'],
    tags: ['Accessibility', 'Security', 'Enterprise'],
    techStack: ['React', 'TypeScript', 'Functional Programming'],
    tools: ['WCAG 2.1 AAA'],
    featured: true,
    githubUrl: 'https://github.com/santhushii/hennge-challenge'
  },
  {
    title: 'Sensei Japanese Center',
    slug: 'sensei-japanese',
    summary: 'Mobile-first language portal for 100+ active students',
    description: 'Designed a mobile-first language portal using responsive CSS architectures, serving over 100+ active students monthly. Integrated lightweight course management modules to ensure sub-second page performance.',
    thumbnail: '/sensei_japanese.png',
    category: ['tech', 'learning'],
    tags: ['Responsive', 'Performance', 'CSS'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    tools: ['Chrome DevTools', 'Lighthouse'],
    featured: true,
    liveUrl: 'https://senseijapanese.lk'
  },
  {
    title: 'Hospital Management System',
    slug: 'hospital-management',
    summary: 'Full-stack CRUD application for patient data management',
    description: 'Full-stack CRUD application for managing patient data, featuring JWT-based authentication and secure account levels. Built with the MERN stack for scalability and security.',
    thumbnail: '/hospital_mgmt.png',
    category: ['fullstack'],
    tags: ['MERN', 'Security', 'CRUD'],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    tools: ['Postman', 'Atlas'],
    featured: true
  }
];
