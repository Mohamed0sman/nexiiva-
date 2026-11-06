'use client';

import React from 'react';
import {
  Layers,
  Flame,
  Cpu,
  LineChart,
  Sliders,
  Award,
  WifiOff,
  Globe,
} from 'lucide-react';

import type { Dict } from '@/types/dict';

interface TrustStripProps {
  dict?: Dict;
}

export function TrustStrip(_props: TrustStripProps) {
  void _props;
  const capabilities = [
    { label: 'CDU / VDU', icon: Layers },
    { label: 'Preheat Train', icon: Flame },
    { label: '387 equipment types', icon: Cpu },
    { label: '12 live trends', icon: LineChart },
    { label: 'Instructor-injected faults', icon: Sliders },
    { label: 'Auto scoring + certificate', icon: Award },
    { label: 'Offline mode', icon: WifiOff },
    { label: 'Arabic & English', icon: Globe },
  ];

  return (
    <section
      id="trust-strip"
      className="relative z-20 border-y border-white/10 bg-[#070912] py-4 overflow-hidden"
      aria-label="Platform Capabilities"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-1.5 font-mono-tag text-xs font-medium text-[#E9EAF4] transition-all duration-200 hover:border-[#8B4CFF]/40 hover:bg-white/5"
              >
                <Icon className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span className="tracking-wide">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
