export interface Research {
  title: string;
  conference: string;
  location: string;
  year: string;
  description: string[];
}

export const research: Research[] = [
  {
    title: 'Grade 06 coding education through interactive learning',
    conference: '10th ICITR 2025 | University of Moratuwa',
    location: 'Moratuwa, SL',
    year: '2025',
    description: [
      'Published international research focusing on gamified interactive learning systems for Sri Lankan Grade 06 students.',
      'Engineered a custom pedagogical engine that uses visual stimuli to increase student coding retention by 25%.',
      'Presented technical findings at the 10th International Conference on Information Technology Research (ICITR).'
    ]
  }
];
