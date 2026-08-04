import { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period?: string;
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Student Activity' | 'Business Owner';
  description: string[];
  visible?: boolean;
  order?: number;
}

export interface Skill {
  name: string;
  category: 'Design' | 'Development' | 'Tools';
  icon?: LucideIcon;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string; // The specific category (e.g. Logo, Web)
  group: 'Logo' | 'Web' | 'Event' | 'Product' | 'Post' | 'Social' | 'Art' | 'Freelance' | 'SocialAds' | 'Graphic'; // For filtering
  description: string;
  details?: string; // Long HTML/Text content for the internal page
  imageUrl: string;
  tools?: string[];
  link?: string;
  featured?: boolean;
  year?: string;
  role?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  gallery?: string[];
  links?: { label: string; url: string }[];
  stats?: { label: string; value: string }[]; // For views etc.
  span?: 'col-span-1' | 'col-span-2' | 'row-span-2';
  visible?: boolean;
  order?: number;
  accentColor?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  id?: string;
  imageUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}
