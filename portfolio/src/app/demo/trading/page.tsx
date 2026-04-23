'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  TRADING_PORTFOLIO,
  TRADING_WATCHLIST,
  TRADING_TRANSACTIONS,
  TRADING_CHART_DATA,
  TRADING_SIDEBAR_ITEMS,
} from '@/lib/mockData';

function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 h-screen bg-[var(--bg-secondary)] border-r border-[var(--border-color)] z-40 flex flex-col pt-6 overflow-hidden"
    >
      {/* Logo */}
      <div className="px-4 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>
          TP
        </div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-[var(--text-primary)] whitespace-nowrap"
          >
            TradePulse
          </motion.span>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3">
        {TRADING_SIDEBAR_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl mb-1 text-sm font-medium transition-all duration-200 cursor-pointer ${
              item.active
                ? 'bg-[var(--accent-1)]/10 text-[var(--accent-1)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            <span className="text-lg shrink-0">{item.icon}</span>
            {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="mx-3 mb-4 p-3 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200 cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: collapsed ? 'rotate(180deg)' : undefined, transition: 'transform 0.3s' }}>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    </motion.aside>
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
  const p = TRADING_PORTFOLIO;

  return (
    <div className="min-h-screen">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <motion.div
        animate={{ marginLeft: sidebarCollapsed ? 72 : 240 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen pt-20 pb-10 px-6"
      >
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">Dashboard</h1>
              <p className="text-sm text-[var(--text-secondary)]">Welcome back. Here&apos;s your portfolio overview.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-1)]/30"
                />
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>
                D
              </div>
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
              <div className="flex gap-2">
                {['1W', '1M', '3M', '1Y', 'ALL'].map((period) => (
                  <button
                    key={period}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      period === '1M'
                        ? 'bg-[var(--accent-1)]/10 text-[var(--accent-1)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
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
                  <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-xs font-bold text-[var(--text-primary)]">
                        {stock.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--text-primary)]">{stock.symbol}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{stock.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[var(--text-primary)]">${stock.price.toFixed(2)}</p>
                      <p className={`text-xs font-medium ${stock.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                      </p>
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
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors">
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
