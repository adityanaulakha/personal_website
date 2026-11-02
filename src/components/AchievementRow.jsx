import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import ExternalLink from './ExternalLink';

function Row({ item, linked = false }) {
  return (
    <article className="flex items-start justify-between gap-6">
      <div className="min-w-0">
        <h3 className={`${linked ? 'inline-flex items-center gap-1.5' : ''} text-base font-semibold leading-tight text-fg`}>
          <span>{item.title}</span>
          {linked ? (
            <HiOutlineArrowRight
              className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-fg-muted opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          ) : null}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-fg-muted">{item.category}</p>
      </div>
      <p className="shrink-0 font-mono text-sm font-normal tabular-nums leading-5 text-fg-muted">{item.year}</p>
    </article>
  );
}

export default function AchievementRow({ item, detailed = false }) {
  if (!detailed) {
    return (
      <Link to="/achievements" className="group block py-2.5" aria-label={item.title}>
        <Row item={item} linked />
      </Link>
    );
  }

  return (
    <article className="py-3">
      <Row item={item} />
      <p className="mt-2 max-w-prose text-sm font-normal leading-5 text-fg-muted">{item.description}</p>
      {item.link ? (
        <div className="mt-3">
          <ExternalLink href={item.link}>Proof</ExternalLink>
        </div>
      ) : null}
    </article>
  );
}
