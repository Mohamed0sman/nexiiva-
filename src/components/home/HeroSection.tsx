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
    <section className="relative bg-white pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Calm Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
              <span>{dict?.hero?.eyebrow || 'محاكي تدريب المشغلين (OTS)'}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] leading-[1.2]">
              {dict?.hero?.title?.split('\n').map((line: string, i: number) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="text-[#1D4ED8]">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              )) || (
                <>
                  عمليات حقيقية.
                  <span className="block text-[#1D4ED8]">
                    تجربة افتراضية.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {dict?.hero?.subtitle ||
                'تحول نكسيفا وحدتك الصناعية الحقيقية إلى محاكي تدريب متقدم وواقعي بنظام تحكم موزع DCS — ليواجه المشغلون أصعب سيناريوهات الطوارئ قبل حدوثها على أرض الواقع.'}
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/pilot`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0A192F] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1E293B]"
              >
                <span>{dict?.hero?.primaryCta || 'طلب مشروع تجريبي'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <button
                type="button"
                onClick={() => handleOpenVideo()}
                className="inline-flex items-center gap-2.5 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-xs transition-colors hover:bg-slate-50 hover:border-slate-400"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <Play className="h-3 w-3 fill-current ms-0.5" />
                </div>
                <span>{dict?.hero?.secondaryCta || 'مشاهدة المنصة (فيديو)'}</span>
              </button>
            </div>

            {/* Direct Video Links */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="font-medium text-slate-700">
                {locale === 'ar' ? 'فيديوهات النظام:' : 'Demo Walkthroughs:'}
              </span>
              <button
                type="button"
                onClick={() => handleOpenVideo('en')}
                className="text-[#1D4ED8] hover:underline font-medium"
              >
                English Walkthrough (YouTube)
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenVideo('ar')}
                className="text-[#1D4ED8] hover:underline font-medium"
              >
                العرض باللغة العربية (YouTube)
              </button>
            </div>
          </div>

          {/* Right Column: Clean Industrial Console Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className="relative w-full cursor-pointer group rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:border-slate-300"
              onClick={() => handleOpenVideo()}
            >
              <div className="flex items-center justify-between px-3 py-2 text-[11px] font-mono text-slate-500 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="ms-2 font-semibold text-slate-700">CDU-101 ATM COLUMN · PFD</span>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">100% AIR-GAPPED</span>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 mt-2">
                <Image
                  src="/assets/screens/cdu-atm-column-pfd.png"
                  alt="Atmospheric Distillation Column PFD Console"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  priority
                />

                {/* Gentle Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/35 transition-colors group-hover:bg-slate-900/25">
                  <div className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-md transition-transform group-hover:scale-105">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
                      <Play className="h-2.5 w-2.5 fill-current ms-0.5" />
                    </div>
                    <span>{locale === 'ar' ? 'تشغيل الفيديو التجريبي' : 'Play Video Demo'}</span>
                  </div>
                </div>
              </div>

              <div className="px-3 pt-2 pb-1 text-center text-xs text-slate-500">
                {locale === 'ar'
                  ? 'شاشة محاكاة لبرج التقطير الجوي (CDU) متطابقة 1:1 مع أنظمة التحكم الموزع'
                  : 'Authentic 1:1 DCS simulation screen of an atmospheric crude distillation column'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-[#0A192F] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <span className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  {locale === 'ar' ? 'عرض النظام التجريبي' : 'Platform Walkthrough'}
                </span>

                {/* In-Modal Language Toggle */}
                <div className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedVideoLang('en')}
                    className={`rounded px-2.5 py-1 font-semibold transition-colors ${
                      selectedVideoLang === 'en'
                        ? 'bg-[#1D4ED8] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedVideoLang('ar')}
                    className={`rounded px-2.5 py-1 font-semibold transition-colors ${
                      selectedVideoLang === 'ar'
                        ? 'bg-[#1D4ED8] text-white'
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
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Responsive 16:9 YouTube Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoIds[selectedVideoLang]}?autoplay=1&rel=0`}
                title="Nexiiva Simulator Video Demo"
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
