export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: 'YakkunLabs',
    role: 'Web3 Engineer',
    location: 'Matara, SL',
    period: 'Jan 2025 – Present',
    highlights: [
      'Implemented secure smart contract lifecycles and frontend handshake protocols using Solidity, Hardhat, and Ethers.js.',
      'Successfully optimized Web3 wallet integrations (MetaMask/WalletConnect) to reduce user onboarding friction by 40%.',
      'Collaborated with backend engineers to architect decentralized data indexing solutions for high-performance DeFi apps.'
    ]
  },
  {
    company: 'Park Street Warehouse',
    role: 'Assistant Social Media Marketing',
    location: 'Colombo, SL',
    period: 'Nov 2023 – Oct 2024',
    highlights: [
      'Architected data-driven content funnels that boosted user engagement and social conversion rates for major events.',
      'Utilized Google Analytics and SEO tools to identify high-traffic keywords for technical content strategies.',
      'Optimized digital product presentations resulting in a measurable increase in conversion rates.'
    ]
  }
];
