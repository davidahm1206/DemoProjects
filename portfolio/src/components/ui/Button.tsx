'use client';

import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit';
  form?: string;
}

const variants = {
  primary:
    'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 border border-transparent',
  secondary:
    'bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/80 border border-[var(--border-color)]',
  ghost:
    'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent',
  outline:
    'bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--bg-elevated)]',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-sm rounded-md',
  lg: 'px-6 py-3 text-base rounded-md',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  form,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      form={form}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
