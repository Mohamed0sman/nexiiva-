'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { CheckCircle2, Wrench, Rocket, Calendar } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface JourneySectionProps {
  locale?: string;
  dict: Dict;
}

export function JourneySection({ locale = 'en', dict }: JourneySectionProps) {
  const milestones = [
    {
      status: 'done',
      icon: CheckCircle2,
      badge: locale === 'ar' ? 'محطة منجزة ومختبرة' : 'VALIDATED MILESTONE',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-300',
      date: locale === 'ar' ? 'الربع الثالث 2026' : 'Q3 2026',
      title:
        dict?.journey?.items?.[0]?.title ||
        (locale === 'ar'
          ? 'بناء واختبار محاكي وحدة التقطير الجوي CDU/VDU بالكامل'
          : 'A Working CDU/VDU Training Unit, Built and Tested'),
      desc:
        dict?.journey?.items?.[0]?.desc ||
        (locale === 'ar'
          ? 'بناء نموذج ديناميكي متكامل لبرج التقطير الجوي وشبكة التسخين الأولي مع شاشات كونسول DCS مطابقة و12 مؤشراً بيانياً متزامناً ونظام إنذار ISA-18.2.'
          : 'Built and validated a full dynamic atmospheric distillation and preheat train model with authentic DCS console screens, 12 live trends, and ISA-18.2 alarms.'),
      details: locale === 'ar' ? 'المحاكي جاهز للتشغيل' : 'CDU/VDU Process Simulator Operational',
    },
    {
      status: 'in_progress',
      icon: Wrench,
      badge: locale === 'ar' ? 'قيد التطوير النشط' : 'IN ACTIVE DEVELOPMENT',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-300',
      date: locale === 'ar' ? 'الربع الرابع 2026' : 'Q4 2026',
      title:
        dict?.journey?.items?.[1]?.title ||
        (locale === 'ar'
          ? 'تطوير محرك بناء ومطابقة النماذج الرقمية (OTS Builder)'
          : 'Automated OTS Builder Under Development'),
      desc:
        dict?.journey?.items?.[1]?.desc ||
        (locale === 'ar'
          ? 'برمجة خط الأنابيب البرمجي المؤتمت لتوليد النماذج مباشرة من وثائق المنشأة. جدولة بناء الوحدة الثانية لقياس زمن البناء المستهدف وتوثيقه علمياً.'
          : 'Engineering the automated unit generation pipeline. Second process unit scheduled to empirically measure and validate real build time.'),
      details: locale === 'ar' ? 'اختبار بناء الوحدة الثانية' : 'Unit 2 Benchmark Scheduled',
    },
    {
      status: 'done',
      icon: CheckCircle2,
      badge: locale === 'ar' ? 'دراسة مرجعية مكتملة' : 'MARKET BENCHMARK COMPLETE',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-300',
      date: locale === 'ar' ? 'الربع الرابع 2026' : 'Q4 2026',
      title:
        dict?.journey?.items?.[2]?.title ||
        (locale === 'ar'
          ? 'إتمام دراسة مقارنة الأسعار والعروض التنافسية'
          : 'Commercial & Price Benchmarking Completed'),
      desc:
        dict?.journey?.items?.[2]?.desc ||
        (locale === 'ar'
          ? 'التواصل مع مزودي محاكيات OTS العالميين ومراجعة عروض الأسعار بالسوق لتأكيد الجدوى الاقتصادية لنكسيفا وتقديم وفر يفوق 70% مقارنة بالحلول التقليدية.'
          : 'Approached major international OTS providers and evaluated preliminary market quotations to confirm our high-margin, disruptive positioning.'),
      details: locale === 'ar' ? 'تسعير تنافسي مؤكد' : 'Competitive Pricing Envelope Verified',
    },
    {
      status: 'next',
      icon: Rocket,
      badge: locale === 'ar' ? 'المرحلة التالية · ما قبل الإيرادات' : 'PRE-REVENUE · NEXT STAGE',
      badgeColor: 'text-blue-800 bg-blue-50 border-blue-300',
      date: locale === 'ar' ? 'الربع الأول 2027' : 'Q1 2027',
      title:
        dict?.journey?.items?.[3]?.title ||
        (locale === 'ar'
          ? 'إطلاق المشاريع التجريبية الميدانية في المصافي'
          : 'Pre-Revenue Stage — Preparing Initial Pilot Deployments'),
      desc:
        dict?.journey?.items?.[3]?.desc ||
        (locale === 'ar'
          ? 'مرحلة شفافة تسبق تحقيق الإيرادات التجارية. الاستعداد لنشر أولى المشاريع التجريبية المعتمدة مع شركات التكرير والطاقة في مصر والشرق الأوسط.'
          : 'Transparently pre-revenue. Preparing initial industrial pilot deployments and direct commercial entry with refineries across Egypt and the GCC.'),
      details: locale === 'ar' ? 'باب المشاريع التجريبية مفتوح' : 'Paid Pilot Program Open',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.journey?.eyebrow || (locale === 'ar' ? 'المسار الزمني وخارطة الطريق' : 'ENGINEERING ROADMAP & MILESTONES')}
          title={
            dict?.journey?.title ||
            (locale === 'ar'
              ? 'المحطات المنجزة وخارطة الطريق القادمة.'
              : 'Honest progression from core engineering to pilot deployment.')
          }
          subtitle={
            dict?.journey?.subtitle ||
            (locale === 'ar'
              ? 'تدرج هندسي شفاف من بناء النماذج الأساسية إلى التحقق التجاري ثم التطبيق التجريبي الميداني.'
              : 'A transparent engineering trajectory: from dynamic model validation to commercial pilots across Egypt and the GCC.')
          }
          theme="light"
        />

        {/* Timeline Cards Container */}
        <div className="relative mt-14 max-w-4xl mx-auto">
          {/* Vertical Connecting Hairline Rule */}
          <div className="absolute top-4 bottom-4 start-6 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-6">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start gap-6 rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-slate-300 shadow-2xs"
                >
                  {/* Status Icon Indicator */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-xs">
                    <Icon
                      className={`h-5 w-5 ${
                        item.status === 'done'
                          ? 'text-emerald-600'
                          : item.status === 'in_progress'
                          ? 'text-amber-600'
                          : 'text-blue-600'
                      }`}
                    />
                  </div>

                  {/* Milestone Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wider ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                          <Calendar className="h-3 w-3" />
                          <span>{item.date}</span>
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-slate-600">
                        {item.details}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-[#0A192F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
