import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Fuel,
  Flame,
  Atom,
  GraduationCap,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'القطاعات الصناعية' : 'Industries Served',
    description:
      'Refining, Gas Processing, Petrochemicals, and Technical Institutes. Pre-engineered operational failure scenarios.',
  };
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const industries = [
    {
      id: 'refining',
      name: 'Petroleum Refining',
      badge: 'DELIVERED TODAY (CDU / VDU)',
      isDelivered: true,
      icon: Fuel,
      desc:
        'Crude distillation units (CDU), vacuum flasher columns (VDU), and complex preheat trains are the heart of primary oil refining. Nexiiva provides complete 1:1 dynamic fidelity for atmospheric fractionation.',
      scenarios: [
        { name: 'Reflux Loss', impact: 'Top column temperature surge, vapor carry-over into naphtha rundown, tray drying.' },
        { name: 'Vacuum Loss', impact: 'Column overpressure, thermal cracking in bottoms, relief valve lifting hazard.' },
        { name: 'Charge Pump Trip (P-101)', impact: 'Feed starvation, furnace coil overheating, severe hydraulic imbalance.' },
        { name: 'Furnace Flameout (H-101)', impact: 'Emergency shutdown (ESD), column rapid cooling, fraction segregation breakdown.' },
      ],
    },
    {
      id: 'gas',
      name: 'Natural Gas Processing',
      badge: 'ROADMAP',
      isDelivered: false,
      icon: Flame,
      desc:
        'Gas dehydration units (TEG contactors), amine sweetening towers for H2S/CO2 removal, and cryogenic NGL recovery trains require precision control of thermodynamic vapor-liquid-solid hydrate equilibria.',
      scenarios: [
        { name: 'Amine Reboiler Tube Rupture', impact: 'Loss of stripping duty, off-spec sour sales gas export, thermal surge.' },
        { name: 'TEG Circulation Loss', impact: 'Moisture breakthrough, downstream pipeline freezing, hydrate plug hazard.' },
        { name: 'Molecular Sieve Bed Switching Shock', impact: 'Hydraulic dusting, bed channeling, pressure spike on dry gas headers.' },
        { name: 'Cryogenic Expander Trip', impact: 'Fractionation column flooding, off-spec LNG production, flare venting.' },
      ],
    },
    {
      id: 'petrochem',
      name: 'Petrochemicals & Polymers',
      badge: 'ROADMAP',
      isDelivered: false,
      icon: Atom,
      desc:
        'Steam cracking furnaces, quench water loops, ethylene/propylene splitters, and polymerization reactors operating under tight kinetic constraints and extreme flammability envelopes.',
      scenarios: [
        { name: 'Dilution Steam Trip', impact: 'Rapid coil coking in cracking furnace, high tube metal temperature (TMT) alarms.' },
        { name: 'Splitter Reboiler Fouling', impact: 'Loss of polymer-grade purity, off-spec recycles, accumulator overpressure.' },
        { name: 'Polymerization Reactor Exotherm Runaway', impact: 'Rapid pressure ramp, inhibitor dump activation, flare burst disc rupture.' },
        { name: 'Quench Tower Bottoms Strainer Plugging', impact: 'Loss of quench circulation, overhead gas overheating, downstream compressor trip.' },
      ],
    },
    {
      id: 'education',
      name: 'Technical Institutes & Universities',
      badge: 'ROADMAP',
      isDelivered: false,
      icon: GraduationCap,
      desc:
        'Hands-on vocational laboratories and chemical engineering faculties requiring safe, repeatable DCS console practice for undergraduate students and apprentice plant operators.',
      scenarios: [
        { name: 'Normal Plant Start-Up Protocol', impact: 'Step-by-step cold circulation, furnace light-off, and column warm-up sequence.' },
        { name: 'Scheduled Unit Shutdown & Depressurization', impact: 'Controlled feed cut, steam purge, nitrogen blanket maintenance.' },
        { name: 'Instrument Cascade Loop Tuning', impact: 'Analyzing proportional-integral-derivative (PID) response to step upsets.' },
        { name: 'First-Hour Console Operator Orientation', impact: 'Navigating faceplates, reading multi-pen trends, acknowledging alarm priority.' },
      ],
    },
  ];

  return (
    <div className="py-24 bg-[#05060A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="INDUSTRIES & SCENARIOS"
          title="Engineered for Process Industries"
          subtitle="Delivered today for crude distillation; expanding across the downstream and petrochemical value chain."
        />

        <div className="mt-16 space-y-16">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className={`rounded-3xl border p-8 lg:p-12 transition-all ${
                  ind.isDelivered
                    ? 'border-[#8B4CFF] bg-[#0E111E] shadow-[0_0_40px_rgba(109,59,240,0.15)]'
                    : 'border-white/10 bg-[#0A0D18]'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6D3BF0]/20 text-[#38BDF8]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {ind.name}
                      </h2>
                      <p className="mt-1 font-mono-tag text-xs text-[#8B4CFF]">
                        {ind.badge}
                      </p>
                    </div>
                  </div>

                  {ind.isDelivered ? (
                    <Link
                      href={`/${locale}/pilot`}
                      className="inline-flex items-center gap-2 rounded-xl brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-md hover:brightness-110"
                    >
                      <span>Request a Refining Pilot</span>
                      <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                    </Link>
                  ) : (
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono-tag text-xs text-[#9A9CB3]">
                      In Engineering Roadmap
                    </span>
                  )}
                </div>

                <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#9A9CB3] max-w-4xl">
                  {ind.desc}
                </p>

                {/* Pre-engineered emergency scenarios table */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#E9EAF4] flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />
                    Typical Emergency & Operational Upsets Trained:
                  </h3>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ind.scenarios.map((sc, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/5 bg-[#05060A]/60 p-4"
                      >
                        <span className="font-mono-tag text-xs font-bold text-[#38BDF8] block">
                          {sc.name}
                        </span>
                        <p className="mt-1 text-xs text-[#9A9CB3] leading-relaxed">
                          {sc.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
