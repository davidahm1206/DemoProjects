'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/constants';

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const name = SITE.name;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated gradient background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08] animate-gradient-shift"
          style={{
            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))',
            backgroundSize: '200% 200%',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[var(--text-secondary)] text-base sm:text-lg mb-4 font-light tracking-wide"
        >
          Hey, I&apos;m
        </motion.p>

        {/* Name - animated letter by letter */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold mb-6 tracking-tight" style={{ perspective: '1000px' }}>
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block gradient-text"
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Role */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl text-[var(--text-secondary)] font-light mb-10"
        >
          {SITE.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-12 leading-relaxed opacity-80"
        >
          {SITE.description}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase opacity-50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-[var(--text-secondary)]/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[var(--accent-1)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
