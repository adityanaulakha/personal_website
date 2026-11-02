import {
  SiAmazonwebservices,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPwa,
  SiPython,
  SiReact,
  SiRedis,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import FirestoreIcon from '../components/icons/FirestoreIcon';
import JavaIcon from '../components/icons/JavaIcon';
import {
  DbmsIcon,
  DsaIcon,
  NetworksIcon,
  OopIcon,
  RestIcon,
  SqlIcon,
  SystemDesignIcon,
} from '../components/icons/MonogramIcon';
import WebSocketIcon from '../components/icons/WebSocketIcon';
import ZustandIcon from '../components/icons/ZustandIcon';

/**
 * Brand marks for resume skills, project stacks, and experience tiles.
 * Near-black logos omit a color so they inherit the theme foreground.
 */
const react = { Icon: SiReact, color: '#61DAFB' };
const express = { Icon: SiExpress };
const socketIo = { Icon: SiSocketdotio };
const firebase = { Icon: SiFirebase, color: '#DD2C00' };
const firestore = { Icon: FirestoreIcon };

const techByName = {
  Java: { Icon: JavaIcon },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  Python: { Icon: SiPython, color: '#3776AB' },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  Express: express,
  'Express.js': express,
  'REST APIs': { Icon: RestIcon },
  WebSockets: { Icon: WebSocketIcon },
  'Socket.io': socketIo,
  'Socket.IO': socketIo,
  SQL: { Icon: SqlIcon },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Firestore: firestore,
  'Firebase Firestore': firestore,
  React: react,
  'React.js': react,
  'Next.js': { Icon: SiNextdotjs },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  Zustand: { Icon: ZustandIcon },
  PWA: { Icon: SiPwa, color: '#5A0FC8' },
  'AWS (EC2, S3)': { Icon: SiAmazonwebservices, color: '#FF9900' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Firebase: firebase,
  Vercel: { Icon: SiVercel },
  Render: { Icon: SiRender },
  Git: { Icon: SiGit, color: '#F05032' },
  'Git & GitHub': { Icon: SiGit, color: '#F05032' },
  'CI/CD (GitHub Actions)': { Icon: SiGithubactions, color: '#2088FF' },
  Redis: { Icon: SiRedis, color: '#FF4438' },
  'DSA in Java (150+ problems)': { Icon: DsaIcon },
  OOP: { Icon: OopIcon },
  DBMS: { Icon: DbmsIcon },
  'Computer Networks': { Icon: NetworksIcon },
  'System Design': { Icon: SystemDesignIcon },
};

export function resolveTech(name) {
  const tech = techByName[name];
  if (!tech) {
    throw new Error(`No brand icon mapped for "${name}"`);
  }
  return { name, Icon: tech.Icon, color: tech.color };
}
