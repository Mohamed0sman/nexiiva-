import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'معلومات المستثمرين' : 'Investor Briefing & Market Sizing',
    description:
      'Nexiiva market sizing (TAM/SAM/SOM), commercial engagement architecture, and engineering growth roadmap.',
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
          title="Investor Presentation & Market Sizing"
          subtitle="Data-dense briefing derived directly from the Nexiiva pitch deck. Market figures and projections are internal engineering estimates."
          theme="light"
        />

        {/* Section 1: TAM / SAM / SOM Concentric Overlapping Cards */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="font-mono-tag text-xs font-bold text-sky-600 uppercase">
                ADDRESSABLE MARKET SIZING
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
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
              <span className="font-mono-tag text-xs font-bold text-sky-600">
                TAM (TOTAL ADDRESSABLE MARKET)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-slate-900 font-mono-tag">
                194 – 388<span className="text-sm text-slate-500"> Units Total</span>
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
              <span className="font-mono-tag text-xs font-bold text-sky-600">
                SAM (SERVICEABLE ADDRESSABLE)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-slate-900 font-mono-tag">
                50 – 100<span className="text-sm text-slate-500"> Regional Units</span>
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
            <div className="relative rounded-xl border-2 border-sky-400 bg-sky-50/50 p-6 shadow-sm">
              <span className="font-mono-tag text-xs font-bold text-sky-700">
                SOM (SERVICEABLE OBTAINABLE)
              </span>
              <div className="mt-3 text-3xl font-extrabold text-slate-900 font-mono-tag">
                Initial Scale<span className="text-sm text-slate-500"> Near-Term Target</span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Initial Deployment Target:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-mono-tag text-slate-800 font-medium">
                <li>• 6 Direct Customers</li>
                <li>• 6 Process Units Deployed</li>
                <li>• 6% – 12% of Egypt&apos;s Units</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Business Model (Single-Unit Pilot) */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-bold text-sky-700 uppercase">
              COMMERCIAL MECHANISM
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Commercial Model: Single-Unit Pilot & Land-and-Expand
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We eliminate traditional 6-to-12 month RFP gridlock with a frictionless, low-commitment initial engagement:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-mono-tag text-xs text-sky-700 font-bold">STAGE 1</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Unit Pilot Validation</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                One industrial process unit (e.g. atmospheric column). Proves speed, modeling accuracy, and console ergonomics within ~1 week build time.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-mono-tag text-xs text-sky-700 font-bold">STAGE 2</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Annual Unit Licensing</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Conversion from pilot to multi-year software licensing covering shift training, scenario libraries, and instructor consoles.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-mono-tag text-xs text-emerald-700 font-bold">STAGE 3</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Facility-Wide Expansion</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Land and expand across the entire refinery complex (preheat train, vacuum column, hydrotreater, reformer).
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Strategic Roadmap & Deployment Growth */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="font-mono-tag text-xs font-bold text-sky-700 uppercase">
                STRATEGIC ROADMAP
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Deployment & Commercial Growth
              </h2>
            </div>
            <div className="text-xs font-mono-tag text-emerald-800 bg-emerald-50 border border-emerald-200 rounded px-3 py-1 font-semibold">
              Self-sustaining economics based on verified enterprise pilot delivery
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <span className="font-mono-tag text-[10px] text-slate-500 block uppercase">Phase 1: Pilot Qualification</span>
              <div className="mt-2 text-sm font-bold text-slate-900">Initial Refinery Validation</div>
              <p className="mt-1 text-xs text-slate-600">Executing initial single-unit digital twins to establish industry reference benchmarks.</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <span className="font-mono-tag text-[10px] text-slate-500 block uppercase">Phase 2: Complex Scale</span>
              <div className="mt-2 text-sm font-bold text-slate-900">Cross-Unit Expansion</div>
              <p className="mt-1 text-xs text-slate-600">Expanding models to multi-unit distillation and reaction trains across client facilities.</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <span className="font-mono-tag text-[10px] text-slate-500 block uppercase">Phase 3: Regional Enterprise</span>
              <div className="mt-2 text-sm font-bold text-slate-900">Regional EPC Integration</div>
              <p className="mt-1 text-xs text-slate-600">Full integration with GCC & North African national oil companies and EPC partners.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Strategic Capital Allocation */}
        <div className="mt-12 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50/40 p-8 lg:p-10 shadow-sm text-slate-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <span className="font-mono-tag text-xs font-bold text-sky-700 uppercase">
                CAPITAL ALLOCATION & PARTNERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Strategic Growth Partnership
              </h2>
            </div>
            <span className="font-mono-tag text-xs font-bold text-sky-800 bg-sky-100/80 border border-sky-200 rounded-lg px-3 py-1.5">
              Target: Expanding Engineering Delivery
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs font-bold text-sky-800">LEGAL & ACCREDITATIONS</span>
                <span className="text-xs font-bold font-mono-tag text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Tier 1</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Company incorporation, commercial registration, specialized industrial IP protection, and regional accreditation.
              </p>
            </div>

            <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs font-bold text-sky-800">ENGINEERING WORKSTATIONS & OPS</span>
                <span className="text-xs font-bold font-mono-tag text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Active</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Dedicated simulation computing infrastructure, multi-monitor DCS emulation hardware, and air-gapped testing units.
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
