'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { CheckCircle2, Wrench, Rocket } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface JourneySectionProps {
  dict: Dict;
}

export function JourneySection({ dict }: JourneySectionProps) {
  const milestones = [
    {
      status: 'done',
      icon: CheckCircle2,
      badge: 'VALIDATED MILESTONE',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      title:
        dict?.journey?.items?.[0]?.title ||
        'A Working CDU/VDU Training Unit, Built and Tested',
      desc:
        dict?.journey?.items?.[0]?.desc ||
        'Built and validated a full dynamic atmospheric distillation and preheat train model with authentic DCS console screens and 12 live trends.',
      details: 'CDU/VDU Process Simulator Operational',
    },
    {
      status: 'in_progress',
      icon: Wrench,
      badge: 'IN ACTIVE DEVELOPMENT',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
      title:
        dict?.journey?.items?.[1]?.title ||
        'OTS Builder Under Development',
      desc:
        dict?.journey?.items?.[1]?.desc ||
        'Engineering the automated unit generation pipeline. Second process unit scheduled to empirically measure and validate real build time.',
      details: 'Unit 2 Benchmark Scheduled',
    },
    {
      status: 'done',
      icon: CheckCircle2,
      badge: 'MARKET BENCHMARK COMPLETE',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      title:
        dict?.journey?.items?.[2]?.title ||
        'Commercial Benchmarking Completed',
      desc:
        dict?.journey?.items?.[2]?.desc ||
        'Approached major international OTS providers and evaluated preliminary market quotations to confirm our high-margin, disruptive positioning.',
      details: 'Competitive Pricing Envelope Verified',
    },
    {
      status: 'next',
      icon: Rocket,
      badge: 'PRE-REVENUE · NEXT STAGE',
      badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
      title:
        dict?.journey?.items?.[3]?.title ||
        'Pre-Revenue Stage — Preparing Initial Pilot Deployments',
      desc:
        dict?.journey?.items?.[3]?.desc ||
        'Transparently pre-revenue. Preparing initial industrial pilot deployments and direct commercial entry with refineries across Egypt and the GCC.',
      details: 'Paid Pilot Program Open',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.journey?.eyebrow || '08 — OUR JOURNEY'}
          title={dict?.journey?.title || 'Milestones and roadmap.'}
          subtitle={
            dict?.journey?.subtitle ||
            'Honest progression from core engineering to industrial pilot deployment. Plainly pre-revenue and focused on execution.'
          }
          theme="light"
        />

        {/* Timeline Cards Container */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical Connecting Hairline Rule */}
          <div className="absolute top-4 bottom-4 start-6 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-6">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start gap-6 rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300 shadow-sm"
                >
                  {/* Status Icon Indicator */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm">
                    <Icon
                      className={`h-6 w-6 ${
                        item.status === 'done'
                          ? 'text-emerald-600'
                          : item.status === 'in_progress'
                          ? 'text-amber-600'
                          : 'text-[#1D4ED8]'
                      }`}
                    />
                  </div>

                  {/* Milestone Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center rounded-md border px-2.5 py-0.5 font-mono-tag text-[10px] font-bold uppercase ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                      <span className="font-mono-tag text-xs text-slate-500">
                        {item.details}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-[#0A192F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
