'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { CheckCircle2, Zap } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ComparisonSectionProps {
  locale?: string;
  dict: Dict;
}

export function ComparisonSection({ locale = 'en', dict }: ComparisonSectionProps) {
  const headers = dict?.comparison?.headers || [
    'Provider Category',
    'Cost Profile',
    'Delivery & Deployment Architecture',
  ];

  const rows = dict?.comparison?.rows || [
    {
      provider: 'Large DCS Vendors',
      cost: 'Very high cost',
      costPill: 'high',
      delivery: 'Longer delivery cycles, rigid vendor support, proprietary hardware requirements.',
      highlight: false,
    },
    {
      provider: 'Specialist Simulator Firms',
      cost: 'High cost',
      costPill: 'medium',
      delivery: 'Custom bespoke build per customer, heavy engineering consulting fees.',
      highlight: false,
    },
    {
      provider: 'Nexiiva',
      cost: 'Low cost',
      costPill: 'low',
      delivery: 'Fast customization; cloud or on-premise; offline-first air-gapped deployment.',
      highlight: true,
    },
  ];

  const getCostBadge = (pillType: string) => {
    if (pillType === 'low') {
      return 'bg-emerald-50 text-emerald-700 border-emerald-300';
    }
    if (pillType === 'medium') {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    return 'bg-red-50 text-red-700 border-red-200';
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.comparison?.eyebrow || (locale === 'ar' ? 'مقارنة الحلول التشغيلية' : 'TECHNICAL COMPARISON')}
          title={
            dict?.comparison?.title ||
            (locale === 'ar'
              ? 'نقلة نوعية في اقتصاديات محاكيات التدريب.'
              : 'A fundamental shift in simulator economics.')
          }
          subtitle={
            locale === 'ar'
              ? 'مقارنة بين أنظمة المحاكاة التقليدية الباهظة وبين منصة نكسيفا الحديثة.'
              : 'Comparing legacy high-capex simulator offerings with Nexiiva’s streamlined platform.'
          }
          theme="light"
        />

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-xs font-semibold text-slate-700">
                  <th className="py-4 px-6 text-start">{headers[0]}</th>
                  <th className="py-4 px-6 text-start">{headers[1]}</th>
                  <th className="py-4 px-6 text-start">{headers[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {rows.map((row, i) => {
                  const isHighlighted = !!row.highlight;
                  return (
                    <tr
                      key={i}
                      className={`transition-colors ${
                        isHighlighted
                          ? 'bg-blue-50/60 font-medium'
                          : 'hover:bg-slate-50/60'
                      }`}
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2">
                          {isHighlighted && (
                            <Zap className="h-4 w-4 text-[#1D4ED8]" />
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
                          </div>
                        </div>
                      </td>

                      <td className="py-5 px-6">
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getCostBadge(
                            row.costPill || (isHighlighted ? 'low' : 'high')
                          )}`}
                        >
                          {row.cost}
                        </span>
                      </td>

                      <td className="py-5 px-6 text-slate-600">
                        <div className="flex items-center gap-2">
                          {isHighlighted && (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          )}
                          <span
                            className={
                              isHighlighted ? 'text-slate-900 font-medium' : ''
                            }
                          >
                            {row.delivery}
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
