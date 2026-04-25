export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export const education: Education[] = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Malabe, SL',
    period: '2021 – 2025',
    details: 'Focused on Software Engineering. Graduated 2024.'
  },
  {
    degree: 'Diploma in Digital Marketing',
    institution: 'Sri Lanka Institute of Marketing (SLIM)',
    location: 'Colombo, SL',
    period: 'Graduated 2024',
    details: 'Integrated Marketing Communications.'
  }
];
