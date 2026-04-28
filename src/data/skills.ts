export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'UI/UX',
    skills: ['Figma', 'Design Systems', 'Wireframing'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Vite', 'VS Code'],
  },
];
