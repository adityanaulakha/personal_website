import { HiOutlineEnvelope } from 'react-icons/hi2';
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandX } from 'react-icons/tb';
import TufIcon from '../components/TufIcon';

const email = 'hi@iadityanaulakha.tech';

export const profile = {
  name: 'Aditya Naulakha',
  firstName: 'Aditya',
  role: 'Engineer',
  tagline: 'Jack of all Trades',
  email,
  taglineEmail: email,
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
  socials: [
    { label: 'X', href: 'https://x.com/iadityanaulakha', Icon: TbBrandX },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-naulakha', Icon: TbBrandLinkedin },
    { label: 'GitHub', href: 'https://github.com/adityanaulakha', Icon: TbBrandGithub },
    { label: 'Instagram', href: 'https://www.instagram.com/adityanaulakha.tech', Icon: TbBrandInstagram },
    { label: 'TUF', href: 'https://takeuforward.org/profile/adityanaulakha', Icon: TufIcon },
    { label: 'Email', href: `mailto:${email}`, Icon: HiOutlineEnvelope },
  ],
};
