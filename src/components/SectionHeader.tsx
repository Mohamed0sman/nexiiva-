import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  className?: string;
  theme?: 'light' | 'dark';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  className = '',
  theme = 'light',
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-12 max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-start'
      } ${className}`}
    >
      {/* Eyebrow with hairline rule */}
      <div
        className={`inline-flex items-center gap-3 font-mono-tag text-xs font-bold tracking-[0.2em] uppercase ${
          isCenter ? 'justify-center' : ''
        } ${isDark ? 'text-blue-400' : 'text-[#1D4ED8]'}`}
      >
        <span>{eyebrow}</span>
        <span
          className={`h-px w-8 ${
            isDark ? 'bg-blue-400/40' : 'bg-[#1D4ED8]/30'
          }`}
        />
      </div>

      {/* Main Title */}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15] ${
          isDark ? 'text-white' : 'text-[#0A192F]'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
