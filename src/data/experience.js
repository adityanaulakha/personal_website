import {
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiNodedotjs,
} from 'react-icons/si';

export const experience = [
  {
    id: 'epam',
    company: 'EPAM Systems',
    role: 'AI-Native Software Engineering Intern',
    type: 'Internship',
    start: 'Upcoming',
    end: '',
    short: 'Upcoming',
    location: '',
    current: false,
    upcoming: true,
    tech: [],
    bullets: [],
    links: [],
  },
  {
    id: 'yrit',
    company: 'YRIT Solutions',
    role: 'Full-Stack Developer Intern',
    type: 'Internship',
    start: 'Sep 2025',
    end: 'Nov 2025',
    short: 'Sep 25 – Nov 25',
    location: 'Remote',
    current: false,
    tech: [
      { name: 'React', Icon: SiReact },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
    ],
    bullets: [
      'Designed scalable backend data pipelines integrated with AI-powered chatbots, reducing manual processing effort by 30% across live production workflows.',
      'Architected 10+ modular, reusable React.js and Tailwind CSS components enforcing OOP principles, with cross-browser compatibility across 5+ environments.',
      'Resolved 25+ production-level bugs through root-cause analysis, and kept Git workflows clean with structured code reviews in an agile environment.',
    ],
    links: [
      {
        label: 'Certificate',
        href: 'https://drive.google.com/file/d/1VT0lYHeoGdYTyI7WwYpGZYWRR3ibkJcT/view?usp=sharing',
      },
    ],
  },
  {
    id: 'baoiam',
    company: 'Baoiam Innovations',
    role: 'Front-End Developer Intern',
    type: 'Internship',
    start: 'Jun 2024',
    end: 'Aug 2024',
    short: 'Jun 24 – Aug 24',
    location: 'Remote',
    current: false,
    tech: [
      { name: 'React', Icon: SiReact },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'REST APIs', Icon: SiNodedotjs },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
    ],
    bullets: [
      'Built a responsive e-commerce platform with React.js and Tailwind CSS, and integrated REST APIs for catalog, cart, and order management across 3+ browsers.',
      'Shipped 5+ feature modules in 2-week agile sprints, reducing the UI bug backlog by 35% across 3 product tracks while keeping version control clean.',
    ],
    links: [
      { label: 'Project', href: 'https://divueens-frontend.vercel.app/' },
      {
        label: 'Certificate',
        href: 'https://drive.google.com/file/d/1aXhQPyYcucJ-gdLwP3qbSjn8MnOSFAmZ/view?usp=sharing',
      },
    ],
  },
];
