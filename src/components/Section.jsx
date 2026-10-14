import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import { Block, Reveal } from './PageTransition';
import TextReveal from './TextReveal';

export default function Section({ index, title, to, toLabel = 'View all', children, className = '' }) {
  return (
    <Reveal as="section" className={`mt-10 ${className}`}>
      <Block className="flex items-baseline justify-between gap-4">
        <h2 className="flex items-baseline gap-3">
          {index && (
            <span className="text-sm tabular-nums leading-5 text-fg-subtle">
              {index}
            </span>
          )}
          {title && (
            <span className="text-xl font-bold leading-7 text-fg">{title}</span>
          )}
        </h2>
        {to && (
          <Link
            to={to}
            className="group inline-flex shrink-0 items-center gap-1 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            <span className="link-slide">{toLabel}</span>
            <HiOutlineArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        )}
      </Block>
      <div className="mt-4">{children}</div>
    </Reveal>
  );
}

export function PageHeader({ eyebrow, title, description }) {
  return (
    <Block as="header">
      {eyebrow && (
        <p className="text-sm leading-5 text-fg-subtle">{eyebrow}</p>
      )}
      <h1 className="mt-1 text-2xl font-bold leading-8 text-fg" aria-label={title}>
        <TextReveal text={title} delay={0.08} />
      </h1>
      {description && <p className="mt-1 max-w-prose text-sm leading-5 text-fg-muted md:text-base md:leading-6">{description}</p>}
    </Block>
  );
}
