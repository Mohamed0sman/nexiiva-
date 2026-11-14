'use client';

import React, { useState } from 'react';
import type { Dict } from '@/types/dict';

interface DemoSectionProps {
  locale: string;
  dict?: Dict;
}

const VIDEOS = {
  en: 'x400rPgBSo4',
  ar: 'hYILfbdodzQ',
};

export function DemoSection({ locale, dict }: DemoSectionProps) {
  const isAr = locale === 'ar';
  const [selectedLang, setSelectedLang] = useState<'en' | 'ar'>(isAr ? 'ar' : 'en');

  const eyebrow = dict?.demo?.eyebrow || (isAr ? 'عرض توضيحي' : 'DEMO');
  const title = dict?.demo?.title || (isAr ? 'شاهد المحاكي' : 'Watch the demo');

  return (
    <section id="demo" className="py-16 lg:py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-[1100px] px-5">
        {/* Eyebrow */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
          {eyebrow}
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-4">
          {title}
        </h2>

        {/* Language Switch Buttons */}
        <div className="flex items-center gap-2 mb-6">
          <button
            type="button"
            onClick={() => setSelectedLang('en')}
            className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer ${
              selectedLang === 'en'
                ? 'bg-[#0084d3] text-white border border-[#0084d3] shadow-xs'
                : 'bg-white text-[#101622] border border-[#e3e8ee] hover:bg-slate-50'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setSelectedLang('ar')}
            className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer font-sans ${
              selectedLang === 'ar'
                ? 'bg-[#0084d3] text-white border border-[#0084d3] shadow-xs'
                : 'bg-white text-[#101622] border border-[#e3e8ee] hover:bg-slate-50'
            }`}
          >
            العربية
          </button>
        </div>

        {/* 16:9 Video Embed Player */}
        <div className="relative aspect-video w-full max-w-[900px] rounded-2xl overflow-hidden border border-[#e3e8ee] bg-[#101622] shadow-[0_8px_30px_rgba(16,22,34,0.06)]">
          <iframe
            key={selectedLang}
            src={`https://www.youtube-nocookie.com/embed/${VIDEOS[selectedLang]}`}
            title="Nexiiva demo"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0 block"
          />
        </div>
      </div>
    </section>
  );
}
