'use client';

import React from 'react';
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

  return (
    <section id="home" className="pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#f8fbfe] border-b border-[#e3e8ee] scroll-mt-20">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c0e3f6] bg-[#e7faff] px-4 py-1.5 text-xs font-mono font-semibold tracking-wider text-[#006aa8] uppercase mb-4">
              <span className="h-2 w-2 rounded-full bg-[#0084d3]" />
              <span>{pillText}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight text-[#101622] leading-[1.15] mb-5">
              <span>{title1}</span>
              <span className="block text-[#0084d3] mt-1">{titleBlue}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#485460] leading-relaxed max-w-[62ch] mb-8 font-normal">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary: Book a Demo */}
              <button
                type="button"
                onClick={handleBookDemo}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold text-white bg-[#0084d3] hover:bg-[#006fb3] transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
              >
                {bookDemo}
              </button>

              {/* Secondary: Select Your Plan */}
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold text-[#101622] bg-white border border-[#e3e8ee] hover:bg-slate-50 transition-colors shadow-xs"
              >
                {selectPlan}
              </a>

              {/* Tertiary: Watch Demo */}
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-base font-semibold text-[#101622] bg-white border border-[#e3e8ee] hover:bg-slate-50 transition-colors shadow-xs"
              >
                <svg
                  className="w-4 h-4 text-[#0084d3] rtl:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                </svg>
                <span>{watchDemo}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Process Distillation Schematic Card */}
          <div className="w-full">
            <div className="bg-white border border-[#e3e8ee] rounded-[22px] p-6 shadow-[0_8px_30px_rgba(16,22,34,0.06)]">
              {/* Card Header */}
              <div className="flex justify-between items-center pb-3.5 border-b border-[#e3e8ee] mb-2 text-[#8a94a3] text-sm">
                <span className="text-[#006aa8] flex items-center gap-2 font-semibold font-mono">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00bd7d] animate-pulse" />
                  CDU-101 Dynamic unit
                </span>
                <span className="text-xs font-mono font-medium">Alarms</span>
              </div>

              {/* SVG Schematic */}
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

                {/* Column Body & Piping */}
                <g fill="none" stroke="#0084d3" strokeWidth="3">
                  <rect x="120" y="45" width="70" height="170" rx="35" fill="#f8fbfe" />
                  <path d="M155 45V18H225" markerEnd="url(#ah)" />
                  <path d="M190 100H260" markerEnd="url(#ah)" />
                  <path d="M30 160H120" markerEnd="url(#ah)" />
                  <path d="M155 215V240H225" markerEnd="url(#ah)" />
                </g>

                {/* Distillation Trays */}
                <path
                  d="M132 95h46M132 120h46M132 145h46M132 170h46M132 195h46"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                />

                {/* Stream Labels */}
                <g fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="10" fill="#485460">
                  <text x="168" y="33">Overhead (V10)</text>
                  <text x="198" y="93">Kerosene</text>
                  <text x="30" y="150">Feed (TI-143)</text>
                  <text x="168" y="233">Residue (Btm)</text>
                </g>

                {/* High Level Alarm Badge */}
                <rect x="132" y="48" width="70" height="18" rx="5" fill="#fef3c7" stroke="#f69d0b" />
                <text
                  x="140"
                  y="61"
                  fontFamily="JetBrains Mono, ui-monospace, monospace"
                  fontSize="10"
                  fontWeight="600"
                  fill="#b45309"
                >
                  HIGH LEVEL
                </text>

                {/* Pulsing Alarm Beacon */}
                <circle className="alarm-ring" cx="215" cy="57" r="8" fill="#f69d0b" />
                <circle cx="215" cy="57" r="8" fill="#f69d0b" />

                {/* Live Polyline Trend (PIC-101) */}
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
                  fontSize="9"
                  fill="#8a94a3"
                >
                  Trend PIC-101 (1.42 bar) · Stable
                </text>
              </svg>

              {/* Card Footer */}
              <div className="flex justify-between items-center pt-3.5 border-t border-[#e3e8ee] text-[#8a94a3] text-xs font-mono">
                <span>
                  State: <b className="text-[#007a55]">Transient Test</b>
                </span>
                <span>DCS-style console</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
