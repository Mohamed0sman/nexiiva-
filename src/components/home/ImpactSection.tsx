'use client';

import React from 'react';
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

  const points = dict?.impact?.points || (isAr ? [
    'تدريب على التشغيل والإيقاف دون أي خطر على المعدات',
    'مواجهة الأعطال والإنذارات قبل أن تحدث فعلًا',
    'تشغيل على السحابة أو دون اتصال داخل مصنعك',
  ] : [
    'Practice start-up and shutdown with no risk to equipment',
    'Face upsets and alarms before they happen for real',
    'Run on the cloud, or offline inside your plant',
  ]);

  return (
    <section className="py-16 lg:py-20 bg-[#f8fbfe] border-y border-[#e3e8ee]">
      <div className="mx-auto max-w-[1100px] px-5">
        {/* Eyebrow */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
          {eyebrow}
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-3">
          {title}
        </h2>

        {/* Lead */}
        <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[62ch] mb-8 font-normal">
          {lead}
        </p>

        {/* 3 Border-Start Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="border-s-[3px] border-[#73d4ff] ps-4 py-1 text-base sm:text-lg font-semibold text-[#101622] leading-snug"
            >
              {pt}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
