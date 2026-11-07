'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Shield, Trees, AlertOctagon, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ResponsibilitySectionProps {
  locale?: string;
  dict: Dict;
}

export function ResponsibilitySection({ locale = 'en', dict }: ResponsibilitySectionProps) {
  const pillars = [
    {
      icon: Shield,
      standard: locale === 'ar' ? 'معيار OSHA PSM 1910.119' : 'OSHA PSM 1910.119 COMPLIANT',
      title:
        locale === 'ar'
          ? 'انعدام المخاطر تماماً على الكوادر البشرية'
          : 'Zero Personnel Hazard in Training',
      desc:
        locale === 'ar'
          ? 'يختبر المتدرب تسريبات الضغط العالي والغازات السامة واضطرابات الأبراج الحرجة من أمان جناح المحاكاة دون أي خطر على السلامة الشخصية للمشغلين.'
          : 'Trainees experience lethal high-pressure leaks, toxic surges, and column runaways from the safety of an air-gapped simulation suite without physical danger.',
      impact:
        locale === 'ar'
          ? 'تأهيل كامل للتعامل مع السيناريوهات المميتة دون تعريض فرد واحد للخطر'
          : 'Full muscle-memory reps on lethal scenarios with zero operator risk',
    },
    {
      icon: Trees,
      standard: locale === 'ar' ? 'معايير حماية البيئة وخفض الانبعاثات' : 'EMISSIONS & FLARING MITIGATION',
      title:
        locale === 'ar'
          ? 'تقليل انبعاثات وتصريف الشعلة الطارئة'
          : 'Zero Environmental Flaring Outages',
      desc:
        locale === 'ar'
          ? 'إتقان إجراءات التعافي من الطوارئ يمنع عمليات تصريف وتنفيس الغازات للشعلة (Emergency Blowdowns)، مما يحمي البيئة المحيطة ويخفض الانبعاثات الكربونية.'
          : 'Mastering upset recovery sequences prevents emergency flare blowdowns, protecting local communities and eliminating costly carbon penalties.',
      impact:
        locale === 'ar'
          ? 'خفض الغرامات البيئية الناتجة عن إطلاق الغازات غير المخطط له'
          : 'Dramatically reduces flaring fines and off-spec hydrocarbon loss',
    },
    {
      icon: AlertOctagon,
      standard: locale === 'ar' ? 'حماية المعدات API RP 571' : 'API RP 571 DAMAGE MITIGATION',
      title:
        locale === 'ar'
          ? 'حماية الأصول والمعدات الرأسمالية الحساسة'
          : 'Capital Equipment Integrity & Asset Life',
      desc:
        locale === 'ar'
          ? 'تفادي الصدمات الهيدروليكية وتصدع بطانات الأفران الحرارية وتلف صواني التقطير الناتج عن سوء التعامل أو التردد في فتح وإغلاق صمامات الطوارئ.'
          : 'Eliminates hydraulic shock, refractory thermal cracking, and tray displacement caused by improper emergency console valve manipulation.',
      impact:
        locale === 'ar'
          ? 'إطالة العمر التشغيلي لمعدات الملايين وتفادي توقفات الصيانة الطارئة'
          : 'Extends equipment lifecycle and eliminates multi-million dollar repairs',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            dict?.responsibility?.eyebrow ||
            (locale === 'ar' ? 'السلامة والمسؤولية الصناعية' : 'PROCESS SAFETY & INDUSTRIAL RESPONSIBILITY')
          }
          title={
            dict?.responsibility?.title ||
            (locale === 'ar'
              ? 'المصانع الأكثر أماناً تبدأ من غرفة المحاكاة.'
              : 'Safer plants start in the simulator.')
          }
          subtitle={
            locale === 'ar'
              ? 'المسؤولية الصناعية تبدأ من الانضباط التشغيلي؛ فممارسة سيناريوهات الخطر مسبقاً هي الدرع الأقوى لحماية الأرواح والبيئة والأصول.'
              : 'Industrial responsibility is rooted in operational discipline. Practicing the worst day prevents the catastrophic day.'
          }
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-8 shadow-2xs transition-colors hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.standard}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0A192F]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
