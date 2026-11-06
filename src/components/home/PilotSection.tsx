'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface PilotSectionProps {
  locale: string;
  dict: Dict;
}

export function PilotSection({ locale, dict }: PilotSectionProps) {
  const steps = [
    {
      step: '1',
      title:
        dict?.pilotSection?.steps?.[0]?.title || 'Direct Site Engagement',
      desc:
        dict?.pilotSection?.steps?.[0]?.desc ||
        'Technical scoping session with plant operations and training leadership to define unit boundaries and critical operating scenarios.',
    },
    {
      step: '2',
      title:
        dict?.pilotSection?.steps?.[1]?.title || 'Paid Pilot for One Process Unit',
      desc:
        dict?.pilotSection?.steps?.[1]?.desc ||
        'Rapid build and validation of a single critical unit simulator (e.g. atmospheric column or preheat train) tailored to your exact operating envelope.',
    },
    {
      step: '3',
      title:
        dict?.pilotSection?.steps?.[2]?.title || 'Land & Expand Across Facility',
      desc:
        dict?.pilotSection?.steps?.[2]?.desc ||
        'Validate operator training outcomes on the console, then systematically expand unit-by-unit across your entire refining or petrochemical complex.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#070912] overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Big Gradient Panel Container */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#12162A] via-[#0E1120] to-[#080A14] p-8 sm:p-12 lg:p-16 shadow-[0_0_80px_rgba(109,59,240,0.15)]">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 end-0 h-96 w-96 rounded-full bg-[#6D3BF0]/20 blur-[130px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8B4CFF]/40 bg-[#6D3BF0]/15 px-3.5 py-1 font-mono-tag text-xs font-bold text-[#A87FFB] uppercase">
              <Sparkles className="h-3.5 w-3.5 text-[#38BDF8]" />
              <span>{dict?.pilotSection?.eyebrow || '09 — PILOT PROGRAMME'}</span>
            </div>

            {/* Headline */}
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#E9EAF4] sm:text-5xl leading-tight">
              {dict?.pilotSection?.title ||
                'Start with one unit.\nExpand across the facility.'}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-[#9A9CB3] leading-relaxed">
              {dict?.pilotSection?.subtitle ||
                'A structured, low-risk pilot program designed for plant operations and training leadership.'}
            </p>
          </div>

          {/* 3 Steps Row */}
          <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-[#070912]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient font-mono-tag text-sm font-bold text-white shadow-md">
                  0{item.step}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#E9EAF4]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#9A9CB3]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Callout & Action */}
          <div className="relative z-10 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-xs text-[#9A9CB3]">
              <Building2 className="h-4 w-4 text-[#38BDF8] shrink-0" />
              <span>
                {dict?.pilotSection?.distributionNote ||
                  'Strategic partnerships for regional distribution and operator training institutes.'}
              </span>
            </div>

            <Link
              href={`/${locale}/pilot`}
              className="inline-flex items-center gap-2 rounded-xl brand-gradient px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(109,59,240,0.4)] transition-all duration-200 hover:brightness-110 active:scale-95 shrink-0"
            >
              <span>{dict?.pilotSection?.cta || 'Request a Pilot'}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
