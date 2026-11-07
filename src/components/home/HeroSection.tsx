'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MonitorFrame } from '@/components/MonitorFrame';
import {
  ArrowRight,
  Play,
  CheckCircle2,
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
    <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-slate-50 px-3 py-1 font-mono-tag text-xs font-bold tracking-wider text-[#0A192F] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
              <span>{dict?.hero?.eyebrow || 'OPERATOR TRAINING SIMULATOR'}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0A192F] sm:text-5xl xl:text-6xl leading-[1.12]">
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
                  Real operations.
                  <span className="block text-[#1D4ED8]">
                    Virtual experience.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
              {dict?.hero?.subtitle ||
                'Nexiiva turns your own process unit into a safe, realistic DCS-style training simulator — so operators face the worst day before it happens.'}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/pilot`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0A192F] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1E293B]"
              >
                <span>{dict?.hero?.primaryCta || 'Request a Pilot'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <button
                type="button"
                onClick={() => handleOpenVideo()}
                className="inline-flex items-center gap-2.5 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:border-slate-400"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Play className="h-3 w-3 fill-current ms-0.5" />
                </div>
                <span>{dict?.hero?.secondaryCta || 'Watch the platform'}</span>
              </button>
            </div>

            {/* Quick Video Links Strip */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="font-medium text-slate-700">
                {locale === 'ar' ? 'فيديوهات النظام:' : 'Demo Walkthroughs:'}
              </span>
              <button
                type="button"
                onClick={() => handleOpenVideo('en')}
                className="underline hover:text-[#1D4ED8] font-medium"
              >
                English Walkthrough (YouTube)
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenVideo('ar')}
                className="underline hover:text-[#1D4ED8] font-medium"
              >
                العرض باللغة العربية (YouTube)
              </button>
            </div>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-600 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>100% Offline Air-Gapped Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Bilingual (EN / AR) Console</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>12 Live Dynamic Trends</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Monitor with Click-to-Play Video */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className="relative w-full cursor-pointer group"
              onClick={() => handleOpenVideo()}
            >
              <MonitorFrame
                src="/assets/screens/cdu-atm-column-pfd.png"
                alt="Atmospheric Distillation Column PFD Console"
                title="CDU-101 ATM COLUMN · PFD CONSOLE"
                caption={
                  dict?.hero?.floatingCaption ||
                  'Atmospheric Crude Distillation (CDU) — Dynamic Process Console'
                }
                priority={true}
              />

              {/* Centered Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 rounded-xl transition-opacity group-hover:bg-slate-900/30">
                <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-xl transition-transform group-hover:scale-105">
                  <Play className="h-4 w-4 fill-current text-red-600" />
                  <span>{locale === 'ar' ? 'تشغيل الفيديو التجريبي' : 'Play Video Demo'}</span>
                </div>
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
