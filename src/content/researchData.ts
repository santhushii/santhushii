export interface Research {
  title: string;
  venue: string;
  year: string;
  summary: string;
  tags: string[];
}

export const research: Research[] = [
  {
    title: 'Grade 06 Coding Education through Interactive Learning',
    venue: '10th ICITR 2025 | University of Moratuwa',
    year: '2025',
    summary: 'Published international research focusing on gamified interactive learning systems for Sri Lankan students. Engineered a custom pedagogical engine that uses visual stimuli to increase student coding retention by 25%.',
    tags: ['EdTech', 'Interactive Learning', 'Pedagogy', 'ICITR']
  },
  {
    title: 'Blockchain Security in Decentralized Finance (Ongoing)',
    venue: 'Independent Research',
    year: '2025',
    summary: 'Researching novel methods for detecting smart contract vulnerabilities and optimizing gas consumption in DeFi protocols.',
    tags: ['Blockchain', 'Security', 'DeFi', 'Solidity']
  }
];
