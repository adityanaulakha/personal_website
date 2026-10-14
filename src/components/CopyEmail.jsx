import { useEffect, useState } from 'react';
import { HiOutlineCheck, HiOutlineClipboard } from 'react-icons/hi2';

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
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
      className="inline-flex cursor-pointer items-center gap-1.5 text-soft transition-colors hover:text-primary focus-visible:outline-none"
      aria-live="polite"
      aria-label={copied ? 'Email copied' : `Copy email ${email}`}
    >
      <span className="hidden md:inline">{copied ? 'Copied' : email}</span>
      <span className="md:hidden">{copied ? 'Copied' : 'Email'}</span>
      {copied ? (
        <HiOutlineCheck className="size-4 shrink-0" aria-hidden="true" />
      ) : (
        <HiOutlineClipboard className="size-4 shrink-0" aria-hidden="true" />
      )}
    </button>
  );
}
