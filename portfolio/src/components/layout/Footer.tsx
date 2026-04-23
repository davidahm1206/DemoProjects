'use client';

import { SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)]">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Built with intention.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-1)] transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={SITE.socials.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-1)] transition-colors duration-200"
          >
            Reddit
          </a>
        </div>
      </div>
    </footer>
  );
}
