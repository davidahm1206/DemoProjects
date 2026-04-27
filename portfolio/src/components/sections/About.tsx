'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-16">
        <div className="sm:w-1/3">
          <AnimatedSection>
            <h2 className="text-2xl font-medium text-[var(--text-primary)]">
              About
            </h2>
          </AnimatedSection>
        </div>

        <div className="sm:w-2/3 space-y-6 text-base text-[var(--text-secondary)] leading-relaxed">
          <AnimatedSection>
            <p>
              I am a frontend developer focused on building fast, accessible, and highly polished web experiences. 
              My expertise lies in React, Next.js, and TypeScript, where I create scalable interfaces that prioritize 
              both performance and clarity.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <p>
              Rather than relying on generic templates, I believe in designing custom, intentional systems from the ground up. 
              I value minimalism, typographic scale, and seamless interactions that respect the user&apos;s time.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
