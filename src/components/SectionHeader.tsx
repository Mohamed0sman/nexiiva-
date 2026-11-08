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
        className={`inline-flex items-center gap-3 text-xs font-semibold tracking-wide ${
          isCenter ? 'justify-center' : ''
        } ${isDark ? 'text-blue-300' : 'text-sky-600'}`}
      >
        <span>{eyebrow}</span>
        <span
          className={`h-px w-8 ${
            isDark ? 'bg-blue-400/30' : 'bg-sky-600/25'
          }`}
        />
      </div>

      {/* Main Title */}
      <h2
        className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.25] ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
