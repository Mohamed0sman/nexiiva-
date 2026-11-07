'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { MonitorFrame } from '@/components/MonitorFrame';
import { Monitor, Sliders, Award, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HowItWorksSectionProps {
  dict: Dict;
}

export function HowItWorksSection({ dict }: HowItWorksSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      id: 'practice',
      tabLabel: dict?.howItWorks?.steps?.[0]?.tab || '1. Practice',
      title: dict?.howItWorks?.steps?.[0]?.title || 'DCS-Style Console Operations',
      desc:
        dict?.howItWorks?.steps?.[0]?.desc ||
        'Operators train on realistic distributed control system screens with live PFD diagrams, alarms, faceplates, and 12 simultaneous live trends.',
      src: '/assets/screens/cdu-atm-column-pfd.png',
      alt: 'Atmospheric Distillation Column PFD Console',
      caption: 'Real CDU PFD Console with 12 Live Trends & Alarm Hierarchy',
      icon: Monitor,
      bullets: [
        '1:1 functional emulation of control room DCS faceplates',
        'Multi-pen trends monitoring temperature, flow, and column delta-P',
        'Authentic ISA alarm banners with acknowledge & silence protocols',
      ],
    },
    {
      id: 'instruct',
      tabLabel: dict?.howItWorks?.steps?.[1]?.tab || '2. Instruct',
      title: dict?.howItWorks?.steps?.[1]?.title || 'Real-Time Fault Injection',
      desc:
        dict?.howItWorks?.steps?.[1]?.desc ||
        'The instructor triggers pre-programmed or live faults (pump trips, valve stiction, furnace tube leaks) and monitors trainee response in real time.',
      src: '/assets/screens/instructor-console.png',
      alt: 'Instructor Supervisory Console',
      caption: 'Supervisory Fault Injection Console with Real-Time Scenario Control',
      icon: Sliders,
      bullets: [
        'Instant fault injection: pump trips, valve freeze, transmitter drift',
        'Freeze, snapshot, and rewind functions for root-cause debriefs',
        'Trainee action logging with millisecond timestamp precision',
      ],
    },
    {
      id: 'certify',
      tabLabel: dict?.howItWorks?.steps?.[2]?.tab || '3. Certify',
      title: dict?.howItWorks?.steps?.[2]?.title || 'Objective Scoring & Credentials',
      desc:
        dict?.howItWorks?.steps?.[2]?.desc ||
        'Every trainee action is timestamped against standard operating procedures. Receive an itemized performance breakdown and verification certificate.',
      src: '/assets/screens/preheat-train-pfd.png',
      alt: 'Preheat Train Process Diagram',
      caption: 'Preheat Train Hydraulic Simulation and Automated Scoring',
      icon: Award,
      bullets: [
        'Automated scoring based on SOP compliance and reaction latency',
        'Safety envelope violation tracking (flaring, relief, thermal shock)',
        'Tamper-evident completion certificates with full competency breakdown',
      ],
    },
  ];

  const current = steps[activeTab];
  const Icon = current.icon;

  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.howItWorks?.eyebrow || '03 — HOW IT WORKS'}
          title={dict?.howItWorks?.title || 'Practice. Instruct. Certify.'}
          subtitle={
            dict?.howItWorks?.subtitle ||
            'A complete operational cycle replicating real DCS workflows and plant safety protocols.'
          }
          theme="light"
        />

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6">
          {steps.map((step, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono-tag text-xs font-bold transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#0A192F] text-white shadow-sm'
                    : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{step.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Area: Details on Left, Real Screenshot on Right */}
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[#0A192F]">
              {current.title}
            </h3>

            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {current.desc}
            </p>

            <ul className="mt-6 space-y-3">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot Monitor Frame with Zoom Lightbox (7 cols) */}
          <div className="lg:col-span-7">
            <MonitorFrame
              src={current.src}
              alt={current.alt}
              title={current.title}
              caption={current.caption}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
