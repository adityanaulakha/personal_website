import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITE, routes, pageUrl } from '../src/seo.js';

const dist = new URL('../dist/', import.meta.url);
const distPath = dist.pathname;
const indexPath = join(distPath, 'index.html');
const html = readFileSync(indexPath, 'utf8');

function replaceTitle(source, title) {
  return source.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
}

function replaceMeta(source, attr, key, content) {
  const pattern = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (pattern.test(source)) {
    return source.replace(pattern, `$1${content}$2`);
  }
  return source.replace('</head>', `    <meta ${attr}="${key}" content="${content}" />\n  </head>`);
}

function replaceCanonical(source, href) {
  return source.replace(/(<link rel="canonical" href=")([^"]*)(")/, `$1${href}$3`);
}

function apply(source, route) {
  const url = pageUrl(route.path);
  let next = replaceTitle(source, route.title);
  next = replaceMeta(next, 'name', 'description', route.description);
  next = replaceMeta(next, 'property', 'og:title', route.title);
  next = replaceMeta(next, 'property', 'og:description', route.description);
  next = replaceMeta(next, 'property', 'og:url', url);
  next = replaceMeta(next, 'name', 'twitter:title', route.title);
  next = replaceMeta(next, 'name', 'twitter:description', route.description);
  next = replaceCanonical(next, url);
  return next;
}

for (const route of routes) {
  const rendered = apply(html, route);
  if (route.path === '/') {
    writeFileSync(indexPath, rendered);
    continue;
  }
  const dir = join(distPath, route.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), rendered);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${pageUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync(join(distPath, 'sitemap.xml'), sitemap);
writeFileSync(join(distPath, 'robots.txt'), robots);

console.log(`SEO files written for ${routes.length} routes (${lastmod}).`);
