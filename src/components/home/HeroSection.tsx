'use client';

import React from 'react';
import { Play, ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HeroSectionProps {
  locale: string;
  dict?: Dict;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const isAr = locale === 'ar';

  const pillText =
    dict?.hero?.eyebrow || (isAr ? 'محاكي تدريب على العمليات' : 'Process training simulator');
  const title1 = dict?.hero?.title || (isAr ? 'أخطاء أقل من المشغّلين.' : 'Fewer operator errors.');
  const titleBlue =
    dict?.hero?.titleBlue || (isAr ? 'أمان أكبر للناس. حماية للأرباح.' : 'Safer people. Protected profits.');
  const subtitle =
    dict?.hero?.subtitle ||
    (isAr
      ? 'نكسيفا محاكي تدريب على العمليات. يتدرّب المشغّلون على التشغيل والأعطال والإيقاف على وحدة افتراضية، فتحدث الأخطاء في التدريب وليس في المصنع الحقيقي.'
      : 'Nexiiva is a process training simulator. Operators practice start-ups, upsets and shutdowns on a virtual unit, so mistakes happen in training and not at the real plant.');

  const bookDemo = dict?.hero?.bookDemo || (isAr ? 'احجز عرضًا تجريبيًا' : 'Book a demo');
  const selectPlan = dict?.hero?.selectPlan || (isAr ? 'اختر خطتك' : 'Select your plan');
  const watchDemo = dict?.hero?.watchDemo || (isAr ? 'شاهد المحاكي' : 'Watch demo');

  const handleBookDemo = () => {
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('pl') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = 'Demo';
      }
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectPlan = () => {
    if (typeof window !== 'undefined') {
      const plansEl = document.getElementById('plans');
      if (plansEl) {
        plansEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWatchDemo = () => {
    if (typeof window !== 'undefined') {
      const demoEl = document.getElementById('demo');
      if (demoEl) {
        demoEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const proofPoints = isAr
    ? ['وحدة CDU/VDU جاهزة', 'مطابقة كاملة لـ DCS', 'تشغيل دون إنترنت', 'باللغتين العربية والإنجليزية']
    : ['CDU/VDU Ready', '1:1 DCS Console', '100% Offline Mode', 'Bilingual (AR/EN)'];

  return (
    <section
      id="home"
      className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 bg-[#f8fbfe] border-b border-[#e3e8ee] scroll-mt-20 overflow-hidden industrial-grid"
    >
      {/* Soft Ambient Radial Highlight */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headlines, Credibility & Actions */}
          <div className="flex flex-col items-start text-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c0e3f6] bg-[#e7faff]/90 px-3.5 py-1.5 text-xs font-mono font-semibold tracking-wider text-[#006aa8] uppercase mb-5 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0084d3] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0084d3]" />
              </span>
              <span>{pillText}</span>
            </div>

            {/* H1 Headline — Bold Grotesque Hierarchy */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-[#101622] leading-[1.14] mb-6">
              <span className="block">{title1}</span>
              <span className="block text-[#0084d3] mt-1.5 tracking-tight">{titleBlue}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#485460] leading-relaxed max-w-[58ch] mb-8 font-normal">
              {subtitle}
            </p>

            {/* CTAs Button Group */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={handleBookDemo}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0084d3] hover:bg-[#006fb3] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <span>{bookDemo}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={handleSelectPlan}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm sm:text-base font-semibold text-[#101622] bg-white border border-[#e3e8ee] hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs active:scale-[0.98]"
              >
                {selectPlan}
              </button>

              {/* Tertiary CTA */}
              <button
                type="button"
                onClick={handleWatchDemo}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm sm:text-base font-semibold text-[#101622] bg-white border border-[#e3e8ee] hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs active:scale-[0.98]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-50 text-[#0084d3]">
                  <Play className="w-3 h-3 fill-current ml-0.5 rtl:mr-0.5" />
                </div>
                <span>{watchDemo}</span>
              </button>
            </div>

            {/* Industrial Proof Markers */}
            <div className="pt-6 border-t border-[#e3e8ee] w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
              {proofPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Craft DCS Console Card */}
          <div className="w-full">
            <div className="relative bg-white border border-[#e3e8ee] rounded-[24px] p-5 sm:p-7 shadow-[0_12px_40px_-10px_rgba(16,22,34,0.08)] craft-card">
              
              {/* Chrome Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e3e8ee] mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bd7d] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00bd7d]" />
                  </span>
                  <span className="font-mono text-xs font-bold text-[#006aa8] tracking-wider uppercase">
                    CDU-101 Dynamic unit
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-amber-50 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-700 border border-amber-200">
                    1 ALARM ACTIVE
                  </span>
                </div>
              </div>

              {/* Distillation Process Schematic SVG */}
              <svg viewBox="0 0 300 310" className="w-full h-auto block select-none">
                <defs>
                  <marker
                    id="ah"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0 0 L6 3 L0 6 Z" fill="#0084d3" />
                  </marker>
                  <style>
                    {`
                      @keyframes alarmPulse {
                        0% { transform: scale(1); opacity: 0.8; }
                        100% { transform: scale(2.6); opacity: 0; }
                      }
                      .alarm-ring {
                        transform-origin: 215px 57px;
                        animation: alarmPulse 1.8s ease-out infinite;
                      }
                      @media (prefers-reduced-motion: reduce) {
                        .alarm-ring { animation: none; }
                      }
                    `}
                  </style>
                </defs>

                {/* Column Shell & Streams */}
                <g fill="none" stroke="#0084d3" strokeWidth="3">
                  <rect x="120" y="45" width="70" height="170" rx="35" fill="#f8fbfe" />
                  <path d="M155 45V18H225" markerEnd="url(#ah)" />
                  <path d="M190 100H260" markerEnd="url(#ah)" />
                  <path d="M30 160H120" markerEnd="url(#ah)" />
                  <path d="M155 215V240H225" markerEnd="url(#ah)" />
                </g>

                {/* Distillation Trays (Animated Flow Dash) */}
                <path
                  d="M132 95h46M132 120h46M132 145h46M132 170h46M132 195h46"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                  className="flow-dash"
                />

                {/* Process Labels */}
                <g fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="10" fill="#485460" fontWeight="500">
                  <text x="168" y="33">Overhead (V10)</text>
                  <text x="198" y="93">Kerosene</text>
                  <text x="30" y="150">Feed (TI-143)</text>
                  <text x="168" y="233">Residue (Btm)</text>
                </g>

                {/* HIGH LEVEL Alarm Indicator */}
                <rect x="132" y="48" width="70" height="18" rx="5" fill="#fef3c7" stroke="#f69d0b" strokeWidth="1" />
                <text
                  x="140"
                  y="61"
                  fontFamily="JetBrains Mono, ui-monospace, monospace"
                  fontSize="10"
                  fontWeight="700"
                  fill="#b45309"
                >
                  HIGH LEVEL
                </text>

                {/* Pulsing Alarm Beacon */}
                <circle className="alarm-ring" cx="215" cy="57" r="8" fill="#f69d0b" />
                <circle cx="215" cy="57" r="8" fill="#f69d0b" />

                {/* Real-time Dynamic Polyline Trend */}
                <polyline
                  points="30 285 80 280 130 282 170 268 215 272 280 262"
                  fill="none"
                  stroke="#0084d3"
                  strokeWidth="2.5"
                />
                <text
                  x="30"
                  y="298"
                  fontFamily="JetBrains Mono, ui-monospace, monospace"
                  fontSize="9.5"
                  fontWeight="600"
                  fill="#64748b"
                >
                  Trend PIC-101 (1.42 bar) · Stable Run
                </text>
              </svg>

              {/* Console Telemetry Bottom Bar */}
              <div className="flex justify-between items-center pt-3.5 border-t border-[#e3e8ee] text-xs font-mono">
                <span className="flex items-center gap-1.5 text-slate-500">
                  State: <b className="text-emerald-700 font-bold">Transient Test</b>
                </span>
                <span className="text-slate-400 font-medium">1:1 DCS Emulation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
