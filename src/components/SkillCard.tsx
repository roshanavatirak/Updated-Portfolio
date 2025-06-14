import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  Icon: any;
  delay?: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, level, Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <motion.div
        className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
    </motion.div>
  );
};