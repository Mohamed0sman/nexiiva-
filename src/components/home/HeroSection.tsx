'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, X, MessageSquare, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HeroSectionProps {
  locale: string;
  dict?: Dict;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
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

  const handleSelectPlanScroll = (planType?: string) => {
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('contact-interest') as HTMLSelectElement | null;
      if (selectElement && planType) {
        selectElement.value = planType;
      }
      const target = document.getElementById('plans');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactScroll = (planType: string = 'Demo') => {
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('contact-interest') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = planType;
      }
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="introduction" className="relative bg-gradient-to-b from-sky-50/70 via-white to-slate-50 text-slate-900 pt-16 pb-16 lg:pt-24 lg:pb-20 overflow-hidden border-b border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid: Two Columns (Message + Industrial Column Schematic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Executive Message */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            
            {/* Category / Discipline Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-sky-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600 animate-pulse" />
              <span>
                {dict?.hero?.eyebrow ||
                  (isAr ? 'محاكي تدريب العمليات والمشغلين' : 'PROCESS TRAINING SIMULATOR')}
              </span>
            </div>

            {/* H1 Headline — Grounded, Human, High-Fidelity */}
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              {isAr ? (
                <>
                  أخطاء أقل من المشغّلين.
                  <span className="block text-sky-600 mt-2">
                    أمان أكبر للناس. حماية للأرباح.
                  </span>
                </>
              ) : (
                <>
                  Fewer operator errors.
                  <span className="block text-sky-600 mt-2">
                    Safer people. Protected profits.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle — Directly from Founders / HTML */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {dict?.hero?.subtitle ||
                (isAr
                  ? 'نكسيفا محاكي تدريب على العمليات. يتدرّب المشغّلون على التشغيل والأعطال والإيقاف على وحدة افتراضية، فتحدث الأخطاء في التدريب وليس في المصنع الحقيقي.'
                  : 'Nexiiva is a process training simulator. Operators practice start-ups, upsets and shutdowns on a virtual unit, so mistakes happen in training and not at the real plant.')}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => handleContactScroll('Demo')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-xs transition-colors active:scale-95 cursor-pointer"
              >
                <span>{dict?.hero?.primaryCta || (isAr ? 'احجز عرضًا تجريبيًا' : 'Book a demo')}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={() => handleSelectPlanScroll()}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-colors active:scale-95 cursor-pointer"
              >
                <span>{dict?.hero?.secondaryCta || (isAr ? 'اختر خطتك' : 'Select your plan')}</span>
              </button>

              <a
                href="https://wa.me/201004131154"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 px-5 py-3.5 text-sm font-bold text-emerald-800 shadow-2xs transition-colors active:scale-95"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>{isAr ? 'واتساب (01004131154)' : 'WhatsApp (01004131154)'}</span>
              </a>
            </div>

            {/* Direct Video Walkthrough Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <button
                type="button"
                onClick={() => handleOpenVideo()}
                className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-sky-600 transition-colors"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white">
                  <Play className="h-2.5 w-2.5 fill-current ms-0.5" />
                </div>
                <span>{isAr ? 'مشاهدة الفيديو الميداني:' : 'Watch System Walkthrough:'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleOpenVideo('en')}
                className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-colors"
              >
                English Walkthrough
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenVideo('ar')}
                className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-colors"
              >
                العرض باللغة العربية
              </button>
            </div>
          </div>

          {/* Right Column: Industrial Process Column Schematic from HTML */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs font-mono font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-sky-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  CDU-101 DYNAMIC UNIT
                </span>
                <span className="text-slate-400">ISA-18.2 ALARMS</span>
              </div>

              {/* Clean Industrial SVG Column */}
              <div className="flex justify-center py-2">
                <svg
                  viewBox="0 0 300 340"
                  role="img"
                  aria-label="Process distillation column with a pulsing alarm"
                  className="w-full max-w-[280px] h-auto overflow-visible"
                >
                  {/* Column Body */}
                  <rect
                    x="110"
                    y="25"
                    width="74"
                    height="230"
                    rx="37"
                    fill="#F8FAFC"
                    stroke="#0284C7"
                    strokeWidth="2.5"
                  />
                  {/* Internal Trays */}
                  <path
                    d="M118 75h58M118 105h58M118 135h58M118 165h58M118 195h58M118 225h58"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  {/* Process Stream Lines */}
                  {/* Feed */}
                  <path d="M20 145h90" stroke="#0284C7" strokeWidth="2.5" fill="none" />
                  <polygon points="106,141 114,145 106,149" fill="#0284C7" />
                  {/* Overhead */}
                  <path d="M147 25V10h80" stroke="#0284C7" strokeWidth="2.5" fill="none" />
                  <polygon points="223,6 231,10 223,14" fill="#0284C7" />
                  {/* Side draw */}
                  <path d="M184 105h70" stroke="#0284C7" strokeWidth="2" fill="none" />
                  <polygon points="250,101 258,105 250,109" fill="#0284C7" />
                  {/* Bottom residue */}
                  <path d="M147 255v25h80" stroke="#0284C7" strokeWidth="2.5" fill="none" />
                  <polygon points="223,276 231,280 223,284" fill="#0284C7" />

                  {/* Stream Labels */}
                  <g fill="#475569" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
                    <text x="22" y="136">Feed (TI-143)</text>
                    <text x="180" y="28">Overhead (V10)</text>
                    <text x="190" y="98">Kerosene</text>
                    <text x="180" y="272">Residue (Btm)</text>
                  </g>

                  {/* Pulsing Alarm on Overhead Drum */}
                  <circle cx="225" cy="48" r="16" fill="#F59E0B" opacity="0.2" className="animate-ping" />
                  <circle cx="225" cy="48" r="7" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
                  
                  {/* Alarm Callout Tag */}
                  <g transform="translate(160, 38)">
                    <rect x="0" y="0" width="62" height="18" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
                    <text x="6" y="13" fill="#B45309" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">
                      HIGH LEVEL
                    </text>
                  </g>

                  {/* Real-time Trend Sparkline */}
                  <polyline
                    points="20,318 60,312 100,315 140,296 180,300 220,285 270,288"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text x="20" y="334" fill="#64748B" fontSize="10" fontFamily="ui-monospace, monospace">
                    Trend PIC-101 (1.42 bar) · Stable
                  </text>
                </svg>
              </div>

              {/* Status Footer */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-slate-700">State: <strong className="text-emerald-600">Transient Test</strong></span>
                <span className="font-mono text-slate-500">1:1 DCS Parity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Hero: "How It Helps" (كيف يفيد نكسيفا) — Directly from Nexiiva website.html */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="max-w-3xl mb-8 text-start">
            <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block">
              {isAr ? 'القيمة التشغيلية المباشرة' : 'OPERATIONAL IMPACT'}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {dict?.hero?.howItHelpsTitle || (isAr ? 'كيف يفيد نكسيفا' : 'How it helps')}
            </h2>
            <p className="mt-2 text-base text-slate-600">
              {dict?.hero?.howItHelpsDesc ||
                (isAr
                  ? 'تقلّ الأخطاء التي تصل إلى المصنع الحقيقي، فنحمي الأرواح وأرباح الشركة.'
                  : 'Fewer errors reach the real plant, which protects lives and company profit.')}
            </p>
          </div>

          {/* 3 Pillars from HTML */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
            
            {/* 1. Start-up, normal operation and shutdown */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:border-sky-300 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-mono font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {isAr ? 'التشغيل العادي والإيقاف وإعادة التشغيل' : 'Start-up, normal operation and shutdown'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'يتدرب المشغلون على تسلسل الإجراءات الدقيق، وإشعال الأفران، والتدرج في فتح صمامات التغذية والراجع دون مفاجآت للمعدات.'
                  : 'Operators master exact procedural sequencing, furnace light-offs, and controlled valve ramping without asset risk.'}
              </p>
            </div>

            {/* 2. Handling upsets and alarms */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:border-sky-300 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-mono font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {isAr ? 'التعامل مع الاضطرابات والإنذارات' : 'Handling upsets and alarms'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'ممارسة حالات الطوارئ النادرة مثل توقف مضخات الراجع، الصدمات الحرارية، وتسربات الغاز وفق تسلسل إنذارات ISA-18.2.'
                  : 'Practice low-frequency, high-consequence emergencies: reflux pump trips, thermal shocks, and tube leaks under ISA-18.2 alarms.'}
              </p>
            </div>

            {/* 3. Run on the cloud or inside your company */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:border-sky-300 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-mono font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {isAr ? 'تشغيل على السحابة أو داخل شركتك' : 'Run on the cloud or inside your company'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'مرونة تامة في النشر: دخول فوري عبر السحابة للتدريب الموزع، أو تثبيت محلي معزول 100% دون إنترنت داخل شبكة المنشأة.'
                  : 'Flexible delivery: instant cloud access for distributed teams, or 100% air-gapped on-premise installation behind your plant firewall.'}
              </p>
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
                    ? 'عرض منصة نكسيفا الهندسية (باللغة العربية)'
                    : 'Nexiiva Process Training Simulator Walkthrough'}
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
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
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
