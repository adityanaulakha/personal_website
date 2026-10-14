import { motion, useReducedMotion } from 'motion/react';
import { EASE } from '../lib/motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** Route-level wrapper: staggers direct Block children on mount, fades on exit. */
export function Page({ children, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? false : 'hidden'}
      animate="show"
      exit={reduce ? undefined : 'exit'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A staggered child. Works under Page (mount) or Reveal (scroll). */
export function Block({ children, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp variants={reduce ? undefined : item} className={className}>
      {children}
    </Comp>
  );
}

/** Scroll-triggered container: staggers its Block children when it enters the viewport. */
export function Reveal({ children, className = '', as = 'div', amount = 0.15 }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  if (reduce) return <Comp className={className}>{children}</Comp>;
  return (
    <Comp
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -40px 0px' }}
      className={className}
    >
      {children}
    </Comp>
  );
}
