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
    title: 'Privacy Policy | Nexiiva',
    description: 'Nexiiva privacy policy and process data confidentiality framework.',
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-24 bg-[#05060A]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="LEGAL & CONFIDENTIALITY"
          title="Privacy Policy & Data Protection"
          subtitle="How Nexiiva safeguards industrial process data, engineering flowsheets, and operational records."
        />

        {/* Development Placeholder Notice */}
        <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs font-mono-tag text-amber-300 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <strong>[PRE-INCORPORATION LEGAL DRAFT PLACEHOLDER]</strong>
            <p className="mt-1 text-amber-200/80">
              This draft outlines our standard operating procedures regarding client data confidentiality prior to formal corporate registration and legal counsel review.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#9A9CB3]">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Industrial Data Confidentiality</h2>
            <p>
              Nexiiva recognizes that process flow diagrams (P&IDs), operating envelopes, stream compositions, and production rates constitute confidential intellectual property of our client operating companies. All engineering exchanges are governed by bilateral non-disclosure agreements (NDAs) prior to data transfer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Offline & Air-Gapped Operation</h2>
            <p>
              Nexiiva software is architected to operate fully disconnected from the public internet. Simulation runtime calculations, DCS screen telemetry, and instructor fault logs remain strictly local to client workstations or private on-premises servers. No telemetry or plant performance data is transmitted externally.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Information We Collect on Public Web Properties</h2>
            <p>
              On this public website (nexiiva.com), we only collect information explicitly submitted via our contact and pilot application forms (e.g., name, corporate email, company name, unit type). We do not sell or lease personal contact details to third-party marketing entities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Inquiries & Data Rights</h2>
            <p>
              For legal inquiries or requests to purge submitted contact data, contact{' '}
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
