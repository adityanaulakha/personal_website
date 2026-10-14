import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import ThemeToggle from './ThemeToggle';
import Magnetic from './Magnetic';
import { profile } from '../data/profile';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 12));

  return (
    <header className="sticky top-0 z-40 -mx-5 px-5 sm:-mx-6 sm:px-6">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-full bg-bg/92 backdrop-blur-lg transition-[opacity,box-shadow] duration-300 ${
          scrolled ? 'opacity-100 shadow-[0_1px_0_0_var(--c-line)]' : 'opacity-0'
        }`}
      />
      <nav
        aria-label="Primary"
        className="relative flex h-16 items-center justify-between gap-3 text-sm font-medium leading-5"
      >
        <ul className="flex items-center gap-4 sm:gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <Magnetic strength={0.35}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `group relative inline-block py-1 transition-colors duration-200 ${
                      isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-0 -bottom-0.5 h-px bg-fg"
                          transition={{ type: 'spring', stiffness: 520, damping: 42 }}
                          aria-hidden="true"
                        />
                      ) : (
                        <span
                          className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-fg/50 transition-transform duration-300 ease-out group-hover:scale-x-100"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </Magnetic>
            </li>
          ))}
          <li className="hidden sm:block">
            <Magnetic strength={0.35}>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 py-1 text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                Resume
                <HiOutlineArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </Magnetic>
          </li>
        </ul>
        <Magnetic strength={0.4}>
          <ThemeToggle />
        </Magnetic>
      </nav>
    </header>
  );
}
