import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import TufIcon from '../components/TufIcon';

export const profile = {
  name: 'Aditya Naulakha',
  firstName: 'Aditya',
  role: 'Software Developer',
  tagline: 'Full-stack · AI · Systems',
  email: 'naulakhaaditya4@gmail.com',
  location: 'Mathura, Uttar Pradesh, India',
  education: {
    school: 'GLA University',
    degree: 'B.Tech in Computer Science & Engineering',
    years: '2023 – 2027',
    coursework: 'DSA, DBMS, Computer Networks, OOP, System Design',
  },
  resumeUrl: 'https://drive.google.com/file/d/14uia-9KH1AoMIvR7jFWd2fdhyD9-X0-h/view?usp=sharing',
  siteUrl: 'https://www.adityanaulakha.tech',
  bio: 'Computer Science undergraduate at GLA University, Mathura (2023–2027), and President of the Droid Club. I build full-stack products, real-time systems, and ML pipelines — from offline-first apps to document version control.',
  currently: [
    { label: 'Upcoming intern', detail: 'AI-Native SWE, EPAM Systems' },
    { label: 'B.Tech CSE', detail: 'GLA University · 2023–2027' },
    { label: 'President, Droid Club', detail: 'GLA University' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/adityanaulakha', Icon: SiGithub },
    { label: 'TUF', href: 'https://takeuforward.org/profile/adityanaulakha', Icon: TufIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-naulakha', Icon: SiLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/adityanaulakha.tech/', Icon: SiInstagram },
    { label: 'Email', href: 'mailto:naulakhaaditya4@gmail.com', Icon: HiOutlineMail },
  ],
};
