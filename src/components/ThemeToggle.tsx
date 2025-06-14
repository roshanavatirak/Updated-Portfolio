import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? (
        <motion.div
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-5 h-5" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 45 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      )}
    </motion.button>
  );
};