export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend & Design',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Figma', 'Canva', 'Photoshop'],
  },
  {
    category: 'Tools & Systems',
    skills: ['Zoho CRM', 'Microsoft Office', 'Git', 'Vite', 'VS Code', 'Notion'],
  },
  {
    category: 'Soft Skills',
    skills: ['Customer Service', 'Team Collaboration', 'Problem Solving', 'Communication', 'Organisation'],
  },
];
