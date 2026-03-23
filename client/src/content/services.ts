export interface Service {
  title: string;
  description: string;
  bullets: string[];
  icon?: string;
  color?: string;
}

export const services: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development using modern technologies',
    bullets: [
      'Custom web applications with React, Node.js, and MongoDB',
      'RESTful API design and development',
      'Responsive, mobile-first design implementation',
      'Database architecture and optimization',
      'Deployment and DevOps setup'
    ],
    icon: '💻',
    color: '#6366F1'
  },
  {
    title: 'Product & Project Support',
    description: 'Technical project management and product development guidance',
    bullets: [
      'Agile project management and sprint planning',
      'Cross-functional team coordination',
      'Technical documentation and roadmaps',
      'Stakeholder communication and reporting',
      'Quality assurance and testing oversight'
    ],
    icon: '🚀',
    color: '#EC4899'
  },
  {
    title: 'Digital Marketing & Growth',
    description: 'Data-driven marketing strategies to drive growth and engagement',
    bullets: [
      'SEO/SEM strategy and optimization',
      'Social media campaign management',
      'Content marketing and creation',
      'Analytics setup and performance tracking',
      'Conversion rate optimization (CRO)'
    ],
    icon: '📈',
    color: '#06B6D4'
  }
];
