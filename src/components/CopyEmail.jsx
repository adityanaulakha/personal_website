import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiOutlineClipboard, HiOutlineCheck } from 'react-icons/hi2';
import Magnetic from './Magnetic';

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

  const key = copied ? 'copied' : 'idle';

  return (
    <Magnetic strength={0.4}>
    <motion.button
      type="button"
      onClick={copy}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="group inline-flex items-center gap-1.5 text-fg-muted transition-colors duration-200 hover:text-fg"
      aria-live="polite"
      aria-label={copied ? 'Email copied' : `Copy email ${email}`}
    >
      <span className="relative inline-grid overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={key}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`link-slide ${copied ? 'text-accent' : ''}`}
          >
            {copied ? 'Copied' : 'Email'}
          </motion.span>
        </AnimatePresence>
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={key}
          initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.4, opacity: 0, rotate: 30 }}
          transition={{ type: 'spring', stiffness: 520, damping: 26 }}
          className="inline-flex"
        >
          {copied ? (
            <HiOutlineCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          ) : (
            <HiOutlineClipboard className="h-3.5 w-3.5" aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
    </Magnetic>
  );
}
