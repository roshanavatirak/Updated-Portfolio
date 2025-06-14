import { Code2, Globe, Brain, Database, Server, Shield, Users, Cpu, Blocks, Cloud } from 'lucide-react';
import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Technical Skills',
    skills: [
      { name: 'Data Structures', level: 90, icon: Database },
      { name: 'Algorithms', level: 85, icon: Code2 },
      { name: 'Problem Solving', level: 90, icon: Brain },
      { name: 'System Design', level: 80, icon: Server },
    ]
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'React.js', level: 90, icon: Code2 },
      { name: 'Node.js', level: 85, icon: Server },
      { name: 'TypeScript', level: 85, icon: Code2 },
      { name: 'Next.js', level: 80, icon: Globe },
      { name: 'MongoDB', level: 80, icon: Database },
      { name: 'PostgreSQL', level: 75, icon: Database },
    ]
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'Python', level: 85, icon: Code2 },
      { name: 'TensorFlow', level: 70, icon: Brain },
      { name: 'PyTorch', level: 65, icon: Brain },
      { name: 'Machine Learning', level: 75, icon: Cpu },
    ]
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', level: 80, icon: Blocks },
      { name: 'Kubernetes', level: 70, icon: Blocks },
      { name: 'CI/CD', level: 75, icon: Cloud },
      { name: 'AWS', level: 70, icon: Cloud },
    ]
  },
  {
    name: 'Web3',
    skills: [
      { name: 'Solidity', level: 60, icon: Blocks },
      { name: 'Smart Contracts', level: 65, icon: Shield },
      { name: 'DApp Development', level: 60, icon: Globe },
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Team Leadership', level: 85, icon: Users },
      { name: 'Communication', level: 90, icon: Users },
      { name: 'Project Management', level: 80, icon: Users },
      { name: 'Problem Solving', level: 90, icon: Brain },
    ]
  }
];