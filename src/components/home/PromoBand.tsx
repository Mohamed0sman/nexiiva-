'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface PromoBandProps {
  locale: string;
  dict: Dict;
}

export function PromoBand({ locale, dict }: PromoBandProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 flex items-center justify-between border-b border-white/10 bg-[#0E111C] px-4 py-2 text-xs text-[#E9EAF4]">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center gap-1 rounded bg-[#6D3BF0]/30 px-2 py-0.5 font-mono-tag text-[10px] font-bold text-[#A87FFB] uppercase">
          <Sparkles className="h-3 w-3 text-[#38BDF8]" />
          PILOT 2026
        </span>
        <span className="font-medium text-[#E9EAF4]">
          {dict?.announcement?.text ||
            'Pilot programme open — train on your own unit in ~1 week of build time'}
        </span>
        <Link
          href={`/${locale}/pilot`}
          className="inline-flex items-center gap-1 font-semibold text-[#38BDF8] hover:underline"
        >
          <span>{dict?.announcement?.cta || 'Learn about the pilot'}</span>
          <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="ms-3 text-[#9A9CB3] hover:text-white"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
