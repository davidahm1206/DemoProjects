'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import {
  STARTUP_FEATURES,
  STARTUP_PRICING,
  STARTUP_TESTIMONIALS,
} from '@/lib/mockData';

function StartupHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.1]"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-24">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/20 text-[var(--accent-1)] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-1)] animate-pulse-glow" />
            Now in Public Beta
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Ship faster with{' '}
            <span className="gradient-text">NovaSpark</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            The developer platform that eliminates infrastructure complexity.
            Focus on building — we handle the rest.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">View Documentation</Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            {[
              { value: '10k+', label: 'Developers' },
              { value: '99.9%', label: 'Uptime' },
              { value: '<50ms', label: 'Latency' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to <span className="gradient-text">build</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              A complete toolkit designed for modern development teams.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STARTUP_FEATURES.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-1)]/20 transition-all duration-300 h-full"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h2>
            <p className="text-[var(--text-secondary)]">
              Start free. Scale when you&apos;re ready.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STARTUP_PRICING.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                  plan.highlighted
                    ? 'bg-[var(--accent-1)]/5 border-[var(--accent-1)]/30 shadow-lg'
                    : 'bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-1)]/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent-1)] text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">{plan.price}</span>
                  <span className="text-[var(--text-secondary)] text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <svg className="w-4 h-4 text-[var(--accent-1)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by <span className="gradient-text">developers</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STARTUP_TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] h-full flex flex-col">
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--text-primary)]">{t.name}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StartupPage() {
  return (
    <>
      <StartupHero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}
