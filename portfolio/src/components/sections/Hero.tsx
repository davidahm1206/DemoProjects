'use client';

import { SITE } from '@/lib/constants';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Hero() {
  const name = SITE.name;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-start justify-center px-6 sm:px-12 max-w-4xl mx-auto"
    >
      <div className="relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-4 tracking-tight text-[var(--text-primary)]">
            {name}
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-normal mb-8">
            {SITE.role}
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mb-12 leading-relaxed">
            I craft modern, performant, and reliable web applications with a focus on clean code and robust architecture.
          </p>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="flex items-center gap-4">
             <a href="#projects" className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98]">
               View Projects
             </a>
             <a href="#contact" className="text-[var(--text-secondary)] px-5 py-2.5 text-sm font-medium hover:text-[var(--text-primary)] transition-colors">
               Contact
             </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
