'use client';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-secondary) 0.5px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.04,
        }}
      />
    </div>
  );
}
