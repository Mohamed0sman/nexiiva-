'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Monitor, Cpu, Sliders, Award, ArrowRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface SolutionsSectionProps {
  locale: string;
  dict: Dict;
}

export function SolutionsSection({ locale, dict }: SolutionsSectionProps) {
  const solutions = [
    {
      id: 'ots',
      icon: Monitor,
      title:
        dict?.solutions?.items?.[0]?.title || 'Operator Training Simulator',
      desc:
        dict?.solutions?.items?.[0]?.desc ||
        'DCS-authentic console simulator with multi-trend monitoring, high-precision thermodynamic balances, and real DCS faceplates.',
      link: `/${locale}/solutions#ots`,
    },
    {
      id: 'builder',
      icon: Cpu,
      title:
        dict?.solutions?.items?.[1]?.title || 'AI Unit Builder (OTS Builder)',
      desc:
        dict?.solutions?.items?.[1]?.desc ||
        'Automated model generation pipeline converting P&IDs, mass-energy balances, and operating envelopes into simulation units.',
      link: `/${locale}/solutions#builder`,
    },
    {
      id: 'console',
      icon: Sliders,
      title:
        dict?.solutions?.items?.[2]?.title || 'Instructor Console',
      desc:
        dict?.solutions?.items?.[2]?.desc ||
        'Supervisory fault injection platform enabling training leads to inject complex multi-variable transients and freeze scenarios.',
      link: `/${locale}/solutions#console`,
    },
    {
      id: 'certification',
      icon: Award,
      title:
        dict?.solutions?.items?.[3]?.title || 'Scoring & Certification',
      desc:
        dict?.solutions?.items?.[3]?.desc ||
        'Granular procedural evaluation engine that scores operator reaction latency, safety envelope adherence, and SOP compliance.',
      link: `/${locale}/solutions#certification`,
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.solutions?.eyebrow || '06 — SOLUTIONS'}
          title={
            dict?.solutions?.title || 'Comprehensive simulation infrastructure.'
          }
          subtitle="Engineered modules designed to integrate with your existing plant operations curriculum."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300 shadow-sm"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0A192F]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 font-mono-tag text-xs font-semibold text-[#1D4ED8] hover:underline"
                  >
                    <span>Read more</span>
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
