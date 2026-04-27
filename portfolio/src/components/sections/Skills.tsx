'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const LOGOS = [
  {
    name: 'React',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 180 180" width="24" height="24" fill="currentColor">
        <path d="M90 180c49.706 0 90-40.294 90-90S139.706 0 90 0 0 40.294 0 90s40.294 90 90 90Zm-16.145-121.365h14.24l35.093 57.07v-57.07h12.564v76.883h-13.431L86.419 76.541v58.977H73.855V58.635Z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 128 128" width="24" height="24" fill="currentColor">
        <path d="M128 64c0 35.346-28.654 64-64 64S0 98.346 0 64 28.654 0 64 0s64 28.654 64 64zM66.442 80.203c-5.892-2.138-8.243-3.666-8.243-6.525 0-2.859 2.553-4.795 6.425-4.795 4.792 0 8.04 1.732 10.485 3.874l3.565-4.887C75.82 65.322 71.328 63.59 65.412 63.59c-7.644 0-12.742 4.075-12.742 10.395 0 8.665 8.97 10.498 14.675 12.33 6.012 2.039 8.667 4.182 8.667 7.235 0 3.364-2.853 5.405-7.545 5.405-5.912 0-9.889-2.245-12.744-5.097l-3.87 5.092c3.465 3.364 8.766 5.505 15.9 5.505 8.358 0 13.968-3.978 13.968-10.702 0-8.968-9.074-11.21-15.28-13.55zM44.52 64.303H31.168v39.444h-6.216V64.303H11.597V58.9h32.923v5.403z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 128 128" width="24" height="24" fill="currentColor">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.53 13.867-11.73 22.398-9.597 4.88 1.22 8.367 4.773 12.262 8.742 6.13 6.25 13.23 13.488 29.34 13.488 17.066 0 27.734-8.53 32-25.597-6.4 8.53-13.867 11.734-22.4 9.6-4.88-1.223-8.366-4.774-12.26-8.743-6.13-6.25-13.23-13.49-29.34-13.49Zm-32 38.406c-17.066 0-27.73 8.53-32 25.598 6.4-8.532 13.867-11.735 22.4-9.6 4.88 1.222 8.366 4.773 12.26 8.742 6.13 6.25 13.23 13.49 29.34 13.49 17.067 0 27.735-8.53 32-25.597-6.4 8.53-13.867 11.734-22.4 9.598-4.88-1.223-8.367-4.774-12.26-8.743-6.13-6.25-13.23-13.49-29.34-13.49Z" />
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    icon: (
      <svg viewBox="0 0 128 128" width="24" height="24" fill="currentColor">
        <path d="M26.664 0h74.672v37.336H64l-37.336 37.336h74.672v37.336L64 149.344V112H26.664V0Z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 128 128" width="24" height="24" fill="currentColor">
        <path d="M124.965 59.852 68.145 3.033A5.85 5.85 0 0 0 64.015 1.32a5.857 5.857 0 0 0-4.133 1.713l-14.717 14.72c3.486 1.785 5.922 5.176 6.34 9.176 1.488-.135 2.94.337 4.033 1.43l13.064 13.064c1.94 1.944 2.65 4.717 2.012 7.214l11.455 11.458c2.493-.642 5.267.07 7.206 2.008 3.197 3.194 3.197 8.375 0 11.572-3.194 3.194-8.38 3.194-11.575 0-2.42-2.42-2.92-5.962-1.39-8.81L65.412 52.42c-2.316.326-4.776-.328-6.61-2.164L44.975 36.43v33.488c2.09 1.134 3.655 3.056 4.316 5.378l10.975 10.974c2.844-1.527 6.386-1.026 8.807 1.396 3.194 3.195 3.194 8.376 0 11.57-3.197 3.195-8.38 3.195-11.574 0-2.327-2.324-2.946-5.69-1.637-8.487l-10.742-10.74c-1.428.18-2.926-.263-4.103-1.44-3.194-3.195-3.194-8.38 0-11.573 2.106-2.106 5.093-2.88 7.82-2.188V30.932c-2.73-.69-5.717.082-7.82 2.186-3.197 3.197-3.197 8.38 0 11.575 1.575 1.576 3.738 2.302 5.86 2.122L57.518 57.55c-.244 3.16 1.05 6.273 3.518 8.442a8.04 8.04 0 0 0 .548.455l49.38 49.382a5.836 5.836 0 0 0 4.132 1.714c1.558 0 3.023-.608 4.128-1.71l5.736-5.736c2.28-2.28 2.28-5.98-.003-8.26z"/>
      </svg>
    ),
  },
];

export default function Skills() {
  // Duplicate array 3 times (4 copies total) to match -25% CSS transform and fill ultrawide monitors
  const loopingLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section id="skills" className="py-12 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] overflow-hidden">
      <div className="w-full">
        <AnimatedSection>
          <div className="flex w-fit animate-marquee pause-on-hover hover:cursor-default">
            {loopingLogos.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="flex items-center gap-3 px-8 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                {logo.icon}
                <span className="text-sm font-medium tracking-wide">{logo.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
