export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'Design System',
    description:
      'A comprehensive component library built with accessibility and consistency in mind. Features dark/light mode, full TypeScript types, and a Figma token pipeline.',
    tags: ['TypeScript', 'CSS', 'Figma'],
    url: 'https://github.com/abeerhassan',
    year: '2024',
  },
  {
    title: 'Dashboard UI',
    description:
      'A clean analytics dashboard with responsive layouts, data visualisation components, and a relentless focus on readability and usability.',
    tags: ['TypeScript', 'HTML', 'CSS'],
    url: 'https://github.com/abeerhassan',
    year: '2024',
  },
  {
    title: 'Portfolio Site',
    description:
      'This portfolio — built with vanilla TypeScript and Vite, zero frameworks. Prioritises performance, accessibility, and intentional design.',
    tags: ['TypeScript', 'Vite', 'CSS'],
    url: 'https://github.com/abeerhassan',
    year: '2025',
  },
];
