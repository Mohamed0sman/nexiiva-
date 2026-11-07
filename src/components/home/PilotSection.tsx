'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface PilotSectionProps {
  locale: string;
  dict: Dict;
}

export function PilotSection({ locale, dict }: PilotSectionProps) {
  const steps = [
    {
      step: '01',
      title:
        dict?.pilotSection?.steps?.[0]?.title ||
        (locale === 'ar' ? 'تحديد النطاق ومراجعة المخططات الهندسية' : 'Technical Scoping & Boundary Definition'),
      desc:
        dict?.pilotSection?.steps?.[0]?.desc ||
        (locale === 'ar'
          ? 'جلسة فنية مع قيادات العمليات والتدريب بالمنشأة لتحديد الوحدة المستهدفة (مثل CDU)، ومراجعة مخططات P&ID، وتحديد سيناريوهات الطوارئ الأكثر خطورة.'
          : 'Technical session with plant operations and training leadership to define unit boundaries, review P&ID packages, and select critical emergency scenarios.'),
      timeline: locale === 'ar' ? 'اليوم 1 - 3' : 'Days 1–3',
      deliverable: locale === 'ar' ? 'ميثاق النطاق وحالات الطوارئ' : 'Pilot Scope & Scenario Charter',
    },
    {
      step: '02',
      title:
        dict?.pilotSection?.steps?.[1]?.title ||
        (locale === 'ar' ? 'مشروع تجريبي مدفوع لوحدة واحدة' : 'Paid Pilot for One Process Unit'),
      desc:
        dict?.pilotSection?.steps?.[1]?.desc ||
        (locale === 'ar'
          ? 'بناء سريع ومطابقة نموذج المحاكاة للوحدة التشغيلية المحددة (مثل برج التقطير أو شبكة التسخين)، مع تثبيته محلياً على حاسوب المنشأة واختبار 5 سيناريوهات طوارئ.'
          : 'Rapid build and tuning of a single unit simulator (e.g. atmospheric column or preheat train), deployed on-premise with 5 custom emergency upset scenarios.'),
      timeline: locale === 'ar' ? 'اليوم 4 - 14' : 'Days 4–14',
      deliverable: locale === 'ar' ? 'محاكي الوحدة المعتمد محلياً' : 'Air-Gapped Validated Unit Simulator',
    },
    {
      step: '03',
      title:
        dict?.pilotSection?.steps?.[2]?.title ||
        (locale === 'ar' ? 'تقييم النتائج والتوسع المنهجي' : 'Qualification Acceptance & Facility Scale'),
      desc:
        dict?.pilotSection?.steps?.[2]?.desc ||
        (locale === 'ar'
          ? 'قياس زمن استجابة المشغلين على الكونسول واعتماد مخرجات التدريب وفق معايير SOP، ثم الانتقال المنهجي لتغطية باقي وحدات المجمع الصناعي.'
          : 'Validate operator response latency gains on the console against verified SOP benchmarks, followed by systematic unit-by-unit expansion across the complex.'),
      timeline: locale === 'ar' ? 'اليوم 15 فصاعداً' : 'Day 15 Onwards',
      deliverable: locale === 'ar' ? 'تقرير التأهيل وخطة التوسع' : 'Trainee Qualification Report & Rollout',
    },
  ];

  const pilotDeliverables = [
    locale === 'ar' ? 'برمجية محاكي كاملة تعمل محلياً بنظام Offline Air-Gapped' : '100% Offline Air-Gapped Simulator Software Package',
    locale === 'ar' ? '5 سيناريوهات طوارئ مخصصة للوحدة (مثل انقطاع التغذية أو توقف الراجع)' : '5 Custom Plant Emergency Upsets (e.g. reflux loss, flameout)',
    locale === 'ar' ? 'نظام تقييم واعتماد الكفاءة وفق إجراءات التشغيل القياسية (SOP)' : 'Automated Operator Scoring Engine aligned with plant SOPs',
    locale === 'ar' ? 'اتفاقية سرية معلومات متبادلة (Mutual NDA) لحماية مخططات المنشأة' : 'Binding Mutual NDA protecting all plant engineering schematics',
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Panel Container */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A192F] p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <span className="font-mono text-xs font-bold text-blue-300 uppercase tracking-wider block">
              {dict?.pilotSection?.eyebrow || (locale === 'ar' ? 'برنامج المشاريع التجريبية المنضبط' : 'STRUCTURED PILOT PROGRAMME')}
            </span>

            {/* Headline */}
            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              {dict?.pilotSection?.title ||
                (locale === 'ar'
                  ? 'ابدأ بوحدة صناعية واحدة.\nثم توسع في باقي المنشأة.'
                  : 'Start with one process unit.\nExpand across the facility.')}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {dict?.pilotSection?.subtitle ||
                (locale === 'ar'
                  ? 'برنامج تجريبي مدروس ومحدد النطاق ومحدود المخاطر، صُمم لإدارات العمليات والتدريب للتحقق من دقة وموثوقية المحاكي على وحدة حقيقية قبل أي التزام رأسمالي واسع.'
                  : 'A structured, low-risk pilot program designed for plant operations and training leadership to validate simulator fidelity on a real process unit before wide deployment.')}
            </p>
          </div>

          {/* 3 Steps Row */}
          <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-sm transition-colors hover:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-blue-400">
                      {item.step}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <span className="text-slate-500 block mb-0.5">{locale === 'ar' ? 'المخرج الهندسي:' : 'Deliverable:'}</span>
                  <span className="text-white font-medium">{item.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pilot Deliverables Checklist Bar */}
          <div className="relative z-10 mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono mb-4">
              {locale === 'ar' ? 'ما تتضمنه حزمة المشروع التجريبي (Pilot Deliverables)' : 'INCLUDED IN EVERY PILOT DEPLOYMENT'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {pilotDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-blue-400 font-bold shrink-0">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout & Action */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800 pt-8">
            <div className="text-xs text-slate-400">
              <span>
                {locale === 'ar'
                  ? 'جاهزية تامة للتوقيع على اتفاقية سرية المعلومات (Mutual NDA) قبل استلام أي وثائق هندسية.'
                  : 'Ready to execute mutual NDA prior to receiving any plant P&IDs or technical specifications.'}
              </span>
            </div>

            <Link
              href={`/${locale}/pilot`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-8 py-3.5 text-sm font-bold text-white shadow-xs transition-colors shrink-0 active:scale-95"
            >
              <span>{dict?.pilotSection?.cta || (locale === 'ar' ? 'طلب مناقشة مشروع تجريبي' : 'Request a Pilot Scoping')}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
