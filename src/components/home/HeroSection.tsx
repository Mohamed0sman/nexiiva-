'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PidGrid } from '@/components/PidGrid';
import { LiveChip } from '@/components/LiveChip';
import { MonitorFrame } from '@/components/MonitorFrame';
import { Lightbox } from '@/components/Lightbox';
import {
  ArrowRight,
  Play,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HeroSectionProps {
  locale: string;
  dict: Dict;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#05060A]">
      {/* Background Image darkened with purple-to-blue gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/photos/hero-control-room.jpg"
          alt="Industrial Central Control Room Operations"
          fill
          priority
          className="object-cover object-center opacity-25 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/85 to-[#0A0B12]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6D3BF0]/20 via-transparent to-transparent" />
      </div>

      {/* Blueprint P&ID Grid with instrument bubbles */}
      <PidGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Sub, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8B4CFF]/30 bg-[#6D3BF0]/10 px-3.5 py-1.5 font-mono-tag text-xs font-bold tracking-[0.2em] text-[#8B4CFF] uppercase shadow-inner">
              <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{dict?.hero?.eyebrow || 'OPERATOR TRAINING SIMULATOR'}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#E9EAF4] sm:text-6xl xl:text-7xl leading-[1.08]">
              {dict?.hero?.title?.split('\n').map((line: string, i: number) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="brand-gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              )) || (
                <>
                  Real operations.
                  <span className="block brand-gradient-text">
                    Virtual experience.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#9A9CB3] leading-relaxed">
              {dict?.hero?.subtitle ||
                'Nexiiva turns your own process unit into a safe, realistic DCS-style training simulator — so operators face the worst day before it happens.'}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/pilot`}
                className="inline-flex items-center gap-2 rounded-xl brand-gradient px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(109,59,240,0.5)] transition-all duration-200 hover:shadow-[0_0_40px_rgba(109,59,240,0.7)] hover:brightness-110 active:scale-95"
              >
                <span>{dict?.hero?.primaryCta || 'Request a Pilot'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-[#E9EAF4] backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B4CFF]/30 text-[#38BDF8]">
                  <Play className="h-3 w-3 fill-current ms-0.5" />
                </div>
                <span>{dict?.hero?.secondaryCta || 'Watch the platform'}</span>
              </button>
            </div>

            {/* Quick factual highlights */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[#9A9CB3] font-mono-tag">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                <span>100% Offline Air-Gapped Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                <span>Bilingual (EN / AR) Console</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                <span>12 Live Dynamic Trends</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Monitor Frame with Orbiting Live Chips */}
          <div className="relative lg:col-span-5 flex justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#6D3BF0]/25 via-[#3B6BFF]/20 to-[#38BDF8]/20 blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-lg">
              {/* Floating Orbiting Live Data Chips */}
              <div className="absolute -top-5 -start-4 z-20">
                <LiveChip
                  tag="TIC102"
                  initialValue={361.8}
                  unit="°C"
                  status="ok"
                  driftRange={0.3}
                />
              </div>

              <div className="absolute top-1/4 -end-5 z-20 hidden sm:block">
                <LiveChip
                  tag="PIC101"
                  initialValue={1.42}
                  unit="bar"
                  status="ok"
                  driftRange={0.03}
                />
              </div>

              <div className="absolute -bottom-4 start-8 z-20">
                <LiveChip
                  tag="FIC104"
                  initialValue={142.4}
                  unit="m³/h"
                  status="ok"
                  driftRange={0.4}
                />
              </div>

              {/* Real Screenshot inside industrial monitor frame */}
              <MonitorFrame
                src="/assets/screens/cdu-atm-column-pfd.png"
                alt="Atmospheric Distillation Column PFD Console"
                title="CDU-101 ATM COLUMN · PFD CONSOLE"
                caption={
                  dict?.hero?.floatingCaption ||
                  'Atmospheric Crude Distillation (CDU) — Dynamic Process Console'
                }
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 mt-8 flex justify-center text-[#9A9CB3]">
        <a
          href="#trust-strip"
          className="flex flex-col items-center gap-1 font-mono-tag text-[10px] uppercase tracking-widest text-[#9A9CB3] hover:text-[#38BDF8] transition-colors"
        >
          <span>Scroll to inspect platform</span>
          <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>

      {/* Video Lightbox Placeholder */}
      <Lightbox
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        src="/assets/screens/cdu-atm-column-pfd.png"
        alt="Nexiiva Platform Walkthrough"
        title="Nexiiva Operator Training Simulator Walkthrough"
        caption="[Platform Demonstration Video — High-fidelity DCS emulator in action on an atmospheric crude column]"
      />
    </section>
  );
}
