export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  category: ('tech' | 'blockchain' | 'learning' | 'fullstack' | 'game' | 'marketing' | 'tourism' | 'rust')[];
  tags: string[];
  techStack: string[];
  tools: string[];
  problem?: string;
  solution?: string;
  myRole?: string;
  results?: {
    metric: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: boolean;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'JLPT N4 Master App',
    slug: 'jlpt-n4-master',
    summary: 'Gamified learning platform for JLPT N4 students',
    description: 'Engineered a full-syllabus React application for JLPT N4 students featuring Local Storage persistence and real-time quiz logic. Designed an interactive Hiragana/Katakana tracking system that visualizes learning progress through dynamic UI charts.',
    thumbnail: '/jlpt_app.png',
    category: ['tech', 'learning'],
    tags: ['React', 'Gamification', 'E-Learning'],
    techStack: ['React', 'JavaScript', 'Local Storage', 'Recharts'],
    tools: ['Figma', 'VS Code'],
    featured: true,
    githubUrl: 'https://github.com/santhushii/jlpt-master'
  },
  {
    title: 'Sonic Blockchain NFT',
    slug: 'sonic-blockchain',
    summary: 'Web3 NFT project on the Sonic blockchain',
    description: 'Developed a high-performance NFT minting platform on the Sonic blockchain. Implemented secure smart contracts and a seamless frontend handshake protocol for Web3 wallets.',
    thumbnail: '/sonic_thumb.png',
    category: ['blockchain', 'tech'],
    tags: ['Web3', 'Solidity', 'Sonic'],
    techStack: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
    tools: ['MetaMask', 'Sonic Scan'],
    featured: true,
    githubUrl: 'https://github.com/santhushii/sonic-blockchain-nft.git'
  },
  {
    title: 'HENNGE Password Validation',
    slug: 'hennge-challenge',
    summary: 'Enterprise-grade authentication portal with strict accessibility',
    description: 'Developed a production-grade authentication portal following strict WCAG 2.1 AAA Accessibility guidelines. Implemented complex declarative validation rules using high-order functional programming concepts in React.',
    thumbnail: '/password_val.png',
    category: ['tech'],
    tags: ['Accessibility', 'Security', 'Enterprise'],
    techStack: ['React', 'TypeScript', 'Functional Programming'],
    tools: ['WCAG 2.1 AAA'],
    featured: true,
    githubUrl: 'https://github.com/santhushii/hennge-challenge'
  },
  {
    title: 'Bevy 2D Indie Game',
    slug: 'bevy-game',
    summary: 'High-performance 2D game built with Rust and Bevy',
    description: 'Engineered a 2D game using the Bevy engine and Rust, leveraging ECS (Entity Component System) architecture for high performance and modularity. Focused on smooth gameplay physics and memory-efficient asset loading.',
    thumbnail: '/bevy_thumb.png',
    category: ['game', 'rust'],
    tags: ['Rust', 'Bevy', 'Game Dev'],
    techStack: ['Rust', 'Bevy Engine'],
    tools: ['Cargo', 'VS Code'],
    featured: true,
    githubUrl: 'https://github.com/santhushii/bevy_new_2d.git'
  },
  {
    title: 'Oluspa Website',
    slug: 'oluspa-website',
    summary: 'Responsive front-end for a premium wellness brand',
    description: 'Built a high-performance, responsive front-end using React with a focus on SEO-friendly design. Optimized the user journey and improved site speed for a seamless booking experience.',
    thumbnail: '/oluspa_thumb.png',
    category: ['tech', 'marketing'],
    tags: ['React', 'SEO', 'UX Optimization'],
    techStack: ['React', 'CSS3', 'JavaScript'],
    tools: ['Google Analytics', 'Lighthouse'],
    featured: true,
    liveUrl: 'https://oluspa.com'
  },
  {
    title: 'Halloween Battleground',
    slug: 'halloween-battleground',
    summary: 'Multiplayer indie game developed with Godot',
    description: 'Developed a multiplayer indie game using Godot, focusing on complex gameplay logic, asset integration, and an immersive user experience. Features real-time multiplayer interactions and dynamic environment lighting.',
    thumbnail: '/halloween_thumb.png',
    category: ['game', 'tech'],
    tags: ['Game Dev', 'Godot', 'Multiplayer'],
    techStack: ['Godot Engine', 'GDScript'],
    tools: ['Blender', 'Aseprite'],
    featured: true
  },
  {
    title: 'Starship Game 014',
    slug: 'starship-game',
    summary: 'Space-themed action game with dynamic combat',
    description: 'Built an action-packed space exploration game featuring dynamic combat systems and procedural environment elements.',
    thumbnail: '/starship_thumb.png',
    category: ['game'],
    tags: ['Game Dev', 'Physics', 'Action'],
    techStack: ['Godot', 'GDScript'],
    tools: ['GIMP'],
    featured: false,
    githubUrl: 'https://github.com/santhushii/starship_game_014.git'
  },
  {
    title: 'Medical Center Management',
    slug: 'medical-center-mgmt',
    summary: 'Full-stack admin dashboard for healthcare providers',
    description: 'Developed a comprehensive admin dashboard for managing patient records, appointments, and billing. Built with the MERN stack to ensure high availability and data security.',
    thumbnail: '/medical_mgmt.png',
    category: ['fullstack'],
    tags: ['MERN', 'Healthcare', 'Admin Dashboard'],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    tools: ['Postman', 'Atlas'],
    featured: true
  },
  {
    title: 'Online Music Store',
    slug: 'online-music-store',
    summary: 'Secure e-commerce platform for digital and physical music',
    description: 'Implemented backend logic and a secure checkout system using Java (MVC architecture). Features a comprehensive product catalog and role-based user management.',
    thumbnail: '/music_store.png',
    category: ['tech', 'fullstack'],
    tags: ['Java MVC', 'E-commerce', 'Security'],
    techStack: ['Java', 'PHP', 'MySQL', 'HTML/CSS'],
    tools: ['NetBeans', 'XAMPP'],
    featured: false
  },
  {
    title: 'Travel with Sohan',
    slug: 'travel-sohan',
    summary: 'Dynamic tourism portal showcasing Sri Lankan destinations',
    description: 'Designed and developed a travel portal featuring high-quality visual content and destination guides to drive engagement for a local tourism brand.',
    thumbnail: '/travel_sohan.png',
    category: ['tourism', 'marketing'],
    tags: ['Tourism', 'Web Design', 'UI/UX'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    tools: ['Figma'],
    featured: false,
    githubUrl: 'https://github.com/santhushii/travel_with_sohan.git'
  },
  {
    title: 'Flying Bird Tours',
    slug: 'flying-bird-tours',
    summary: 'Professional tour booking and management system',
    description: 'Built a responsive tourism website with a focus on ease of navigation and conversion optimization for tour bookings.',
    thumbnail: '/flying_bird.png',
    category: ['tourism', 'marketing'],
    tags: ['Tourism', 'Responsive', 'Conversion'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    tools: ['Google Search Console'],
    featured: false,
    githubUrl: 'https://github.com/santhushii/flying_bird_tours.git'
  }
];
