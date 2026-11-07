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
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 shadow-sm">
          <Quote className="h-12 w-12 text-blue-200" />

          {/* Dev mode placeholder banner if applicable */}
          {isDev && (
            <div className="mb-4 inline-flex items-center gap-1.5 rounded bg-amber-50 px-2 py-0.5 font-mono-tag text-[10px] font-bold text-amber-700 border border-amber-200">
              <span>[CEO Quote — Pending final sign-off]</span>
            </div>
          )}

          {/* Quote Body */}
          <blockquote className="mt-4 text-xl sm:text-2xl lg:text-3xl font-medium text-[#0A192F] leading-relaxed tracking-tight">
            &ldquo;
            {dict?.leadership?.quote ||
              'Our mission is to ensure every control room technician has faced their worst-case emergency hundreds of times in simulation before ever touching live valves.'}
            &rdquo;
          </blockquote>

          {/* Founder Profile Details */}
          <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#1D4ED8] shadow-sm">
                <Image
                  src="/assets/team/mostafa-adel.jpg"
                  alt="Mostafa Adel, Founder & CEO"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover aspect-square"
                />
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0A192F]">
                  {dict?.leadership?.author || 'Mostafa Adel'}
                </h4>
                <p className="text-xs text-slate-500 font-mono-tag">
                  {dict?.leadership?.role || 'Founder & CEO, Nexiiva'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 font-mono-tag text-xs text-slate-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
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
