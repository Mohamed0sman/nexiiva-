'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import type { Dict } from '@/types/dict';

interface ComparisonSectionProps {
  locale?: string;
  dict: Dict;
}

export function ComparisonSection({ locale = 'en', dict }: ComparisonSectionProps) {
  const headers = [
    locale === 'ar' ? 'فئة المورد والحل' : 'Provider Category',
    locale === 'ar' ? 'نموذج التكلفة والاستثمار' : 'Capital Cost & Pricing',
    locale === 'ar' ? 'فترة البناء والتسليم' : 'Delivery Timeline',
    locale === 'ar' ? 'الأمان السيبراني' : 'Cybersecurity Architecture',
    locale === 'ar' ? 'مرونة التعديل على منطق الوحدة' : 'Model Agility & Updates',
  ];

  const rows = [
    {
      provider: locale === 'ar' ? 'موردو أنظمة الـ DCS الكبار' : 'Legacy DCS Vendors',
      providerDesc: locale === 'ar' ? 'شركات أنظمة التحكم العالمية الكبرى' : 'Major multi-national DCS conglomerates',
      cost: locale === 'ar' ? 'استثمار رأسمالي ضخم' : 'Heavy Capital Expenditure',
      costPill: 'high',
      delivery: locale === 'ar' ? '12 - 24 شهراً' : '12–24 Months',
      security: locale === 'ar' ? 'أجهزة كونسول متخصصة ومغلقة' : 'Proprietary hardware required',
      agility: locale === 'ar' ? 'عقود استشارية مطولة لكل تغيير' : 'Rigid, slow change-order contracts',
      isNexiiva: false,
    },
    {
      provider: locale === 'ar' ? 'شركات المحاكاة الاستشارية' : 'Specialist Boutique Firms',
      providerDesc: locale === 'ar' ? 'مكاتب استشارية تبني برمجيات مخصصة' : 'Boutique simulation consultancies',
      cost: locale === 'ar' ? 'تكلفة استشارية مرتفعة' : 'High Boutique Consulting Retainers',
      costPill: 'medium',
      delivery: locale === 'ar' ? '6 - 12 شهراً' : '6–12 Months',
      security: locale === 'ar' ? 'تثبيت محلي مع رسوم صيانة دورية باهظة' : 'On-premise with heavy annual retainer',
      agility: locale === 'ar' ? 'تعديل كود يدوي مطول ومكلف' : 'Manual code changes per modification',
      isNexiiva: false,
    },
    {
      provider: locale === 'ar' ? 'نكسيفا (Nexiiva Platform)' : 'Nexiiva Platform',
      providerDesc: locale === 'ar' ? 'محاكي عمليات ديناميكي بنمذجة مؤتمتة' : 'Next-generation automated unit modeling',
      cost: locale === 'ar' ? 'نموذج مرن للمشاريع' : 'Agile & Efficient Pilot Model',
      costPill: 'low',
      delivery: locale === 'ar' ? 'أسبوع إلى أسبوعين مستهدف للبناء' : '~1–2 Weeks Build Target',
      security: locale === 'ar' ? 'تشغيل محلي معزول 100% بدون إنترنت' : '100% Air-Gapped (Zero Cloud Dependency)',
      agility: locale === 'ar' ? 'إعادة توليد خوارزمية فورية للمنطق' : 'Algorithmic unit logic re-compilation',
      isNexiiva: true,
    },
  ];

  const getCostBadge = (pillType: string) => {
    if (pillType === 'low') {
      return 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
    }
    if (pillType === 'medium') {
      return 'bg-amber-50 text-amber-800 border-amber-300 font-semibold';
    }
    return 'bg-slate-100 text-slate-700 border-slate-300 font-semibold';
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.comparison?.eyebrow || (locale === 'ar' ? 'مقارنة الحلول والجدوى الاقتصادية' : 'TECHNICAL & ECONOMIC BENCHMARK')}
          title={
            dict?.comparison?.title ||
            (locale === 'ar'
              ? 'مقارنة اقتصاديات ومواصفات محاكيات التدريب الصناعي.'
              : 'A fundamental shift in simulator economics.')
          }
          subtitle={
            locale === 'ar'
              ? 'مقارنة فنية واقتصادية شفافة بين نماذج المحاكاة التقليدية الباهظة وبين منصة نكسيفا المعزولة محلياً.'
              : 'Comparing legacy high-capex simulator offerings with Nexiiva’s streamlined automated platform.'
          }
          theme="light"
        />

        {/* Comparison Table */}
        <div className="mt-14 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-6 text-start">{headers[0]}</th>
                  <th className="py-4 px-6 text-start">{headers[1]}</th>
                  <th className="py-4 px-6 text-start">{headers[2]}</th>
                  <th className="py-4 px-6 text-start">{headers[3]}</th>
                  <th className="py-4 px-6 text-start">{headers[4]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {rows.map((row, i) => {
                  const isHighlighted = row.isNexiiva;
                  return (
                    <tr
                      key={i}
                      className={`transition-colors ${
                        isHighlighted
                          ? 'bg-blue-50/70 font-medium'
                          : 'hover:bg-slate-50/60'
                      }`}
                    >
                      {/* 1. Provider */}
                      <td className="py-5 px-6">
                        <div>
                          <div
                            className={`font-bold ${
                              isHighlighted
                                ? 'text-slate-900 text-base'
                                : 'text-slate-800'
                            }`}
                          >
                            {row.provider}
                          </div>
                          <div className="text-xs text-slate-500 font-normal mt-0.5">
                            {row.providerDesc}
                          </div>
                        </div>
                      </td>

                      {/* 2. Cost */}
                      <td className="py-5 px-6">
                        <span
                          className={`inline-flex items-center rounded border px-2.5 py-1 text-xs ${getCostBadge(
                            row.costPill
                          )}`}
                        >
                          {row.cost}
                        </span>
                      </td>

                      {/* 3. Delivery */}
                      <td className="py-5 px-6 font-mono text-xs">
                        <span
                          className={`font-bold ${
                            isHighlighted ? 'text-[#1D4ED8]' : 'text-slate-700'
                          }`}
                        >
                          {row.delivery}
                        </span>
                      </td>

                      {/* 4. Security */}
                      <td className="py-5 px-6 text-xs text-slate-600">
                        <span className={isHighlighted ? 'text-slate-900 font-semibold' : ''}>
                          {row.security}
                        </span>
                      </td>

                      {/* 5. Agility */}
                      <td className="py-5 px-6 text-xs text-slate-600">
                        <span className={isHighlighted ? 'text-slate-900 font-semibold' : ''}>
                          {row.agility}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
