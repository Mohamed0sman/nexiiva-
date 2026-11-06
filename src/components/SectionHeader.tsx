import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-start'
      } ${className}`}
    >
      {/* Eyebrow with hairline rule */}
      <div
        className={`inline-flex items-center gap-3 font-mono-tag text-xs font-bold tracking-[0.2em] text-[#8B4CFF] uppercase ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span>{eyebrow}</span>
        <span className="h-px w-8 bg-[#8B4CFF]/40" />
      </div>

      {/* Main Title */}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#E9EAF4] sm:text-4xl lg:text-5xl leading-[1.15]">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#9A9CB3] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
