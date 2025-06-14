export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: 'Web Development' | 'AI/ML' | 'DevOps' | 'Web3';
  learnings: string[];
  contributions: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  type: 'internship' | 'work';
  technologies: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
  skills: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: any;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
    icon: any;
  }[];
}