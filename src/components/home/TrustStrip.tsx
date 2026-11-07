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
  dict?: Dict;
}

export function TrustStrip({ dict }: TrustStripProps) {
  const specs = [
    {
      metric: '100%',
      title: dict?.trustStrip?.[6] || 'تشغيل محلي معزول (Air-Gapped)',
      desc: 'يعمل دون إنترنت لضمان سرية وأمن بيانات المنشأة بالكامل.',
      icon: ShieldCheck,
    },
    {
      metric: '387',
      title: dict?.trustStrip?.[2] || 'معدة وطراز هيدروليكي معتمد',
      desc: 'مكتبة نمذجة متكاملة للأبراج والأفران والمضخات ومبادلات الحرارة.',
      icon: Boxes,
    },
    {
      metric: '1:1',
      title: 'مطابقة شاشات التحكم الموزع (DCS)',
      desc: 'نفس لوحات التحكم ومؤشرات الإنذار التي يتعامل معها المشغل يومياً.',
      icon: MonitorCheck,
    },
    {
      metric: '~1 wk',
      title: 'أسبوع واحد مستهدف للبناء',
      desc: 'مستهدف قياسي لبناء واختبار محاكي الوحدة التشغيلية.',
      icon: Clock4,
    },
  ];

  return (
    <section
      id="trust-strip"
      className="relative z-20 border-y border-slate-200 bg-slate-50/80 py-8"
      aria-label="Platform Specifications"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-base font-bold text-[#0A192F]">
                      {item.metric}
                    </span>
                    <span className="text-xs font-bold text-slate-800 truncate">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
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
