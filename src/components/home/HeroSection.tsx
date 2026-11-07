'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Play,
  X,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HeroSectionProps {
  locale: string;
  dict: Dict;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoLang, setSelectedVideoLang] = useState<'en' | 'ar'>(
    locale === 'ar' ? 'ar' : 'en'
  );

  const videoIds = {
    en: 'x400rPgBSo4',
    ar: 'hYILfbdodzQ',
  };

  const handleOpenVideo = (lang?: 'en' | 'ar') => {
    if (lang) setSelectedVideoLang(lang);
    setIsVideoModalOpen(true);
  };

  return (
    <section className="relative bg-[#0A192F] text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden border-b border-slate-800">
      {/* Subtle authentic industrial refinery background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image
          src="/assets/photos/refinery-dusk.jpg"
          alt="Industrial Refinery Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-[#0A192F]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Calm Industrial Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-xs">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span>{dict?.hero?.eyebrow || 'محاكي تدريب المشغلين (OTS)'}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.18]">
              {dict?.hero?.title?.split('\n').map((line: string, i: number) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="text-blue-400">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              )) || (
                <>
                  عمليات حقيقية.
                  <span className="block text-blue-400">
                    تجربة افتراضية.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {dict?.hero?.subtitle ||
                'تحول نكسيفا وحدتك الصناعية الحقيقية إلى محاكي تدريب متقدم وواقعي بنظام تحكم موزع DCS — ليواجه المشغلون أصعب سيناريوهات الطوارئ قبل حدوثها على أرض الواقع.'}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/pilot`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-blue-500"
              >
                <span>{dict?.hero?.primaryCta || 'طلب مشروع تجريبي'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <button
                type="button"
                onClick={() => handleOpenVideo()}
                className="inline-flex items-center gap-2.5 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-slate-800 hover:border-slate-600 backdrop-blur-xs"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
                  <Play className="h-3 w-3 fill-current ms-0.5" />
                </div>
                <span>{dict?.hero?.secondaryCta || 'مشاهدة المنصة (فيديو)'}</span>
              </button>
            </div>

            {/* Direct Video Links */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-medium text-slate-300">
                {locale === 'ar' ? 'فيديوهات النظام:' : 'Demo Walkthroughs:'}
              </span>
              <button
                type="button"
                onClick={() => handleOpenVideo('en')}
                className="hover:text-blue-300 hover:underline transition-colors"
              >
                English Walkthrough (YouTube)
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenVideo('ar')}
                className="hover:text-blue-300 hover:underline transition-colors"
              >
                العرض باللغة العربية (YouTube)
              </button>
            </div>
          </div>

          {/* Right Column: DCS Console Screen Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-950 p-3 shadow-xl backdrop-blur-sm">
              {/* DCS Console Bezel Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded bg-emerald-950/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-800/50">
                    AIR-GAPPED 100%
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                  <span>CDU-101 ATM COLUMN · PFD</span>
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>

              {/* Console Screen Image with Play Overlay */}
              <div
                className="relative mt-2 aspect-16/10 w-full overflow-hidden rounded-lg bg-black cursor-pointer group"
                onClick={() => handleOpenVideo()}
              >
                <Image
                  src="/assets/screens/cdu-atm-column-pfd.png"
                  alt="Nexiiva DCS Simulator Interface"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />

                {/* Subtle Hover Play Button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="flex items-center gap-2.5 rounded-full bg-slate-900/90 border border-slate-700 px-5 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                      <Play className="h-3.5 w-3.5 fill-current ms-0.5" />
                    </div>
                    <span>
                      {locale === 'ar' ? 'تشغيل الفيديو التجريبي' : 'Play Video Walkthrough'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Console Footer */}
              <div className="mt-2.5 px-3 py-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60">
                <span>
                  {locale === 'ar'
                    ? 'شاشة محاكاة لبرج التقطير الجوي (CDU) متطابقة 1:1 مع أنظمة التحكم الموزع'
                    : '1:1 DCS-matching atmospheric column simulation screen'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-white">
                  {selectedVideoLang === 'ar'
                    ? 'عرض منصة نكسيفا (باللغة العربية)'
                    : 'Nexiiva OTS Platform Walkthrough'}
                </span>
                {/* Language Toggle in Modal */}
                <div className="flex rounded-md bg-slate-900 p-0.5 border border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedVideoLang('en')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      selectedVideoLang === 'en'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedVideoLang('ar')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      selectedVideoLang === 'ar'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoIds[selectedVideoLang]}?autoplay=1&rel=0`}
                title="Nexiiva Platform Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
