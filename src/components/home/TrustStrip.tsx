'use client';

import React from 'react';
import {
  ShieldCheck,
  Boxes,
  MonitorCheck,
  Clock4,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface TrustStripProps {
  locale?: string;
  dict?: Dict;
}

export function TrustStrip({ locale = 'en' }: TrustStripProps) {
  const specs = [
    {
      metric: '100%',
      title:
        locale === 'ar'
          ? 'تشغيل محلي معزول (Air-Gapped)'
          : '100% Air-Gapped Deployment',
      desc:
        locale === 'ar'
          ? 'يعمل دون اتصال بالإنترنت لضمان سرية وأمن بيانات المنشأة الحيوية.'
          : 'Runs strictly on-premise without internet, ensuring zero industrial cyber risk.',
      icon: ShieldCheck,
    },
    {
      metric: '387',
      title:
        locale === 'ar'
          ? 'معدة وطراز هيدروليكي معتمد'
          : '387 Verified Equipment Models',
      desc:
        locale === 'ar'
          ? 'مكتبة نمذجة متكاملة للأبراج والأفران والمضخات ومبادلات الحرارة.'
          : 'Comprehensive library of verified distillation, furnace, pump, and valve dynamics.',
      icon: Boxes,
    },
    {
      metric: '1:1',
      title:
        locale === 'ar'
          ? 'مطابقة شاشات التحكم الموزع (DCS)'
          : '1:1 DCS Console Matching',
      desc:
        locale === 'ar'
          ? 'نفس لوحات التحكم ومؤشرات الإنذار التي يتعامل معها المشغل يومياً.'
          : 'Exact replication of console faceplates, alarm annunciators, and live trend monitors.',
      icon: MonitorCheck,
    },
    {
      metric: '~1 wk',
      title:
        locale === 'ar'
          ? 'أسبوع واحد مستهدف للبناء'
          : '~1 Week Build Time Target',
      desc:
        locale === 'ar'
          ? 'مستهدف قياسي لبناء واختبار محاكي الوحدة التشغيلية.'
          : 'Target build turnaround to configure and test a single unit dynamic simulator.',
      icon: Clock4,
    },
  ];

  return (
    <section
      id="trust-strip"
      className="relative z-20 border-b border-slate-200 bg-white py-10"
      aria-label="Platform Specifications"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold tracking-tight text-[#0A192F]">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="mt-1 text-xs font-bold text-[#0A192F]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
