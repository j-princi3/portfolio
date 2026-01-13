// Component Props Types
export interface SocialLink {
  icon: string; // Icon name from lucide-react
  href: string;
  label: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  type: 'main' | 'side';
  achievements: string[];
  icon: string;
  delay: number;
}

export interface Project {
  title: string;
  description: string;
  breathingStyle: 'water' | 'thunder' | 'fire' | 'mist' | 'insect' | 'butterfly';
  icon: string;
  tags: string[];
  achievement?: string;
  delay: number;
  // Optional image path (public/) or external URL
  image?: string;
  // Optional related links
  links?: { label: string; href: string }[];
  // Layout for project card: 'stack' (image above) or 'side' (image left, content right)
  // allow string to accommodate literal widening in constants
  layout?: 'stack' | 'side' | string;
  // Image type to choose layout: 'mobile' (phone screenshots) or 'web' (website previews)
  imageType?: 'mobile' | 'web' | string;
}

export interface Skill {
  name: string;
  subtitle: string;
  icon: string;
  skills: string[];
  color: string;
  glowClass: string;
  level: number;
}

export interface Star {
  id: number;
  x: number;
  y: number;
  radius: number;
  opacity: number;
}
