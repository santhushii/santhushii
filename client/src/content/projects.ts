export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  category: ('tech' | 'marketing' | 'hybrid')[];
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
    title: 'E-Commerce Platform with Marketing Dashboard',
    slug: 'ecommerce-marketing-dashboard',
    summary: 'Full-stack e-commerce platform integrated with analytics and marketing automation tools',
    description: 'A comprehensive e-commerce solution built with React and Node.js, featuring a custom marketing dashboard that tracks customer behavior, manages campaigns, and provides actionable insights.',
    category: ['hybrid'],
    tags: ['E-Commerce', 'Analytics', 'Marketing Automation'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    tools: ['Figma', 'Google Analytics', 'Meta Ads', 'Postman'],
    problem: 'Client needed a modern e-commerce platform with integrated marketing tools to track performance and automate campaigns.',
    solution: 'Built a full-stack application with real-time analytics, automated email campaigns, and social media integration.',
    myRole: 'Full-stack developer and marketing strategist - designed architecture, implemented features, and set up marketing workflows.',
    results: [
      { metric: 'Revenue Increase', value: '150%' },
      { metric: 'Conversion Rate', value: '3.5% → 6.2%' },
      { metric: 'Customer Acquisition Cost', value: '-40%' }
    ],
    featured: true,
    caseStudy: true
  },
  {
    title: 'Portfolio Website for Creative Agency',
    slug: 'creative-agency-portfolio',
    summary: 'Modern, animated portfolio website showcasing agency work and services',
    description: 'A stunning portfolio website built with React and Framer Motion, featuring smooth animations, dark mode, and a fully responsive design.',
    category: ['tech'],
    tags: ['Portfolio', 'Animation', 'UI/UX'],
    techStack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    tools: ['Figma', 'VS Code'],
    featured: true
  },
  {
    title: 'SEO-Optimized Blog Platform',
    slug: 'seo-blog-platform',
    summary: 'Content management system with built-in SEO tools and analytics',
    description: 'A custom CMS built for content creators, featuring SEO optimization tools, analytics dashboard, and social media integration.',
    category: ['hybrid'],
    tags: ['CMS', 'SEO', 'Content Marketing'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    tools: ['Google Search Console', 'SEMrush', 'Google Analytics'],
    results: [
      { metric: 'Organic Traffic', value: '+250%' },
      { metric: 'Search Rankings', value: 'Top 10 for 15+ keywords' }
    ],
    featured: true
  },
  {
    title: 'Social Media Campaign Dashboard',
    slug: 'social-media-dashboard',
    summary: 'Unified dashboard for managing multiple social media campaigns',
    description: 'A marketing tool that aggregates data from Facebook, Instagram, Twitter, and LinkedIn campaigns into a single dashboard with advanced analytics.',
    category: ['marketing'],
    tags: ['Social Media', 'Analytics', 'Campaign Management'],
    techStack: ['React', 'Node.js', 'Express', 'REST APIs'],
    tools: ['Meta Business Suite', 'Google Analytics', 'Figma'],
    featured: false
  },
  {
    title: 'Task Management App',
    slug: 'task-management-app',
    summary: 'Collaborative task management tool with real-time updates',
    description: 'A Kanban-style task management application with real-time collaboration, notifications, and project analytics.',
    category: ['tech'],
    tags: ['Productivity', 'Collaboration', 'Real-time'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    tools: ['Figma', 'Jira'],
    featured: false
  },
  {
    title: 'Landing Page Optimization Campaign',
    slug: 'landing-page-optimization',
    summary: 'A/B testing and conversion optimization for high-traffic landing pages',
    description: 'Led a conversion rate optimization project, implementing A/B tests and improving landing page performance through data-driven design changes.',
    category: ['marketing'],
    tags: ['CRO', 'A/B Testing', 'Analytics'],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    tools: ['Google Optimize', 'Google Analytics', 'Hotjar'],
    results: [
      { metric: 'Conversion Rate', value: '+85%' },
      { metric: 'Bounce Rate', value: '-30%' }
    ],
    featured: true
  }
];
