'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { CheckCircle2, Zap, XCircle, MinusCircle } from 'lucide-react';
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
      cost: locale === 'ar' ? 'باهظ التكلفة جداً ($1M+)' : 'Very High ($1M+ CapEx)',
      costPill: 'high',
      delivery: locale === 'ar' ? '12 - 24 شهراً' : '12–24 Months',
      deliveryPill: 'slow',
      security: locale === 'ar' ? 'تتطلب أجهزة كونسول متخصصة ومكلفة' : 'Proprietary hardware required',
      agility: locale === 'ar' ? 'تعديل جامد يتطلب عقود استشارية مطولة' : 'Rigid, slow change-order contracts',
      isNexiiva: false,
    },
    {
      provider: locale === 'ar' ? 'شركات المحاكاة الاستشارية المتخصصة' : 'Specialist Boutique Simulator Firms',
      providerDesc: locale === 'ar' ? 'مكاتب استشارية تبني برمجيات مخصصة' : 'Boutique simulation consultancies',
      cost: locale === 'ar' ? 'تكلفة مرتفعة ($400K - $800K)' : 'High ($400K–$800K)',
      costPill: 'medium',
      delivery: locale === 'ar' ? '6 - 12 شهراً' : '6–12 Months',
      deliveryPill: 'medium',
      security: locale === 'ar' ? 'تثبيت محلي مع رسوم صيانة دورية باهظة' : 'On-premise with heavy annual retainer',
      agility: locale === 'ar' ? 'تعديل برمجي يدوي طويل ومكلف' : 'Manual code changes per modification',
      isNexiiva: false,
    },
    {
      provider: locale === 'ar' ? 'نكسيفا (Nexiiva)' : 'Nexiiva Platform',
      providerDesc: locale === 'ar' ? 'محاكي عمليات ديناميكي بنمذجة مؤتمتة' : 'Next-generation automated unit modeling',
      cost: locale === 'ar' ? 'اقتصادي بكسر من التكلفة المعتادة' : 'Accessible (~75% Lower CapEx)',
      costPill: 'low',
      delivery: locale === 'ar' ? 'أسبوع إلى أسبوعين مستهدف للبناء' : '~1–2 Weeks Build Target',
      deliveryPill: 'fast',
      security: locale === 'ar' ? 'تشغيل محلي معزول 100% بدون إنترنت' : '100% Offline Air-Gapped (No Cloud)',
      agility: locale === 'ar' ? 'إعادة توليد خوارزمية فورية للمنطق' : 'Algorithmic unit logic re-compilation',
      isNexiiva: true,
    },
  ];

  const getCostBadge = (pillType: string) => {
    if (pillType === 'low') {
      return 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold';
    }
    if (pillType === 'medium') {
      return 'bg-amber-50 text-amber-700 border-amber-300 font-semibold';
    }
    return 'bg-red-50 text-red-700 border-red-300 font-semibold';
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.comparison?.eyebrow || (locale === 'ar' ? 'مقارنة الحلول والجدوى الاقتصادية' : 'TECHNICAL & ECONOMIC COMPARISON')}
          title={
            dict?.comparison?.title ||
            (locale === 'ar'
              ? 'نقلة نوعية في اقتصاديات محاكيات التدريب الصناعي.'
              : 'A fundamental shift in simulator economics.')
          }
          subtitle={
            locale === 'ar'
              ? 'مقارنة فنية واقتصادية شفافة بين نماذج المحاكاة التقليدية الباهظة وبين منصة نكسيفا الحديثة.'
              : 'Comparing legacy high-capex simulator offerings with Nexiiva’s streamlined automated platform.'
          }
          theme="light"
        />

        {/* Comparison Table */}
        <div className="mt-14 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 text-xs font-bold text-slate-700 uppercase tracking-wider">
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
                        <div className="flex items-center gap-3">
                          {isHighlighted ? (
                            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white shrink-0">
                              <Zap className="h-4 w-4" />
                            </div>
                          ) : (
                            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-200 text-slate-600 shrink-0">
                              <MinusCircle className="h-4 w-4" />
                            </div>
                          )}
                          <div>
                            <div
                              className={`font-bold ${
                                isHighlighted
                                  ? 'text-[#0A192F] text-base'
                                  : 'text-slate-800'
                              }`}
                            >
                              {row.provider}
                            </div>
                            <div className="text-xs text-slate-500 font-normal mt-0.5">
                              {row.providerDesc}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 2. Cost */}
                      <td className="py-5 px-6">
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${getCostBadge(
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
                            isHighlighted ? 'text-blue-700' : 'text-slate-700'
                          }`}
                        >
                          {row.delivery}
                        </span>
                      </td>

                      {/* 4. Security */}
                      <td className="py-5 px-6 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          {isHighlighted ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="h-4 w-4 text-slate-400 shrink-0" />
                          )}
                          <span className={isHighlighted ? 'text-slate-900 font-semibold' : ''}>
                            {row.security}
                          </span>
                        </div>
                      </td>

                      {/* 5. Agility */}
                      <td className="py-5 px-6 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          {isHighlighted ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="h-4 w-4 text-slate-400 shrink-0" />
                          )}
                          <span className={isHighlighted ? 'text-slate-900 font-semibold' : ''}>
                            {row.agility}
                          </span>
                        </div>
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
