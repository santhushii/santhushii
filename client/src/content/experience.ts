export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'professional' | 'internship' | 'freelance';
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Web3 Engineer',
    company: 'YakkunLabs',
    location: 'Matara, SL',
    period: 'Jan 2025 – Present',
    description: [
      'Implemented secure smart contract lifecycles and frontend handshake protocols using Solidity, Hardhat, and Ethers.js.',
      'Successfully optimized Web3 wallet integrations (MetaMask/WalletConnect) to reduce user onboarding friction by 40%.',
      'Collaborated with backend engineers to architect decentralized data indexing solutions for high-performance DeFi apps.'
    ],
    skills: ['Solidity', 'Hardhat', 'Ethers.js', 'React', 'Web3.js'],
    type: 'professional'
  },
  {
    id: 2,
    role: 'Assistant Social Media Marketing',
    company: 'Park Street Warehouse',
    location: 'Colombo, SL',
    period: 'Nov 2023 – Oct 2024',
    description: [
      'Architected data-driven content funnels that boosted user engagement and social conversion rates for major events.',
      'Utilized Google Analytics and SEO tools to identify high-traffic keywords for technical content strategies.'
    ],
    skills: ['Google Analytics', 'SEO', 'Content Strategy', 'Marketing Funnels'],
    type: 'professional'
  }
];
