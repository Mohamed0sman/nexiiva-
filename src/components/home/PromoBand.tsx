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
    <div className="relative z-50 flex items-center justify-between border-b border-slate-800 bg-[#0A192F] px-4 py-2 text-xs text-slate-200">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center gap-1 rounded bg-blue-600/30 px-2 py-0.5 font-mono-tag text-[10px] font-bold text-blue-300 uppercase">
          <Sparkles className="h-3 w-3 text-blue-400" />
          PILOT 2026
        </span>
        <span className="font-medium text-slate-200">
          {dict?.announcement?.text ||
            'Pilot programme open — train on your own unit in ~1 week of build time'}
        </span>
        <Link
          href={`/${locale}/pilot`}
          className="inline-flex items-center gap-1 font-semibold text-blue-300 hover:underline"
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
