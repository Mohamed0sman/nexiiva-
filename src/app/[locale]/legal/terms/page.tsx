import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { AlertCircle } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms of Service | Nexiiva',
    description: 'Nexiiva terms of service and software evaluation framework.',
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-24 bg-[#05060A]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TERMS & CONDITIONS"
          title="Terms of Service"
          subtitle="Terms governing software evaluation, commercial pilot trials, and website access."
        />

        {/* Development Placeholder Notice */}
        <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs font-mono-tag text-amber-300 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <strong>[PRE-INCORPORATION LEGAL DRAFT PLACEHOLDER]</strong>
            <p className="mt-1 text-amber-200/80">
              Commercial Pilot Agreement terms are finalized under customized master services agreements (MSAs) per operating company.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#9A9CB3]">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Scope of Pilot & Simulation Services</h2>
            <p>
              Nexiiva provides computer-based Operator Training Simulators (OTS) designed to train control room personnel on procedural handling and upset recovery. Nexiiva simulators are training and engineering study tools; they do not replace live plant Distributed Control Systems (DCS) or Safety Instrumented Systems (SIS).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Intellectual Property</h2>
            <p>
              All software algorithms, dynamic simulation equations, interface components, and graphics engines remain the proprietary intellectual property of Nexiiva. Client process configuration data and custom P&ID flowsheets remain the exclusive property of the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Commercial Registration</h2>
            <p>
              Nexiiva is currently operating in its pre-revenue stage, preparing formal incorporation and initial pilot trial contracts with industrial facilities in Egypt and the GCC region.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Contact & Inquiries</h2>
            <p>
              Direct all contractual inquiries to{' '}
              <a href="mailto:contact@nexiiva.com" className="text-[#38BDF8] hover:underline">
                contact@nexiiva.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
