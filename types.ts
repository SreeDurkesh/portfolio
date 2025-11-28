export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillMetric {
  subject: string;
  A: number; // proficiency
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  CONTACT = 'contact'
}