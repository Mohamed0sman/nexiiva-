'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { MonitorFrame } from '@/components/MonitorFrame';
import { Monitor, Sliders, Award, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HowItWorksSectionProps {
  locale?: string;
  dict: Dict;
}

export function HowItWorksSection({ locale = 'en', dict }: HowItWorksSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      id: 'practice',
      tabLabel:
        dict?.howItWorks?.steps?.[0]?.tab ||
        (locale === 'ar' ? '1. الممارسة والتشغيل' : '1. Practice'),
      title:
        dict?.howItWorks?.steps?.[0]?.title ||
        (locale === 'ar'
          ? 'عمليات تشغيل تحاكي كونسول الـ DCS بالكامل'
          : 'DCS-Style Console Operations'),
      desc:
        dict?.howItWorks?.steps?.[0]?.desc ||
        (locale === 'ar'
          ? 'يتدرب المشغلون على شاشات واقعية لنظام التحكم الموزع مع مخططات PFD حية، إنذارات، لوحات صمامات، و12 مؤشراً بيانياً متزامناً.'
          : 'Operators train on realistic distributed control system screens with live PFD diagrams, alarms, faceplates, and 12 simultaneous live trends.'),
      src: '/assets/screens/cdu-atm-column-pfd.png',
      alt: 'Atmospheric Distillation Column PFD Console',
      caption:
        locale === 'ar'
          ? 'شاشة برج التقطير الجوي CDU مع 12 مؤشراً بيانياً وهرمية الإنذارات'
          : 'Real CDU PFD Console with 12 Live Trends & Alarm Hierarchy',
      icon: Monitor,
      bullets:
        locale === 'ar'
          ? [
              'محاكاة مطابقة 1:1 للوحات تحكم الـ DCS وصمامات العمليات',
              'مخططات بيانية متعددة لمراقبة درجات الحرارة والتدفقات وفرق الضغط',
              'لافتات إنذارات قياسية حسب معايير ISA مع بروتوكولات الإقرار والإسكات',
            ]
          : [
              '1:1 functional emulation of control room DCS faceplates',
              'Multi-pen trends monitoring temperature, flow, and column delta-P',
              'Authentic ISA alarm banners with acknowledge & silence protocols',
            ],
    },
    {
      id: 'instruct',
      tabLabel:
        dict?.howItWorks?.steps?.[1]?.tab ||
        (locale === 'ar' ? '2. الإشراف والتدخل' : '2. Instruct'),
      title:
        dict?.howItWorks?.steps?.[1]?.title ||
        (locale === 'ar'
          ? 'حقن الأعطال التشغيلية في الزمن الفعلي'
          : 'Real-Time Fault Injection'),
      desc:
        dict?.howItWorks?.steps?.[1]?.desc ||
        (locale === 'ar'
          ? 'يتحكم المدرب في إطلاق أعطال مسبقة أو فورية (توقف مضخات، استعصاء صمامات، تسريب أنابيب أفران) ومراقبة رد فعل المشغل فورياً.'
          : 'The instructor triggers pre-programmed or live faults (pump trips, valve stiction, furnace tube leaks) and monitors trainee response in real time.'),
      src: '/assets/screens/instructor-console.png',
      alt: 'Instructor Supervisory Console',
      caption:
        locale === 'ar'
          ? 'كونسول المشرف للتحكم بسيناريوهات الطوارئ وحقن الأعطال الفورية'
          : 'Supervisory Fault Injection Console with Real-Time Scenario Control',
      icon: Sliders,
      bullets:
        locale === 'ar'
          ? [
              'حقن فوري للأعطال: توقف مضخات، تجمد صمامات، وانحراف حساسات القياس',
              'إيقاف مؤقت، لقطة حالة (Snapshot)، وإعادة المحاكاة للتحليل الفني للحادث',
              'تسجيل زمني دقيق لكل خطوة وإجراء يتخذه المشغل المتدرب',
            ]
          : [
              'Instant fault injection: pump trips, valve freeze, transmitter drift',
              'Freeze, snapshot, and rewind functions for root-cause debriefs',
              'Trainee action logging with millisecond timestamp precision',
            ],
    },
    {
      id: 'certify',
      tabLabel:
        dict?.howItWorks?.steps?.[2]?.tab ||
        (locale === 'ar' ? '3. التقييم والاعتماد' : '3. Certify'),
      title:
        dict?.howItWorks?.steps?.[2]?.title ||
        (locale === 'ar'
          ? 'تقييم موضوعي وشهادات كفاءة رقمية'
          : 'Objective Scoring & Credentials'),
      desc:
        dict?.howItWorks?.steps?.[2]?.desc ||
        (locale === 'ar'
          ? 'يتم تسجيل كل إجراء يقوم به المشغل ومطابقته بدقة مع إجراءات التشغيل القياسية (SOP). تقارير تقييم تفصيلية وشهادات اعتماد.'
          : 'Every trainee action is timestamped against standard operating procedures. Receive an itemized performance breakdown and verification certificate.'),
      src: '/assets/screens/preheat-train-pfd.png',
      alt: 'Preheat Train Process Diagram',
      caption:
        locale === 'ar'
          ? 'محاكاة ديناميكية لشبكة التسخين الأولي والتقييم الآلي للمتدرب'
          : 'Preheat Train Hydraulic Simulation and Automated Scoring',
      icon: Award,
      bullets:
        locale === 'ar'
          ? [
              'تقييم آلي وموضوعي مستند إلى إجراءات التشغيل القياسية (SOP)',
              'شهادة كفاءة موثقة وسجل زمني للاستجابة لحالات الطوارئ',
              'قياس جاهزية المشغل قبل تكليفه بالورديات الحية في المنشأة',
            ]
          : [
              'Automated scoring against verified standard operating procedures (SOP)',
              'Granular timeline of operator reaction time during process alarms',
              'Objective certification before assigning live plant console shifts',
            ],
    },
  ];

  const current = steps[activeTab];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.howItWorks?.eyebrow || (locale === 'ar' ? 'منهجية العمل والتدريب' : 'OPERATIONAL QUALIFICATION')}
          title={
            dict?.howItWorks?.title ||
            (locale === 'ar'
              ? 'ممارسة. إشراف. اعتماد.'
              : 'Practice. Instruct. Certify.')
          }
          subtitle={
            dict?.howItWorks?.subtitle ||
            (locale === 'ar'
              ? 'دورة تدريبية متكاملة تعكس بيئة أنظمة التحكم الموزع DCS الحقيقية.'
              : 'A complete operational qualification cycle replicating live DCS workflows.')
          }
          align="center"
          theme="light"
        />

        {/* Tab Controls */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl bg-slate-100 p-1.5 border border-slate-200 shadow-2xs">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-[#0A192F] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-[#1D4ED8]' : 'text-slate-500'}`} />
                  <span>{step.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Screen Preview inside MonitorFrame */}
          <div className="lg:col-span-7">
            <MonitorFrame
              src={current.src}
              alt={current.alt}
              title={current.title}
              caption={current.caption}
            />
          </div>

          {/* Right Column: Narrative & Key Bullets */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] leading-tight">
              {current.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              {current.desc}
            </p>

            <ul className="mt-6 space-y-3">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
