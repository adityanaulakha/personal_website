import { motion, AnimatePresence } from 'motion/react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.88 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="inline-flex h-7 w-7 items-center justify-center text-fg-muted transition-colors hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="inline-flex"
        >
          {isDark ? (
            <HiOutlineSun className="h-4 w-4" />
          ) : (
            <HiOutlineMoon className="h-4 w-4" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
