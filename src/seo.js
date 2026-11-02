export const SITE = 'https://adityanaulakha.tech';

export const DEFAULT_DESCRIPTION =
  'Aditya Naulakha builds full-stack web apps, real-time systems, PWAs, and AI-powered tools. RemindrX and LeadX are live.';

export const routes = [
  {
    path: '/',
    title: 'Aditya Naulakha — Software Engineer',
    description: DEFAULT_DESCRIPTION,
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/work',
    title: 'Work — Aditya Naulakha',
    description:
      'Engineering work from Aditya Naulakha: EPAM Systems, YRIT Solutions, and Baoiam Innovations.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/projects',
    title: 'Projects — Aditya Naulakha',
    description:
      'RemindrX, an offline-first PWA; LeadX, a real-time hackathon leaderboard; and GitDocs, a collaborative editor with Git-style history.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/achievements',
    title: 'Achievements — Aditya Naulakha',
    description: 'Competitions, Droid Club leadership, and certifications from Aditya Naulakha.',
    changefreq: 'monthly',
    priority: '0.6',
  },
];

export const notFoundMeta = {
  title: 'Page not found — Aditya Naulakha',
  description: 'This page does not exist on Aditya Naulakha\'s site.',
  robots: 'noindex, follow',
};

export function pageUrl(path) {
  return path === '/' ? `${SITE}/` : `${SITE}${path}`;
}

export function metaForPath(pathname) {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return routes.find((route) => route.path === path) ?? null;
}
