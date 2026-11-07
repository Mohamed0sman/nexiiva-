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
    <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Big Navy Panel Container */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A192F] p-8 sm:p-12 lg:p-14 shadow-md">
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 font-mono-tag text-xs font-bold text-blue-300 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>{dict?.pilotSection?.eyebrow || '09 — PILOT PROGRAMME'}</span>
            </div>

            {/* Headline */}
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              {dict?.pilotSection?.title ||
                'Start with one unit.\nExpand across the facility.'}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {dict?.pilotSection?.subtitle ||
                'A structured, low-risk pilot program designed for plant operations and training leadership.'}
            </p>
          </div>

          {/* 3 Steps Row */}
          <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-slate-700/80 bg-[#0F2238] p-6 shadow-sm transition-colors hover:border-slate-600"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1D4ED8] font-mono-tag text-sm font-bold text-white shadow-sm">
                  0{item.step}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Callout & Action */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800 pt-8">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Building2 className="h-4 w-4 text-blue-400 shrink-0" />
              <span>
                {dict?.pilotSection?.distributionNote ||
                  'Strategic partnerships for regional distribution and operator training institutes.'}
              </span>
            </div>

            <Link
              href={`/${locale}/pilot`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1D4ED8] hover:bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-sm transition-colors shrink-0"
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
