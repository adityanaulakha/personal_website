import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

const linkCls = 'text-sm text-soft transition-colors hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4';

export default function Footer() {
  const year = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Navigate</p>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
              <Link className={linkCls} to="/">Home</Link>
              <Link className={linkCls} to="/work">Work</Link>
              <Link className={linkCls} to="/projects">Projects</Link>
              <Link className={linkCls} to="/achievements">Achievements</Link>
              <a className={linkCls} href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Connect</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
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
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Based in</p>
            <p className="text-sm text-soft">{profile.location}</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {year} {profile.name}
          </p>
          <button
            type="button"
            onClick={toTop}
            className="text-sm text-soft transition-colors hover:text-primary"
          >
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
