import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE, metaForPath, notFoundMeta, pageUrl } from '../seo';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = metaForPath(pathname);
    const meta = page ?? notFoundMeta;
    const url = page ? pageUrl(page.path) : `${SITE}${pathname}`;

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.robots ?? 'index, follow');
    setMeta('name', 'author', 'Aditya Naulakha');
    setCanonical(url);

    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Aditya Naulakha');
    setMeta('property', 'og:image', `${SITE}/og.png`);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', 'Aditya Naulakha, software engineer');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', `${SITE}/og.png`);
    setMeta('name', 'twitter:image:alt', 'Aditya Naulakha, software engineer');
    setMeta('name', 'twitter:creator', '@iadityanaulakha');
  }, [pathname]);
}
