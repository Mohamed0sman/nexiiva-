'use client';

import React from 'react';

interface PidGridProps {
  className?: string;
  showSymbols?: boolean;
}

export function PidGrid({ className = '', showSymbols = true }: PidGridProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Precision 1px grid background pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="pid-minor-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#A87FFB"
              strokeWidth="0.6"
            />
          </pattern>
          <pattern
            id="pid-major-grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100" height="100" fill="url(#pid-minor-grid)" />
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pid-major-grid)" />
      </svg>

      {/* Atmospheric ambient purple/blue glow blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#6D3BF0]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-[#3B6BFF]/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#4C1DB8]/10 blur-[100px] pointer-events-none" />

      {/* Floating P&ID Instrument bubbles & glyphs */}
      {showSymbols && (
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07] text-[#9A9CB3]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bubble 1: FIC-102 (Flow Indicator Controller) */}
          <g transform="translate(140, 160)">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.2" />
            <text x="24" y="18" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="currentColor">FIC</text>
            <text x="24" y="36" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor">102</text>
            <line x1="24" y1="46" x2="24" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          </g>

          {/* Bubble 2: TI-143 (Temperature Indicator) */}
          <g transform="translate(820, 240)">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.2" />
            <text x="24" y="18" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="currentColor">TI</text>
            <text x="24" y="36" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor">143</text>
            <line x1="2" y1="24" x2="-25" y2="24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          </g>

          {/* Bubble 3: LIC-009 (Level Indicator Controller) */}
          <g transform="translate(360, 520)">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.2" />
            <text x="24" y="18" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="currentColor">LIC</text>
            <text x="24" y="36" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor">009</text>
          </g>

          {/* Bubble 4: PIC-101 (Pressure Indicator Controller) */}
          <g transform="translate(1080, 580)">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.2" />
            <text x="24" y="18" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="currentColor">PIC</text>
            <text x="24" y="36" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor">101</text>
          </g>

          {/* Control Valve Glyph */}
          <g transform="translate(200, 320)">
            <polygon points="0,0 24,14 0,28" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="48,0 24,14 48,28" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="14" x2="24" y2="0" stroke="currentColor" strokeWidth="1.5" />
            <rect x="18" y="-10" width="12" height="10" fill="none" stroke="currentColor" strokeWidth="1.2" rx="2" />
          </g>

          {/* Centrifugal Pump Glyph */}
          <g transform="translate(740, 680)">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="20,2 38,20 20,20" fill="currentColor" opacity="0.4" />
            <line x1="2" y1="20" x2="-20" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="2" x2="20" y2="-15" stroke="currentColor" strokeWidth="1.5" />
          </g>
        </svg>
      )}
    </div>
  );
}
