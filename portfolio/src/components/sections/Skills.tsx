'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { SKILLS } from '@/lib/constants';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-8">
            Technologies
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[var(--text-secondary)]">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2">
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
