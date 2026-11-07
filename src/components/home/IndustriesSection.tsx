'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      image: '/assets/photos/industries/refining.jpg',
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
      image: '/assets/photos/industries/gas-processing.jpg',
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
      image: '/assets/photos/industries/petrochemicals.jpg',
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
      image: '/assets/photos/industries/training-academy.jpg',
      desc:
        dict?.industries?.items?.[3]?.desc ||
        'Undergraduate process dynamics education and vocational operator qualification academies.',
      units: 'Unit Operations Lab · Console Certification',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.industries?.eyebrow || 'SUPPORTED DOMAINS'}
          title={
            dict?.industries?.title ||
            'From one industrial unit to every process industry.'
          }
          subtitle={
            locale === 'ar'
              ? 'البداية من وحدات التكرير الحيوية مع التوسع نحو معالجة الغاز والبتروكيماويات.'
              : 'Starting from core refining units and scaling across gas processing and petrochemical complexes.'
          }
          theme="light"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-200 shadow-xs"
              >
                <div>
                  {/* Real Industrial Photography Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                    {/* Industrial Badge */}
                    <div className="absolute top-3 end-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-md ${
                          ind.isDelivered
                            ? 'bg-emerald-500/90 text-white'
                            : 'bg-slate-800/80 text-slate-200 border border-slate-600/50'
                        }`}
                      >
                        {ind.badge}
                      </span>
                    </div>

                    {/* Sector Icon in pill */}
                    <div className="absolute bottom-3 start-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#0A192F] shadow-sm backdrop-blur-xs">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#0A192F]">
                      {ind.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-[#1D4ED8] font-semibold block truncate">
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
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] hover:underline"
          >
            <span>
              {locale === 'ar'
                ? 'استعراض كافة القطاعات والوحدات الصناعية المدعومة'
                : 'Explore full industry coverage & unit catalog'}
            </span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
