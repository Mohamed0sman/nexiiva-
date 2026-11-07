'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Layers,
  ShieldAlert,
  GitBranch,
  DollarSign,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface SolutionSectionProps {
  dict: Dict;
}

export function SolutionSection({ dict }: SolutionSectionProps) {
  const nodes = [
    {
      id: '01',
      icon: Layers,
      title:
        dict?.solution?.nodes?.[0]?.title ||
        'A simulation platform for industrial units',
      desc:
        dict?.solution?.nodes?.[0]?.desc ||
        'Full-spectrum dynamic simulation designed specifically for refining and process facilities.',
    },
    {
      id: '02',
      icon: ShieldAlert,
      title:
        dict?.solution?.nodes?.[1]?.title ||
        'Let operators practice real-world scenarios safely',
      desc:
        dict?.solution?.nodes?.[1]?.desc ||
        'Face extreme process trips and equipment failures without risking personnel, environment, or asset integrity.',
    },
    {
      id: '03',
      icon: GitBranch,
      title:
        dict?.solution?.nodes?.[2]?.title ||
        'Tailor it to your unit with its full logic',
      desc:
        dict?.solution?.nodes?.[2]?.desc ||
        'Faithfully reproduces your plant’s P&ID loops, control valve characteristics, and operating envelopes.',
    },
    {
      id: '04',
      icon: DollarSign,
      title:
        dict?.solution?.nodes?.[3]?.title ||
        'A cost-effective solution',
      desc:
        dict?.solution?.nodes?.[3]?.desc ||
        'Dramatically reduces traditional simulator costs and build timelines with streamlined engineering.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A192F] text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.solution?.eyebrow || 'ENGINEERING SOLUTION'}
          title={
            dict?.solution?.title ||
            'A simulation platform built for industrial reality.'
          }
          subtitle={
            dict?.solution?.subtitle ||
            'Connecting dynamic thermodynamic rigor with accessible console operator training.'
          }
          align="center"
          theme="dark"
        />

        {/* 4 Clean Engineering Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-200 hover:border-blue-500/50"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/40">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {node.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
