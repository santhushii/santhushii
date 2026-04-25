export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Malabe, SL',
    period: '2021 – 2025',
    description: 'Focused on Software Engineering. Specialized in architecting scalable React applications and secure blockchain integrations.'
  },
  {
    degree: 'Diploma in Digital Marketing',
    institution: 'Sri Lanka Institute of Marketing (SLIM)',
    location: 'Colombo, SL',
    period: '2024',
    description: 'Integrated Marketing Communications and technical SEO strategies for digital products.'
  }
];
