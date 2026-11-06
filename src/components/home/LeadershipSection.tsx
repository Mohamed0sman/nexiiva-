'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, ShieldCheck } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface LeadershipSectionProps {
  dict: Dict;
}

export function LeadershipSection({ dict }: LeadershipSectionProps) {
  const isDev = process.env.NODE_ENV !== 'production';

  return (
    <section className="relative py-24 bg-[#05060A] overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/10 bg-[#0E111E] p-8 sm:p-12 lg:p-14 shadow-2xl">
          <Quote className="h-12 w-12 text-[#6D3BF0]/30" />

          {/* Dev mode placeholder banner if applicable */}
          {isDev && (
            <div className="mb-4 inline-flex items-center gap-1.5 rounded bg-amber-500/10 px-2 py-0.5 font-mono-tag text-[10px] font-bold text-amber-400 border border-amber-500/20">
              <span>[CEO Quote — Pending final sign-off]</span>
            </div>
          )}

          {/* Quote Body */}
          <blockquote className="mt-4 text-xl sm:text-2xl lg:text-3xl font-medium text-[#E9EAF4] leading-relaxed tracking-tight">
            &ldquo;
            {dict?.leadership?.quote ||
              'Our mission is to ensure every control room technician has faced their worst-case emergency hundreds of times in simulation before ever touching live valves.'}
            &rdquo;
          </blockquote>

          {/* Founder Profile Details */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#8B4CFF] shadow-lg">
                <Image
                  src="/assets/team/mostafa-adel.jpg"
                  alt="Mostafa Adel, Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-base font-bold text-white">
                  {dict?.leadership?.author || 'Mostafa Adel'}
                </h4>
                <p className="text-xs text-[#9A9CB3] font-mono-tag">
                  {dict?.leadership?.role || 'Founder & CEO, Nexiiva'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono-tag text-xs text-[#38BDF8]">
              <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
              <span>
                {dict?.leadership?.note ||
                  'Committed to Operational Excellence & Plant Safety'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
