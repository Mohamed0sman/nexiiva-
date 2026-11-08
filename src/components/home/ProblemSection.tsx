'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import type { Dict } from '@/types/dict';

interface ProblemSectionProps {
  locale?: string;
  dict: Dict;
}

export function ProblemSection({ locale = 'en', dict }: ProblemSectionProps) {
  const beats = [
    {
      step: '01',
      title:
        dict?.problem?.beats?.[0]?.title ||
        (locale === 'ar' ? 'اليوم الأول في غرفة التحكم' : 'Day one in the control room'),
      desc:
        dict?.problem?.beats?.[0]?.desc ||
        (locale === 'ar'
          ? 'مئات الشاشات والإنذارات المتتالية والتوجيه التقليدي: "اجلس بجوار المشغل الأقدم". تعلم بالمشاهدة المحدودة دون أي فرصة لممارسة حالات الطوارئ النادرة.'
          : 'Dozens of screens, cascading alarms, and the legacy instruction: "shadow the senior operator". Observational learning without critical emergency repetitions.'),
    },
    {
      step: '02',
      title:
        dict?.problem?.beats?.[1]?.title ||
        (locale === 'ar' ? 'واقع العام الأول من العمليات' : 'The annual operational reality'),
      desc:
        dict?.problem?.beats?.[1]?.desc ||
        (locale === 'ar'
          ? 'على مدار عام كامل، قد يمر المشغل بقرابة 8 اضطرابات تشغيلية فقط، أغلبها روتيني وبسيط. أما حالات الخطر الكبرى فلا يتعرض لها إطلاقاً.'
          : 'Over an entire operating year, an operator encounters perhaps eight minor upsets—most routine. Catastrophic transients remain unpracticed.'),
    },
    {
      step: '03',
      title:
        dict?.problem?.beats?.[2]?.title ||
        (locale === 'ar' ? 'غياب المشغل الخبير في الوردية الليلية' : 'The off-shift emergency'),
      desc:
        dict?.problem?.beats?.[2]?.desc ||
        (locale === 'ar'
          ? 'يقع حادث حرج ومفاجئ (انقطاع تغذية، تسريب، أو اضطراب ضغط) في غياب المشغل الخبير. ثوانٍ من التردد على الكونسول كافية لتفعيل الإغلاق التلقائي للوحدة.'
          : 'A rare hydraulic surge hits on an off-shift while the senior operator is off-site. Seconds of hesitation escalate into a full unit trip.'),
    },
    {
      step: '04',
      title:
        dict?.problem?.beats?.[3]?.title ||
        (locale === 'ar' ? 'فاتورة الخسائر الرأسمالية والتشغيلية' : 'The compounding economic loss'),
      desc:
        dict?.problem?.beats?.[3]?.desc ||
        (locale === 'ar'
          ? 'توقف إنتاج لمدة أسبوع، تلف بطانات حرارية، وتصريف وقود للشعلة وغرامات بيئية، ينتج عنها خسارة فورية تتجاوز 150 ألف دولار لحادثة واحدة.'
          : 'A week of downtime, damaged column trays, emergency flaring emissions, and off-spec product—costing over $150,000 from a single unhandled transient.'),
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50/70 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.problem?.eyebrow || (locale === 'ar' ? 'التحدي التشغيلي وسلامة الأصول' : 'THE OPERATIONAL PROBLEM')}
          title={
            dict?.problem?.title ||
            (locale === 'ar'
              ? 'التكلفة الباهظة للتعلم على وحدة صناعية حية.'
              : 'The prohibitive cost of learning on live industrial assets.')
          }
          subtitle={
            locale === 'ar'
              ? 'التدريب القائم على الملاحظة النظرية يترك مشغلي الكونسول في مواجهة اضطرابات العمليات النادرة دون ذاكرة عضلية كافية.'
              : 'Traditional observational training leaves console operators unequipped for rare, high-consequence process upsets.'
          }
          theme="light"
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left: 4 Progression Beats (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {beats.map((beat) => (
              <div
                key={beat.step}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs transition-colors hover:border-slate-300"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 border border-slate-200 rounded px-2.5 py-1 shrink-0">
                    {beat.step}
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {beat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {beat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Operational Incident Brief & Balance Sheet Breakdown (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Case Study Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {locale === 'ar' ? 'حالة دراسية واقعية' : 'OPERATIONAL CASE AUDIT'}
                </span>
                <span className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded px-2.5 py-0.5">
                  {locale === 'ar' ? 'إغلاق اضطراري كامل للوحدة' : 'Full Unit Emergency Trip'}
                </span>
              </div>

              <h4 className="mt-4 text-base font-bold text-slate-900">
                {locale === 'ar'
                  ? 'وحدة التقطير الجوي (CDU) — انقطاع مضخة الراجع'
                  : 'Atmospheric Distillation (CDU) — Reflux Pump Failure'}
              </h4>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {locale === 'ar'
                  ? 'تردد المشغل لمدة 45 ثانية في تحويل الصمامات إلى الدائرة الاحتياطية أدى إلى ارتفاع حراري مفاجئ بقمة البرج وتجاوز ضغط الأمان، مما استوجب إغلاق الوحدة وتصريف الهيدروكربونات للشعلة.'
                  : 'A 45-second operator delay while switching to the standby reflux circuit resulted in overhead temperature runaway, tripping automated ESD interlocks and venting to the flare header.'}
              </p>
            </div>

            {/* Operational Impact Breakdown Table */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {locale === 'ar'
                    ? 'الأثر التشغيلي المباشر للتوقف غير المخطط له'
                    : 'Unplanned Outage Impact Breakdown'}
                </h4>
                <span className="text-xs font-bold text-rose-700 font-mono">
                  {locale === 'ar' ? 'أثر حرج' : 'Critical Impact'}
                </span>
              </div>

              <div className="mt-4 divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-600">
                    {locale === 'ar' ? 'فاقد الإنتاج وتوقف الوحدة' : 'Production Downtime Duration'}
                  </span>
                  <span className="font-mono font-bold text-slate-900">{locale === 'ar' ? '7 أيام متواصلة' : '7 Days Continuous'}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-600">
                    {locale === 'ar' ? 'صيانة البطانات وصواني البرج الداخلية' : 'Refractory & Column Tray Mechanical Repair'}
                  </span>
                  <span className="font-mono font-bold text-slate-900">{locale === 'ar' ? 'إصلاح طارئ' : 'Emergency Repair'}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-600">
                    {locale === 'ar' ? 'غرامات تصريف الشعلة وإعادة تدوير الوقود' : 'Flare Emissions & Off-Spec Product Rerun'}
                  </span>
                  <span className="font-mono font-bold text-slate-900">{locale === 'ar' ? 'هدر إنتاجي' : 'Severe Product Loss'}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  {locale === 'ar' ? 'إجمالي الأثر التشغيلي لحادثة واحدة:' : 'Total Impact (Single Incident):'}
                </span>
                <span className="font-mono font-bold text-rose-700 text-sm">{locale === 'ar' ? 'تعطيل كامل للمنشأة' : 'Major Plant Disruption'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
