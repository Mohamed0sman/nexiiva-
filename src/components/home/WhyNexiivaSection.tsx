'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Bot, Library, Timer, WifiOff } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface WhyNexiivaSectionProps {
  dict: Dict;
}

export function WhyNexiivaSection({ dict }: WhyNexiivaSectionProps) {
  const cards = [
    {
      icon: Bot,
      badge: 'PROMPT-TO-UNIT',
      title:
        dict?.whyNexiiva?.cards?.[0]?.title || 'AI Unit Builder',
      desc:
        dict?.whyNexiiva?.cards?.[0]?.desc ||
        'An AI agent builds the unit from an Arabic or English description, converting engineering documents into simulator logic.',
      accent: '#1D4ED8',
    },
    {
      icon: Library,
      badge: '387 VERIFIED MODELS',
      title:
        dict?.whyNexiiva?.cards?.[1]?.title || '387 Equipment Types',
      desc:
        dict?.whyNexiiva?.cards?.[1]?.desc ||
        'A library of 387 equipment types generates a full training project with accurate hydraulic and thermodynamic coupling.',
      accent: '#38BDF8',
    },
    {
      icon: Timer,
      badge: 'HONEST ROADMAP TARGET',
      title:
        dict?.whyNexiiva?.cards?.[2]?.title || 'Target: ~1 Week Build Time',
      desc:
        dict?.whyNexiiva?.cards?.[2]?.desc ||
        'Target build time: about one week per unit — to be measured on unit two.',
      accent: '#F59E0B',
    },
    {
      icon: WifiOff,
      badge: 'AIR-GAPPED COMPLIANCE',
      title:
        dict?.whyNexiiva?.cards?.[3]?.title || 'Offline Mode Needs No Internet',
      desc:
        dict?.whyNexiiva?.cards?.[3]?.desc ||
        'Offline mode needs no AI and no internet. Safe for highly regulated, air-gapped refinery and petrochemical networks.',
      accent: '#22C55E',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.whyNexiiva?.eyebrow || '04 — WHY NEXIIVA'}
          title={
            dict?.whyNexiiva?.title ||
            'Engineered for speed, security, and precision.'
          }
          subtitle="Combining automated model synthesis with air-gapped operational safety."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative rounded-xl border border-slate-200 bg-slate-50 p-7 transition-colors hover:border-slate-300 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono-tag text-[10px] font-bold tracking-wider uppercase text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded">
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0A192F]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
