import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'End-to-end chat with auth, rooms, and presence using websockets.',
    tech: ['Next.js', 'Socket.io', 'Redis', 'Tailwind'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured shop with payments, admin, and analytics.',
    tech: ['React', 'Node', 'Stripe', 'Postgres'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Portfolio Starter',
    description: 'Open-source starter for building beautiful portfolio sites.',
    tech: ['Vite', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl"
      >
        Projects
      </motion.h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:underline dark:text-neutral-300">
                <Github size={16} /> Code
              </a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:underline dark:text-neutral-300">
                <ExternalLink size={16} /> Demo
              </a>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-200/40 dark:to-white/5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
