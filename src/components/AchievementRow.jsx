import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import ExternalLink from './ExternalLink';

export default function AchievementRow({ item, detailed = false }) {
  if (!detailed) {
    return (
      <Link
        to="/achievements"
        className="row-ink group -mx-3 block rounded-lg px-3 py-2.5"
        aria-label={item.title}
      >
        <article className="grid gap-x-6 gap-y-1 sm:grid-cols-[56px_1fr]">
          <p className="text-sm font-normal tabular-nums leading-5 text-fg-subtle transition-colors duration-200 group-hover:text-fg-muted">
            {item.year}
          </p>
          <div className="min-w-0">
            <p className="text-sm font-normal leading-5 text-fg-subtle">
              {item.category}
            </p>
            <h3 className="mt-0.5 inline-flex items-start gap-1.5 text-lg font-bold leading-7 text-fg">
              <span>{item.title}</span>
              <HiOutlineArrowRight
                className="mt-1 h-3.5 w-3.5 shrink-0 -translate-x-1 text-fg-subtle opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            </h3>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <article className="hairline group -mx-3 rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-fg/[0.03] sm:grid sm:grid-cols-[56px_1fr] sm:gap-x-6">
      <p className="text-sm font-normal tabular-nums leading-5 text-fg-subtle transition-colors duration-200 group-hover:text-accent">
        {item.year}
      </p>
      <div className="min-w-0">
        <p className="text-sm font-normal leading-5 text-fg-subtle">{item.category}</p>
        <h3 className="mt-0.5 text-lg font-bold leading-7 text-fg">{item.title}</h3>
        <p className="mt-2 text-sm font-normal leading-5 text-fg-muted transition-colors duration-200 group-hover:text-fg">
          {item.description}
        </p>
        {item.link && (
          <div className="mt-3">
            <ExternalLink href={item.link}>Proof</ExternalLink>
          </div>
        )}
      </div>
    </article>
  );
}
