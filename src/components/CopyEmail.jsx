import { useEffect, useState } from 'react';
import { HiOutlineCheck, HiOutlineSquare2Stack } from 'react-icons/hi2';

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group relative inline-flex h-5 w-5 shrink-0 items-center justify-center text-fg-subtle transition-[color,transform] duration-300 ease-out hover:scale-110 hover:text-fg focus-visible:scale-110"
      aria-label={copied ? 'Copied' : `Copy ${email}`}
      title={copied ? 'Copied' : 'Copy email'}
    >
      {copied ? (
        <HiOutlineCheck className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <HiOutlineSquare2Stack className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span
        role="status"
        className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap text-xs text-fg transition-opacity duration-200 ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Copied
      </span>
    </button>
  );
}
