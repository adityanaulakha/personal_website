import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import ExternalLink from './ExternalLink';
import TechTile from './TechTile';
import { experienceRange, experienceStatus } from '../data/experience';
import { EASE } from '../lib/motion';

const PILLS = {
  working: {
    label: 'Working',
    className: 'bg-working-soft text-working',
    dot: 'bg-working',
  },
  upcoming: {
    label: 'Upcoming',
    className: 'bg-upcoming-soft text-upcoming',
    dot: 'bg-upcoming',
  },
};

function StatusPill({ kind }) {
  const pill = PILLS[kind];
  if (!pill) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium leading-4 ${pill.className}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${pill.dot}`} aria-hidden="true" />
      {pill.label}
    </span>
  );
}

function hasDetails(exp) {
  return (exp.tech?.length ?? 0) > 0 || (exp.bullets?.length ?? 0) > 0 || (exp.links?.length ?? 0) > 0;
}

function RowLayout({ exp, status, expandable, open }) {
  const range = experienceRange(exp);
  const showMeta = Boolean(range || exp.location);

  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
      <div className="min-w-0">
        <h3 className="flex flex-wrap items-center text-lg font-bold text-fg">
          <span>{exp.company}</span>
          {status ? (
            <span className="ml-2 inline-flex">
              <StatusPill kind={status} />
            </span>
          ) : null}
          {expandable ? (
            <span className="exp-chevron" data-open={open ? 'true' : 'false'} aria-hidden="true">
              <HiOutlineChevronRight
                className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out ${
                  open ? 'rotate-90' : ''
                }`}
              />
            </span>
          ) : null}
        </h3>
        <p className="mt-0.5 text-sm font-normal leading-5 text-fg-muted">{exp.role}</p>
      </div>
      {showMeta ? (
        <div className="shrink-0 font-mono text-sm font-normal leading-5 text-fg-muted sm:pt-1 sm:text-right">
          {range ? <p className="tabular-nums sm:whitespace-nowrap">{range}</p> : null}
          {exp.location ? <p className="font-medium">{exp.location}</p> : null}
        </div>
      ) : null}
    </div>
  );
}

function Details({ exp }) {
  const tech = exp.tech ?? [];
  const bullets = exp.bullets ?? [];
  const links = exp.links ?? [];

  return (
    <div className="border-t border-line pt-4">
      {tech.length > 0 && (
        <div>
          <h4 className="text-base font-semibold leading-tight text-fg">Technologies & Tools</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((item) => (
              <TechTile key={item.name} name={item.name} Icon={item.Icon} color={item.color} />
            ))}
          </div>
        </div>
      )}
      {bullets.length > 0 && (
        <div className={tech.length > 0 ? 'mt-5' : undefined}>
          <h4 className="text-base font-semibold leading-tight text-fg">What I&apos;ve done</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-xs font-normal leading-5 text-fg-muted marker:text-fg-subtle sm:text-sm">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceRow({ exp }) {
  const reduce = useReducedMotion();
  const uid = useId();
  const panelId = `exp-panel-${uid}`;
  const triggerId = `exp-trigger-${uid}`;
  const [open, setOpen] = useState(false);
  const status = experienceStatus(exp);
  const expandable = hasDetails(exp);

  if (!expandable) {
    return (
      <article className="py-3">
        <RowLayout exp={exp} status={status} expandable={false} open={false} />
      </article>
    );
  }

  return (
    <article className="py-1">
      <button
        id={triggerId}
        type="button"
        className="group w-full cursor-pointer rounded-lg bg-transparent py-2 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <RowLayout exp={exp} status={status} expandable open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    height: { duration: 0.35, ease: EASE },
                    opacity: { duration: 0.25, ease: 'easeOut' },
                  }
            }
            className="overflow-hidden"
          >
            <div className="pb-3 pt-1">
              <Details exp={exp} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
