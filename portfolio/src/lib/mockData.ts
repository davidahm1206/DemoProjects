// ===== STARTUP PAGE DATA =====

export const STARTUP_FEATURES = [
  {
    title: 'Lightning Fast',
    description: 'Sub-100ms response times. Your users never wait.',
    icon: '⚡',
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption.',
    icon: '🔒',
  },
  {
    title: 'Scale Infinitely',
    description: 'From 10 to 10 million users — no architecture changes.',
    icon: '📈',
  },
  {
    title: 'Developer First',
    description: 'APIs, SDKs, and docs that developers actually enjoy.',
    icon: '🛠️',
  },
];

export const STARTUP_PRICING = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects',
    features: ['1,000 API calls/mo', '1 team member', 'Community support', 'Basic analytics'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams',
    features: ['100,000 API calls/mo', '10 team members', 'Priority support', 'Advanced analytics', 'Custom domains', 'SSO'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: ['Unlimited API calls', 'Unlimited members', '24/7 dedicated support', 'Custom SLA', 'On-premise option', 'Audit logs'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export const STARTUP_TESTIMONIALS = [
  {
    quote: 'NovaSpark cut our deployment time by 80%. The developer experience is unmatched.',
    name: 'Sarah Chen',
    role: 'CTO at FlowStack',
    avatar: 'SC',
  },
  {
    quote: 'We migrated from three different tools. NovaSpark replaced them all.',
    name: 'Marcus Rivera',
    role: 'Lead Engineer at DataPulse',
    avatar: 'MR',
  },
  {
    quote: 'The API documentation alone convinced us. Everything just works.',
    name: 'Lena Kowalski',
    role: 'Founder at Buildmate',
    avatar: 'LK',
  },
];

// ===== SHOP PAGE DATA =====

export const SHOP_CATEGORIES = ['All', 'Outerwear', 'Tops', 'Footwear', 'Accessories'];

export const SHOP_PRODUCTS = [
  {
    id: 1,
    name: 'Midnight Puffer Jacket',
    price: 289,
    category: 'Outerwear',
    color: '#1a1a2e',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Cloud Merino Sweater',
    price: 149,
    category: 'Tops',
    color: '#f0e6d3',
    badge: null,
  },
  {
    id: 3,
    name: 'Urban Runner V3',
    price: 199,
    category: 'Footwear',
    color: '#2d3436',
    badge: 'Best Seller',
  },
  {
    id: 4,
    name: 'Canvas Weekender Bag',
    price: 179,
    category: 'Accessories',
    color: '#8b7355',
    badge: null,
  },
  {
    id: 5,
    name: 'Storm Shell Jacket',
    price: 349,
    category: 'Outerwear',
    color: '#0f3460',
    badge: null,
  },
  {
    id: 6,
    name: 'Linen Relaxed Tee',
    price: 69,
    category: 'Tops',
    color: '#e8dcc8',
    badge: 'Sale',
  },
  {
    id: 7,
    name: 'Heritage Leather Boots',
    price: 329,
    category: 'Footwear',
    color: '#5c4033',
    badge: null,
  },
  {
    id: 8,
    name: 'Titanium Watch',
    price: 459,
    category: 'Accessories',
    color: '#c0c0c0',
    badge: 'Limited',
  },
];

// ===== TRADING PAGE DATA =====

export const TRADING_PORTFOLIO = {
  totalValue: 124583.47,
  dayChange: 1247.32,
  dayChangePercent: 1.01,
  totalGain: 18472.89,
  totalGainPercent: 17.41,
};

export const TRADING_WATCHLIST = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 198.45, change: 2.34, changePercent: 1.19 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 452.18, change: -1.82, changePercent: -0.40 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 178.92, change: 3.56, changePercent: 2.03 },
  { symbol: 'AMZN', name: 'Amazon.com', price: 201.37, change: 0.89, changePercent: 0.44 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 924.61, change: 15.23, changePercent: 1.68 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.93, change: -4.12, changePercent: -1.63 },
  { symbol: 'META', name: 'Meta Platforms', price: 542.78, change: 8.45, changePercent: 1.58 },
  { symbol: 'BRK.B', name: 'Berkshire Hathaway', price: 441.20, change: 0.32, changePercent: 0.07 },
];

export const TRADING_TRANSACTIONS = [
  { type: 'buy', symbol: 'NVDA', shares: 5, price: 909.38, date: '2025-04-22', total: 4546.90 },
  { type: 'sell', symbol: 'TSLA', shares: 10, price: 253.05, date: '2025-04-21', total: 2530.50 },
  { type: 'buy', symbol: 'AAPL', shares: 15, price: 196.11, date: '2025-04-20', total: 2941.65 },
  { type: 'buy', symbol: 'GOOGL', shares: 8, price: 175.36, date: '2025-04-19', total: 1402.88 },
  { type: 'sell', symbol: 'META', shares: 3, price: 534.33, date: '2025-04-18', total: 1602.99 },
];

// Chart data (simplified price history for SVG chart)
export const TRADING_CHART_DATA = [
  112000, 113200, 111800, 114500, 113900, 115200, 116800, 115400,
  117200, 118900, 117600, 119400, 120100, 118800, 121300, 122500,
  121200, 123100, 122400, 124583,
];

export const TRADING_SIDEBAR_ITEMS = [
  { label: 'Dashboard', icon: '📊', active: true },
  { label: 'Portfolio', icon: '💼', active: false },
  { label: 'Watchlist', icon: '👁️', active: false },
  { label: 'Orders', icon: '📋', active: false },
  { label: 'Analytics', icon: '📈', active: false },
  { label: 'Settings', icon: '⚙️', active: false },
];
