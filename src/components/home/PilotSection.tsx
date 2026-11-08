'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileSearch, Cog, TrendingUp, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface PilotSectionProps {
  locale: string;
  dict: Dict;
}

export function PilotSection({ locale, dict }: PilotSectionProps) {
  const isAr = locale === 'ar';

  const steps = [
    {
      step: '01',
      icon: FileSearch,
      title:
        dict?.pilotSection?.steps?.[0]?.title ||
        (isAr ? 'تحديد النطاق ومراجعة المخططات الهندسية' : 'Technical Scoping & Boundary Definition'),
      desc:
        dict?.pilotSection?.steps?.[0]?.desc ||
        (isAr
          ? 'جلسة فنية مع قيادات العمليات والتدريب بالمنشأة لتحديد الوحدة المستهدفة (مثل CDU)، ومراجعة مخططات P&ID، وتحديد سيناريوهات الطوارئ الأكثر خطورة.'
          : 'Technical session with plant operations and training leadership to define unit boundaries, review P&ID packages, and select critical emergency scenarios.'),
      timeline: isAr ? 'اليوم 1 - 3' : 'Days 1–3',
      deliverable: isAr ? 'ميثاق النطاق وحالات الطوارئ' : 'Pilot Scope & Scenario Charter',
    },
    {
      step: '02',
      icon: Cog,
      title:
        dict?.pilotSection?.steps?.[1]?.title ||
        (isAr ? 'تنفيذ مشروع تجريبي مخصص لوحدة واحدة' : 'Dedicated Single-Unit Pilot Deployment'),
      desc:
        dict?.pilotSection?.steps?.[1]?.desc ||
        (isAr
          ? 'بناء سريع ومطابقة نموذج التوأم الرقمي للوحدة التشغيلية المحددة (مثل برج التقطير أو شبكة التسخين)، مع تثبيته محلياً على حاسوب المنشأة واختبار 5 سيناريوهات طوارئ.'
          : 'Rapid build and tuning of a single unit digital twin (e.g. atmospheric column or preheat train), deployed on-premise with 5 custom emergency upset scenarios.'),
      timeline: isAr ? 'اليوم 4 - 14' : 'Days 4–14',
      deliverable: isAr ? 'منظومة التوأم الرقمي المعتمدة محلياً' : 'Air-Gapped Validated Unit Digital Twin',
    },
    {
      step: '03',
      icon: TrendingUp,
      title:
        dict?.pilotSection?.steps?.[2]?.title ||
        (isAr ? 'تقييم النتائج والتوسع المنهجي' : 'Qualification Acceptance & Facility Scale'),
      desc:
        dict?.pilotSection?.steps?.[2]?.desc ||
        (isAr
          ? 'قياس زمن استجابة المشغلين على الكونسول واعتماد مخرجات التدريب وفق معايير SOP، ثم الانتقال المنهجي لتغطية باقي وحدات المجمع الصناعي.'
          : 'Validate operator response latency gains on the console against verified SOP benchmarks, followed by systematic unit-by-unit expansion across the complex.'),
      timeline: isAr ? 'اليوم 15 فصاعداً' : 'Day 15 Onwards',
      deliverable: isAr ? 'تقرير التأهيل وخطة التوسع' : 'Trainee Qualification Report & Rollout',
    },
  ];

  const pilotDeliverables = [
    isAr ? 'حزمة برمجية هندسية كاملة تعمل محلياً بنظام Offline Air-Gapped' : '100% Offline Air-Gapped Engineering Software Package',
    isAr ? '5 سيناريوهات طوارئ مخصصة للوحدة (مثل انقطاع التغذية أو توقف الراجع)' : '5 Custom Plant Emergency Upsets (e.g. reflux loss, flameout)',
    isAr ? 'نظام تقييم واعتماد الكفاءة وفق إجراءات التشغيل القياسية (SOP)' : 'Automated Operator Scoring Engine aligned with plant SOPs',
    isAr ? 'اتفاقية سرية معلومات متبادلة (Mutual NDA) لحماية مخططات المنشأة' : 'Binding Mutual NDA protecting all plant engineering schematics',
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Panel Container */}
        <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/70 via-white to-blue-50/40 p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block">
              {dict?.pilotSection?.eyebrow || (isAr ? 'برنامج المشاريع التجريبية المنضبط' : 'STRUCTURED PILOT PROGRAMME')}
            </span>

            {/* Headline */}
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
              {dict?.pilotSection?.title ||
                (isAr
                  ? 'ابدأ بوحدة صناعية واحدة.\nثم توسع في باقي المنشأة.'
                  : 'Start with one process unit.\nExpand across the facility.')}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {dict?.pilotSection?.subtitle ||
                (isAr
                  ? 'برنامج تجريبي مدروس ومحدد النطاق ومحدود المخاطر، صُمم لإدارات العمليات والتدريب للتحقق من دقة وموثوقية النموذج على وحدة حقيقية قبل أي التزام رأسمالي واسع.'
                  : 'A structured, low-risk pilot program designed for plant operations and training leadership to validate model fidelity on a real process unit before wide deployment.')}
            </p>
          </div>

          {/* 3 Steps Row with Real Lucide Icons */}
          <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative rounded-xl border border-sky-100 bg-white p-6 shadow-2xs transition-colors hover:border-sky-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 border border-sky-200 text-sky-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded px-2 py-0.5">
                        {item.timeline}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <span className="text-slate-400 block mb-0.5">{isAr ? 'المخرج الهندسي:' : 'Deliverable:'}</span>
                    <span className="text-slate-900 font-semibold">{item.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pilot Deliverables Checklist Bar */}
          <div className="relative z-10 mt-10 rounded-xl border border-sky-100 bg-white/90 p-6 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono mb-4">
              {isAr ? 'ما تتضمنه حزمة المشروع التجريبي (Pilot Deliverables)' : 'INCLUDED IN EVERY PILOT DEPLOYMENT'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {pilotDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout & Action */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-sky-200/80 pt-8">
            <div className="text-xs text-slate-600 max-w-xl text-center sm:text-start">
              {isAr
                ? 'جاهزون لتوقيع اتفاقية سرية المعلومات (Mutual NDA) قبل استلام أي وثائق أو مخططات هندسية.'
                : 'Ready to execute mutual NDA prior to receiving any plant P&IDs or technical specifications.'}
            </div>

            <Link
              href={`/${locale}/pilot`}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-xs transition-colors active:scale-95 shrink-0"
            >
              <span>{dict?.common?.requestPilot || (isAr ? 'طلب مشروع تجريبي' : 'Request a Pilot')}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
