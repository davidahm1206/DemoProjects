import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import FloatingOrbs from '@/components/effects/FloatingOrbs';
import GridBackground from '@/components/effects/GridBackground';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'David — Frontend Developer',
  description:
    'Portfolio of David, a frontend developer crafting modern, performant, and beautiful web experiences with React, Next.js, and TypeScript.',
  openGraph: {
    title: 'David — Frontend Developer',
    description: 'Crafting modern, performant, and beautiful web experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <FloatingOrbs />
          <GridBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
