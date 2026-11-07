'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { MonitorFrame } from '@/components/MonitorFrame';
import { Monitor, Sliders, Award, CheckCircle2, ShieldCheck, Activity, FileCheck } from 'lucide-react';
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
      badge: locale === 'ar' ? 'المرحلة 01: محاكاة المشغل' : 'STAGE 01: OPERATOR CONSOLE',
      tabLabel:
        dict?.howItWorks?.steps?.[0]?.tab ||
        (locale === 'ar' ? '1. الممارسة والتشغيل' : '1. Practice (DCS Console)'),
      title:
        dict?.howItWorks?.steps?.[0]?.title ||
        (locale === 'ar'
          ? 'عمليات تشغيل تحاكي كونسول الـ DCS بالكامل'
          : 'DCS-Style Console Operations'),
      desc:
        dict?.howItWorks?.steps?.[0]?.desc ||
        (locale === 'ar'
          ? 'يتدرب المشغلون على شاشات واقعية لنظام التحكم الموزع مع مخططات PFD حية، إنذارات، لوحات صمامات، و12 مؤشراً بيانياً متزامناً لمراقبة السلوك الهيدروليكي والحراري.'
          : 'Operators train on authentic distributed control system (DCS) displays with live PFD schematics, interactive faceplates, and 12 synchronized multi-pen trends.'),
      src: '/assets/screens/cdu-atm-column-pfd.png',
      alt: 'Atmospheric Distillation Column PFD Console',
      caption:
        locale === 'ar'
          ? 'شاشة برج التقطير الجوي CDU مع 12 مؤشراً بيانياً وهرمية الإنذارات حسب مواصفات ISA'
          : 'Real CDU PFD Console with 12 Live Trends & ISA-18.2 Alarm Hierarchy',
      icon: Monitor,
      metric: '1:1 DCS FACES',
      metricDesc: locale === 'ar' ? 'مطابقة هندسية كاملة' : 'Full Console Parity',
      metricIcon: Activity,
      bullets:
        locale === 'ar'
          ? [
              'محاكاة مطابقة 1:1 للوحات تحكم الـ DCS وصمامات العمليات والتحكم التتابعي',
              'مخططات بيانية متعددة لمراقبة درجات الحرارة والتدفقات وفرق ضغط البرج (ΔP)',
              'لافتات إنذارات قياسية حسب معايير ISA-18.2 مع بروتوكولات الإقرار والإسكات',
            ]
          : [
              '1:1 functional emulation of control room DCS faceplates & cascade loops',
              'Multi-pen trends monitoring temperature, flow, and column delta-P (ΔP)',
              'Authentic ISA-18.2 alarm banners with acknowledge, silence & trip protocols',
            ],
    },
    {
      id: 'instruct',
      badge: locale === 'ar' ? 'المرحلة 02: إشراف المدرب' : 'STAGE 02: SUPERVISORY INJECTION',
      tabLabel:
        dict?.howItWorks?.steps?.[1]?.tab ||
        (locale === 'ar' ? '2. الإشراف والتدخل' : '2. Instruct (Fault Injection)'),
      title:
        dict?.howItWorks?.steps?.[1]?.title ||
        (locale === 'ar'
          ? 'حقن الأعطال التشغيلية وحالات الطوارئ في الزمن الفعلي'
          : 'Real-Time Fault Injection & Supervision'),
      desc:
        dict?.howItWorks?.steps?.[1]?.desc ||
        (locale === 'ar'
          ? 'يتحكم المدرب في إطلاق أعطال مسبقة أو فورية (توقف مضخات، استعصاء صمامات، تسريب أنابيب أفران) مع إمكانية تجميد المحاكاة وتحليل الخطأ الجذري.'
          : 'Instructors trigger pre-programmed or live process upsets (pump trips, valve stiction, furnace leaks) with instant scenario freeze and root-cause replay capabilities.'),
      src: '/assets/screens/instructor-console.png',
      alt: 'Instructor Supervisory Console',
      caption:
        locale === 'ar'
          ? 'كونسول المشرف للتحكم بسيناريوهات الطوارئ وحقن الأعطال الفورية'
          : 'Supervisory Fault Injection Console with Real-Time Scenario Control',
      icon: Sliders,
      metric: 'ZERO DELAY',
      metricDesc: locale === 'ar' ? 'حقن فوري للأعطال' : 'Instant Transients',
      metricIcon: ShieldCheck,
      bullets:
        locale === 'ar'
          ? [
              'حقن فوري للأعطال: توقف مضخات، تجمد صمامات، وانحراف حساسات القياس',
              'وظائف التجميد المؤقت (Freeze)، لقطة الحالة (Snapshot)، وإعادة المحاكاة',
              'تسجيل زمني دقيق لكل خطوة وإجراء يتخذه المشغل المتدرب بدقة المللي ثانية',
            ]
          : [
              'Instant fault injection: pump trips, valve freeze, and sensor calibration drift',
              'Freeze, snapshot, and rewind functions for root-cause operational debriefs',
              'Trainee action logging with millisecond timestamp precision and sequence tracking',
            ],
    },
    {
      id: 'certify',
      badge: locale === 'ar' ? 'المرحلة 03: التقييم والاعتماد' : 'STAGE 03: SOP CERTIFICATION',
      tabLabel:
        dict?.howItWorks?.steps?.[2]?.tab ||
        (locale === 'ar' ? '3. التقييم والاعتماد' : '3. Certify (SOP Scoring)'),
      title:
        dict?.howItWorks?.steps?.[2]?.title ||
        (locale === 'ar'
          ? 'تقييم موضوعي وشهادات كفاءة تشغيلية رقمية'
          : 'Objective Scoring & SOP Certification'),
      desc:
        dict?.howItWorks?.steps?.[2]?.desc ||
        (locale === 'ar'
          ? 'يتم تسجيل كل إجراء يقوم به المشغل ومطابقته بدقة مع إجراءات التشغيل القياسية (SOP). تقارير تقييم تفصيلية وشهادات اعتماد تثبت كفاءة الكادر قبل تسلم الوردية الحية.'
          : 'Every trainee action is timestamped against standard operating procedures. Receive an itemized performance breakdown and verification certificate before live plant shifts.'),
      src: '/assets/screens/preheat-train-pfd.png',
      alt: 'Preheat Train Process Diagram',
      caption:
        locale === 'ar'
          ? 'محاكاة ديناميكية لشبكة التسخين الأولي والتقييم الآلي للمتدرب'
          : 'Preheat Train Hydraulic Simulation and Automated Scoring',
      icon: Award,
      metric: '100% SOP AUDIT',
      metricDesc: locale === 'ar' ? 'سجل امتثال موثق' : 'Verifiable Qualification',
      metricIcon: FileCheck,
      bullets:
        locale === 'ar'
          ? [
              'تقييم آلي وموضوعي مستند إلى إجراءات التشغيل القياسية (SOP) للمنشأة',
              'شهادة كفاءة موثقة وسجل زمني للاستجابة لحالات الطوارئ لحماية الأصول',
              'قياس جاهزية المشغل قبل تكليفه بالورديات الحية في المنشأة الحيوية',
            ]
          : [
              'Automated scoring against verified plant standard operating procedures (SOP)',
              'Granular timeline of operator reaction latency during process alarms',
              'Objective qualification sign-off before assigning live plant console shifts',
            ],
    },
  ];

  const current = steps[activeTab];
  const MetricIcon = current.metricIcon;

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.howItWorks?.eyebrow || (locale === 'ar' ? 'منهجية العمل والتأهيل' : 'OPERATIONAL QUALIFICATION WORKFLOW')}
          title={
            dict?.howItWorks?.title ||
            (locale === 'ar'
              ? 'ممارسة. إشراف. اعتماد.'
              : 'Practice. Instruct. Certify.')
          }
          subtitle={
            dict?.howItWorks?.subtitle ||
            (locale === 'ar'
              ? 'دورة تدريبية متكاملة تعكس بيئة أنظمة التحكم الموزع DCS الحقيقية من الممارسة وحتى إصدار الشهادات.'
              : 'A complete operational qualification cycle replicating real DCS workflows from console reps to certification.')
          }
          align="center"
          theme="light"
        />

        {/* Tab Controls - Crisp & Enterprise */}
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
                  <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
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

          {/* Right Column: Narrative, Key Checkpoints & Spec Metric */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Step Stage Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono font-bold text-blue-700 w-fit">
              <span>{current.badge}</span>
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-[#0A192F] leading-tight">
              {current.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              {current.desc}
            </p>

            {/* Bullets */}
            <ul className="mt-6 space-y-3">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Metric Callout Card */}
            <div className="mt-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                <MetricIcon className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-[#0A192F] uppercase tracking-wider block">
                  {current.metric}
                </span>
                <span className="text-xs text-slate-500">
                  {current.metricDesc}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
