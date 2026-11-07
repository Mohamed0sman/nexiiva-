'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Play,
  X,
  Monitor,
  Cpu,
  Sliders,
  Award,
  ShieldCheck,
  CheckCircle2,
  Lock,
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

  const coreServices = [
    {
      id: 'ots',
      icon: Monitor,
      number: '01',
      title:
        locale === 'ar'
          ? 'محاكي تدريب المشغلين (OTS)'
          : 'High-Fidelity Dynamic OTS',
      desc:
        locale === 'ar'
          ? 'محاكاة مطابقة 1:1 لشاشات كونسول الـ DCS مع استجابة هيدروليكية وحرارية فورية.'
          : '1:1 DCS console emulation with live thermodynamic physics and ISA alarm banners.',
      link: `/${locale}/solutions#ots`,
    },
    {
      id: 'builder',
      icon: Cpu,
      number: '02',
      title:
        locale === 'ar'
          ? 'محرك بناء النماذج المؤتمت'
          : 'Automated Unit Modeling Engine',
      desc:
        locale === 'ar'
          ? 'توليد النماذج الرقمية مباشرة من مخططات P&ID والمواصفات في أسبوع واحد.'
          : 'Rapid digital twin generation directly from plant P&IDs and design envelopes in ~1 week.',
      link: `/${locale}/solutions#builder`,
    },
    {
      id: 'console',
      icon: Sliders,
      number: '03',
      title:
        locale === 'ar'
          ? 'كونسول المشرف وحقن الأعطال'
          : 'Instructor Supervisory Console',
      desc:
        locale === 'ar'
          ? 'حقن فوري لأعطال المضخات وتسريبات الأنابيب ومراقبة استجابة المتدرب لحظياً.'
          : 'Real-time upset injection (pump trips, valve stiction, leaks) with instant playback.',
      link: `/${locale}/solutions#console`,
    },
    {
      id: 'certification',
      icon: Award,
      number: '04',
      title:
        locale === 'ar'
          ? 'تقييم واعتماد الكفاءة (SOP)'
          : 'Operator Qualification & SOP Certification',
      desc:
        locale === 'ar'
          ? 'تقييم موضوعي لزمن رد الفعل والانضباط الإجرائي مع إصدار تقارير كفاءة موثقة.'
          : 'Granular evaluation of operator reaction latency, safety envelope adherence, and SOP compliance.',
      link: `/${locale}/solutions#certification`,
    },
  ];

  return (
    <section className="relative bg-[#0A192F] text-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-800">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Block: Headline + DCS Display */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-start">
            {/* Calm Industrial Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1 text-xs font-semibold text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span>{dict?.hero?.eyebrow || (locale === 'ar' ? 'محاكي تدريب المشغلين (OTS)' : 'Operator Training Simulator (OTS)')}</span>
            </div>

            {/* H1 Headline - Large, Authoritative & Commanding */}
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
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
                  {locale === 'ar' ? 'عمليات حقيقية.' : 'Real operations.'}
                  <span className="block text-blue-400">
                    {locale === 'ar' ? 'تجربة افتراضية.' : 'Virtual experience.'}
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {dict?.hero?.subtitle ||
                (locale === 'ar'
                  ? 'تحول نكسيفا وحدتك الصناعية الحقيقية إلى محاكي تدريب متقدم وواقعي بنظام تحكم موزع DCS — ليواجه المشغلون أصعب سيناريوهات الطوارئ قبل حدوثها على أرض الواقع.'
                  : 'Nexiiva turns your process units into safe, high-fidelity DCS training simulators — enabling console operators to master worst-case plant emergencies before touching live valves.')}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/pilot`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-blue-500 active:scale-95"
              >
                <span>{dict?.hero?.primaryCta || (locale === 'ar' ? 'طلب مشروع تجريبي' : 'Request a Pilot')}</span>
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
                <span>{dict?.hero?.secondaryCta || (locale === 'ar' ? 'مشاهدة المنصة (فيديو)' : 'Watch the platform')}</span>
              </button>
            </div>

            {/* Direct Video & Demo Links */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">
                {locale === 'ar' ? 'فيديوهات النظام:' : 'Demo Walkthroughs:'}
              </span>
              <button
                type="button"
                onClick={() => handleOpenVideo('en')}
                className="inline-flex items-center gap-1 hover:text-blue-300 hover:underline transition-colors"
              >
                <span>English Walkthrough</span>
                <span className="text-[10px] text-slate-400">(YouTube)</span>
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleOpenVideo('ar')}
                className="inline-flex items-center gap-1 hover:text-blue-300 hover:underline transition-colors"
              >
                <span>العرض باللغة العربية</span>
                <span className="text-[10px] text-slate-400">(YouTube)</span>
              </button>
            </div>

            {/* Plant Security & Operating Accreditations */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{locale === 'ar' ? 'تشغيل محلي معزول 100%' : '100% Air-Gapped Deployment'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-blue-400 shrink-0" />
                <span>{locale === 'ar' ? 'بدون اتصال خارجي أو سحابي' : 'Zero External Cloud Dependency'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{locale === 'ar' ? 'مطابقة معايير إنذارات ISA-18.2' : 'ISA-18.2 Alarm Compliant'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Precision DCS Console Interface Display */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-2xl border border-slate-700 bg-slate-950 p-3 shadow-2xl">
              {/* DCS Console Bezel Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-800/60">
                    AIR-GAPPED 100%
                  </span>
                  <span className="hidden sm:inline text-slate-400 font-mono text-[10px]">
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
                      {locale === 'ar' ? 'تشغيل الفيديو التجريبي للمنصة' : 'Watch Live Platform Demo'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Console Footer Metadata */}
              <div className="mt-2.5 px-3 py-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800">
                <span className="truncate">
                  {locale === 'ar'
                    ? 'شاشة محاكاة لبرج التقطير الجوي (CDU) متطابقة 1:1 مع أنظمة التحكم الموزع'
                    : '1:1 DCS-matching atmospheric column simulation screen'}
                </span>
                <span className="font-mono text-emerald-400 text-[10px] shrink-0 ms-2">
                  LIVE MODEL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Services & Capabilities Showcase Dock */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                {locale === 'ar' ? 'منظومة خدمات ومنتجات نكسيفا الصناعية' : 'NEXIIVA CORE INDUSTRIAL OFFERINGS'}
              </span>
              <h2 className="mt-1 text-lg sm:text-xl font-bold text-white">
                {locale === 'ar'
                  ? 'بنية متكاملة لتأهيل المشغلين ومحاكاة الوحدات'
                  : 'Integrated Infrastructure for Operator Qualification & Unit Modeling'}
              </h2>
            </div>
            <Link
              href={`/${locale}/solutions`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors shrink-0"
            >
              <span>{locale === 'ar' ? 'استعراض كافة الحلول بالتفصيل' : 'Explore all solutions in detail'}</span>
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.link}
                  className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-900/90 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/40 group-hover:bg-blue-900/60 group-hover:text-blue-300 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-blue-400 font-semibold group-hover:text-blue-300">
                    <span>{locale === 'ar' ? 'تفاصيل الخدمة' : 'Service Specs'}</span>
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </div>
                </Link>
              );
            })}
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
