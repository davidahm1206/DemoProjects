'use client';

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Large indigo orb */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full animate-float opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, var(--accent-1), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Violet orb */}
      <div
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full animate-float-slow opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, var(--accent-2), transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '-5s',
        }}
      />
      {/* Cyan orb */}
      <div
        className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full animate-float opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, var(--accent-3), transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '-10s',
        }}
      />
      {/* Small accent orb */}
      <div
        className="absolute top-2/3 left-1/4 w-[250px] h-[250px] rounded-full animate-float-slow opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #ec4899, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '-8s',
        }}
      />
    </div>
  );
}
