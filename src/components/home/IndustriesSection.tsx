'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Fuel, Flame, Atom, GraduationCap, ArrowRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface IndustriesSectionProps {
  locale: string;
  dict: Dict;
}

export function IndustriesSection({ locale, dict }: IndustriesSectionProps) {
  const industries = [
    {
      name: dict?.industries?.items?.[0]?.name || 'Refining',
      badge: dict?.industries?.items?.[0]?.badge || 'Delivered Today',
      isDelivered: true,
      icon: Fuel,
      desc:
        dict?.industries?.items?.[0]?.desc ||
        'Atmospheric crude distillation (CDU), vacuum distillation (VDU), and preheat train integration with full DCS dynamics.',
      units: 'CDU · VDU · Preheat Train · Stabilizer',
    },
    {
      name: dict?.industries?.items?.[1]?.name || 'Gas Processing',
      badge: dict?.industries?.items?.[1]?.badge || 'Roadmap',
      isDelivered: false,
      icon: Flame,
      desc:
        dict?.industries?.items?.[1]?.desc ||
        'Gas dehydration units, acid gas removal (amine contactors), and NGL fractionation trains.',
      units: 'TEG Dehydration · Amine Treating · De-ethanizer',
    },
    {
      name: dict?.industries?.items?.[2]?.name || 'Petrochemicals',
      badge: dict?.industries?.items?.[2]?.badge || 'Roadmap',
      isDelivered: false,
      icon: Atom,
      desc:
        dict?.industries?.items?.[2]?.desc ||
        'Steam cracking furnaces, quench towers, ethylene distillation, and polymer reactor loops.',
      units: 'Cracking Furnace · C2/C3 Splitters · Polyethylene',
    },
    {
      name: dict?.industries?.items?.[3]?.name || 'Technical Institutes & Universities',
      badge: dict?.industries?.items?.[3]?.badge || 'Roadmap',
      isDelivered: false,
      icon: GraduationCap,
      desc:
        dict?.industries?.items?.[3]?.desc ||
        'Undergraduate process dynamics education and vocational operator qualification academies.',
      units: 'Unit Operations Lab · Console Certification',
    },
  ];

  return (
    <section className="relative py-24 bg-[#070912] overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.industries?.eyebrow || '07 — INDUSTRIES'}
          title={
            dict?.industries?.title ||
            'From one industrial unit to every process industry.'
          }
          subtitle="Starting with critical distillation units and expanding into gas treatment and chemical synthesis."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className={`relative flex flex-col justify-between rounded-xl border p-6 transition-all duration-300 ${
                  ind.isDelivered
                    ? 'border-[#8B4CFF] bg-[#111424] shadow-[0_0_30px_rgba(109,59,240,0.25)]'
                    : 'border-white/10 bg-[#0E111D] opacity-90 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        ind.isDelivered
                          ? 'bg-[#6D3BF0]/25 text-[#38BDF8]'
                          : 'bg-white/5 text-[#9A9CB3]'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className={`rounded px-2 py-0.5 font-mono-tag text-[10px] font-bold uppercase ${
                        ind.isDelivered
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-white/10 text-[#9A9CB3]'
                      }`}
                    >
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#E9EAF4]">
                    {ind.name}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#9A9CB3] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono-tag text-[10px] text-[#8B4CFF] block truncate">
                    {ind.units}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/industries`}
            className="inline-flex items-center gap-2 font-mono-tag text-xs font-semibold text-[#8B4CFF] hover:text-[#38BDF8] transition-colors"
          >
            <span>Explore full industry coverage & unit catalog</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
