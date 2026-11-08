import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { MonitorFrame } from '@/components/MonitorFrame';
import {
  Monitor,
  Cpu,
  Sliders,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'الحلول الهندسية' : 'Solutions & Simulation Suite',
    description:
      'Operator Training Simulator, AI Unit Builder, Instructor Console, and Automated Scoring & Certification.',
  };
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const solutions = [
    {
      id: 'ots',
      icon: Monitor,
      eyebrow: 'SOLUTION 01',
      title: 'Operator Training Simulator (OTS)',
      tagline: 'High-Fidelity Dynamic Process Simulation',
      whatItIs:
        'A full-scope operator training simulator that emulates modern Distributed Control Systems (DCS) with rigorous mass, momentum, and energy conservation equations.',
      howItWorks:
        'Runs real-time dynamic models coupled with physical equipment curves (pumps, compressors, columns, heat exchangers). Operators interact with faceplates, setpoints, and manual valve bypasses identical to their site control room.',
      outcomes: [
        'Dramatically accelerates console operator qualification timelines from months to weeks.',
        'Builds automatic procedural muscle memory for handling low-frequency, high-consequence emergencies.',
        'Prevents expensive unit trips, off-spec rundown contamination, and environmental flaring.',
      ],
      src: '/assets/screens/cdu-atm-column-pfd.png',
      alt: 'Operator Training Simulator Screen',
      caption: 'Full Atmospheric Distillation Column PFD Console with Live Trends',
    },
    {
      id: 'builder',
      icon: Cpu,
      eyebrow: 'SOLUTION 02',
      title: 'AI Unit Builder (OTS Builder)',
      tagline: 'Rapid Prompt-to-Unit Generation Pipeline',
      whatItIs:
        'An automated engineering pipeline that synthesizes full simulation units from process engineering documentation (P&IDs, heat & material balances, control narratives) in English or Arabic.',
      howItWorks:
        'Our proprietary engine maps engineering flowsheets into an interconnected network of 387 verified equipment models, wiring up control loops and hydraulic resistances automatically.',
      outcomes: [
        'Target build time of approximately one week per unit — to be measured and validated on unit two.',
        'Removes months of manual coding and prohibitive consulting fees from specialized simulation houses.',
        'Allows plants to simulate and test revamps or operational changes before committing capital.',
      ],
      src: '/assets/screens/preheat-train-pfd.png',
      alt: 'Preheat Train Generated Flowsheet',
      caption: 'Automated Heat Exchanger Train Pipeline Synthesis',
    },
    {
      id: 'console',
      icon: Sliders,
      eyebrow: 'SOLUTION 03',
      title: 'Instructor Console',
      tagline: 'Supervisory Fault Injection & Scenario Management',
      whatItIs:
        'The operational control center for training leads, instructors, and plant superintendents to craft, trigger, and supervise dynamic plant scenarios.',
      howItWorks:
        'Instructors can freeze simulation time, inject pre-programmed malfunctions (e.g. instrument drift, power outage, valve failure), change ambient conditions, or record student actions for post-drill analysis.',
      outcomes: [
        'Complete transparency over trainee operational choices, acknowledging latency, and alarm response.',
        'Ability to pause during high-stress scenarios to conduct root-cause micro-debriefs before resuming.',
        'Standardized scenario libraries ensuring consistent competency benchmarks across all four shifts.',
      ],
      src: '/assets/screens/instructor-console.png',
      alt: 'Instructor Console Screenshot',
      caption: 'Supervisory Fault Injection Matrix with Live Trainee Assessment',
    },
    {
      id: 'certification',
      icon: Award,
      eyebrow: 'SOLUTION 04',
      title: 'Scoring & Certification',
      tagline: 'Objective, Timestamped Competency Evaluation',
      whatItIs:
        'An algorithmic grading engine that audits console technician actions against plant Standard Operating Procedures (SOPs) and safety operating envelopes.',
      howItWorks:
        'Every keystroke, setpoint change, and alarm acknowledgment is logged with millisecond timestamps. The engine computes a composite score factoring reaction time, safety margin preservation, and procedural compliance.',
      outcomes: [
        'Eliminates subjective, anecdotal evaluations from training records.',
        'Generates verifiable, tamper-evident digital certificates with detailed competency rubrics.',
        'Provides management with clear qualification readiness metrics before assigning operators to live units.',
      ],
      src: '/assets/screens/cdu-atm-column-pfd.png',
      alt: 'Scoring Matrix Screenshot',
      caption: 'Real-Time Trainee Score Gauge and Event Timestamp Log',
    },
  ];

  return (
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="PRODUCT SUITE"
          title="Engineered Solutions for Plant Operations"
          subtitle="Explore the four modular pillars that power the Nexiiva Operator Training Simulator platform."
          theme="light"
        />

        <div className="mt-12 space-y-16">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            const isReversed = index % 2 === 1;

            return (
              <section
                key={sol.id}
                id={sol.id}
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Text Details Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono-tag text-xs font-bold text-[#1D4ED8]">
                        {sol.eyebrow}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {sol.title}
                    </h2>
                    <p className="mt-1 font-mono-tag text-xs text-slate-500 font-semibold">
                      {sol.tagline}
                    </p>

                    <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                      <div>
                        <strong className="text-slate-900 block mb-1">What It Is:</strong>
                        <p>{sol.whatItIs}</p>
                      </div>

                      <div>
                        <strong className="text-slate-900 block mb-1">How It Works:</strong>
                        <p>{sol.howItWorks}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <strong className="text-slate-900 text-xs font-mono-tag uppercase tracking-wider block mb-3">
                        Operational Outcomes:
                      </strong>
                      <ul className="space-y-2.5">
                        {sol.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/${locale}/pilot`}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1D4ED8] hover:bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-sm transition-colors active:scale-95"
                      >
                        <span>Request a Pilot for this Solution</span>
                        <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>

                  {/* Screenshot Frame Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <MonitorFrame
                      src={sol.src}
                      alt={sol.alt}
                      title={sol.title}
                      caption={sol.caption}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
