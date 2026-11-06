import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { MonitorFrame } from '@/components/MonitorFrame';
import { SectionHeader } from '@/components/SectionHeader';
import {
  CheckCircle2,
  Flame,
  LineChart,
  Sliders,
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'المنصة الهندسية' : 'Platform & DCS Architecture',
    description:
      'Explore Nexiiva’s DCS console emulation, thermodynamic solver, 12 live trends, and instructor console.',
  };
}

export default async function PlatformPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dcsTabs = [
    'PFD Flowsheet',
    'Process Logic',
    'Control Valves',
    'Pumps P-101',
    'Furnace H-101',
    '12 Live Trends',
    'Totaliser',
    'ISA Alarms',
    'Trainee Score',
  ];

  const specs = [
    { feature: 'Deployment Mode', value: '100% Offline Air-Gapped or Secure On-Premises' },
    { feature: 'Architecture Options', value: 'Local Industrial PC, Standalone Ruggedized Laptop, or Private Site Cloud' },
    { feature: 'User Interface Localization', value: 'Bilingual (English & Modern Standard Arabic) with Instant Switching' },
    { feature: 'Trend Monitoring Engine', value: '12 Simultaneous Real-Time Multivariable Trend Pens' },
    { feature: 'Equipment Component Library', value: '387 Verified Chemical Process Equipment Types' },
    { feature: 'Thermodynamic Calculations', value: 'Dynamic Multi-Component Vapor-Liquid Equilibrium (Peng-Robinson / SRK)' },
    { feature: 'Evaluation & Certification', value: 'Automated Timestamped SOP Compliance with Tamper-Evident Logs' },
    { feature: 'Network Isolation', value: 'Zero External Telemetry; Zero Third-Party SaaS Runtime Dependency' },
  ];

  return (
    <div className="py-24 bg-[#05060A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ENGINEERING ARCHITECTURE"
          title="The Nexiiva OTS Platform"
          subtitle="A high-fidelity software simulator combining thermodynamic precision, DCS screen fidelity, and supervisory fault management."
        />

        {/* Console DCS Screens Showcase */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#0A0D18] p-6 lg:p-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono-tag text-xs text-[#8B4CFF] font-bold uppercase">
                DCS-STYLE CONSOLE TABS
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Authentic Distributed Control System Interface
              </h3>
            </div>

            {/* Simulated DCS Tab Bar */}
            <div className="flex flex-wrap gap-2">
              {dcsTabs.map((tab, idx) => (
                <span
                  key={idx}
                  className={`rounded-lg px-3 py-1 font-mono-tag text-xs font-semibold ${
                    idx === 0
                      ? 'bg-[#6D3BF0] text-white shadow-md'
                      : 'border border-white/10 bg-white/5 text-[#9A9CB3]'
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <MonitorFrame
                src="/assets/screens/cdu-atm-column-pfd.png"
                alt="Atmospheric Distillation Column PFD Console"
                title="T-101 ATMOSPHERIC DISTILLATION COLUMN"
                caption="Full PFD view showing column trays, side draws, reflux drum V-101, and furnace H-101"
              />
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-xl border border-white/10 bg-[#0E111E] p-5">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                  Multi-Stage Column Hydraulics
                </h4>
                <p className="mt-2 text-xs text-[#9A9CB3] leading-relaxed">
                  Real-time mass and vapor balances calculated across each fractionator tray stage. Predicts foaming, weeping, and pressure drop fluctuations.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0E111E] p-5">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                  Control Loop Cascades
                </h4>
                <p className="mt-2 text-xs text-[#9A9CB3] leading-relaxed">
                  Supports complex feedback and feedforward loops including temperature-to-reflux cascade, tray pressure compensation, and overhead accumulator level control.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0E111E] p-5">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                  Alarm Suppression & Prioritization
                </h4>
                <p className="mt-2 text-xs text-[#9A9CB3] leading-relaxed">
                  Standard ISA-18.2 compliant alarm trip points with flashing banners, audible horn simulation, and first-out alarm identification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Preheat Train & Hydraulic Network */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0A0D18] p-6 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono-tag text-xs text-[#38BDF8] font-bold uppercase">
                HEAT INTEGRATION
              </span>
              <h3 className="text-2xl font-bold text-white">
                Preheat Train & Shell-and-Tube Exchangers
              </h3>
              <p className="text-sm text-[#9A9CB3] leading-relaxed">
                The crude preheat train simulates complex thermal exchange between raw incoming crude and hot product run-down streams (naphtha, kerosene, diesel, and residue).
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-[#E9EAF4]">
                <li className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-amber-400" />
                  Thermal duty tracking across exchanger shell & tube passes
                </li>
                <li className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-[#38BDF8]" />
                  Desalter pressure and temperature operating boundary checks
                </li>
                <li className="flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-[#8B4CFF]" />
                  Fouling simulation and bypass valve operation
                </li>
              </ul>
            </div>

            <div className="lg:col-span-8">
              <MonitorFrame
                src="/assets/screens/preheat-train-pfd.png"
                alt="Preheat Train Process Diagram"
                title="PREHEAT EXCHANGER TRAIN & DESALTER INTEGRATION"
                caption="Dynamic thermal exchange modeling between crude feed and column side-draws"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Instructor Supervisory Console */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0A0D18] p-6 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <MonitorFrame
                src="/assets/screens/instructor-console.png"
                alt="Instructor Console Screenshot"
                title="SUPERVISORY INSTRUCTOR CONSOLE"
                caption="Fault injection matrix, scenario presets, and real-time trainee observation"
              />
            </div>

            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono-tag text-xs text-[#8B4CFF] font-bold uppercase">
                SUPERVISORY CONTROL
              </span>
              <h3 className="text-2xl font-bold text-white">
                Instructor Console & Scenario Architect
              </h3>
              <p className="text-sm text-[#9A9CB3] leading-relaxed">
                Instructors maintain omniscient control over the simulation clock, weather conditions, equipment health, and instantaneous emergency injection.
              </p>

              <div className="space-y-3 pt-2">
                <div className="rounded-lg border border-white/5 bg-[#121524] p-3 text-xs">
                  <span className="font-mono-tag text-[#38BDF8] font-bold">SNAPSHOT & REWIND:</span>
                  <p className="text-[#9A9CB3] mt-1">Capture state before an upset to retry the scenario with alternate trainee actions.</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-[#121524] p-3 text-xs">
                  <span className="font-mono-tag text-[#F59E0B] font-bold">SILENT FAULT INJECTION:</span>
                  <p className="text-[#9A9CB3] mt-1">Introduce subtle instrument drift that requires diagnostic trend cross-checking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Engineering Specifications Table */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="TECHNICAL SPECIFICATIONS"
            title="Platform Engineering Specifications"
            subtitle="Built to satisfy stringent refinery IT/OT cybersecurity and reliability requirements."
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0E111C] shadow-2xl">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#121626] font-mono-tag text-xs font-bold text-[#9A9CB3] uppercase">
                  <th className="py-4 px-6 text-start">System Capability</th>
                  <th className="py-4 px-6 text-start">Engineering Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {specs.map((item, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white font-mono-tag text-xs">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-[#9A9CB3]">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
