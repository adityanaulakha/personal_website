import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import CommandMenu, { CommandButton } from './CommandMenu';
import { useCommandMenu, useModLabel } from '../hooks/useCommandMenu';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
];

export default function SiteNav() {
  const { open, setOpen } = useCommandMenu();
  const modLabel = useModLabel();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        scrolled ? 'bg-background/95' : 'bg-background/60'
      }`}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-4 py-3 sm:h-14 sm:py-0">
        <nav
          aria-label="Primary"
          className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium sm:flex-nowrap sm:gap-6"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `shrink-0 py-1 transition-colors hover:text-primary ${
                  isActive ? 'text-foreground' : 'text-soft'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 py-1 text-soft transition-colors hover:text-primary"
          >
            Resume
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-1">
          <CommandButton onClick={() => setOpen(true)} modLabel={modLabel} />
          <ThemeToggle />
        </div>
      </div>
      <CommandMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
