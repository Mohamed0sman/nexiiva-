'use client';

import React from 'react';
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
    <section id="about" className="py-16 lg:py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-[1100px] px-5">
        {/* Eyebrow */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
          {eyebrow}
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-6 max-w-[20em]">
          {title}
        </h2>

        {/* 3 Lead Paragraphs */}
        <div className="space-y-4 max-w-[62ch]">
          <p className="text-lg sm:text-xl text-[#485460] leading-relaxed">
            {p1}
          </p>
          <p className="text-lg sm:text-xl text-[#485460] leading-relaxed">
            {p2}
          </p>
          <p className="text-lg sm:text-xl text-[#485460] leading-relaxed">
            {p3}
          </p>
        </div>
      </div>
    </section>
  );
}
