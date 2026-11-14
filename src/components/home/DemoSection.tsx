'use client';

import React, { useState } from 'react';
import { Play, Video, MonitorPlay } from 'lucide-react';
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
  const title = dict?.demo?.title || (isAr ? 'شاهد المحاكي في بيئة العمل' : 'Watch the demo');

  return (
    <section id="demo" className="py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="mx-auto max-w-[1100px] px-5">
        
        {/* Header Block */}
        <div className="flex flex-col items-start text-start mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
            <MonitorPlay className="w-4 h-4 text-[#0084d3]" />
            <span>{eyebrow}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight">
              {title}
            </h2>

            {/* Language Switcher Segmented Control */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedLang('en')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  selectedLang === 'en'
                    ? 'bg-white text-[#0084d3] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>English</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLang('ar')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer font-sans ${
                  selectedLang === 'ar'
                    ? 'bg-white text-[#0084d3] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>العربية</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Player Console Frame */}
        <div className="relative mx-auto w-full max-w-[1000px] rounded-[24px] overflow-hidden border border-slate-300/80 bg-[#0F172A] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.15)] craft-card">
          {/* Top Console Window Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#1E293B] border-b border-slate-700/80 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ms-2 text-slate-400 font-mono text-[11px] hidden sm:inline">
                OTS Console Session: CDU-101 Dynamic Walkthrough
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-400 font-bold uppercase">
                {selectedLang === 'ar' ? 'البث باللغة العربية' : 'English Narration'}
              </span>
            </div>
          </div>

          {/* 16:9 Iframe */}
          <div className="relative aspect-video w-full bg-[#0A0E17]">
            <iframe
              key={selectedLang}
              src={`https://www.youtube-nocookie.com/embed/${VIDEOS[selectedLang]}?rel=0&modestbranding=1`}
              title="Nexiiva Process Training Simulator Demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
