import { resolveTech } from './tech';

function techOf(...names) {
  return names.map((name) => resolveTech(name));
}

/** @returns {'working' | 'upcoming' | null} */
export function experienceStatus(exp) {
  if (exp.status === 'working' || exp.status === 'upcoming') return exp.status;
  if (exp.current) return 'working';
  if (exp.upcoming) return 'upcoming';
  return null;
}

export function experienceRange(exp) {
  if (exp.start && exp.end) return `${exp.start} – ${exp.end}`;
  if (exp.current && exp.start) return `${exp.start} – Present`;
  return exp.start || exp.end || '';
}

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
    status: 'upcoming',
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
    tech: techOf('React.js', 'Tailwind CSS', 'Git'),
    bullets: [
      'Designed scalable backend data pipelines integrated with AI-powered chatbots, reducing manual processing effort by 30% across live production workflows.',
      'Architected 10+ modular, reusable React.js and Tailwind CSS components enforcing OOP principles, with cross-browser compatibility across 5+ environments.',
      'Resolved 25+ production-level bugs through systematic root-cause analysis, and kept Git workflows clean with structured code reviews in an agile environment.',
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
    company: 'Baoiam Innovations Pvt. Ltd',
    role: 'Front-End Developer Intern',
    type: 'Internship',
    start: 'Jun 2024',
    end: 'Aug 2024',
    short: 'Jun 24 – Aug 24',
    location: 'Remote',
    current: false,
    tech: techOf('React.js', 'Tailwind CSS', 'REST APIs'),
    bullets: [
      'Built a responsive e-commerce platform with React.js and Tailwind CSS, and integrated REST APIs for catalog, cart, and order management across 3+ browsers.',
      'Shipped 5+ feature modules in 2-week agile sprints, reducing the UI bug backlog by 35% across 3 product tracks.',
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
