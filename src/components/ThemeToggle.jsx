import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const reduce = useReducedMotion() === true;
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={reduce ? undefined : { scale: 1.06 }}
      whileTap={reduce ? undefined : { scale: 0.88 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={reduce ? false : { rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={reduce ? undefined : { rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: reduce ? 0 : 0.22, ease: 'easeOut' }}
          className="inline-flex"
        >
          {isDark ? (
            <HiOutlineSun className="h-[18px] w-[18px]" />
          ) : (
            <HiOutlineMoon className="h-[18px] w-[18px]" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
