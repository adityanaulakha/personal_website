import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

/**
 * Pulls its child toward the cursor. Disabled on coarse pointers and reduced motion.
 */
export default function Magnetic({ children, strength = 0.28, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 260, damping: 18, mass: 0.4 });
  const Comp = motion[as] ?? motion.div;

  const onMove = (e) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rawX.set((e.clientX - (r.left + r.width / 2)) * strength);
    rawY.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <Comp
      ref={ref}
      style={reduce ? undefined : { x, y }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-flex will-change-transform ${className}`}
    >
      {children}
    </Comp>
  );
}
