'use client';

import React from 'react';
import { ShieldCheck, AlertCircle, HardDrive, ArrowUpRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ImpactSectionProps {
  locale: string;
  dict?: Dict;
}

export function ImpactSection({ locale, dict }: ImpactSectionProps) {
  const isAr = locale === 'ar';

  const eyebrow = dict?.impact?.eyebrow || (isAr ? 'الأثر التشغيلي' : 'OPERATIONAL IMPACT');
  const title = dict?.impact?.title || (isAr ? 'كيف يفيد نكسيفا' : 'How it helps');
  const lead =
    dict?.impact?.lead ||
    (isAr
      ? 'تقلّ الأخطاء التي تصل إلى المصنع الحقيقي، فنحمي الأرواح وأرباح الشركة.'
      : 'Fewer errors reach the real plant, which protects lives and company profit.');

  const cards = [
    {
      num: '01',
      icon: ShieldCheck,
      text: isAr
        ? 'تدريب على التشغيل والإيقاف دون أي خطر على المعدات'
        : 'Practice start-up and shutdown with no risk to equipment',
      sub: isAr
        ? 'تكرار سيناريوهات البدء والإيقاف التدريجي حتى الوصول للاستجابة الغريزية قبل لمس الوحدة الحقيقية.'
        : 'Repeat start-ups, rate adjustments, and cold shutdowns until procedural memory is second nature.',
    },
    {
      num: '02',
      icon: AlertCircle,
      text: isAr
        ? 'مواجهة الأعطال والإنذارات قبل أن تحدث فعلًا'
        : 'Face upsets and alarms before they happen for real',
      sub: isAr
        ? 'تدريب عملي على اختلالات الضغط، تسريب الأنابيب، وانقطاع التبريد لاتخاذ قرارات التهدئة في ثوانٍ.'
        : 'Experience real hydraulic surges, tower flooding, and valve stiction before they ever occur live.',
    },
    {
      num: '03',
      icon: HardDrive,
      text: isAr
        ? 'تشغيل على السحابة أو دون اتصال داخل مصنعك'
        : 'Run on the cloud, or offline inside your plant',
      sub: isAr
        ? 'مرونة كاملة في النشر السحابي السريع أو التثبيت الآمن والمعزول داخل شبكة المصنع المغلقة.'
        : 'Zero-footprint web access for remote teams or 100% air-gapped on-premise installation.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#f8fbfe] border-y border-[#e3e8ee] relative">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="flex flex-col items-start text-start mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
            {eyebrow}
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[64ch] font-normal">
            {lead}
          </p>
        </div>

        {/* 3 Impact Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-[#e3e8ee] hover:border-sky-300 rounded-[22px] p-7 flex flex-col justify-between craft-card"
              >
                <div>
                  {/* Top Row: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7faff] text-[#0084d3] border border-[#c0e3f6]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {card.num}
                    </span>
                  </div>

                  {/* Core Value Statement */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#101622] leading-snug mb-3">
                    {card.text}
                  </h3>

                  {/* Subtext description */}
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {card.sub}
                  </p>
                </div>

                {/* Bottom Line Accent */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-[#0084d3]">
                  <span>{isAr ? 'أمان تشغيلي مؤكد' : 'Verified Safety Impact'}</span>
                  <ArrowUpRight className="w-4 h-4 rtl:-rotate-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
