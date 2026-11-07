'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { CheckCircle2, Zap } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ComparisonSectionProps {
  dict: Dict;
}

export function ComparisonSection({ dict }: ComparisonSectionProps) {
  const rows = [
    {
      provider: 'Large DCS Vendors',
      sub: 'Multinational control system manufacturers',
      cost: 'Very high cost',
      costColor: 'bg-red-50 text-red-700 border-red-200',
      delivery: 'Longer delivery cycles, rigid vendor support, proprietary hardware locks.',
      isHighlighted: false,
    },
    {
      provider: 'Specialist Simulator Firms',
      sub: 'Bespoke industrial simulation houses',
      cost: 'High cost',
      costColor: 'bg-amber-50 text-amber-700 border-amber-200',
      delivery: 'Tailored to each customer; extensive bespoke engineering hours required.',
      isHighlighted: false,
    },
    {
      provider: 'Nexiiva',
      sub: 'Next-generation industrial OTS platform',
      cost: 'Low cost',
      costColor: 'bg-emerald-50 text-emerald-700 border-emerald-300',
      delivery: 'Fast customization; cloud or on-premise; 100% offline air-gapped deployment.',
      isHighlighted: true,
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.comparison?.eyebrow || '05 — HOW WE COMPARE'}
          title={
            dict?.comparison?.title ||
            'A fundamental shift in simulator economics.'
          }
          subtitle="How Nexiiva's automated unit builder disrupts traditional multi-million dollar vendor cycles."
          theme="light"
        />

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-mono-tag font-bold text-slate-700 uppercase">
                  <th className="py-4 px-6 text-start">Provider Category</th>
                  <th className="py-4 px-6 text-start">Cost Profile</th>
                  <th className="py-4 px-6 text-start">Delivery & Deployment Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`transition-colors ${
                      row.isHighlighted
                        ? 'bg-blue-50/60 font-medium'
                        : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        {row.isHighlighted && (
                          <Zap className="h-4 w-4 text-[#1D4ED8]" />
                        )}
                        <div>
                          <div className={`font-bold ${row.isHighlighted ? 'text-[#0A192F] text-base' : 'text-slate-800'}`}>
                            {row.provider}
                          </div>
                          <div className="text-xs text-slate-500">{row.sub}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-5 px-6">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 font-mono-tag text-xs font-semibold ${row.costColor}`}
                      >
                        {row.cost}
                      </span>
                    </td>

                    <td className="py-5 px-6 text-slate-600">
                      <div className="flex items-center gap-2">
                        {row.isHighlighted && (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        )}
                        <span className={row.isHighlighted ? 'text-slate-900 font-medium' : ''}>
                          {row.delivery}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
