'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { PROJECTS } from '@/lib/constants';

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // Apply 3D transform directly via style — no Framer re-render
    el.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg)`;
    setGlowPos({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const el = cardRef.current;
    if (el) el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      /* Outer wrapper handles rounding + clipping — never animated */
      className="rounded-3xl overflow-hidden"
    >
      <Link href={project.route}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1000px', transition: 'transform 0.15s ease-out' }}
          className="group relative cursor-pointer h-[380px] sm:h-[420px]"
        >
          {/* Gradient background */}
          <div
            className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: project.gradientCSS }}
          />

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Glow on hover */}
          <div
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.15), transparent 60%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-between p-8 text-white">
            <div>
              <span className="text-4xl mb-4 block">{project.emoji}</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wider mb-4">
                {project.tagline}
              </p>
              <p className="text-sm opacity-70 leading-relaxed max-w-sm">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/15 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div
            className="absolute bottom-8 right-8 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-200"
            style={{
              transform: isHovered ? 'translateX(4px) scale(1.1)' : 'translateX(0) scale(1)',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium text-[var(--accent-1)] tracking-widest uppercase mb-4">
            Projects
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-2xl">
            A collection of projects that showcase my approach to frontend development.
            Each one is a fully designed, interactive experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
