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
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DECK-DERIVED BRIEFING"
          title="Investor Presentation & Financial Model"
          subtitle="Data-dense briefing derived directly from the Nexiiva pitch deck. Market figures and projections are internal engineering estimates."
          theme="light"
        />

        {/* Section 1: TAM / SAM / SOM Concentric Overlapping Cards */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="font-mono-tag text-xs font-bold text-[#1D4ED8] uppercase">
                ADDRESSABLE MARKET SIZING
              </span>
              <h2 className="text-2xl font-bold text-[#0A192F] mt-1">
                TAM · SAM · SOM Hierarchy
              </h2>
            </div>
            <span className="rounded bg-slate-100 px-3 py-1 font-mono-tag text-xs text-slate-600 border border-slate-200">
              Internal Market Estimates
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TAM */}
            <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="font-mono-tag text-xs font-bold text-[#1D4ED8]">
                TAM (TOTAL ADDRESSABLE MARKET)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-[#0A192F] font-mono-tag">
                $0.54 – 1.86M<span className="text-sm text-slate-500">/yr</span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Egypt, GCC, and Africa (excl. Egypt):
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-mono-tag text-slate-700">
                <li>• 50 Operating Companies</li>
                <li>• 97 Processing Sites</li>
                <li>• 194 – 388 Process Units</li>
              </ul>
            </div>

            {/* SAM */}
            <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="font-mono-tag text-xs font-bold text-[#1D4ED8]">
                SAM (SERVICEABLE ADDRESSABLE)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-[#0A192F] font-mono-tag">
                $0.14 – 0.48M<span className="text-sm text-slate-500">/yr</span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Egypt (First Deployment Market):
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-mono-tag text-slate-700">
                <li>• 23 Refining/Gas Companies</li>
                <li>• 25 Operating Sites</li>
                <li>• 50 – 100 Process Units</li>
              </ul>
            </div>

            {/* SOM */}
            <div className="relative rounded-xl border-2 border-[#1D4ED8] bg-blue-50/50 p-6 shadow-sm">
              <span className="font-mono-tag text-xs font-bold text-emerald-700">
                SOM (SERVICEABLE OBTAINABLE)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-[#0A192F] font-mono-tag">
                $44.7K<span className="text-sm text-slate-500"> Year 3 Base</span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Year 3 Base Case Target:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-mono-tag text-[#0A192F] font-medium">
                <li>• 6 Direct Customers</li>
                <li>• 6 Process Units Deployed</li>
                <li>• 6% – 12% of Egypt&apos;s Units</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Business Model ($800 Paid Pilot) */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-bold text-emerald-700 uppercase">
              COMMERCIAL MECHANISM
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Business Model: $800 Paid Pilot & Land-and-Expand
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We eliminate traditional 6-to-12 month RFP gridlock with a frictionless, low-commitment initial engagement:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-mono-tag text-xs text-[#1D4ED8] font-bold">STAGE 1</span>
              <h3 className="mt-2 text-xl font-bold text-[#0A192F]">$800 Paid Pilot</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                One industrial process unit (e.g. atmospheric column). Proves speed, modeling accuracy, and console ergonomics within ~1 week build time.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-mono-tag text-xs text-[#1D4ED8] font-bold">STAGE 2</span>
              <h3 className="mt-2 text-xl font-bold text-[#0A192F]">Annual Unit Licensing</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Conversion from pilot to multi-year software licensing covering shift training, scenario libraries, and instructor consoles.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-mono-tag text-xs text-emerald-700 font-bold">STAGE 3</span>
              <h3 className="mt-2 text-xl font-bold text-[#0A192F]">Facility-Wide Expansion</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Land and expand across the entire refinery complex (preheat train, vacuum column, hydrotreater, reformer).
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Financial Model & Projections Chart (Recharts) */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="font-mono-tag text-xs font-bold text-[#1D4ED8] uppercase">
                3-YEAR PROJECTIONS
              </span>
              <h2 className="text-2xl font-bold text-[#0A192F] mt-1">
                Financial Forecast (Base Case)
              </h2>
            </div>
            <div className="text-xs font-mono-tag text-emerald-800 bg-emerald-50 border border-emerald-200 rounded px-3 py-1 font-semibold">
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
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-mono-tag text-[10px] text-slate-500 block">YEAR 1 BASE</span>
                <div className="flex justify-between items-baseline mt-1 font-mono-tag">
                  <span className="text-sm font-bold text-[#0A192F]">Rev: $7.4K</span>
                  <span className="text-xs text-[#1D4ED8]">GP: $5.1K (70%)</span>
                </div>
                <div className="text-xs text-red-600 font-mono-tag mt-0.5 font-medium">Net Income: −$4.8K</div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-mono-tag text-[10px] text-slate-500 block">YEAR 2 BASE (PROFITABLE)</span>
                <div className="flex justify-between items-baseline mt-1 font-mono-tag">
                  <span className="text-sm font-bold text-[#0A192F]">Rev: $25.4K</span>
                  <span className="text-xs text-[#1D4ED8]">GP: $20.2K (79%)</span>
                </div>
                <div className="text-xs text-emerald-700 font-mono-tag mt-0.5 font-bold">Net Income: +$12.4K</div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-mono-tag text-[10px] text-slate-500 block">YEAR 3 BASE</span>
                <div className="flex justify-between items-baseline mt-1 font-mono-tag">
                  <span className="text-sm font-bold text-[#0A192F]">Rev: $44.7K</span>
                  <span className="text-xs text-[#1D4ED8]">GP: $30.1K (67%)</span>
                </div>
                <div className="text-xs text-emerald-700 font-mono-tag mt-0.5 font-bold">Net Income: +$14.6K</div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] font-mono-tag text-slate-600">
                Cumulative 3-yr net income: Base $22.2K · Optimistic $83.6K · Pessimistic $3.9K
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: The Ask ($10,000 Seed) */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-[#0A192F] p-8 lg:p-10 shadow-md text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="font-mono-tag text-xs font-bold text-blue-400 uppercase">
                CAPITAL ALLOCATION
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                The Ask: $10,000 Pre-Seed
              </h2>
            </div>
            <span className="font-mono-tag text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-1.5">
              Goal: First Paid Pilot within ~3 Months
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-700/80 bg-[#0F2238] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs font-bold text-slate-200">LEGAL & REGISTRATION</span>
                <span className="text-2xl font-bold font-mono-tag text-blue-400">$7,000</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Company incorporation, commercial registration, specialized legal counsel, accountant retainer, and office setup/fit-out.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-[#0F2238] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs font-bold text-slate-200">INFRASTRUCTURE & OPS</span>
                <span className="text-2xl font-bold font-mono-tag text-emerald-400">$3,000</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Corporate domain, business email infrastructure, API subscriptions, development workstation, and dedicated simulation testing servers.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Investor Inquiry Form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="INVESTOR CONTACT"
            title="Direct Investor Discussion"
            subtitle="Request the complete pitch deck, detailed financial models, or schedule a founder conference."
            align="center"
            theme="light"
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
