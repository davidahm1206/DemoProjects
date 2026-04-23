'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium text-[var(--accent-1)] tracking-widest uppercase mb-4">
            About
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 leading-tight">
            I build things for the web{' '}
            <span className="gradient-text">that feel right.</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
          <AnimatedSection delay={0.2}>
            <p>
              I&apos;m a frontend developer who cares deeply about the details — the way a hover state
              transitions, how content reveals as you scroll, the subtle glow that makes a button
              feel alive.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p>
              My work sits at the intersection of design and engineering. I don&apos;t just implement
              interfaces — I craft experiences that feel intentional and polished. Every animation
              has a purpose. Every pixel is considered.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p>
              When I&apos;m not writing code, I&apos;m probably exploring new design trends, experimenting
              with motion systems, or obsessing over typography. I believe the best digital
              products are the ones that feel human.
            </p>
          </AnimatedSection>
        </div>

        {/* Decorative line */}
        <AnimatedSection delay={0.5}>
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-1)]/30 to-transparent" />
        </AnimatedSection>
      </div>
    </section>
  );
}
