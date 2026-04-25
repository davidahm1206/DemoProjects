'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { SITE } from '@/lib/constants';

const socials = [
  {
    name: 'Reddit',
    href: SITE.socials.reddit,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 13.38c.15.36.24.75.24 1.15 0 2.35-2.76 4.27-6.14 4.27s-6.14-1.91-6.14-4.27c0-.4.08-.79.23-1.15a1.6 1.6 0 0 1-.66-1.28 1.58 1.58 0 0 1 2.7-1.12 7.77 7.77 0 0 1 3.87-1.18l.73-3.42a.34.34 0 0 1 .4-.27l2.42.52a1.12 1.12 0 1 1-.12.56l-2.17-.46-.65 3.06a7.74 7.74 0 0 1 3.82 1.17A1.58 1.58 0 0 1 19 12.1c0 .52-.25.98-.66 1.28h.01zM9.24 12.85a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zm5.52 0a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zm-5.07 3.35c-.04-.04-.04-.1 0-.14a.1.1 0 0 1 .14 0c.46.46 1.24.69 2.17.69s1.71-.23 2.17-.69a.1.1 0 0 1 .14 0c.04.04.04.1 0 .14-.52.52-1.37.79-2.31.79s-1.79-.27-2.31-.79z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: SITE.socials.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm font-medium text-[var(--accent-1)] tracking-widest uppercase mb-4">
            Contact
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Reach <span className="gradient-text">Out</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-xl mx-auto">
            Got a project in mind?<br></br>Reach out to me on Reddit.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-1)]/30 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300"
              >
                {social.icon}
                <span className="font-medium text-sm">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
