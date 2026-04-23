'use client';

import { ReactNode } from 'react';

interface GlowTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export default function GlowText({ children, className = '', as: Tag = 'span' }: GlowTextProps) {
  return (
    <Tag className={`gradient-text ${className}`}>
      {children}
    </Tag>
  );
}
