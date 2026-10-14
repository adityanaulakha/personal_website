import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export default function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link inline-flex items-center gap-1 text-sm text-fg-muted transition-colors duration-200 hover:text-fg ${className}`}
    >
      <span className="link-slide">{children}</span>
      <HiOutlineArrowUpRight
        className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
