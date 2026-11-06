import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { InvestorFinancialsChart } from '@/components/InvestorCharts';
import { ContactForm } from '@/components/ContactForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'معلومات المستثمرين' : 'Investor Briefing & Market Sizing',
    description:
      'Nexiiva market sizing (TAM/SAM/SOM), unit economics ($800 pilot), 3-year financial model, and $10K seed ask.',
  };
}

export default async function InvestorsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-24 bg-[#05060A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DECK-DERIVED BRIEFING"
          title="Investor Presentation & Financial Model"
          subtitle="Data-dense briefing derived directly from the Nexiiva pitch deck. Market figures and projections are internal engineering estimates."
        />

        {/* Section 1: TAM / SAM / SOM Concentric Overlapping Glass Circles */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0A0D18] p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono-tag text-xs font-bold text-[#8B4CFF] uppercase">
                ADDRESSABLE MARKET SIZING
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                TAM · SAM · SOM Hierarchy
              </h2>
            </div>
            <span className="rounded bg-white/5 px-3 py-1 font-mono-tag text-xs text-[#9A9CB3] border border-white/10">
              Internal Market Estimates
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TAM */}
            <div className="relative rounded-2xl border border-white/10 bg-[#0E111C] p-6 shadow-xl">
              <span className="font-mono-tag text-xs font-bold text-[#8B4CFF]">
                TAM (TOTAL ADDRESSABLE MARKET)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-white font-mono-tag">
                $0.54 – 1.86M<span className="text-sm text-[#9A9CB3]">/yr</span>
              </div>
              <p className="mt-3 text-xs text-[#9A9CB3] leading-relaxed">
                Egypt, GCC, and Africa (excl. Egypt):
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-mono-tag text-[#E9EAF4]">
                <li>• 50 Operating Companies</li>
                <li>• 97 Processing Sites</li>
                <li>• 194 – 388 Process Units</li>
              </ul>
            </div>

            {/* SAM */}
            <div className="relative rounded-2xl border border-white/10 bg-[#111424] p-6 shadow-xl">
              <span className="font-mono-tag text-xs font-bold text-[#38BDF8]">
                SAM (SERVICEABLE ADDRESSABLE)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-[#38BDF8] font-mono-tag">
                $0.14 – 0.48M<span className="text-sm text-[#9A9CB3]">/yr</span>
              </div>
              <p className="mt-3 text-xs text-[#9A9CB3] leading-relaxed">
                Egypt (First Deployment Market):
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-mono-tag text-[#E9EAF4]">
                <li>• 23 Refining/Gas Companies</li>
                <li>• 25 Operating Sites</li>
                <li>• 50 – 100 Process Units</li>
              </ul>
            </div>

            {/* SOM */}
            <div className="relative rounded-2xl border border-[#8B4CFF] bg-[#161A30] p-6 shadow-2xl">
              <span className="font-mono-tag text-xs font-bold text-[#22C55E]">
                SOM (SERVICEABLE OBTAINABLE)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-[#22C55E] font-mono-tag">
                $44.7K<span className="text-sm text-[#9A9CB3]"> Year 3 Base</span>
              </div>
              <p className="mt-3 text-xs text-[#9A9CB3] leading-relaxed">
                Year 3 Base Case Target:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-mono-tag text-white">
                <li>• 6 Direct Customers</li>
                <li>• 6 Process Units Deployed</li>
                <li>• 6% – 12% of Egypt&apos;s Units</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Business Model ($800 Paid Pilot) */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0A0D18] p-8 lg:p-12 shadow-2xl">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-bold text-[#22C55E] uppercase">
              COMMERCIAL MECHANISM
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              Business Model: $800 Paid Pilot & Land-and-Expand
            </h2>
            <p className="mt-3 text-sm text-[#9A9CB3] leading-relaxed">
              We eliminate traditional 6-to-12 month RFP gridlock with a frictionless, low-commitment initial engagement:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0E111C] p-6">
              <span className="font-mono-tag text-xs text-[#8B4CFF] font-bold">STAGE 1</span>
              <h3 className="mt-2 text-xl font-bold text-white">$800 Paid Pilot</h3>
              <p className="mt-2 text-xs text-[#9A9CB3] leading-relaxed">
                One industrial process unit (e.g. atmospheric column). Proves speed, modeling accuracy, and console ergonomics within ~1 week build time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0E111C] p-6">
              <span className="font-mono-tag text-xs text-[#38BDF8] font-bold">STAGE 2</span>
              <h3 className="mt-2 text-xl font-bold text-white">Annual Unit Licensing</h3>
              <p className="mt-2 text-xs text-[#9A9CB3] leading-relaxed">
                Conversion from pilot to multi-year software licensing covering shift training, scenario libraries, and instructor consoles.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0E111C] p-6">
              <span className="font-mono-tag text-xs text-[#22C55E] font-bold">STAGE 3</span>
              <h3 className="mt-2 text-xl font-bold text-white">Facility-Wide Expansion</h3>
              <p className="mt-2 text-xs text-[#9A9CB3] leading-relaxed">
                Land and expand across the entire refinery complex (preheat train, vacuum column, hydrotreater, reformer).
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Financial Model & Projections Chart (Recharts) */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0A0D18] p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono-tag text-xs font-bold text-[#8B4CFF] uppercase">
                3-YEAR PROJECTIONS
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Financial Forecast (Base Case)
              </h2>
            </div>
            <div className="text-xs font-mono-tag text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 rounded px-3 py-1">
              Base case breaks even in Year 2; pessimistic case in Year 3
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Chart (8 cols) */}
            <div className="lg:col-span-8">
              <InvestorFinancialsChart />
            </div>

            {/* Metrics Breakdown Cards (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-[#0E111C] p-4">
                <span className="font-mono-tag text-[10px] text-[#9A9CB3] block">YEAR 1 BASE</span>
                <div className="flex justify-between items-baseline mt-1 font-mono-tag">
                  <span className="text-sm font-bold text-white">Rev: $7.4K</span>
                  <span className="text-xs text-[#38BDF8]">GP: $5.1K (70%)</span>
                </div>
                <div className="text-xs text-red-400 font-mono-tag mt-0.5">Net Income: −$4.8K</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0E111C] p-4">
                <span className="font-mono-tag text-[10px] text-[#9A9CB3] block">YEAR 2 BASE (PROFITABLE)</span>
                <div className="flex justify-between items-baseline mt-1 font-mono-tag">
                  <span className="text-sm font-bold text-white">Rev: $25.4K</span>
                  <span className="text-xs text-[#38BDF8]">GP: $20.2K (79%)</span>
                </div>
                <div className="text-xs text-[#22C55E] font-mono-tag mt-0.5">Net Income: +$12.4K</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0E111C] p-4">
                <span className="font-mono-tag text-[10px] text-[#9A9CB3] block">YEAR 3 BASE</span>
                <div className="flex justify-between items-baseline mt-1 font-mono-tag">
                  <span className="text-sm font-bold text-white">Rev: $44.7K</span>
                  <span className="text-xs text-[#38BDF8]">GP: $30.1K (67%)</span>
                </div>
                <div className="text-xs text-[#22C55E] font-mono-tag mt-0.5">Net Income: +$14.6K</div>
              </div>

              <div className="p-3 bg-white/5 rounded-xl text-[11px] font-mono-tag text-[#9A9CB3]">
                Cumulative 3-yr net income: Base $22.2K · Optimistic $83.6K · Pessimistic $3.9K
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: The Ask ($10,000 Seed) */}
        <div className="mt-16 rounded-3xl border border-[#8B4CFF]/50 bg-gradient-to-br from-[#12162E] via-[#0E1122] to-[#080A14] p-8 lg:p-12 shadow-[0_0_50px_rgba(109,59,240,0.2)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono-tag text-xs font-bold text-[#38BDF8] uppercase">
                CAPITAL ALLOCATION
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                The Ask: $10,000 Pre-Seed
              </h2>
            </div>
            <span className="font-mono-tag text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-lg px-3 py-1.5">
              Goal: First Paid Pilot within ~3 Months
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#070912]/80 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs font-bold text-white">LEGAL & REGISTRATION</span>
                <span className="text-2xl font-bold font-mono-tag text-[#8B4CFF]">$7,000</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#9A9CB3]">
                Company incorporation, commercial registration, specialized legal counsel, accountant retainer, and office setup/fit-out.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#070912]/80 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs font-bold text-white">INFRASTRUCTURE & OPS</span>
                <span className="text-2xl font-bold font-mono-tag text-[#38BDF8]">$3,000</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#9A9CB3]">
                Corporate domain, business email infrastructure, API subscriptions, development workstation, and dedicated simulation testing servers.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Investor Inquiry Form */}
        <div className="mt-20 max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="INVESTOR CONTACT"
            title="Direct Investor Discussion"
            subtitle="Request the complete pitch deck, detailed financial models, or schedule a founder conference."
            align="center"
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
