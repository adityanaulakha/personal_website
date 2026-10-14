import { useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';

/**
 * Subtle 3D tilt that tracks the cursor. Used on project thumbnails.
 */
export default function TiltCard({ children, className = '', as = 'div', max = 8, ...rest }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotX = useSpring(useTransform(rawY, [-0.5, 0.5], [max, -max]), { stiffness: 220, damping: 18 });
  const rotY = useSpring(useTransform(rawX, [-0.5, 0.5], [-max, max]), { stiffness: 220, damping: 18 });

  const onMove = useCallback(
    (e) => {
      if (reduce) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      rawX.set((e.clientX - r.left) / r.width - 0.5);
      rawY.set((e.clientY - r.top) / r.height - 0.5);
    },
    [rawX, rawY, reduce],
  );

  const reset = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformPerspective: 700 }}
      className={`will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
