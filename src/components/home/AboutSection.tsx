'use client';

import React from 'react';
import { Award, Compass, Layers, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface AboutSectionProps {
  locale: string;
  dict?: Dict;
}

export function AboutSection({ locale, dict }: AboutSectionProps) {
  const isAr = locale === 'ar';

  const eyebrow = dict?.about?.eyebrow || (isAr ? 'الخبرة الميدانية' : 'PLANT EXPERIENCE');
  const title = dict?.about?.title || (isAr ? 'نبني نكسيفا بخبرة تشغيل حقيقية' : 'Built with real plant experience');
  const p1 =
    dict?.about?.p1 ||
    (isAr
      ? 'يبني نكسيفا مهندسو عمليات لديهم سنوات من الخبرة في التكرير والبتروكيماويات ومعالجة الغاز.'
      : 'Nexiiva is built by operations engineers with years of experience in refining, petrochemicals and gas processing.');
  const p2 =
    dict?.about?.p2 ||
    (isAr
      ? 'هدفنا أن نمنح كل مشغّل مكانًا آمنًا للتدرّب على المواقف التي تكلّف أكثر ما يمكن عندما تسوء.'
      : 'Our goal is to give every operator a safe place to practice the situations that cost the most when they go wrong.');
  const p3 =
    dict?.about?.p3 ||
    (isAr
      ? 'نكسيفا منصة واحدة لأي وحدة عمليات، وليست لنوع واحد من الوحدات.'
      : 'Nexiiva is one platform for any process unit, not a single unit type.');

  return (
    <section id="about" className="py-20 lg:py-24 bg-white scroll-mt-20 relative">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Industrial Stats Card */}
          <div className="lg:col-span-5 flex flex-col items-start text-start">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
              <Compass className="w-4 h-4 text-[#0084d3]" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101622] tracking-tight leading-tight mb-6">
              {title}
            </h2>

            {/* Industrial Plant Trust Box */}
            <div className="w-full rounded-2xl border border-slate-200/90 bg-[#F8FBFE] p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0084d3] border border-sky-200">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-slate-900">
                    {isAr ? '١٠+ سنوات خبرة ميدانية' : '10+ Years Field Operations'}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {isAr ? 'في معامل التكرير والبتروكيماويات ومحطات الغاز' : 'Direct refinery, petrochemical & gas plant experience'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0084d3] border border-sky-200">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-slate-900">
                    {isAr ? 'منصة موحدة لجميع الوحدات' : 'Unified Multi-Unit Platform'}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {isAr ? 'قابلة للتهيئة لأي وحدة صناعية وفق خرائط P&ID' : 'Configurable to any plant unit flowsheet'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-start">
            <div className="rounded-2xl border-s-4 border-s-[#0084d3] bg-slate-50/70 p-6 sm:p-7 border border-slate-200/80 shadow-2xs">
              <p className="text-lg sm:text-xl text-[#101622] font-semibold leading-relaxed mb-4">
                &ldquo;{p1}&rdquo;
              </p>
              <p className="text-base sm:text-lg text-[#485460] leading-relaxed mb-4 font-normal">
                {p2}
              </p>
              <p className="text-base sm:text-lg text-[#485460] leading-relaxed font-normal">
                {p3}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {isAr ? 'صفر مخاطرة على المعدات الحية' : 'Zero Live Asset Risk'}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {isAr ? 'تقييم زمني دقيق لاستجابة المشغل' : 'Micro-Second Reaction Scoring'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
