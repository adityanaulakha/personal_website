import { useCallback, useRef } from 'react';
import { motion } from 'motion/react';

/**
 * Card with a soft radial highlight that follows the cursor,
 * plus a gentle lift on hover and press feedback.
 */
export default function SpotlightCard({
  as = 'div',
  className = '',
  children,
  lift = true,
  ...rest
}) {
  const ref = useRef(null);
  const Comp = motion[as] ?? motion.div;

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  }, []);

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      whileHover={lift ? { y: -3 } : undefined}
      whileTap={lift ? { scale: 0.985 } : undefined}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      className={`spotlight hairline relative overflow-hidden rounded-xl border bg-bg-elevated transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
