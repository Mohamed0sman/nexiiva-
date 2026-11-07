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
      pos: 'top-left',
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
      pos: 'top-right',
    },
    {
      id: '03',
      icon: GitBranch,
      title:
        dict?.solution?.nodes?.[2]?.title ||
        'Tailor it to your unit with its full logic',
      desc:
        dict?.solution?.nodes?.[2]?.desc ||
        'Faithfully reproduces your plant’s P&ID loops, control valve characteristics, and operating envelops.',
      pos: 'bottom-left',
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
      pos: 'bottom-right',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.solution?.eyebrow || 'الحل الهندسي'}
          title={
            dict?.solution?.title ||
            'منصة محاكاة متكاملة بُنيت للواقع الصناعي.'
          }
          subtitle={
            dict?.solution?.subtitle ||
            'الجمع بين دقة الحسابات الهيدروليكية والديناميكية وسهولة التدريب العملي لمشغلي الكونسول.'
          }
          align="center"
          theme="light"
        />

        {/* 4 Pillars Grid */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs transition-colors hover:border-slate-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#0A192F] leading-snug">
                      {node.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {node.desc}
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
