'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, X } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HeroSectionProps {
  locale: string;
  dict?: Dict;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const isAr = locale === 'ar';
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoLang, setSelectedVideoLang] = useState<'en' | 'ar'>(
    isAr ? 'ar' : 'en'
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
    <section className="relative bg-[#0A192F] text-white pt-16 pb-16 lg:pt-20 lg:pb-20 overflow-hidden border-b border-slate-800">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Corporate Headline, Vision, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Corporate Discipline Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-950/70 px-4 py-1.5 text-xs font-semibold text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span>
                {isAr
                  ? 'هندسة محاكاة العمليات وتأهيل مشغلي منشآت الطاقة'
                  : 'ENERGY PROCESS SIMULATION & OPERATOR QUALIFICATION'}
              </span>
            </div>

            {/* H1 Headline — Grand, Authoritative, Corporate */}
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {isAr ? (
                <>
                  هندسة المحاكاة الديناميكية.
                  <span className="block text-blue-400 mt-2">
                    لتأهيل مشغلي المنشآت الحيوية.
                  </span>
                </>
              ) : (
                <>
                  Dynamic Process Simulation.
                  <span className="block text-blue-400 mt-2">
                    Engineered for Plant Reality.
                  </span>
                </>
              )}
            </h1>

            {/* Corporate Mission Subtitle */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {isAr
                ? 'تقوم نكسيفا ببناء محاكيات تدريب المشغلين (OTS) ونماذج التوأم الرقمي عالية الدقة لمصافي التكرير ومجمعات الغاز والبتروكيماويات بمطابقة تامة لأنظمة التحكم الموزع (DCS) لتمكين الكوادر من مواجهة أعتى طوارئ العمليات قبل حدوثها على أرض الواقع.'
                : 'Nexiiva engineers high-fidelity dynamic process digital twins and Operator Training Simulators (OTS) tailored for refineries, gas complexes, and petrochemical facilities with 1:1 DCS console parity—ensuring operators master worst-case transients before touching live valves.'}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/pilot`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-xs transition-colors hover:bg-blue-500 active:scale-95"
              >
                <span>{isAr ? 'طلب مناقشة مشروع تجريبي' : 'Request Plant Pilot'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <button
                type="button"
                onClick={() => handleOpenVideo()}
                className="inline-flex items-center gap-2.5 rounded-lg border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-slate-800 hover:border-slate-600 active:scale-95"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
                  <Play className="h-3 w-3 fill-current ms-0.5" />
                </div>
                <span>{isAr ? 'مشاهدة عرض المنصة (فيديو)' : 'Watch System Walkthrough'}</span>
              </button>

              <Link
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors ms-2"
              >
                <span>{isAr ? 'استعراض المشاريع المنجزة ↓' : 'Explore Featured Projects ↓'}</span>
              </Link>
            </div>

            {/* Direct Video Walkthrough Triggers */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">
                {isAr ? 'فيديوهات النظام:' : 'Demo Walkthroughs:'}
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

            {/* Accreditations & Standards Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
              <span>{isAr ? 'تشغيل محلي معزول 100% (Air-Gapped)' : '100% Air-Gapped On-Premise'}</span>
              <span className="text-slate-600">·</span>
              <span>{isAr ? 'حماية تامة للبيانات والمخططات' : 'Zero Cloud Telemetry Risk'}</span>
              <span className="text-slate-600">·</span>
              <span>{isAr ? 'معايير الإنذارات القياسية ISA-18.2' : 'ISA-18.2 Alarm Standard'}</span>
            </div>
          </div>

          {/* Right Column: High-Precision DCS Console Interface Screen Display */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700 bg-slate-950 p-3 shadow-2xl">
              {/* Console Screen Bezel Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-800/60 font-mono">
                    AIR-GAPPED 100%
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">
                    ISA-18.2 · PFD CONSOLE
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                  <span>CDU-101 ATM COLUMN</span>
                  <div className="flex gap-1.5">
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
                  alt="Nexiiva DCS Simulator Interface - Atmospheric Distillation Column"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />

                {/* Subtle Hover Play Button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="flex items-center gap-2.5 rounded-full bg-slate-900/90 border border-slate-700 px-5 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-sm group-hover:scale-105 transition-transform">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                      <Play className="h-3.5 w-3.5 fill-current ms-0.5" />
                    </div>
                    <span>
                      {isAr ? 'تشغيل العرض التوضيحي للنظام' : 'Watch Live Platform Demo'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Console Footer Metadata */}
              <div className="mt-2.5 px-3 py-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 font-mono">
                <span className="truncate">
                  {isAr
                    ? 'شاشة محاكاة لبرج التقطير الجوي CDU متطابقة 1:1 مع أنظمة DCS'
                    : '1:1 DCS-matching atmospheric column simulation screen'}
                </span>
                <span className="text-emerald-400 text-[10px] shrink-0 ms-2">
                  VERIFIED MODEL
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
