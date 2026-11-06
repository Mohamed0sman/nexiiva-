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
      costColor: 'bg-red-500/20 text-red-300 border-red-500/30',
      delivery: 'Longer delivery cycles, rigid vendor support, proprietary hardware locks.',
      isHighlighted: false,
    },
    {
      provider: 'Specialist Simulator Firms',
      sub: 'Bespoke industrial simulation houses',
      cost: 'High cost',
      costColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      delivery: 'Tailored to each customer; extensive bespoke engineering hours required.',
      isHighlighted: false,
    },
    {
      provider: 'Nexiiva',
      sub: 'Next-generation industrial OTS platform',
      cost: 'Low cost',
      costColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      delivery: 'Fast customization; cloud or on-premise; 100% offline air-gapped deployment.',
      isHighlighted: true,
    },
  ];

  return (
    <section className="relative py-24 bg-[#070912] overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.comparison?.eyebrow || '05 — HOW WE COMPARE'}
          title={
            dict?.comparison?.title ||
            'A fundamental shift in simulator economics.'
          }
          subtitle="How Nexiiva's automated unit builder disrupts traditional multi-million dollar vendor cycles."
        />

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E111D] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#121626] text-xs font-mono-tag font-bold text-[#9A9CB3] uppercase">
                  <th className="py-4 px-6 text-start">Provider Category</th>
                  <th className="py-4 px-6 text-start">Cost Profile</th>
                  <th className="py-4 px-6 text-start">Delivery & Deployment Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`transition-colors ${
                      row.isHighlighted
                        ? 'bg-[#181D33]/90 relative font-medium'
                        : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        {row.isHighlighted && (
                          <Zap className="h-4 w-4 text-[#38BDF8]" />
                        )}
                        <div>
                          <div className={`font-bold ${row.isHighlighted ? 'text-white text-base' : 'text-[#E9EAF4]'}`}>
                            {row.provider}
                          </div>
                          <div className="text-xs text-[#9A9CB3]">{row.sub}</div>
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

                    <td className="py-5 px-6 text-[#9A9CB3]">
                      <div className="flex items-center gap-2">
                        {row.isHighlighted && (
                          <CheckCircle2 className="h-4 w-4 text-[#22C55E] shrink-0" />
                        )}
                        <span className={row.isHighlighted ? 'text-[#E9EAF4]' : ''}>
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
