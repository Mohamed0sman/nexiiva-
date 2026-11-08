'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, X, MessageSquare } from 'lucide-react';
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
    <section className="relative bg-gradient-to-b from-sky-50/70 via-white to-slate-50 text-slate-900 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Corporate Discipline Header */}
        <div className="text-xs font-mono font-bold tracking-wider text-sky-600 uppercase">
          {isAr
            ? 'هندسة العمليات والتوأم الرقمي لمنشآت الطاقة والتكرير'
            : 'INDUSTRIAL DIGITAL TWINS & PROCESS AUTOMATION'}
        </div>

        {/* H1 Headline — Grand, Authoritative, Corporate with Logo Sky-Blue */}
        <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14] max-w-4xl">
          {isAr ? (
            <>
              التوأم الرقمي وهندسة أتمتة العمليات.
              <span className="block text-sky-600 mt-2">
                بأعلى معايير الدقة لمنشآت الطاقة والتكرير.
              </span>
            </>
          ) : (
            <>
              Industrial Digital Twins & Process Automation.
              <span className="block text-sky-600 mt-2">
                Engineered for Energy Facilities.
              </span>
            </>
          )}
        </h1>

        {/* Corporate Mission Subtitle */}
        <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {isAr
            ? 'تقوم نكسيفا بتطوير نماذج التوأم الرقمي عالي الدقة وأنظمة مطابقة كونسول التحكم الموزع (DCS) لمصافي التكرير ومجمعات الغاز والبتروكيماويات بمطابقة فيزيائية تامة، لتمكين الكوادر من إدارة أعتى طوارئ العمليات بكفاءة وأمان كامل.'
            : 'Nexiiva delivers high-fidelity dynamic process digital twins and 1:1 DCS console integration tailored for refineries, gas complexes, and petrochemical facilities—ensuring operations teams master worst-case transients before touching live valves.'}
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-xs transition-colors active:scale-95"
          >
            <span>{isAr ? 'طلب مناقشة مشروع تجريبي' : 'Request Plant Pilot'}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>

          <button
            type="button"
            onClick={() => handleOpenVideo()}
            className="inline-flex items-center gap-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-colors active:scale-95"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
              <Play className="h-3 w-3 fill-current ms-0.5" />
            </div>
            <span>{isAr ? 'مشاهدة عرض المنصة (فيديو)' : 'Watch System Walkthrough'}</span>
          </button>

          <a
            href="https://wa.me/201004131154"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 px-6 py-3.5 text-sm font-bold text-emerald-800 shadow-2xs transition-colors active:scale-95"
          >
            <MessageSquare className="h-4 w-4 text-emerald-600" />
            <span>{isAr ? 'واتساب مباشر (01004131154)' : 'Direct WhatsApp (01004131154)'}</span>
          </a>
        </div>

        {/* Direct Video Walkthrough Triggers */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">
            {isAr ? 'فيديوهات النظام المتاحة:' : 'Available Walkthroughs:'}
          </span>
          <button
            type="button"
            onClick={() => handleOpenVideo('en')}
            className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-colors"
          >
            English Walkthrough (YouTube)
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => handleOpenVideo('ar')}
            className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-colors"
          >
            العرض باللغة العربية (YouTube)
          </button>
        </div>

        {/* Accreditations & Standards Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 border-t border-slate-200 text-xs text-slate-600 font-medium">
          <span className="inline-flex items-center gap-1.5 text-slate-800">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
            {isAr ? 'تشغيل محلي معزول 100% (Air-Gapped)' : '100% Air-Gapped On-Premise'}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
            {isAr ? 'حماية تامة للمخططات وسرية البيانات' : 'Zero Cloud Telemetry Risk'}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
            {isAr ? 'معايير الإنذارات القياسية ISA-18.2' : 'ISA-18.2 Alarm Hierarchy'}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
            {isAr ? 'توقيع اتفاقية سرية متبادلة (NDA)' : 'Binding Mutual NDA'}
          </span>
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
                    ? 'عرض منصة نكسيفا الهندسية (باللغة العربية)'
                    : 'Nexiiva Process Digital Twin Platform Walkthrough'}
                </span>
                {/* Language Toggle in Modal */}
                <div className="flex rounded-md bg-slate-900 p-0.5 border border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedVideoLang('en')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      selectedVideoLang === 'en'
                        ? 'bg-sky-600 text-white'
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
                        ? 'bg-sky-600 text-white'
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
