import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import TechChip from './TechChip';
import ExternalLink from './ExternalLink';
import { EASE } from '../lib/motion';

function Meta({ exp, detailed }) {
  const range = detailed
    ? exp.end
      ? `${exp.start} – ${exp.end}`
      : exp.start
    : exp.short;
  return (
    <div className="shrink-0 text-right text-sm font-normal leading-5 text-fg-subtle transition-colors duration-200 group-hover:text-fg-muted">
      <p className="tabular-nums">{range}</p>
      {exp.location ? <p>{exp.location}</p> : null}
    </div>
  );
}

function Status({ exp }) {
  if (!exp.current) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
      <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
      Working
    </span>
  );
}

export default function ExperienceRow({ exp, detailed = false }) {
  if (!detailed) {
    return (
      <Link
        to="/work"
        className="row-ink group -mx-3 block rounded-lg px-3 py-2.5"
        aria-label={`${exp.role} at ${exp.company}`}
      >
        <article className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold leading-7 text-fg">
              <span className="inline-flex items-center gap-1.5">
                {exp.company}
                <HiOutlineArrowRight
                  className="h-3.5 w-3.5 -translate-x-1 text-fg-subtle opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
              <Status exp={exp} />
            </h3>
            <p className="mt-0.5 text-sm font-normal leading-5 text-fg-muted">{exp.role}</p>
          </div>
          <Meta exp={exp} detailed={false} />
        </article>
      </Link>
    );
  }

  return (
    <article className="hairline group border-b pb-10 last:border-b-0 last:pb-0">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold leading-7 text-fg">
            {exp.company}
            <Status exp={exp} />
          </h3>
          <p className="mt-0.5 text-sm font-normal leading-5 text-fg-muted">{exp.role}</p>
        </div>
        <Meta exp={exp} detailed />
      </div>

      {(exp.tech?.length > 0 || exp.bullets?.length > 0 || exp.links?.length > 0) && (
      <div className="mt-6 space-y-6">
        {exp.tech?.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold leading-5 text-fg">
              Technologies
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, y: 8, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.045, ease: EASE }}
                  className="inline-flex"
                >
                  <TechChip name={t.name} Icon={t.Icon} />
                </motion.span>
              ))}
            </div>
          </div>
        )}
        {exp.bullets?.length > 0 && (
        <div>
          <h4 className="mb-2 text-sm font-semibold leading-5 text-fg">
            What I did
          </h4>
          <ul className="space-y-2 text-sm font-normal leading-5 text-fg-muted">
            {exp.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.07, ease: EASE }}
                className="flex gap-3 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-fg"
              >
                <span
                  className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-fg-subtle transition-colors duration-200 group-hover:bg-accent"
                  aria-hidden="true"
                />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        )}
        {exp.links?.length > 0 && (
          <div className="flex flex-wrap gap-5">
            {exp.links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
      )}
    </article>
  );
}
