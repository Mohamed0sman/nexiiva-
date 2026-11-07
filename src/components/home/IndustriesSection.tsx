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
    <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.industries?.eyebrow || 'القطاعات الصناعية المدعومة'}
          title={
            dict?.industries?.title ||
            'من وحدة تقطير واحدة إلى كافة العمليات الصناعية.'
          }
          subtitle="البداية من وحدات التكرير الحيوية مع التوسع نحو معالجة الغاز والبتروكيماويات."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className={`relative flex flex-col justify-between rounded-xl border p-6 transition-all duration-200 ${
                  ind.isDelivered
                    ? 'border-slate-300 bg-white shadow-xs'
                    : 'border-slate-200/90 bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                        ind.isDelivered
                          ? 'bg-blue-50 text-[#1D4ED8]'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        ind.isDelivered
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0A192F]">
                    {ind.name}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <span className="font-mono-tag text-[11px] text-[#1D4ED8] font-semibold block truncate">
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
            className="inline-flex items-center gap-2 font-mono-tag text-xs font-semibold text-[#1D4ED8] hover:underline"
          >
            <span>Explore full industry coverage & unit catalog</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
