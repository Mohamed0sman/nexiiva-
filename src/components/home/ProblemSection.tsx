'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import { CountUp } from '@/components/CountUp';
import {
  Clock,
  UserX,
  TrendingUp,
  Flame,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ProblemSectionProps {
  dict: Dict;
}

export function ProblemSection({ dict }: ProblemSectionProps) {
  const [activeBeat, setActiveBeat] = useState(0);

  const beats = [
    {
      step: '01',
      icon: Clock,
      title:
        dict?.problem?.beats?.[0]?.title || 'Day one in the control room',
      desc:
        dict?.problem?.beats?.[0]?.desc ||
        "Screens, alarms, and 'sit next to the senior'. Observational learning without emergency repetitions.",
    },
    {
      step: '02',
      icon: TrendingUp,
      title: dict?.problem?.beats?.[1]?.title || 'The annual reality',
      desc:
        dict?.problem?.beats?.[1]?.desc ||
        'After a year, an operator has seen about 8 problems — 3 of them repeated. Critical upsets remain completely unpracticed.',
    },
    {
      step: '03',
      icon: UserX,
      title: dict?.problem?.beats?.[2]?.title || 'The senior is absent',
      desc:
        dict?.problem?.beats?.[2]?.desc ||
        'A problem never seen before hits: leak, fire, or emergency shutdown. Seconds of hesitation escalate into a full plant trip.',
    },
    {
      step: '04',
      icon: Flame,
      title: dict?.problem?.beats?.[3]?.title || 'The compounding cost',
      desc:
        dict?.problem?.beats?.[3]?.desc ||
        '7 days downtime ($70K) + equipment repairs ($50K) + off-spec penalties ($30K) = $150K lost from one small problem.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#070911] overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 start-0 h-96 w-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.problem?.eyebrow || '01 — THE PROBLEM'}
          title={
            dict?.problem?.title ||
            'The high cost of learning on a live process unit.'
          }
          subtitle="Conventional on-the-job training leaves console operators unprepared for low-frequency, catastrophic plant transients."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: 4 Beats Interactive Accordion/Step Story (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {beats.map((beat, index) => {
              const Icon = beat.icon;
              const isSelected = activeBeat === index;

              return (
                <div
                  key={beat.step}
                  onClick={() => setActiveBeat(index)}
                  className={`cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
                    isSelected
                      ? 'border-[#8B4CFF] bg-[#111422] shadow-[0_0_25px_rgba(109,59,240,0.2)]'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono-tag text-sm font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#6D3BF0] text-white shadow-md'
                          : 'bg-white/5 text-[#9A9CB3]'
                      }`}
                    >
                      {beat.step}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-base font-bold transition-colors ${
                            isSelected ? 'text-white' : 'text-[#E9EAF4]'
                          }`}
                        >
                          {beat.title}
                        </h3>
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            isSelected ? 'text-[#38BDF8]' : 'text-[#9A9CB3]'
                          }`}
                        />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#9A9CB3]">
                        {beat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Real Photo + Animated $150K Cost Buildup Bar (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Operator Control Room Photo */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <Image
                src="/assets/photos/operator-control-room.jpg"
                alt="Console Operator Monitoring Distributed Control System"
                width={700}
                height={460}
                className="h-auto w-full object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] via-transparent to-transparent opacity-80" />

              {/* Big Floating Impact Counter */}
              <div className="absolute bottom-4 inset-x-4 rounded-xl border border-white/15 bg-[#05060A]/90 p-4 backdrop-blur-md">
                <span className="font-mono-tag text-xs font-semibold uppercase text-red-400">
                  {dict?.problem?.statLabel || 'lost from one small problem'}
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold font-mono-tag text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-400">
                    <CountUp end={150} prefix="$" suffix="K" />
                  </span>
                  <span className="text-xs text-[#9A9CB3]">direct damage</span>
                </div>
              </div>
            </div>

            {/* Cost Buildup Breakdown Card */}
            <div className="rounded-xl border border-white/10 bg-[#0E111D] p-5">
              <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#E9EAF4]">
                Cost Buildup Breakdown
              </h4>

              <div className="mt-4 space-y-3">
                {/* 1. Downtime */}
                <div>
                  <div className="flex justify-between text-xs font-mono-tag text-[#E9EAF4]">
                    <span>7 Days Downtime</span>
                    <span className="text-[#38BDF8] font-bold">$70,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#3B6BFF] rounded-full w-[47%]" />
                  </div>
                </div>

                {/* 2. Equipment Repairs */}
                <div>
                  <div className="flex justify-between text-xs font-mono-tag text-[#E9EAF4]">
                    <span>Internal Refractory & Tray Repairs</span>
                    <span className="text-amber-400 font-bold">$50,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-full w-[33%]" />
                  </div>
                </div>

                {/* 3. Off-spec & Penalties */}
                <div>
                  <div className="flex justify-between text-xs font-mono-tag text-[#E9EAF4]">
                    <span>Off-spec Penalties & Flaring</span>
                    <span className="text-red-400 font-bold">$30,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#EF4444] rounded-full w-[20%]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono-tag text-xs">
                <span className="text-[#9A9CB3]">Cumulative Loss:</span>
                <span className="font-bold text-[#E9EAF4]">$150,000 total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
