'use client';

import { SITE } from '@/lib/constants';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
        <div className="sm:w-1/3">
          <AnimatedSection>
            <h2 className="text-2xl font-medium text-[var(--text-primary)]">
              Contact
            </h2>
          </AnimatedSection>
        </div>

        <div className="sm:w-2/3">
          <AnimatedSection>
            <p className="text-base text-[var(--text-secondary)] mb-8 max-w-md">
              I am currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col gap-4">
              <a
                href={SITE.socials.reddit}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[var(--text-primary)] transition-all inline-block w-max"
              >
                <span className="link-underline pb-0.5">Reach out on Reddit ↗</span>
              </a>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[var(--text-primary)] transition-all inline-block w-max"
              >
                <span className="link-underline pb-0.5">View GitHub ↗</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
