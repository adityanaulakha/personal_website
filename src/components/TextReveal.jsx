import { motion, useReducedMotion } from 'motion/react';
import { EASE } from '../lib/motion';

/**
 * Overflow-masked stagger. Letters stay on one line per word so wrapping
 * happens at spaces, not between characters.
 */
export default function TextReveal({ text, className = '', delay = 0, by = 'word' }) {
  const reduce = useReducedMotion();

  if (reduce) return <span className={className}>{text}</span>;

  if (by === 'word') {
    const words = text.split(/(\s+)/);
    let n = 0;
    return (
      <span className={className} aria-hidden="true">
        <span>
          {words.map((word, i) => {
            if (/^\s+$/.test(word)) return <span key={`s-${i}`}>{word}</span>;
            const d = delay + n * 0.06;
            n += 1;
            return (
              <span key={`w-${i}`} className="mask-reveal inline-block align-baseline">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: d }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      </span>
    );
  }

  const words = text.split(/(\s+)/);
  let n = 0;
  return (
    <span className={className} aria-hidden="true">
      <span>
        {words.map((word, i) => {
          if (/^\s+$/.test(word)) return <span key={`s-${i}`}>{' '}</span>;
          return (
            <span key={`w-${i}`} className="mask-reveal inline-block whitespace-nowrap align-baseline">
              {Array.from(word).map((ch, j) => {
                const d = delay + n * 0.028;
                n += 1;
                return (
                  <motion.span
                    key={`${ch}-${j}`}
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: EASE, delay: d }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </span>
    </span>
  );
}
