'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { SHOP_PRODUCTS, SHOP_CATEGORIES } from '@/lib/mockData';

function ShopHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #f59e0b, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                Luxe <span style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Market</span>
              </h1>
              <p className="text-[var(--text-secondary)]">Curated essentials for the modern individual</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--accent-1)] text-white text-xs flex items-center justify-center font-bold">3</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: typeof SHOP_PRODUCTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -6 }}
        className="group rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-1)]/20 transition-all duration-300 cursor-pointer"
      >
        {/* Product image placeholder */}
        <div className="relative h-64 overflow-hidden" style={{ backgroundColor: product.color }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="m21 15-5-5L5 21"/>
              </svg>
            </motion.div>
          </div>

          {product.badge && (
            <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white ${
              product.badge === 'Sale' ? 'bg-red-500' :
              product.badge === 'New' ? 'bg-[var(--accent-1)]' :
              product.badge === 'Limited' ? 'bg-amber-500' :
              'bg-emerald-500'
            }`}>
              {product.badge}
            </span>
          )}

          {/* Quick view overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center"
              >
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                >
                  <Button size="sm" variant="primary">Quick View</Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-[var(--text-primary)] mb-2">{product.name}</h3>
          <p className="text-lg font-bold text-[var(--text-primary)]">${product.price}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? SHOP_PRODUCTS
    : SHOP_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Category filter */}
        <AnimatedSection>
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
            {SHOP_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[var(--accent-1)] text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ProductGrid />
      <Footer />
    </>
  );
}
