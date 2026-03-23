export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CEO',
    company: 'Tech Startup Inc.',
    content: 'Santhushie delivered an outstanding e-commerce platform that exceeded our expectations. His combination of technical skills and marketing insights helped us launch successfully.',
    rating: 5,
    featured: true
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director',
    company: 'Digital Agency',
    content: 'Working with Santhushie was a game-changer. He not only built a beautiful website but also set up our entire marketing analytics infrastructure. Highly recommended!',
    rating: 5,
    featured: true
  },
  {
    name: 'Mike Johnson',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'As a project manager, Santhushie kept our team organized and on track. His technical background made communication seamless, and we delivered ahead of schedule.',
    rating: 5,
    featured: true
  },
  {
    name: 'Sarah Williams',
    role: 'Product Manager',
    company: 'Tech Corp',
    content: 'Santhushie\'s ability to bridge tech and marketing is rare. He understands both sides of the equation and delivers solutions that work holistically.',
    rating: 5,
    featured: false
  }
];
