import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import CommandPalette from './CommandPalette';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
];

export default function SiteNav() {
  return (
    <header className="pt-6 sm:pt-8">
      <nav aria-label="Primary" className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <CommandPalette />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
