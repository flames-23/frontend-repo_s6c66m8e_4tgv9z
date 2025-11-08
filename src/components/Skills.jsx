import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'Framer Motion',
  'Jest',
  'Cypress',
  'Docker',
  'AWS',
];

const Skills = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl"
      >
        Skills
      </motion.h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
