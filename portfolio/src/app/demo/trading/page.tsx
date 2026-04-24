'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  TRADING_PORTFOLIO,
  TRADING_WATCHLIST,
  TRADING_TRANSACTIONS,
  TRADING_CHART_DATA,
  TRADING_SIDEBAR_ITEMS,
} from '@/lib/mockData';

function Sidebar({ collapsed, onToggle, mobileOpen, setMobileOpen, onItemClick }: { collapsed: boolean; onToggle: () => void; mobileOpen: boolean; setMobileOpen: (open: boolean) => void; onItemClick: (label: string) => void }) {
  // We handle mobile open/close via classes and framer motion
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ 
          width: collapsed ? 72 : 240,
          x: typeof window !== 'undefined' && window.innerWidth < 768 ? (mobileOpen ? 0 : -240) : 0
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-0 h-screen bg-[var(--bg-secondary)] border-r border-[var(--border-color)] z-[70] flex flex-col pt-6 overflow-hidden max-md:w-[240px]"
      >
        {/* Logo */}
        <div className="px-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>
              TP
            </div>
            {(!collapsed || (typeof window !== 'undefined' && window.innerWidth < 768)) && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-[var(--text-primary)] whitespace-nowrap"
              >
                TradePulse
              </motion.span>
            )}
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 overflow-y-auto">
          {TRADING_SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                onItemClick(item.label);
                if (typeof window !== 'undefined' && window.innerWidth < 768) {
                  setMobileOpen(false);
                }
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl mb-1 text-sm font-medium transition-all duration-200 cursor-pointer ${
                item.active
                  ? 'bg-[var(--accent-1)]/10 text-[var(--accent-1)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
              }`}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              {(!collapsed || (typeof window !== 'undefined' && window.innerWidth < 768)) && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={onToggle}
          className="mx-3 mb-4 p-3 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200 cursor-pointer hidden md:block"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: collapsed ? 'rotate(180deg)' : undefined, transition: 'transform 0.3s' }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </motion.aside>
    </>
  );
}

function PortfolioChart() {
  const data = TRADING_CHART_DATA;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const width = 600;
  const height = 200;
  const padding = 10;

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((val - min) / range) * (height - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;

  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill="url(#chartGrad)" />
        <polyline
          points={points}
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StatCard({ label, value, change, isPositive }: { label: string; value: string; change?: string; isPositive?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-1)]/20 transition-all duration-300"
    >
      <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-2">{label}</p>
      <p className="text-2xl font-bold text-[var(--text-primary)] mb-1">{value}</p>
      {change && (
        <p className={`text-sm font-medium ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
          {isPositive ? '↑' : '↓'} {change}
        </p>
      )}
    </motion.div>
  );
}

export default function TradingPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activePeriod, setActivePeriod] = useState('1M');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const p = TRADING_PORTFOLIO;

  return (
    <div className="min-h-screen">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} onItemClick={(label) => showToast(`Navigated to ${label}`, 'info')} />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 glass px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 border-[var(--border-color)]"
          >
            <span className="text-xl">{toast.type === 'success' ? '✅' : 'ℹ️'}</span>
            <p className="text-sm font-medium text-[var(--text-primary)]">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ marginLeft: isMobile ? 0 : (sidebarCollapsed ? 72 : 240) }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen pt-20 pb-10 px-4 sm:px-6"
      >
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setMobileSidebarOpen(true)}
                className="md:hidden p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">Dashboard</h1>
                <p className="text-sm text-[var(--text-secondary)]">Welcome back. Here&apos;s your portfolio overview.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-1)]/30 transition-colors"
                />
              </div>
              <button onClick={() => showToast('Profile settings simulated.')} className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white cursor-pointer hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>
                D
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Value" value={`$${p.totalValue.toLocaleString()}`} change={`$${p.dayChange.toLocaleString()} (${p.dayChangePercent}%)`} isPositive={true} />
            <StatCard label="Total Gain" value={`$${p.totalGain.toLocaleString()}`} change={`${p.totalGainPercent}%`} isPositive={true} />
            <StatCard label="Day Change" value={`$${p.dayChange.toLocaleString()}`} change={`${p.dayChangePercent}%`} isPositive={p.dayChange > 0} />
            <StatCard label="Positions" value="12" />
          </div>
        </AnimatedSection>

        {/* Chart */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Portfolio Performance</h2>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {['1W', '1M', '3M', '1Y', 'ALL'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setActivePeriod(period)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      period === activePeriod
                        ? 'bg-[var(--accent-1)]/10 text-[var(--accent-1)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <PortfolioChart />
          </div>
        </AnimatedSection>

        {/* Two columns: Watchlist + Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Watchlist */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Watchlist</h2>
              <div className="space-y-1">
                {TRADING_WATCHLIST.map((stock) => (
                  <div 
                    key={stock.symbol} 
                    onClick={() => showToast(`Viewed details for ${stock.symbol}`, 'info')}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-xs font-bold text-[var(--text-primary)] group-hover:bg-[var(--bg-secondary)] transition-colors">
                        {stock.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--text-primary)]">{stock.symbol}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{stock.name}</p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-4">
                      <div>
                        <p className="text-sm font-medium text-[var(--text-primary)]">${stock.price.toFixed(2)}</p>
                        <p className={`text-xs font-medium ${stock.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                          {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                        </p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          showToast(`Initiated Trade for ${stock.symbol}`);
                        }}
                        className="hidden sm:block px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--accent-1)]/10 text-[var(--accent-1)] hover:bg-[var(--accent-1)]/20 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                      >
                        Trade
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Transactions */}
          <AnimatedSection delay={0.4}>
            <div className="rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Recent Transactions</h2>
              <div className="space-y-1">
                {TRADING_TRANSACTIONS.map((tx, i) => (
                  <div 
                    key={i} 
                    onClick={() => showToast(`Transaction Receipt: ${tx.type === 'buy' ? 'Bought' : 'Sold'} ${tx.shares} ${tx.symbol}`, 'info')}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                        tx.type === 'buy' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                      }`}>
                        {tx.type === 'buy' ? '↑' : '↓'}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--text-primary)]">
                          {tx.type === 'buy' ? 'Bought' : 'Sold'} {tx.symbol}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)]">{tx.shares} shares @ ${tx.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[var(--text-primary)]">${tx.total.toLocaleString()}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{tx.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </motion.div>
    </div>
  );
}
