export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Design System',
    description:
      'A comprehensive component library built with accessibility and consistency in mind, featuring dark/light mode support and full TypeScript types.',
    tags: ['TypeScript', 'CSS', 'Figma'],
    url: 'https://github.com/abeerhassan',
  },
  {
    title: 'Dashboard UI',
    description:
      'A clean analytics dashboard with responsive layouts, data visualisation components, and a focus on readability and usability.',
    tags: ['TypeScript', 'HTML', 'CSS'],
    url: 'https://github.com/abeerhassan',
  },
  {
    title: 'Portfolio Site',
    description:
      'This minimalist portfolio — built with vanilla TypeScript and Vite, no frameworks. Prioritises performance, accessibility, and clean code.',
    tags: ['TypeScript', 'Vite', 'CSS'],
    url: 'https://github.com/abeerhassan',
  },
];
