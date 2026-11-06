'use client';

import React from 'react';
import Image from 'next/image';

interface NexiivaLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
  useImageFallback?: boolean;
  width?: number;
  height?: number;
}

export function NexiivaLogo({
  variant = 'light',
  className = 'h-8 w-auto',
  showTagline = false,
  useImageFallback = false,
  width = 160,
  height = 36,
}: NexiivaLogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? '#E9EAF4' : '#0B0C14';

  if (useImageFallback) {
    const src = isLight
      ? '/assets/brand/logo-wide-light.png'
      : '/assets/brand/logo-dark.png';
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <Image
          src={src}
          alt="Nexiiva Logo"
          width={width}
          height={height}
          priority
          className="h-auto w-full object-contain"
        />
        {showTagline && (
          <span className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-[#9A9CB3] uppercase font-mono-tag">
            REAL OPERATIONS. VIRTUAL EXPERIENCE.
          </span>
        )}
      </div>
    );
  }

  // Precision engineered inline SVG with gradient chevrons for the "X"
  return (
    <div className={`inline-flex flex-col ${className}`}>
      <svg
        viewBox="0 0 240 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-10"
        aria-label="Nexiiva"
        role="img"
      >
        <defs>
          <linearGradient
            id="nexiiva-brand-x"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6D3BF0" />
            <stop offset="50%" stopColor="#8B4CFF" />
            <stop offset="100%" stopColor="#3B6BFF" />
          </linearGradient>
          <filter id="x-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Letter 'N' */}
        <path
          d="M10 38V8H18.5L34 29.5V8H41V38H33L17 16V38H10Z"
          fill={textColor}
        />

        {/* Letter 'E' */}
        <path
          d="M52 38V8H78V14H60V20H75V26H60V32H79V38H52Z"
          fill={textColor}
        />

        {/* Chevrons for 'X' with brand gradient */}
        <g filter="url(#x-glow)">
          {/* Left chevron of X */}
          <path
            d="M87 8L99 23L87 38H96L104 28L98 20L95 16L102 8H87Z"
            fill="url(#nexiiva-brand-x)"
          />
          {/* Right chevron of X */}
          <path
            d="M121 8H106L113 16L110 20L104 28L112 38H121L109 23L121 8Z"
            fill="url(#nexiiva-brand-x)"
          />
          {/* Center core diamond accent */}
          <circle cx="104" cy="23" r="2.2" fill="#38BDF8" opacity="0.9" />
        </g>

        {/* Letter 'I' (first) */}
        <path
          d="M132 38V8H140V38H132Z"
          fill={textColor}
        />

        {/* Letter 'I' (second) */}
        <path
          d="M149 38V8H157V38H149Z"
          fill={textColor}
        />

        {/* Letter 'V' */}
        <path
          d="M166 8H174.5L184.5 31.5L194.5 8H203L189 38H180L166 8Z"
          fill={textColor}
        />

        {/* Letter 'A' */}
        <path
          d="M217 8H227L241 38H232.5L229.5 31H214.5L211.5 38H203L217 8ZM222 14.5L216.5 25.5H227.5L222 14.5Z"
          fill={textColor}
        />
      </svg>

      {showTagline && (
        <span
          className="mt-1 text-[8.5px] font-bold tracking-[0.22em] uppercase font-mono-tag"
          style={{ color: isLight ? '#9A9CB3' : '#5E6075' }}
        >
          REAL OPERATIONS. VIRTUAL EXPERIENCE.
        </span>
      )}
    </div>
  );
}
