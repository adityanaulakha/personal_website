import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from '../data/profile';

const COMMANDS = [
  { id: 'home', label: 'Home', hint: 'Page', to: '/' },
  { id: 'work', label: 'Work', hint: 'Page', to: '/work' },
  { id: 'projects', label: 'Projects', hint: 'Page', to: '/projects' },
  { id: 'achievements', label: 'Achievements', hint: 'Page', to: '/achievements' },
  { id: 'resume', label: 'Resume', hint: 'Open', href: profile.resumeUrl },
  { id: 'experience', label: 'Experience', hint: 'Section', to: '/#experience' },
  { id: 'selected-projects', label: 'Selected projects', hint: 'Section', to: '/#projects' },
  { id: 'home-achievements', label: 'Achievements', hint: 'Section', to: '/#achievements' },
  { id: 'skills', label: 'Skills', hint: 'Section', to: '/#skills' },
];

export default function CommandPalette() {
  const navigate = useNavigate();
  const listId = useId();
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((command) => `${command.label} ${command.hint}`.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    setActive(0);
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const run = (command) => {
    if (!command) return;
    setOpen(false);
    if (command.href) {
      window.open(command.href, '_blank', 'noopener,noreferrer');
      return;
    }
    const hashAt = command.to.indexOf('#');
    const path = hashAt === -1 ? command.to : command.to.slice(0, hashAt);
    const hash = hashAt === -1 ? '' : command.to.slice(hashAt + 1);
    navigate(path || '/');
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  };

  const onInputKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      run(results[active]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Search pages and sections"
        className="inline-flex h-7 items-center gap-1 rounded-full border border-line px-2 text-xs font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
      >
        <span aria-hidden="true">⌘K</span>
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/55 px-4 pt-[14vh]"
          onMouseDown={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="w-full max-w-md overflow-hidden rounded-xl border border-line bg-bg-elevated shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Jump to a page or section"
              aria-controls={listId}
              aria-activedescendant={results[active] ? `${listId}-${results[active].id}` : undefined}
              className="w-full bg-transparent px-4 py-3 text-sm font-normal text-fg outline-none placeholder:text-fg-muted"
            />
            <ul id={listId} role="listbox" className="max-h-72 overflow-auto border-t border-line p-1">
              {results.length === 0 ? (
                <li className="px-3 py-2 text-sm font-normal text-fg-muted">No matches</li>
              ) : (
                results.map((command, index) => (
                  <li key={command.id} id={`${listId}-${command.id}`} role="option" aria-selected={index === active}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onClick={() => run(command)}
                      className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm ${
                        index === active ? 'bg-fg/10 text-fg' : 'text-fg-muted'
                      }`}
                    >
                      <span className="font-medium">{command.label}</span>
                      <span className="text-xs font-normal text-fg-muted">{command.hint}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
