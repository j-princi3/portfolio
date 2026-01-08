// Social Links Configuration
export const SOCIAL_LINKS = [
  {
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/princi-jain-501538260/',
    label: 'LinkedIn',
  },
  {
    icon: 'Github',
    href: 'https://github.com/j-princi3',
    label: 'GitHub',
  },
  {
    icon: 'Code',
    href: 'https://leetcode.com/u/j_princi3/',
    label: 'LeetCode',
  },
];

// Contact Information
export const CONTACT_INFO = {
  email: 'jainprinci00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/princi-jain-501538260/',
  github: 'https://github.com/j-princi3',
  leetcode: 'https://leetcode.com/u/j_princi3/',
};

// Experience Data
export const EXPERIENCE_DATA = [
  {
    title: 'Software Engineer Intern',
    company: 'EVENTBRITE',
    type: 'main' as const,
    achievements: [
      'Upgraded AWS Lambda & Patched 25+ Vulnerabilities',
      'Raised Code Quality to 80% via Pylint/ESLint',
      'Restored 100% user access via API Gateway updates',
    ],
    icon: 'Bug',
    delay: 0.1,
  },
  {
    title: 'Developer',
    company: 'TECH FOR AUTISM & DYSLEXIA',
    type: 'side' as const,
    achievements: [
      'Designed interactive memory games to reduce cognitive load',
      'Created accessible UI components for diverse learning needs',
    ],
    icon: 'Gamepad2',
    delay: 0.25,
  },
];

// Projects Data
export const PROJECTS_DATA = [
  {
    title: 'AQUA SENTINEL',
    description: 'Dual detection models (YOLOv11) for marine debris using SAR imagery. Protecting the oceans with AI precision.',
    breathingStyle: 'water' as const,
    icon: 'Droplets',
    tags: ['YOLOv11', 'SAR', 'Computer Vision', 'Python'],
    achievement: 'Best Innovation Award',
    delay: 0.1,
  },
  {
    title: 'THUNDER SCROLL',
    description: 'Real-time data processing engine handling 10M+ events/sec. Lightning-fast analytics for distributed systems.',
    breathingStyle: 'thunder' as const,
    icon: 'Zap',
    tags: ['Kafka', 'Apache Spark', 'AWS', 'Python'],
    delay: 0.25,
  },
  {
    title: 'INFERNAL NEXUS',
    description: 'High-performance web framework built with cutting-edge technologies. Production-ready with battle-tested patterns.',
    breathingStyle: 'fire' as const,
    icon: 'Trophy',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'PostgreSQL'],
    delay: 0.4,
  },
];

// Skills/Breathing Styles Data
export const SKILLS_DATA = [
  {
    name: 'CLOUD BREATHING',
    subtitle: 'DevOps Mastery',
    icon: 'Cloud',
    skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Kubernetes', 'Terraform'],
    color: 'water-breathing',
    glowClass: 'text-breathing-water',
    level: 95,
  },
  {
    name: 'CODE BREATHING',
    subtitle: 'Language Arts',
    icon: 'Code',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
    color: 'tanjiro-green',
    glowClass: 'text-primary',
    level: 92,
  },
  {
    name: 'WEB BREATHING',
    subtitle: 'Framework Fusion',
    icon: 'Globe',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'TailwindCSS', 'GraphQL'],
    color: 'hinokami-fire',
    glowClass: 'text-hinokami-fire',
    level: 88,
  },
  {
    name: 'MIND BREATHING',
    subtitle: 'Conceptual Combat',
    icon: 'Brain',
    skills: ['DSA (500+ LC)', 'AI/ML', 'System Design', 'Distributed Sys'],
    color: 'thunder-breathing',
    glowClass: 'text-breathing-thunder',
    level: 85,
  },
];

// Animation Variants
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const STAGGER_CONTAINER = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
