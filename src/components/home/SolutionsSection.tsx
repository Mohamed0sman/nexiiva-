'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Monitor, Cpu, Sliders, Award } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface SolutionsSectionProps {
  locale: string;
  dict: Dict;
}

export function SolutionsSection({ locale, dict }: SolutionsSectionProps) {
  const isAr = locale === 'ar';

  const solutions = [
    {
      num: '01',
      icon: Monitor,
      title: isAr ? 'التوأم الرقمي ومطابقة كونسول الـ DCS' : 'Dynamic Digital Twins & DCS Console Parity',
      desc: isAr
        ? 'نمذجة ديناميكية مطابقة 1:1 لشاشات كونسول الـ DCS، مع رصد بياني متزامن لـ 12 متغيراً ومطابقة دقيقة للاتزان الثرموديناميكي.'
        : '1:1 DCS console emulation with live multi-pen trend monitoring, high-precision thermodynamic balances, and authentic control loops.',
      deliverable: isAr ? 'برمجية كونسول مطابقة لغرفة التحكم' : '1:1 Control Room DCS Software',
      link: `/${locale}/solutions#ots`,
    },
    {
      num: '02',
      icon: Cpu,
      title: isAr ? 'محرك النمذجة الهندسية المؤتمت (Unit Builder)' : 'Automated Unit Engineering Engine',
      desc: isAr
        ? 'مسار برمجي مؤتمت يحول وثائق ومخططات P&ID وجداول المعدات إلى نموذج فيزيائي متكامل في غضون أيام وأسابيع.'
        : 'Automated pipeline converting plant P&IDs, equipment data sheets, and operating envelopes into unit digital twins in ~1 week.',
      deliverable: isAr ? 'نموذج هندسي مخصص للمنشأة' : 'Plant-Specific Dynamic Twin',
      link: `/${locale}/solutions#builder`,
    },
    {
      num: '03',
      icon: Sliders,
      title: isAr ? 'محطة التحكم الإشرافي وإدارة الطوارئ' : 'Instructor Supervisory Station',
      desc: isAr
        ? 'منصة إشرافية تمكن مدربي العمليات من إطلاق اضطرابات مسبقة أو فورية (توقف مضخات، استعصاء صمامات، تسريبات) مع إمكانية التجميد وإعادة المشهد.'
        : 'Supervisory platform enabling training leads to inject complex multi-variable transients and freeze scenarios for debriefs.',
      deliverable: isAr ? 'لوحة تحكم كاملة للمدرب' : 'Full Instructor Control Station',
      link: `/${locale}/solutions#console`,
    },
    {
      num: '04',
      icon: Award,
      title: isAr ? 'منظومة تقييم واعتماد الكفاءة (SOP)' : 'Scoring & SOP Certification Suite',
      desc: isAr
        ? 'محرك تقييم إجرائي يسجل استجابة المشغل وزمن رد فعله ومطابقته لإجراءات التشغيل القياسية مع إصدار شهادات اعتماد موثقة.'
        : 'Granular procedural evaluation engine that scores operator reaction latency, safety envelope adherence, and SOP compliance.',
      deliverable: isAr ? 'سجل تدقيق وشهادة كفاءة موثقة' : 'Verifiable Qualification Certificate',
      link: `/${locale}/solutions#certification`,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold tracking-wider text-sky-600 uppercase">
            {isAr ? 'مجالات العمل والحلول الهندسية' : 'CORE ENGINEERING CAPABILITIES'}
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAr
              ? 'بنية متكاملة لنمذجة العمليات وتأهيل الكوادر.'
              : 'Integrated infrastructure for unit modeling & qualification.'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {isAr
              ? 'أربع منظومات تقنية مترابطة صممت لتلائم بيئة العمل الصارمة في منشآت التكرير والطاقة والبتروكيماويات.'
              : 'Four interconnected engineering systems built to integrate seamlessly with your plant’s qualification and SOP standards.'}
          </p>
        </div>

        {/* 4 Clean Editorial Columns with Real Lucide Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-sky-300 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 border border-sky-200 text-sky-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-sky-600">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 block mb-0.5">
                      {isAr ? 'المخرج الهندسي:' : 'Deliverable:'}
                    </span>
                    <span className="text-slate-800 font-medium">{item.deliverable}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    <span>{dict?.common?.readMore || (isAr ? 'التفاصيل الهندسية' : 'Learn more')}</span>
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
