import remindrxShot from '../assets/project-remindrx.jpg';
import leadxShot from '../assets/project-leadx.jpg';

export const projects = [
  {
    id: 'remindrx',
    title: 'RemindrX',
    year: '2026',
    metric: '13+',
    metricLabel: 'screens, offline-first',
    summary: 'Intelligent academic management PWA.',
    image: remindrxShot,
    live: 'https://www.remindrx.xyz',
    description:
      'Offline-first academic PWA with real-time sync, predictive attendance, and a gamified trust system across CR and SuperAdmin roles.',
    tech: ['React', 'Firebase', 'Zustand', 'PWA', 'Firestore'],
    bullets: [
      'Built an offline-first PWA with sub-100ms real-time sync across 13+ screens and 9 Firestore collections with structured indexing, keeping the app fully readable offline.',
      'Engineered a Predictive Bunk Analytics engine with custom algorithms and Zustand to hold a 75% attendance threshold, plus an admin dashboard with 6+ chart types.',
      'Designed a gamified Trust Score with peer verification that adjusts permissions and cuts misinformation across CR and SuperAdmin hierarchies.',
    ],
  },
  {
    id: 'gitdocs',
    title: 'GitDocs',
    year: '2026',
    metric: '3 roles',
    metricLabel: 'access control',
    summary: 'Git-aware document version control.',
    description:
      'A Git-inspired backend for document versioning, commit history, and rollback, with role-based access and live multi-user editing.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    bullets: [
      'Built versioning, commit history, and rollback to earlier versions through REST APIs in Express.js.',
      'Designed MongoDB schemas for version metadata and audit history, and used Node.js file APIs and streams to store and process large documents.',
      'Added role-based access (Admin, Editor, Viewer) and Socket.io so multiple people can edit the same document in real time.',
    ],
  },
  {
    id: 'leadx',
    title: 'LeadX',
    year: '2026',
    metric: '500+',
    metricLabel: 'concurrent sessions',
    summary: 'Real-time hackathon leaderboard and judge portal.',
    image: leadxShot,
    live: 'https://lead-x-three.vercel.app',
    description:
      'Horizontally scaled leaderboard and judge portal with sub-100ms score updates, rubric scoring, and Firestore security rules.',
    tech: ['React', 'Firebase', 'WebSockets', 'Firestore'],
    bullets: [
      'Designed for horizontal scale at 500+ concurrent sessions, with optimized WebSocket subscriptions and score updates under 100ms.',
      'Built schema-agnostic rubric scoring and a whitelisted Judge Portal. Firebase batch writes kept data intact across atomic migrations of 400+ documents.',
      'Enforced Owner, Judge, and Public access in Firestore Security Rules, with live evaluation tracking across multiple tracks.',
    ],
  },
];
