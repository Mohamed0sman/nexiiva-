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
    <section className="relative py-28 bg-[#05060A] overflow-hidden text-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-r from-[#6D3BF0]/20 via-[#8B4CFF]/20 to-[#3B6BFF]/20 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <NexiivaLogo variant="light" className="h-9 w-auto mb-8" />

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#E9EAF4] leading-tight">
          {dict?.finalCta?.title ||
            'Let’s make OTS accessible to every industrial unit.'}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#9A9CB3] max-w-xl">
          {dict?.finalCta?.subtitle ||
            'Join us in changing the future of industrial training. Start with a focused unit pilot deployed directly at your facility.'}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-xl brand-gradient px-8 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(109,59,240,0.5)] transition-all duration-200 hover:brightness-110 active:scale-95"
          >
            <span>{dict?.finalCta?.requestPilot || 'Request a Pilot'}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-[#E9EAF4] backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
          >
            <Mail className="h-4 w-4 text-[#38BDF8]" />
            <span>{dict?.finalCta?.contactUs || 'Contact Us'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
