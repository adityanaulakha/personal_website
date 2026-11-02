import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Projects', to: '/projects' },
  { label: 'Achievements', to: '/achievements' },
];

const linkCls = 'text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-10 pt-8 text-sm">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <nav aria-label="Footer">
          <p className="text-xs font-medium text-fg-muted">Navigate</p>
          <ul className="mt-3 flex max-w-xs flex-wrap gap-x-4 gap-y-2">
            {pages.map((page) => (
              <li key={page.to}>
                <Link className={linkCls} to={page.to}>
                  {page.label}
                </Link>
              </li>
            ))}
            <li>
              <a className={linkCls} href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium text-fg-muted">Connect</p>
          <ul className="mt-3 flex items-center gap-3">
            {profile.socials.map((social) => {
              const external = social.href.startsWith('http');
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    title={social.label}
                    className="inline-flex text-fg-muted transition-colors duration-200 hover:text-fg"
                  >
                    <social.Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="text-sm text-fg-subtle">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
