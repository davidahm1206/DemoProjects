// Site metadata
export const SITE = {
  name: 'David',
  role: 'Frontend Developer',
  description: 'Crafting modern, performant, and beautiful web experiences.',
  url: 'https://david.dev',
  socials: {
    reddit: 'https://reddit.com/u/Ahm0xyz',
    github: 'https://github.com/davidahm1206',
  },
};

// Navigation items
export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Skills data
export const SKILLS = [
  { name: 'React', level: 92, icon: '⚛️', color: '#61dafb' },
  { name: 'Next.js', level: 88, icon: '▲', color: '#ffffff' },
  { name: 'TypeScript', level: 85, icon: '🔷', color: '#3178c6' },
  { name: 'Tailwind CSS', level: 90, icon: '🎨', color: '#06b6d4' },
  { name: 'JavaScript', level: 94, icon: '⚡', color: '#f7df1e' },
  { name: 'HTML / CSS', level: 96, icon: '🌐', color: '#e34f26' },
  { name: 'Framer Motion', level: 80, icon: '🎬', color: '#bb4de8' },
  { name: 'Git', level: 82, icon: '📦', color: '#f05032' },
];

// Project data
export const PROJECTS = [
  {
    id: 'startup',
    name: 'NovaSpark',
    tagline: 'SaaS Landing Page',
    description: 'A modern startup landing page with pricing, features, and testimonials. Clean design with conversion-optimized layouts.',
    route: '/demo/startup',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    gradientCSS: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    emoji: '🚀',
  },
  {
    id: 'shop',
    name: 'Luxe Market',
    tagline: 'E-Commerce Store',
    description: 'An elegant e-commerce frontend with product grids, filters, and a polished shopping experience. Warm, premium aesthetics.',
    route: '/demo/shop',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    gradientCSS: 'linear-gradient(135deg, #f59e0b, #f97316, #ef4444)',
    tags: ['React', 'CSS Grid', 'Animation'],
    emoji: '🛍️',
  },
  {
    id: 'trading',
    name: 'TradePulse',
    tagline: 'Trading Dashboard',
    description: 'A fintech trading dashboard with real-time charts, watchlists, and portfolio analytics. Dark, data-rich interface.',
    route: '/demo/trading',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    gradientCSS: 'linear-gradient(135deg, #10b981, #14b8a6, #06b6d4)',
    tags: ['Dashboard', 'Charts', 'Fintech'],
    emoji: '📈',
  },
];
