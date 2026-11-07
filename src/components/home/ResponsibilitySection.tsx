'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Shield, Trees, AlertOctagon } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ResponsibilitySectionProps {
  locale?: string;
  dict: Dict;
}

export function ResponsibilitySection({ locale = 'en', dict }: ResponsibilitySectionProps) {
  const pillars = [
    {
      icon: Shield,
      title:
        locale === 'ar'
          ? 'انعدام المخاطر على الكوادر البشرية'
          : 'Zero Personnel Hazard',
      desc:
        locale === 'ar'
          ? 'يختبر المتدرب تسريبات الضغط العالي والغازات واضطرابات الأبراج الحرجة من أمان جناح المحاكاة دون أي خطر على السلامة الشخصية.'
          : 'Trainees experience lethal high-pressure leaks, toxic surges, and column runaways from the safety of an air-gapped simulation suite.',
    },
    {
      icon: Trees,
      title:
        locale === 'ar'
          ? 'تقليل الانبعاثات وحرق الشعلة'
          : 'Zero Environmental Flaring',
      desc:
        locale === 'ar'
          ? 'إتقان إجراءات التعافي من الطوارئ يمنع عمليات تصريف وتنفيس الغازات للشعلة، مما يحمي البيئة المحيطة ويخفض الانبعاثات.'
          : 'Mastering upset recovery sequences prevents emergency flare blowdowns, protecting local communities and reducing unnecessary emissions.',
    },
    {
      icon: AlertOctagon,
      title:
        locale === 'ar'
          ? 'حماية الأصول والمعدات الرأسمالية'
          : 'Capital Equipment Integrity',
      desc:
        locale === 'ar'
          ? 'تفادي الصدمات الهيدروليكية وتصدع بطانات الأفران وتلف صواني التقطير الناتج عن سوء التعامل مع صمامات الطوارئ.'
          : 'Eliminates hydraulic shock, refractory thermal cracking, and tray displacement caused by improper emergency console valve handling.',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            dict?.responsibility?.eyebrow ||
            (locale === 'ar' ? 'السلامة والمسؤولية المجتمعية' : 'SAFETY & RESPONSIBILITY')
          }
          title={
            dict?.responsibility?.title ||
            (locale === 'ar'
              ? 'المصانع الأكثر أماناً تبدأ من غرفة المحاكاة.'
              : 'Safer plants start in the simulator.')
          }
          subtitle={
            locale === 'ar'
              ? 'المسؤولية الصناعية تبدأ من الانضباط التشغيلي؛ فممارسة سيناريوهات الخطر مسبقاً هي الدرع الأقوى لمنع وقوع الكوارث.'
              : 'Industrial responsibility is rooted in operational discipline. Practicing the worst day prevents the catastrophic day.'
          }
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs transition-colors hover:border-slate-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0A192F]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
