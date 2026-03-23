export interface Experience {
  company: string;
  title: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  type: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract';
  achievements: string[];
  tags: ('tech' | 'leadership' | 'marketing' | 'analytics' | 'product')[];
  description: string;
  companyLogo?: string;
}

export const experiences: Experience[] = [
  {
    company: 'YakkunLabs',
    title: 'Associate Project Manager',
    location: 'Sri Lanka',
    startDate: '2023-01',
    isCurrent: true,
    type: 'full-time',
    achievements: [
      'Led cross-functional teams to deliver 5+ web applications on time and within budget',
      'Implemented Agile methodologies, reducing project delivery time by 30%',
      'Managed stakeholder communications and coordinated between tech and marketing teams',
      'Created comprehensive project documentation and roadmaps using Jira and Notion',
      'Facilitated sprint planning, retrospectives, and daily standups for 3+ concurrent projects'
    ],
    tags: ['tech', 'leadership', 'product'],
    description: 'Managing full-stack web development projects while ensuring alignment between technical execution and business objectives.',
    companyLogo: '/logos/yakkunlabs.png'
  },
  {
    company: 'Freelance',
    title: 'Full-Stack Developer & Digital Marketing Consultant',
    location: 'Remote',
    startDate: '2022-06',
    endDate: '2023-12',
    isCurrent: false,
    type: 'freelance',
    achievements: [
      'Built and deployed 10+ responsive web applications using MERN stack',
      'Developed SEO-optimized landing pages that increased client traffic by 45%',
      'Created and managed digital marketing campaigns with 200%+ ROI',
      'Integrated analytics tools (GA4, GTM) for comprehensive performance tracking',
      'Delivered technical consulting services for startups and small businesses'
    ],
    tags: ['tech', 'marketing', 'analytics'],
    description: 'Providing end-to-end services from development to digital marketing strategy for clients across various industries.',
    companyLogo: '/logos/freelance.png'
  },
  {
    company: 'Tech Startup Inc.',
    title: 'Software Development Intern',
    location: 'Colombo, Sri Lanka',
    startDate: '2021-06',
    endDate: '2021-12',
    isCurrent: false,
    type: 'internship',
    achievements: [
      'Contributed to frontend development using React and TypeScript',
      'Participated in code reviews and learned industry best practices',
      'Collaborated with senior developers on feature implementation',
      'Fixed bugs and improved application performance by 20%'
    ],
    tags: ['tech'],
    description: 'Six-month internship focusing on frontend development and learning modern web development practices.',
    companyLogo: '/logos/startup.png'
  }
];
