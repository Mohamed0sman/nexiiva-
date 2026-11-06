'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Shield, Trees, AlertOctagon } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ResponsibilitySectionProps {
  dict: Dict;
}

export function ResponsibilitySection({ dict }: ResponsibilitySectionProps) {
  const pillars = [
    {
      icon: Shield,
      title: 'Zero Personnel Hazard',
      desc: 'Trainees experience lethal high-pressure leaks, toxic H2S surges, and column runaways from the safety of an air-gapped simulation suite.',
    },
    {
      icon: Trees,
      title: 'Zero Environmental Flaring',
      desc: 'Mastering upset recovery sequences prevents emergency flare blowdowns, protecting local communities and reducing unnecessary carbon emissions.',
    },
    {
      icon: AlertOctagon,
      title: 'Capital Equipment Integrity',
      desc: 'Eliminates hydraulic shock, refractory thermal cracking, and tray displacement caused by improper emergency console valve handling.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#070912] overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            dict?.responsibility?.eyebrow || 'SAFETY & RESPONSIBILITY'
          }
          title={
            dict?.responsibility?.title ||
            'Safer plants start in the simulator.'
          }
          subtitle="Industrial responsibility is rooted in operational discipline. Practicing the worst day prevents the catastrophic day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0E111C] p-8 transition-all hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6D3BF0]/15 text-[#38BDF8]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#E9EAF4]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9A9CB3]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
