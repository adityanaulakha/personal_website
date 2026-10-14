import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HiOutlineArrowUp } from 'react-icons/hi2';
import Magnetic from './Magnetic';
import { profile } from '../data/profile';

const linkCls = 'link-slide transition-colors duration-200 hover:text-fg';

export default function Footer() {
  const year = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="hairline border-t pb-10 pt-8 text-sm text-fg-muted">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold leading-5 text-fg">Navigate</p>
          <ul className="mt-3 space-y-1.5">
            <li><Link className={linkCls} to="/">Home</Link></li>
            <li><Link className={linkCls} to="/work">Work</Link></li>
            <li><Link className={linkCls} to="/projects">Projects</Link></li>
            <li><Link className={linkCls} to="/achievements">Achievements</Link></li>
            <li>
              <a className={linkCls} href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold leading-5 text-fg">Connect</p>
          <ul className="mt-3 space-y-1.5">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  className={linkCls}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:text-right">
          <p className="text-sm font-semibold leading-5 text-fg">Based in</p>
          <p className="mt-3">{profile.location}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-between gap-4">
        <p className="text-sm font-normal leading-5 text-fg-subtle">
          © {year} {profile.name}
        </p>
        <Magnetic strength={0.45}>
        <motion.button
          type="button"
          onClick={toTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          className="group inline-flex items-center gap-1.5 text-sm font-normal leading-5 text-fg-subtle transition-colors duration-200 hover:text-fg"
          aria-label="Back to top"
        >
          Top
          <HiOutlineArrowUp
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </motion.button>
        </Magnetic>
      </div>
    </footer>
  );
}
