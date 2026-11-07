'use client';

import React from 'react';
import Link from 'next/link';
import { NexiivaLogo } from '@/components/NexiivaLogo';
import { ArrowRight, Mail } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface FinalCtaSectionProps {
  locale: string;
  dict: Dict;
}

export function FinalCtaSection({ locale, dict }: FinalCtaSectionProps) {
  return (
    <section className="relative py-20 bg-[#0A192F] overflow-hidden text-center border-t border-slate-800">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <NexiivaLogo variant="light" className="h-9 w-auto mb-6" />

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
          {dict?.finalCta?.title ||
            'Let’s make OTS accessible to every industrial unit.'}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl">
          {dict?.finalCta?.subtitle ||
            'Join us in changing the future of industrial training. Start with a focused unit pilot deployed directly at your facility.'}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-lg bg-[#1D4ED8] hover:bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-colors active:scale-95"
          >
            <span>{dict?.finalCta?.requestPilot || 'Request a Pilot'}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/60 hover:bg-slate-800 hover:border-slate-500 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors active:scale-95"
          >
            <Mail className="h-4 w-4 text-blue-400" />
            <span>{dict?.finalCta?.contactUs || 'Contact Us'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
