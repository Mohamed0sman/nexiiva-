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
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme="light"
          eyebrow="TERMS & CONDITIONS"
          title="Terms of Service"
          subtitle="Terms governing software evaluation, commercial pilot trials, and website access."
        />

        {/* Pre-incorporation Notice */}
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-xs font-mono-tag text-amber-900 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" />
          <div>
            <strong className="text-amber-950">[PRE-INCORPORATION LEGAL DRAFT PLACEHOLDER]</strong>
            <p className="mt-1 text-amber-800 leading-relaxed">
              Commercial Pilot Agreement terms are finalized under customized master services agreements (MSAs) per operating company.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-8 text-sm leading-relaxed text-slate-600">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Scope of Pilot & Digital Twin Services</h2>
            <p>
              Nexiiva provides industrial process digital twins designed to train control room personnel on procedural handling and upset recovery. Nexiiva digital twins are operational training and engineering evaluation tools; they do not replace live plant Distributed Control Systems (DCS) or Safety Instrumented Systems (SIS).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Intellectual Property</h2>
            <p>
              All software algorithms, dynamic calculation equations, interface components, and graphics engines remain the proprietary intellectual property of Nexiiva. Client process configuration data and custom P&ID flowsheets remain the exclusive property of the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Commercial Registration</h2>
            <p>
              Nexiiva is currently operating in its pre-revenue stage, preparing formal incorporation and initial pilot trial contracts with industrial facilities in Egypt and the GCC region.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Contact & Inquiries</h2>
            <p>
              Direct all contractual inquiries to{' '}
              <a href="mailto:Mostafa.adel.esmaiel@gmail.com" className="font-semibold text-sky-600 hover:underline">
                Mostafa.adel.esmaiel@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
