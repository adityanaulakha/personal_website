import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import TufIcon from '../components/TufIcon';

export const profile = {
  name: 'Aditya Naulakha',
  firstName: 'Aditya',
  role: 'Engineer',
  tagline: 'Jack of all Trades',
  email: 'hi@adityanaulakha.tech',
  taglineEmail: 'hi@adityanaulakha.tech',
  location: 'Mathura, Uttar Pradesh, India',
  education: {
    school: 'GLA University',
    degree: 'B.Tech in Computer Science & Engineering',
    years: '2023 – 2027',
    cgpa: '7.97',
    coursework: 'DSA in Java, OOP, DBMS, Computer Networks, System Design',
  },
  resumeUrl: 'https://drive.google.com/file/d/1ObOoLtLz9q0t4YnH6soLNU3oa5HgMuKX/view?usp=sharing',
  siteUrl: 'https://www.adityanaulakha.tech',
  bio: 'Computer Science undergraduate at GLA University, Mathura (B.Tech CSE, 2023–2027, CGPA 7.97), and President of the Droid Club. I build full-stack products and real-time systems — from offline-first academic apps to collaborative editors.',
  currently: [
    { label: 'Upcoming intern', detail: 'AI-Native SWE, EPAM Systems' },
    { label: 'B.Tech CSE', detail: 'GLA University · 2023–2027 · CGPA 7.97' },
    { label: 'President, Droid Club', detail: 'GLA University' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/adityanaulakha', Icon: SiGithub },
    { label: 'TUF', href: 'https://takeuforward.org/profile/adityanaulakha', Icon: TufIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-naulakha', Icon: SiLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/adityanaulakha.tech/', Icon: SiInstagram },
    { label: 'Email', href: 'mailto:hi@adityanaulakha.tech', Icon: HiOutlineMail },
  ],
};
