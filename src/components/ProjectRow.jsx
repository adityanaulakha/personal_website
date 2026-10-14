import { useCallback, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import TechChip from './TechChip';
import ExternalLink from './ExternalLink';
import TiltCard from './TiltCard';
import { EASE } from '../lib/motion';

function Metric({ project }) {
  return (
    <div className="shrink-0 text-right text-sm font-normal leading-5 text-fg-subtle transition-colors duration-200 group-hover:text-fg-muted">
      <p className="tabular-nums text-fg">{project.metric}</p>
      <p>{project.metricLabel}</p>
    </div>
  );
}

export default function ProjectRow({ project, detailed = false }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const previewX = useSpring(rawX, { stiffness: 280, damping: 24, mass: 0.4 });
  const previewY = useSpring(rawY, { stiffness: 280, damping: 24, mass: 0.4 });

  const onMove = useCallback(
    (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      rawX.set(e.clientX - r.left + 20);
      rawY.set(e.clientY - r.top - 36);
    },
    [rawX, rawY],
  );

  if (!detailed) {
    const linked = Boolean(project.live);
    const Row = linked ? 'a' : 'div';
    return (
      <Row
        href={linked ? project.live : undefined}
        target={linked ? '_blank' : undefined}
        rel={linked ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={onMove}
        className="row-ink group relative -mx-3 block overflow-visible rounded-lg px-3 py-2.5"
        aria-label={linked ? `Open ${project.title}` : undefined}
      >
        <article className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="inline-flex items-center gap-1.5 text-lg font-bold leading-7 text-fg">
              {project.title}
              {linked && (
                <HiOutlineArrowUpRight
                  className="h-3.5 w-3.5 translate-y-1 -translate-x-1 text-fg-subtle opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              )}
            </h3>
            <p className="mt-0.5 text-sm font-normal leading-5 text-fg-muted">{project.summary}</p>
          </div>
          <Metric project={project} />
        </article>

        <AnimatePresence>
          {hover && !reduce && project.image && (
            <motion.img
              src={project.image}
              alt=""
              aria-hidden="true"
              style={{ x: previewX, y: previewY }}
              initial={{ opacity: 0, scale: 0.86, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 0, transition: { duration: 0.15 } }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="pointer-events-none absolute top-0 left-0 z-20 hidden h-24 w-36 rounded-md object-cover object-center shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] ring-1 ring-black/10 md:block"
            />
          )}
        </AnimatePresence>
      </Row>
    );
  }

  return (
    <article className={`hairline group grid gap-6 border-b pb-10 last:border-b-0 last:pb-0 ${project.image ? 'sm:grid-cols-[160px_1fr]' : ''}`}>
      {project.image && (
      <TiltCard
        as={project.live ? 'a' : 'div'}
        href={project.live || undefined}
        target={project.live ? '_blank' : undefined}
        rel={project.live ? 'noopener noreferrer' : undefined}
        className="hairline group/thumb relative block overflow-hidden rounded-lg border bg-bg-elevated transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]"
        aria-label={project.live ? `Open ${project.title}` : project.title}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          width={1200}
          height={750}
          className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/thumb:scale-[1.06]"
        />
        {project.live && (
        <span
          className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/45 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100"
          aria-hidden="true"
        >
          <motion.span
            initial={false}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-black"
          >
            <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
          </motion.span>
        </span>
        )}
      </TiltCard>
      )}
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-lg font-bold leading-7 text-fg">{project.title}</h3>
          <Metric project={project} />
        </div>
        <p className="mt-2 text-sm font-normal leading-5 text-fg-muted">{project.description}</p>
        {project.bullets?.length > 0 && (
          <ul className="mt-3 space-y-2 text-sm font-normal leading-5 text-fg-muted">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-fg-subtle" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: EASE }}
              className="inline-flex"
            >
              <TechChip name={t} />
            </motion.span>
          ))}
        </div>
        {(project.github || project.live) && (
        <div className="mt-4 flex flex-wrap gap-5">
          {project.github && <ExternalLink href={project.github}>Source</ExternalLink>}
          {project.live && <ExternalLink href={project.live}>Live</ExternalLink>}
        </div>
        )}
      </div>
    </article>
  );
}
