import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
          Alex.dev
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItem('#home', 'Home')}
          {navItem('#about', 'About')}
          {navItem('#projects', 'Projects')}
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="ml-2 rounded-md border border-neutral-300 bg-white p-2 text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 md:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="mx-4 mb-3 rounded-lg border border-neutral-200 bg-white p-2 shadow-sm md:hidden dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex flex-col">
            {navItem('#home', 'Home')}
            {navItem('#about', 'About')}
            {navItem('#projects', 'Projects')}
            <button
              onClick={toggleTheme}
              className="mt-1 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              Toggle theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
