'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Monitor, Cpu, Sliders, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface SolutionsSectionProps {
  locale: string;
  dict: Dict;
}

export function SolutionsSection({ locale, dict }: SolutionsSectionProps) {
  const solutions = [
    {
      id: 'ots',
      tag: locale === 'ar' ? 'نظام المحاكاة الرئيسي' : 'CORE SIMULATION ENGINE',
      icon: Monitor,
      title:
        dict?.solutions?.items?.[0]?.title || (locale === 'ar' ? 'محاكي تدريب المشغلين (OTS)' : 'Operator Training Simulator (OTS)'),
      desc:
        dict?.solutions?.items?.[0]?.desc ||
        (locale === 'ar'
          ? 'محاكي كونسول مطابق 1:1 لأنظمة التحكم الموزع مع رصد بياني فوري لـ 12 متغيراً ومطابقة دقيقة للاتزان الثرموديناميكي.'
          : 'DCS-authentic console simulator with multi-trend monitoring, high-precision thermodynamic balances, and real DCS faceplates.'),
      inputs: locale === 'ar' ? 'مخططات P&ID وفلسفة التحكم' : 'P&IDs & Control Philosophy',
      deliverable: locale === 'ar' ? 'بيئة تشغيل مطابقة لغرفة التحكم' : '1:1 Control Room DCS Software',
      link: `/${locale}/solutions#ots`,
      features:
        locale === 'ar'
          ? ['مطابقة تامة لشاشات DCS', 'اتزان طوري وديناميكي للمائع']
          : ['1:1 DCS console faceplates', 'Dynamic multi-phase balances'],
    },
    {
      id: 'builder',
      tag: locale === 'ar' ? 'محرك النمذجة المؤتمت' : 'AUTOMATED COMPILER',
      icon: Cpu,
      title:
        dict?.solutions?.items?.[1]?.title ||
        (locale === 'ar' ? 'محرك بناء النماذج الرقمية (OTS Builder)' : 'Unit Modeling Engine (OTS Builder)'),
      desc:
        dict?.solutions?.items?.[1]?.desc ||
        (locale === 'ar'
          ? 'مسار برمجي مؤتمت يحول وثائق المنشأة ومخططات الأنابيب إلى منطق محاكاة متكامل في حوالي أسبوع واحد.'
          : 'Automated pipeline converting P&IDs, mass-energy balances, and operating envelopes into simulator units in ~1 week.'),
      inputs: locale === 'ar' ? 'جداول بيانات المعدات وظروف التشغيل' : 'Equipment Data Sheets & Stream Limits',
      deliverable: locale === 'ar' ? 'نموذج محاكاة مخصص للمنشأة' : 'Compiled Plant-Specific Dynamic Model',
      link: `/${locale}/solutions#builder`,
      features:
        locale === 'ar'
          ? ['توليد كود المحاكاة خوارزمياً', 'تسليم قياسي خلال أسبوع']
          : ['Algorithmic model compilation', '~1 week target build turnaround'],
    },
    {
      id: 'console',
      tag: locale === 'ar' ? 'محطة التحكم الإشرافي' : 'SUPERVISORY STATION',
      icon: Sliders,
      title:
        dict?.solutions?.items?.[2]?.title || (locale === 'ar' ? 'كونسول المشرف وحقن الأعطال' : 'Instructor Supervisory Console'),
      desc:
        dict?.solutions?.items?.[2]?.desc ||
        (locale === 'ar'
          ? 'منصة إشرافية متطورة تتيح لمدربي العمليات حقن اضطرابات مسبقة أو فورية، وتجميد السيناريوهات للتحليل الفني.'
          : 'Supervisory fault injection platform enabling training leads to inject complex multi-variable transients and freeze scenarios.'),
      inputs: locale === 'ar' ? 'مصفوفة حالات الطوارئ والإنذارات' : 'Emergency HAZOP & Incident Matrix',
      deliverable: locale === 'ar' ? 'لوحة تحكم كاملة للمدرب' : 'Full Instructor Control Station',
      link: `/${locale}/solutions#console`,
      features:
        locale === 'ar'
          ? ['حقن فوري للأعطال والاضطرابات', 'إعادة المشهد وتحليل الخطأ الجذري']
          : ['Real-time upset injection', 'Freeze, snapshot & root-cause replay'],
    },
    {
      id: 'certification',
      tag: locale === 'ar' ? 'محرك التقييم والاعتماد' : 'SOP AUDIT ENGINE',
      icon: Award,
      title:
        dict?.solutions?.items?.[3]?.title || (locale === 'ar' ? 'تقييم واعتماد الكفاءة (SOP)' : 'Scoring & SOP Certification'),
      desc:
        dict?.solutions?.items?.[3]?.desc ||
        (locale === 'ar'
          ? 'محرك تقييم إجرائي يسجل استجابة المشغل وزمن رد فعله ومطابقته لإجراءات التشغيل القياسية مع إصدار شهادات اعتماد موثقة.'
          : 'Granular procedural evaluation engine that scores operator reaction latency, safety envelope adherence, and SOP compliance.'),
      inputs: locale === 'ar' ? 'إجراءات التشغيل القياسية (SOPs)' : 'Plant Standard Operating Procedures',
      deliverable: locale === 'ar' ? 'سجل تدقيق وشهادة كفاءة معتمدة' : 'Verifiable Qualification Certificate',
      link: `/${locale}/solutions#certification`,
      features:
        locale === 'ar'
          ? ['قياس زمن رد الفعل بالمللي ثانية', 'تقرير تدقيق موضوعي غير قابل للتلاعب']
          : ['Millisecond reaction time logging', 'Objective tamper-proof audit report'],
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.solutions?.eyebrow || (locale === 'ar' ? 'منظومة الحلول المتكاملة' : 'COMPREHENSIVE SIMULATION SUITE')}
          title={
            dict?.solutions?.title ||
            (locale === 'ar'
              ? 'بنية تحتية هندسية متكاملة لمحاكاة العمليات وتأهيل الكوادر.'
              : 'Modular simulation infrastructure built for plant qualification.')
          }
          subtitle={
            locale === 'ar'
              ? 'أربع منظومات تقنية مترابطة صممت للتكامل مع إجراءات التشغيل القياسية (SOP) وبرامج الكفاءة في منشأتك.'
              : 'Four interconnected engineering systems built to integrate seamlessly with your plant’s qualification and SOP standards.'
          }
          theme="light"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:border-slate-300 hover:bg-white shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#0A192F] group-hover:text-blue-700 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Specifications & Deliverables */}
                  <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-[11px]">
                    <div className="flex items-center justify-between text-slate-500">
                      <span>{locale === 'ar' ? 'المدخلات:' : 'Inputs:'}</span>
                      <span className="font-medium text-slate-800 text-end truncate max-w-[150px]">{item.inputs}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span>{locale === 'ar' ? 'المخرجات:' : 'Output:'}</span>
                      <span className="font-medium text-blue-700 text-end truncate max-w-[150px]">{item.deliverable}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:underline"
                  >
                    <span>{dict?.common?.readMore || (locale === 'ar' ? 'استعراض المواصفات' : 'Explore specifications')}</span>
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
