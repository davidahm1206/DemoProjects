'use client';

import { motion } from 'framer-motion';
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
}

const variants = {
  primary:
    'bg-[var(--accent-1)] text-white hover:shadow-[0_0_30px_var(--glow)] border border-transparent',
  secondary:
    'bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--accent-1)]/10 border border-[var(--border-color)]',
  ghost:
    'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent',
  outline:
    'bg-transparent text-[var(--accent-1)] border border-[var(--accent-1)] hover:bg-[var(--accent-1)]/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      type={type}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
