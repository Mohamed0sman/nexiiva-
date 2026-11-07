'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Clock, ArrowRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface InsightsSectionProps {
  locale: string;
  dict: Dict;
}

export function InsightsSection({ locale, dict }: InsightsSectionProps) {
  const articles = [
    {
      slug: 'why-operators-need-to-see-the-worst-day-before-it-happens',
      title:
        'Why Operators Need to See the Worst Day Before It Happens',
      summary:
        'Day one in the control room shouldn’t begin with "sit next to the senior". How high-fidelity training simulators turn unrepeatable emergencies into predictable procedural muscle memory.',
      date: 'Oct 15, 2026',
      readTime: '5 min read',
      author: 'Mostafa Adel',
      category: 'Process Safety',
    },
    {
      slug: 'what-an-ots-actually-trains-and-what-it-doesnt',
      title: 'What an OTS Actually Trains (and What It Doesn’t)',
      summary:
        'An Operator Training Simulator is not a video game, nor is it a CAD viewer. A technical teardown of thermodynamic fidelity, console ergonomics, and where OTS fits in plant commissioning.',
      date: 'Oct 28, 2026',
      readTime: '6 min read',
      author: 'Mohamed Osman',
      category: 'Engineering Insights',
    },
    {
      slug: 'offline-first-simulators-for-secure-plants',
      title: 'Offline-First Simulators for Secure Plants',
      summary:
        'Air-gapped petrochemical complexes cannot tolerate SaaS dependencies or external telemetry. Why offline-first architecture is non-negotiable for critical national infrastructure.',
      date: 'Nov 02, 2026',
      readTime: '4 min read',
      author: 'Gehad Ashraf',
      category: 'Cybersecurity & Deployment',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow={dict?.insights?.eyebrow || 'LATEST INSIGHTS'}
            title={
              dict?.insights?.title || 'Engineering perspectives & analysis.'
            }
            subtitle="Deep dives into control room human factors, dynamic modeling, and industrial simulation."
            className="mb-0"
            theme="light"
          />

          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 font-mono-tag text-xs font-bold text-[#1D4ED8] hover:underline shrink-0"
          >
            <span>{dict?.insights?.cta || 'View all articles'}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/insights/${item.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono-tag text-slate-500">
                  <span className="rounded bg-white border border-slate-200 px-2.5 py-0.5 text-[#1D4ED8] font-semibold">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#0A192F] group-hover:text-[#1D4ED8] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono-tag">
                <span className="text-slate-500">{item.author}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#1D4ED8] group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
