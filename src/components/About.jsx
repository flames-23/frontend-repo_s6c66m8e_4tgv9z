import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Layers } from 'lucide-react';

const StackPill = ({ icon: Icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
    <Icon size={16} />
    {label}
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">About</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            I'm a developer who loves crafting elegant user experiences backed by solid, secure APIs. I focus on performance, accessibility, and maintainability.
          </p>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            My toolkit spans modern front-end frameworks, cloud-native backends, and data modeling. I enjoy shipping end-to-end features and collaborating closely with product teams.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          <StackPill icon={Code2} label="React / Next.js" />
          <StackPill icon={Server} label="Node.js / Express" />
          <StackPill icon={Database} label="MongoDB / Prisma" />
          <StackPill icon={Layers} label="Tailwind CSS / shadcn" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
