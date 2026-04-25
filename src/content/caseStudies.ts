import { Project } from './projects';

export interface CaseStudy extends Project {
  context: string;
  challenge: string;
  strategy: string;
  execution: string;
  learnings: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'E-Commerce Platform with Marketing Dashboard',
    slug: 'ecommerce-marketing-dashboard',
    summary: 'Full-stack e-commerce platform integrated with analytics and marketing automation tools',
    description: 'A comprehensive case study of building an e-commerce platform with integrated marketing capabilities.',
    category: ['hybrid'],
    tags: ['E-Commerce', 'Analytics', 'Marketing Automation'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    tools: ['Figma', 'Google Analytics', 'Meta Ads', 'Postman'],
    context: 'A mid-size retailer wanted to modernize their online presence and gain better insights into customer behavior and marketing performance. They were using a legacy system that couldn\'t integrate with modern marketing tools.',
    challenge: 'The main challenges were: (1) Migrating from legacy system without losing data, (2) Integrating multiple marketing platforms (Google Ads, Meta Ads, Email), (3) Building real-time analytics dashboard, (4) Ensuring SEO optimization from day one.',
    strategy: 'Adopted a phased approach: Phase 1 - Build core e-commerce functionality, Phase 2 - Integrate payment and shipping, Phase 3 - Add marketing dashboard, Phase 4 - Implement automation. Used MERN stack for flexibility and scalability.',
    execution: 'Started with user research and wireframing. Built React frontend with TypeScript for type safety. Created RESTful APIs with Express. Set up MongoDB with optimized schemas. Integrated Stripe for payments. Built analytics dashboard pulling data from GA4, Meta Ads API, and custom events. Implemented automated email campaigns using transactional emails.',
    problem: 'Client needed a modern e-commerce platform with integrated marketing tools to track performance and automate campaigns.',
    solution: 'Built a full-stack application with real-time analytics, automated email campaigns, and social media integration.',
    myRole: 'Full-stack developer and marketing strategist - designed architecture, implemented features, and set up marketing workflows.',
    results: [
      { metric: 'Revenue Increase', value: '150%' },
      { metric: 'Conversion Rate', value: '3.5% → 6.2%' },
      { metric: 'Customer Acquisition Cost', value: '-40%' }
    ],
    featured: true,
    caseStudy: true,
    learnings: [
      'Early integration of analytics is crucial - it\'s harder to add later',
      'Marketing tools should be considered from the architecture phase',
      'Real-time dashboards require careful optimization for performance',
      'Combining tech and marketing expertise leads to better product decisions'
    ]
  },
  {
    title: 'SEO-Optimized Blog Platform',
    slug: 'seo-blog-platform',
    summary: 'Content management system with built-in SEO tools and analytics',
    description: 'Case study on building a content-first platform with SEO as a core feature.',
    category: ['hybrid'],
    tags: ['CMS', 'SEO', 'Content Marketing'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    tools: ['Google Search Console', 'SEMrush', 'Google Analytics'],
    context: 'A content marketing team needed a custom CMS that would prioritize SEO without requiring technical knowledge for each blog post.',
    challenge: 'Main challenges: (1) Making SEO optimization accessible to non-technical writers, (2) Automating schema markup, (3) Ensuring fast page load times, (4) Tracking SEO performance over time.',
    strategy: 'Built SEO tools directly into the editor - real-time preview of meta tags, readability scores, keyword density, and schema suggestions. Automated technical SEO (sitemaps, robots.txt, canonical tags).',
    execution: 'Created a React-based WYSIWYG editor with SEO sidebar. Built server-side rendering for blog posts. Implemented automated schema markup generation. Set up integration with Google Search Console API for tracking. Created dashboard showing keyword rankings and traffic trends.',
    problem: 'Content creators needed SEO guidance without technical expertise.',
    solution: 'Built SEO tools directly into the CMS with real-time feedback and automation.',
    myRole: 'Full-stack developer and SEO strategist - designed CMS architecture and SEO features.',
    results: [
      { metric: 'Organic Traffic', value: '+250%' },
      { metric: 'Search Rankings', value: 'Top 10 for 15+ keywords' }
    ],
    featured: true,
    caseStudy: true,
    learnings: [
      'SEO should be baked into the platform, not an afterthought',
      'Non-technical users need visual feedback for SEO',
      'Automation of technical SEO saves time and reduces errors',
      'Content performance tracking drives better content strategy'
    ]
  },
  {
    title: 'Landing Page Optimization Campaign',
    slug: 'landing-page-optimization',
    summary: 'A/B testing and conversion optimization for high-traffic landing pages',
    description: 'Case study on using data-driven design to improve conversion rates.',
    category: ['marketing'],
    tags: ['CRO', 'A/B Testing', 'Analytics'],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    tools: ['Google Optimize', 'Google Analytics', 'Hotjar'],
    context: 'A SaaS company with high website traffic but low conversion rates needed to optimize their landing pages to improve sign-ups.',
    challenge: 'Key challenges: (1) Identifying what elements to test, (2) Understanding user behavior and pain points, (3) Running statistically significant tests, (4) Implementing changes without disrupting traffic.',
    strategy: 'Used a data-first approach: analyzed heatmaps, scroll maps, and user session recordings to identify friction points. Prioritized tests based on potential impact. Created multiple variations focusing on headlines, CTAs, social proof, and form length.',
    execution: 'Set up Google Optimize for A/B testing. Created 5 variations with different value propositions and CTA placements. Implemented event tracking for detailed conversion funnel analysis. Ran tests for 4 weeks ensuring statistical significance. Analyzed results and implemented winning variation.',
    problem: 'High traffic but low conversion rates on landing pages.',
    solution: 'Data-driven A/B testing to identify and implement high-impact changes.',
    myRole: 'Digital marketing strategist and analyst - designed tests, set up tracking, and analyzed results.',
    results: [
      { metric: 'Conversion Rate', value: '+85%' },
      { metric: 'Bounce Rate', value: '-30%' }
    ],
    featured: true,
    caseStudy: true,
    learnings: [
      'Always test assumptions with data',
      'Small changes can have big impacts (headline, CTA color)',
      'User behavior insights (heatmaps) reveal hidden friction points',
      'Conversion optimization is an ongoing process, not a one-time fix'
    ]
  }
];
