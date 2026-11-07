'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Layers,
  ShieldAlert,
  GitBranch,
  DollarSign,
  CheckCircle2,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface SolutionSectionProps {
  locale?: string;
  dict: Dict;
}

export function SolutionSection({ locale = 'en', dict }: SolutionSectionProps) {
  const nodes = [
    {
      id: '01',
      icon: Layers,
      spec: locale === 'ar' ? 'معادلات الحالة الديناميكية' : 'FIRST-PRINCIPLES DYNAMICS',
      title:
        dict?.solution?.nodes?.[0]?.title ||
        (locale === 'ar'
          ? 'منصة محاكاة هندسية مبنية للواقع الصناعي'
          : 'A simulation platform built for industrial reality'),
      desc:
        dict?.solution?.nodes?.[0]?.desc ||
        (locale === 'ar'
          ? 'نمذجة ديناميكية متكاملة لعمليات التكرير والمعالجة الكيميائية بحسابات اتزان السائل والبخار وحفظ الكتلة والطاقة لحظياً.'
          : 'Full-spectrum dynamic simulation based on vapor-liquid equilibrium (VLE) and real-time hydraulic mass and energy balances.'),
      features:
        locale === 'ar'
          ? ['اتزان هيدروليكي وحراري لحظي', 'نمذجة دقيقة للطورين البخاري والسائل']
          : ['Real-time mass & energy conservation', 'Dynamic 2-phase vapor-liquid equilibrium'],
    },
    {
      id: '02',
      icon: ShieldAlert,
      spec: locale === 'ar' ? 'صفر مخاطر بيئية وبشرية' : 'RISK-FREE EMERGENCY SANDBOX',
      title:
        dict?.solution?.nodes?.[1]?.title ||
        (locale === 'ar'
          ? 'ممارسة سيناريوهات الطوارئ النادرة بأمان مطلق'
          : 'Practice extreme upsets safely'),
      desc:
        dict?.solution?.nodes?.[1]?.desc ||
        (locale === 'ar'
          ? 'مواجهة أعنف حوادث العمليات: انطفاء الأفران، تسريب الغازات، وفشل المضخات دون أي خطر على المشغل أو البيئة أو المعدات.'
          : 'Face catastrophic process upsets—furnace flameouts, toxic leaks, pump failures—without asset risk, injury, or environmental flaring.'),
      features:
        locale === 'ar'
          ? ['مئات التكرارات لحالات الإغلاق الطارئ', 'صفر انبعاثات أو أضرار ميكانيكية']
          : ['Hundreds of emergency upset reps', 'Zero flaring emissions or asset damage'],
    },
    {
      id: '03',
      icon: GitBranch,
      spec: locale === 'ar' ? 'مطابقة كاملة للوحدة الصناعية' : 'UNIT P&ID & LOGIC FIDELITY',
      title:
        dict?.solution?.nodes?.[2]?.title ||
        (locale === 'ar'
          ? 'تطويع المحاكي وفق منطق ومخططات وحدتك الحقيقية'
          : 'Tailored to your plant’s exact logic'),
      desc:
        dict?.solution?.nodes?.[2]?.desc ||
        (locale === 'ar'
          ? 'مطابقة تامة لدوائر التحكم التتابعية، صمامات الأمان، ومنظومة الإغلاق الاضطراري (ESD) المعتمدة في منشأتك.'
          : 'Replicates your plant’s custom P&ID control loops, ESD trip interlocks, cascade configurations, and operating envelopes.'),
      features:
        locale === 'ar'
          ? ['نفس مسميات الحساسات والإنذارات (Tags)', 'مطابقة زمن استجابة الصمامات والمضخات']
          : ['Plant-authentic instrument tag database', 'Calibrated valve stroke and hydraulic response'],
    },
    {
      id: '04',
      icon: DollarSign,
      spec: locale === 'ar' ? 'اقتصاديات تشغيل مستدامة' : 'HIGH CAPEX EFFICIENCY',
      title:
        dict?.solution?.nodes?.[3]?.title ||
        (locale === 'ar'
          ? 'حل اقتصادي وسريع يكسر احتكار الموردين'
          : 'Cost-effective, rapid deployment'),
      desc:
        dict?.solution?.nodes?.[3]?.desc ||
        (locale === 'ar'
          ? 'تقليص فترات التسليم من سنوات إلى أسابيع، مع تكلفة اشتراك ميسرة وتشغيل محلي على أجهزة الحاسوب المعتادة.'
          : 'Delivered in weeks instead of multi-year vendor cycles, at a fraction of legacy simulator capex, deployed on standard PC hardware.'),
      features:
        locale === 'ar'
          ? ['تشغيل محلي على الحواسيب المكتبية', 'تسليم خلال أيام وأسابيع وليس سنوات']
          : ['Runs on local industrial PC hardware', 'Fast turnaround measured in weeks'],
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A192F] text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.solution?.eyebrow || (locale === 'ar' ? 'الحل الهندسي للمحاكاة' : 'ENGINEERING SOLUTION ARCHITECTURE')}
          title={
            dict?.solution?.title ||
            (locale === 'ar'
              ? 'منصة محاكاة هندسية مبنية للواقع الصناعي.'
              : 'A simulation platform built for industrial reality.')
          }
          subtitle={
            dict?.solution?.subtitle ||
            (locale === 'ar'
              ? 'الجمع بين دقة الحسابات الثرموديناميكية وسهولة تدريب مشغلي غرف التحكم.'
              : 'Connecting dynamic thermodynamic rigor with accessible console operator training.')
          }
          align="center"
          theme="dark"
        />

        {/* 4 Architectural Engineering Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-900 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-950 text-blue-400 border border-blue-800/40 group-hover:bg-blue-900/60 group-hover:text-blue-300 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {node.spec}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {node.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {node.desc}
                  </p>
                </div>

                {/* Feature Checkpoints */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  {node.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
