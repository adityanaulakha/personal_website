import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { useTheme } from '../hooks/useTheme';

export function CommandButton({ onClick, modLabel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Open command menu"
      aria-keyshortcuts="Control+K Meta+K"
    >
      <kbd className="hidden items-center gap-1 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] font-medium text-muted-foreground sm:inline-flex">
        <span>{modLabel}</span>
        <span>K</span>
      </kbd>
    </button>
  );
}

export default function CommandMenu({ open, onClose }) {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listId = useId();

  const items = useMemo(() => {
    const pages = [
      { id: 'home', label: 'Home', hint: 'Page', run: () => navigate('/') },
      { id: 'work', label: 'Work', hint: 'Experience', run: () => navigate('/work') },
      { id: 'projects', label: 'Projects', hint: 'Page', run: () => navigate('/projects') },
      { id: 'achievements', label: 'Achievements', hint: 'Page', run: () => navigate('/achievements') },
      {
        id: 'resume',
        label: 'Resume',
        hint: 'Open',
        run: () => window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'email',
        label: profile.email,
        hint: 'Email',
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: 'theme',
        label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
        hint: 'Theme',
        run: () => toggle(),
      },
      ...projects.map((p) => ({
        id: p.id,
        label: p.title,
        hint: p.live ? 'Live project' : 'Project',
        run: () => {
          if (p.live) window.open(p.live, '_blank', 'noopener,noreferrer');
          else navigate('/projects');
        },
      })),
      ...profile.socials
        .filter((s) => s.label !== 'Email')
        .map((s) => ({
          id: s.label,
          label: s.label,
          hint: 'Link',
          run: () => window.open(s.href, '_blank', 'noopener,noreferrer'),
        })),
    ];
    const q = query.trim().toLowerCase();
    if (!q) return pages;
    return pages.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(q));
  }, [navigate, query, theme, toggle]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, Math.max(items.length - 1, 0)));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && items[active]) {
        e.preventDefault();
        items[active].run();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, items, onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[15vh]">
      <button
        type="button"
        aria-label="Close command menu"
        className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-background shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages, projects, links"
          aria-controls={listId}
          aria-activedescendant={items[active] ? `${listId}-${items[active].id}` : undefined}
          className="w-full border-b border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-soft"
        />
        <ul id={listId} role="listbox" className="max-h-80 overflow-auto py-1">
          {items.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-soft">No matches</li>
          ) : (
            items.map((item, i) => (
              <li key={item.id} id={`${listId}-${item.id}`} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    item.run();
                    onClose();
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm ${
                    i === active ? 'bg-muted text-foreground' : 'text-foreground'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-soft">{item.hint}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

