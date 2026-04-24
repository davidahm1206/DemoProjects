'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { SHOP_PRODUCTS, SHOP_CATEGORIES } from '@/lib/mockData';

type Product = typeof SHOP_PRODUCTS[0];
type CartItem = Product & { quantity: number };

function ShopHero({ cartCount, onOpenCart }: { cartCount: number; onOpenCart: () => void }) {
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
              <button onClick={onOpenCart} className="relative p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--accent-1)] text-white text-xs flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ProductCard({ product, index, onAddToCart }: { product: Product; index: number; onAddToCart: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -6 }}
        className="group rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-1)]/20 transition-all duration-300 cursor-pointer"
      >
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

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]"
              >
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                >
                  <Button 
                    size="sm" 
                    variant="primary" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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

function ProductGrid({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? SHOP_PRODUCTS
    : SHOP_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
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
                <ProductCard product={product} index={i} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutOpen(false);
    setCart([]);
    setTrackingOpen(true);
  };

  return (
    <>
      <ShopHero cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <ProductGrid onAddToCart={handleAddToCart} />
      <Footer />

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[var(--bg-secondary)] border-l border-[var(--border-color)] z-50 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-[var(--border-color)] flex items-center justify-between">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button onClick={() => setCartOpen(false)} className="text-[var(--text-secondary)] hover:text-white transition-colors cursor-pointer p-2">
                  ✕
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-[var(--text-secondary)]">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4">
                      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    <p>Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 bg-[var(--bg-elevated)] p-4 rounded-xl border border-[var(--border-color)]">
                      <div className="w-16 h-16 rounded-lg shrink-0" style={{ backgroundColor: item.color }} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-[var(--text-secondary)] text-sm">${item.price} × {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold mb-2">${item.price * item.quantity}</p>
                        <button onClick={() => handleRemoveFromCart(item.id)} className="text-xs text-red-500 hover:text-red-400 cursor-pointer">Remove</button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-elevated)]">
                  <div className="flex justify-between mb-6">
                    <span className="font-semibold">Subtotal</span>
                    <span className="font-bold text-xl">${cartTotal}</span>
                  </div>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => {
                      setCartOpen(false);
                      setCheckoutOpen(true);
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {checkoutOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCheckoutOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-elevated)] sticky top-0 z-10">
                <h2 className="text-2xl font-bold">Checkout</h2>
                <button onClick={() => setCheckoutOpen(false)} className="text-[var(--text-secondary)] hover:text-white p-2">✕</button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 p-4 rounded-xl mb-8 flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h4 className="font-bold mb-1">Demo Mode Active</h4>
                    <p className="text-sm opacity-90">Please do not enter real personal or payment information. This form is for demonstration purposes only.</p>
                  </div>
                </div>

                <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg border-b border-[var(--border-color)] pb-2">Shipping Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-sm text-[var(--text-secondary)] mb-1">First Name</label>
                        <input required type="text" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl px-4 py-2 focus:border-[var(--accent-1)] focus:outline-none" placeholder="Jane" />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-sm text-[var(--text-secondary)] mb-1">Last Name</label>
                        <input required type="text" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl px-4 py-2 focus:border-[var(--accent-1)] focus:outline-none" placeholder="Doe" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm text-[var(--text-secondary)] mb-1">Address</label>
                        <input required type="text" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl px-4 py-2 focus:border-[var(--accent-1)] focus:outline-none" placeholder="123 Demo Street" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-lg border-b border-[var(--border-color)] pb-2">Payment Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-[var(--text-secondary)] mb-1">Card Number (Mock)</label>
                        <input required type="text" pattern="[0-9]*" maxLength={16} className="w-full bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl px-4 py-2 focus:border-[var(--accent-1)] focus:outline-none" placeholder="4000 1234 5678 9010" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-[var(--text-secondary)] mb-1">Expiry</label>
                          <input required type="text" placeholder="MM/YY" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl px-4 py-2 focus:border-[var(--accent-1)] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm text-[var(--text-secondary)] mb-1">CVC</label>
                          <input required type="text" maxLength={3} placeholder="123" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl px-4 py-2 focus:border-[var(--accent-1)] focus:outline-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-elevated)] sticky bottom-0 z-10 flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setCheckoutOpen(false)}>Cancel</Button>
                <Button type="submit" form="checkout-form" variant="primary">Place Mock Order (${cartTotal})</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tracking Modal */}
      <AnimatePresence>
        {trackingOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl shadow-2xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 className="text-3xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-[var(--text-secondary)] mb-8">Order #DEMO-{Math.floor(Math.random() * 100000)}</p>
              
              <div className="text-left space-y-6 mb-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:to-[var(--border-color)] pl-12 md:pl-0">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-secondary)] bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-12 md:static">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="md:w-[calc(50%-2.5rem)] text-left md:text-right md:group-even:text-left">
                    <div className="font-bold text-emerald-500">Order Placed</div>
                    <div className="text-xs text-[var(--text-secondary)]">Just now</div>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-secondary)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-12 md:static">
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                  </div>
                  <div className="md:w-[calc(50%-2.5rem)] text-left md:text-right md:group-even:text-left">
                    <div className="font-bold text-[var(--text-secondary)]">Processing</div>
                    <div className="text-xs text-[var(--text-secondary)] opacity-50">Pending</div>
                  </div>
                </div>
              </div>

              <Button variant="secondary" className="w-full" onClick={() => setTrackingOpen(false)}>Continue Shopping</Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
