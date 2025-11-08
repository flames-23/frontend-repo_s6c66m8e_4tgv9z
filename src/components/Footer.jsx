import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Alex Smith. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
