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
    <section className="relative py-24 bg-[#05060A] overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.solutions?.eyebrow || '06 — SOLUTIONS'}
          title={
            dict?.solutions?.title || 'Comprehensive simulation infrastructure.'
          }
          subtitle="Engineered modules designed to integrate with your existing plant operations curriculum."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#0E111D] p-6 transition-all duration-300 hover:border-[#8B4CFF] hover:shadow-[0_0_30px_rgba(109,59,240,0.2)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#38BDF8] transition-all duration-300 group-hover:bg-[#6D3BF0]/20 group-hover:text-[#8B4CFF]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#E9EAF4] group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#9A9CB3] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 font-mono-tag text-xs font-semibold text-[#38BDF8] hover:underline"
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
