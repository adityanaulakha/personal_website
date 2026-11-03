import { useEffect, useLayoutEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EASE } from '../lib/motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const routeEaseOut = [0.4, 0, 1, 1];

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

/**
 * Crossfades the routed page. The shell only fades; child Blocks still
 * stagger in. Scroll resets when the incoming page mounts so the outgoing
 * page does not jump mid-fade.
 */
export function RouteTransition({ routeKey, children }) {
  const reduce = useReducedMotion();
  const skip = reduce === true;
  // Skip the shell fade on the first paint so hero/section entrances still run.
  // AnimatePresence initial={false} would also suppress those descendant entrances.
  const entered = useRef(false);
  const skipEnter = skip || !entered.current;

  useEffect(() => {
    entered.current = true;
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
      <motion.div
        key={routeKey}
        initial={skipEnter ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={
          skip
            ? { opacity: 1, transition: { duration: 0 } }
            : { opacity: 0, y: -6, transition: { duration: 0.2, ease: routeEaseOut } }
        }
        transition={{ duration: skip ? 0 : 0.34, ease: EASE }}
      >
        <ScrollOnEnter />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollOnEnter() {
  useLayoutEffect(() => {
    scrollToTop();
  }, []);
  return null;
}

/** Mount wrapper: staggers Block children. Route exit is owned by RouteTransition. */
export function Page({ children, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? false : 'hidden'}
      animate="show"
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
