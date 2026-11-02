import remindrxShot from '../assets/project-remindrx.jpg';
import leadxShot from '../assets/project-leadx.jpg';

export const projects = [
  {
    id: 'remindrx',
    title: 'RemindrX',
    year: '2026',
    metric: 'Nov 2026',
    metricLabel: 'Present',
    summary: 'Intelligent academic management PWA.',
    image: remindrxShot,
    live: 'https://www.remindrx.xyz',
    description: 'Intelligent academic management PWA for students, class representatives, and admins.',
    tech: ['React', 'TypeScript', 'Firebase', 'Zustand', 'PWA'],
    bullets: [
      'Built an installable, offline-first PWA for students, class representatives, and admins. Firestore’s persistent cache keeps data readable offline, while snapshot listeners drive sub-100ms live UI updates.',
      'Engineered a Bunk Analytics engine that syncs attendance from institutional portals and computes safe skips and the exact consecutive classes needed to recover above the 75% threshold.',
      'Implemented CR and Super Admin consoles with hardened Firestore security rules, plus a crowdsourced class-updates feed with peer verification (Unverified / Likely / Verified) on a rolling 30-day window.',
    ],
  },
  {
    id: 'leadx',
    title: 'LeadX',
    year: '2026',
    metric: 'Mar 2026',
    metricLabel: '',
    summary: 'Real-time hackathon leaderboard and judge portal.',
    image: leadxShot,
    live: 'https://lead-x-three.vercel.app',
    description: 'Real-time hackathon leaderboard and judge portal.',
    tech: ['React', 'Firebase Firestore', 'Tailwind CSS'],
    bullets: [
      'Built a real-time leaderboard where Firestore subscriptions push score updates to all clients in about 40ms, with multi-track boards, dense ranking, and organizer freeze and winner-celebration controls.',
      'Designed a judge portal with UID-whitelisted access, organizer-defined rubric scoring, and round locking. The admin panel adds CSV team import, bonus points, and per-judge score audit logs.',
      'Enforced Owner, Judge, and Public access at the database level with Firestore security rules, input sanitization, and double-submit locks, and documented capacity limits against free-tier quotas.',
    ],
  },
  {
    id: 'gitdocs',
    title: 'GitDocs',
    year: '2026',
    metric: 'Jul 2026',
    metricLabel: '',
    summary: 'Collaborative editor with Git-style version control.',
    description: 'Collaborative document editor with Git-style version control.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.IO'],
    bullets: [
      'Built a real-time collaborative document editor with Tiptap rich text, Socket.IO live sync, presence indicators, and remote cursors.',
      'Implemented Git-style version control: commit snapshots, per-project branches, activity history, and one-call rollback, exposed through REST APIs on Express and MongoDB.',
      'Added JWT auth, read/write/admin project permissions, and Redis document caching, cross-server pub/sub, and sliding-window rate limiting (100 requests per minute per IP) with a graceful fallback.',
    ],
  },
];
