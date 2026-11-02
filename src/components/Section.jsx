import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import { Block, Reveal } from './PageTransition';
import TextReveal from './TextReveal';

export default function Section({ id, title, to, toLabel = 'View all', children, className = '' }) {
  const headed = Boolean(title || to);
  return (
    <Reveal as="section" id={id} className={`mt-16 scroll-mt-8 sm:mt-20 ${className}`}>
      {headed && (
      <Block className="flex items-baseline justify-between gap-4">
        {title ? <h2 className="text-xl font-bold text-fg">{title}</h2> : null}
        {to && (
          <Link
            to={to}
            className="group inline-flex shrink-0 items-center gap-1 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            <span className="link-slide">{toLabel}</span>
            <HiOutlineArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        )}
      </Block>
      )}
      <div className={headed ? 'mt-4' : undefined}>{children}</div>
    </Reveal>
  );
}

export function PageHeader({ title, description }) {
  return (
    <Block as="header">
      <h1 className="text-xl font-bold text-fg" aria-label={title}>
        <TextReveal text={title} delay={0.08} />
      </h1>
      {description && (
        <p className="mt-1 max-w-prose text-sm font-normal leading-5 text-fg-muted">{description}</p>
      )}
    </Block>
  );
}
