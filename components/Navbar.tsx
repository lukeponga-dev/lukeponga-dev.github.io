'use client';

import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#connect', label: 'Connect' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-950/90 py-4 shadow-lg backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-bold text-white">
          Luke Ponga
        </a>

        <div className="hidden space-x-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-gray-300 hover:text-white focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div className="bg-slate-900/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 transition-colors duration-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
