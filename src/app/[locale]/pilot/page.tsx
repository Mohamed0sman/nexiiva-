import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { PilotForm } from '@/components/PilotForm';
import { ShieldCheck } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'البرنامج التجريبي للمصافي' : 'Industrial Pilot Programme',
    description:
      'Train on your own process unit in ~1 week of build time. Deploy an air-gapped OTS pilot at your plant.',
  };
}

export default async function PilotPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const clientInputs = [
    {
      step: 'A',
      title: 'P&IDs & Flowsheets',
      desc: 'Piping & Instrumentation Diagrams (P&IDs) and Heat & Material Balance (H&MB) tables defining unit boundaries and equipment specs.',
    },
    {
      step: 'B',
      title: 'Operating Envelope & Limits',
      desc: 'Normal operating ranges, safety trip setpoints, alarm high/low thresholds, and control valve typical stroke responses.',
    },
    {
      step: 'C',
      title: 'Emergency Scenarios',
      desc: 'Top 3–5 operational upsets your plant operations and HSE management want operators trained and certified to handle.',
    },
  ];

  const faqs = [
    {
      q: 'How is client process data confidentiality protected?',
      a: 'We execute a mutual Non-Disclosure Agreement (NDA) before any engineering flowsheets are shared. All modeling runs locally on air-gapped machines, ensuring zero plant data ever leaves your secure environment.',
    },
    {
      q: 'Can the pilot operate 100% offline without internet connectivity?',
      a: 'Yes. Nexiiva simulators are built offline-first. Once compiled, the process simulation engine, graphics, and instructor console run completely air-gapped on your local network or standalone laptops without internet or cloud APIs.',
    },
    {
      q: 'What languages does the console user interface support?',
      a: 'Both English and Modern Standard Arabic are fully supported out-of-the-box. Console operators and instructors can switch between Arabic and English with a single click while preserving standard engineering tags (e.g. TIC102, 17T01).',
    },
    {
      q: 'How much customization is possible during the pilot?',
      a: 'The pilot models your exact physical unit: column dimensions, number of trays, heat exchanger passes, pump flow curves, and specific DCS screen layouts to match your Central Control Room (CCR) ergonomics.',
    },
    {
      q: 'What hardware is required on-site to run the simulator?',
      a: 'Standard commercial off-the-shelf workstations or ruggedized laptops running Windows 10/11 or Linux with modern quad-core processors, 16 GB RAM, and dual-monitor support. No specialized vendor hardware is required.',
    },
    {
      q: 'How does the software comply with OT and Plant Cybersecurity standards?',
      a: 'Nexiiva complies with ISA/IEC 62443 industrial control system security principles: zero external telemetry, no background outbound sockets, local cryptographic licensing, and isolated LAN deployment.',
    },
    {
      q: 'What is the licensing structure after a successful pilot?',
      a: 'Following validation on unit one, facilities transition to a modular annual site license covering continuous scenario updates, new unit additions, and dedicated technical maintenance.',
    },
    {
      q: 'What level of engineering support is provided during the pilot trial?',
      a: 'A dedicated process simulation engineer conducts on-site or remote commissioning, validates model balances against your DCS historian data, and trains your instructors on scenario crafting.',
    },
  ];

  return (
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="PILOT PROGRAMME"
          title="Start with One Unit. Expand Across the Facility."
          subtitle="A low-risk, high-impact pilot program to prove simulator fidelity, build speed, and operator training outcomes on your own process equipment."
          theme="light"
        />

        {/* 3 Step Flow & Inputs Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="font-mono-tag text-xs font-bold text-[#1D4ED8] uppercase">
                TARGET BUILD TIMELINE
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#0A192F] font-mono-tag">~1 Week</span>
                <span className="text-xs text-slate-500">target build time per unit</span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Target build time: about one week per unit — to be measured and validated on unit two.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-base font-bold text-[#0A192F] mb-4">
                What Is Needed from the Client:
              </h3>
              <div className="space-y-4">
                {clientInputs.map((input) => (
                  <div key={input.step} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-mono-tag text-xs font-bold text-[#1D4ED8]">
                      {input.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0A192F]">{input.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {input.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-xs text-slate-600 space-y-2 font-mono-tag shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-bold text-[#0A192F]">Mutual NDA Executed Prior to Data Transfer</span>
              </div>
              <p>All client proprietary process data remains strictly confidential and stored on air-gapped systems.</p>
            </div>
          </div>

          {/* Right Column: Pilot Application Form */}
          <div className="lg:col-span-7">
            <PilotForm />
          </div>
        </div>

        {/* 8 Mandatory FAQs Accordion */}
        <div className="mt-20 max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Pilot Program & Technical FAQ"
            subtitle="Transparent answers regarding security, offline deployment, data confidentiality, and hardware requirements."
            align="center"
            theme="light"
          />

          <div className="mt-10 space-y-3.5">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-colors shadow-sm open:border-[#1D4ED8] open:bg-blue-50/30"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0A192F] hover:text-[#1D4ED8]">
                  <span className="text-base pe-4">{faq.q}</span>
                  <span className="ms-2 font-mono-tag text-base text-[#1D4ED8] font-bold group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-3.5 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3.5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
