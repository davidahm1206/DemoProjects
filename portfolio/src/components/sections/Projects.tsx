'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-12">
            Projects
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.id}>
              <Link
                href={project.route}
                className="group flex flex-col sm:flex-row items-baseline gap-4 py-6 border-b border-[var(--border-color)] hover:bg-[var(--bg-elevated)] px-4 -mx-4 transition-colors duration-200"
              >
                <span className="text-sm font-mono text-[var(--text-secondary)] w-12 shrink-0">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[var(--text-primary)] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 flex-wrap justify-end">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <svg
                  className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all duration-200 ml-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
