'use client';

import React from 'react';
import type { Dict } from '@/types/dict';

interface TrustStripProps {
  locale?: string;
  dict?: Dict;
}

export function TrustStrip({ locale = 'en' }: TrustStripProps) {
  const isAr = locale === 'ar';

  const stats = [
    {
      metric: '100%',
      label: isAr ? 'تشغيل محلي معزول (Air-Gapped)' : 'Air-Gapped Deployment',
      detail: isAr ? 'يعمل دون إنترنت لضمان أمان المنشأة' : 'Runs strictly on-premise without cloud risk',
    },
    {
      metric: '387',
      label: isAr ? 'معدة وطراز هيدروليكي معتمد' : 'Verified Equipment Models',
      detail: isAr ? 'مكتبة نمذجة ديناميكية متكاملة' : 'Dynamic library of distillation, pumps & valves',
    },
    {
      metric: '1:1',
      label: isAr ? 'مطابقة شاشات الـ DCS' : 'DCS Console Parity',
      detail: isAr ? 'نفس لوحات التحكم والإنذارات الحقيقية' : 'Exact replication of live control room faceplates',
    },
    {
      metric: '~1 wk',
      label: isAr ? 'مستهدف بناء الوحدة' : 'Target Build Turnaround',
      detail: isAr ? 'تسليم سريع بدلاً من سنوات الانتظار' : 'Days to configure instead of multi-year cycles',
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="border-s-2 border-sky-300 ps-4 sm:ps-6">
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight">
                {item.metric}
              </div>
              <div className="mt-2 text-sm font-bold text-slate-900">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-slate-500 leading-normal">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
