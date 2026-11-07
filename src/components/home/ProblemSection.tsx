'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Clock,
  UserX,
  TrendingUp,
  Flame,
  AlertTriangle,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ProblemSectionProps {
  locale?: string;
  dict: Dict;
}

export function ProblemSection({ locale = 'en', dict }: ProblemSectionProps) {
  const [activeBeat, setActiveBeat] = useState(0);

  const beats = [
    {
      step: '01',
      icon: Clock,
      title:
        dict?.problem?.beats?.[0]?.title ||
        (locale === 'ar' ? 'اليوم الأول في غرفة التحكم' : 'Day one in the control room'),
      desc:
        dict?.problem?.beats?.[0]?.desc ||
        (locale === 'ar'
          ? 'مئات الشاشات، إنذارات متتالية، والتوجيه المعتاد: "اجلس بجوار المشغل الأقدم". تعلم يعتمد على المشاهدة فقط دون تجربة مواقف الخطر.'
          : "Screens, alarms, and 'sit next to the senior'. Observational learning without critical emergency repetitions."),
    },
    {
      step: '02',
      icon: TrendingUp,
      title:
        dict?.problem?.beats?.[1]?.title ||
        (locale === 'ar' ? 'واقع العام الأول' : 'The annual reality'),
      desc:
        dict?.problem?.beats?.[1]?.desc ||
        (locale === 'ar'
          ? 'بعد عام كامل، يمر المشغل بقرابة 8 اضطرابات تشغيلية فقط — 3 منها متكررة وروتينية. أما الحالات الحرجة فلا فرصة لممارستها.'
          : 'After a year, an operator has seen about 8 operational upsets — 3 of them routine. Critical transients remain unpracticed.'),
    },
    {
      step: '03',
      icon: UserX,
      title:
        dict?.problem?.beats?.[2]?.title ||
        (locale === 'ar' ? 'غياب المشغل الخبير' : 'The senior is absent'),
      desc:
        dict?.problem?.beats?.[2]?.desc ||
        (locale === 'ar'
          ? 'يقع حادث غير مسبوق: تسريب، حريق، أو إيقاف طارئ في ظل غياب المشغل القديم. أي تردد ثوانٍ معدودة يتحول إلى إغلاق كامل للوحدة.'
          : 'A rare upset hits during an off-shift with the senior away. Seconds of hesitation escalate into a full unit trip.'),
    },
    {
      step: '04',
      icon: Flame,
      title:
        dict?.problem?.beats?.[3]?.title ||
        (locale === 'ar' ? 'فاتورة الخسائر المتراكمة' : 'The compounding cost'),
      desc:
        dict?.problem?.beats?.[3]?.desc ||
        (locale === 'ar'
          ? '7 أيام توقف (70 ألف دولار) + صيانة وبطانات (50 ألف دولار) + غرامات منتجات ومخالفات (30 ألف دولار) = إجمالي 150 ألف دولار.'
          : '7 days downtime ($70K) + refractory repairs ($50K) + off-spec penalties ($30K) = $150K direct damage from one small problem.'),
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50/70 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.problem?.eyebrow || (locale === 'ar' ? 'التحدي التشغيلي' : 'THE OPERATIONAL PROBLEM')}
          title={
            dict?.problem?.title ||
            (locale === 'ar'
              ? 'التكلفة الباهظة للتعلم على وحدة صناعية حية.'
              : 'The prohibitive cost of learning on live industrial assets.')
          }
          subtitle={
            locale === 'ar'
              ? 'التدريب التقليدي القائم على المشاهدة فقط يترك مشغلي الكونسول غير مستعدين للتعامل مع اضطرابات العمليات النادرة والحرجة.'
              : 'Traditional observational training leaves console operators unequipped for rare, catastrophic process upsets.'
          }
          theme="light"
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left: 4 Beats Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {beats.map((beat, index) => {
              const Icon = beat.icon;
              const isSelected = activeBeat === index;

              return (
                <div
                  key={beat.step}
                  onClick={() => setActiveBeat(index)}
                  className={`cursor-pointer rounded-xl border p-5 transition-all duration-200 ${
                    isSelected
                      ? 'border-slate-400 bg-white shadow-xs'
                      : 'border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#0A192F] text-white'
                          : 'bg-slate-100 border border-slate-200 text-slate-600'
                      }`}
                    >
                      {beat.step}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-base font-bold transition-colors ${
                            isSelected ? 'text-[#0A192F]' : 'text-slate-800'
                          }`}
                        >
                          {beat.title}
                        </h3>
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            isSelected ? 'text-[#1D4ED8]' : 'text-slate-400'
                          }`}
                        />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {beat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Operational Incident Brief + Cost Breakdown (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Operational Incident Case Brief */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {locale === 'ar' ? 'نموذج حالة تشغيلية واقعية' : 'OPERATIONAL INCIDENT MODEL'}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-semibold text-red-700 border border-red-200">
                  <AlertTriangle className="h-3 w-3 text-red-600" />
                  <span>{locale === 'ar' ? 'إغلاق اضطراري كامل للوحدة' : 'Full Unit Emergency Trip'}</span>
                </span>
              </div>

              <h4 className="mt-4 text-base font-bold text-[#0A192F]">
                {locale === 'ar'
                  ? 'وحدة التقطير الجوي (CDU) — انقطاع تيار الراجع'
                  : 'Atmospheric Column (CDU) — Reflux Pump Failure'}
              </h4>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {locale === 'ar'
                  ? 'أدى تردد المشغل لمدة 45 ثانية في تحويل الصمامات إلى ارتفاع حرارة قمة البرج وتجاوز ضغط الأمان، مما استوجب إيقاف الوحدة كلياً وتصريف الهيدروكربونات للشعلة.'
                  : 'A 45-second operator hesitation while switching to the standby reflux circuit resulted in overhead temperature runaway, tripping automated ESD interlocks.'}
              </p>
            </div>

            {/* Cost Buildup Breakdown Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {locale === 'ar'
                    ? 'تحليل التكلفة التقديرية للتوقف غير المخطط له'
                    : 'Estimated Unplanned Trip Cost Analysis'}
                </h4>
                <span className="text-xs font-bold text-red-600 font-mono">
                  +$150,000 USD
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {/* 1. Downtime */}
                <div>
                  <div className="flex justify-between text-xs text-slate-700">
                    <span>
                      {locale === 'ar'
                        ? 'فاقد الإنتاج وتوقف الوحدة (7 أيام)'
                        : '7 Days Lost Production Downtime'}
                    </span>
                    <span className="text-slate-900 font-bold font-mono">$70,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-700 rounded-full w-[47%]" />
                  </div>
                </div>

                {/* 2. Equipment Repairs */}
                <div>
                  <div className="flex justify-between text-xs text-slate-700">
                    <span>
                      {locale === 'ar'
                        ? 'صيانة البطانات والأعطال الداخلية للصواني'
                        : 'Refractory & Valve Mechanical Repairs'}
                    </span>
                    <span className="text-slate-900 font-bold font-mono">$50,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full w-[33%]" />
                  </div>
                </div>

                {/* 3. Off-spec & Penalties */}
                <div>
                  <div className="flex justify-between text-xs text-slate-700">
                    <span>
                      {locale === 'ar'
                        ? 'مخالفات تصريف الشعلة والمنتجات خارج المواصفات'
                        : 'Flaring Penalties & Off-Spec Product Rerun'}
                    </span>
                    <span className="text-slate-900 font-bold font-mono">$30,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full w-[20%]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  {locale === 'ar'
                    ? 'إجمالي الخسائر المباشرة لحادثة واحدة:'
                    : 'Total Direct Loss from Single Incident:'}
                </span>
                <span className="font-bold text-[#0A192F] font-mono">$150,000 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
