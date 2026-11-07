'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface CorporateProjectsProps {
  locale: string;
  dict?: Dict;
}

export function CorporateProjects({ locale }: CorporateProjectsProps) {
  const isAr = locale === 'ar';

  const projects = [
    {
      id: 'cdu-101',
      title:
        isAr
          ? 'محاكي وحدة التقطير الجوي للبترول الخام (CDU-101 OTS)'
          : 'Atmospheric Crude Distillation (CDU-101) Dynamic Simulator',
      sector: isAr ? 'تكرير البترول والطاقة' : 'Petroleum Refining',
      status: isAr ? 'منجز ومختبر للتشغيل' : 'Validated & Operational',
      image: '/assets/screens/cdu-atm-column-pfd.png',
      scope:
        isAr
          ? 'بناء محاكي ديناميكي متكامل لبرج التقطير الجوي يشمل أفران التسخين، أبراج التقطير، 3 أعمدة فصل جانبية (نافثا، كيروسين، ديزل)، ونظام الراجع العلوي.'
          : 'Comprehensive dynamic OTS model replicating crude preheat, atmospheric column, 3 side-strippers (Naphtha, Kerosene, L. Diesel), and overhead reflux circuit.',
      specs: [
        isAr ? '12 مؤشراً بيانياً متزامناً للحرارة والضغط والتدفق' : '12 Synchronized multi-pen trends for T, P & Flow',
        isAr ? 'مطابقة 1:1 لشاشات كونسول الـ DCS وصمامات التحكم' : '1:1 DCS console faceplates and cascade loops',
        isAr ? '6 سيناريوهات طوارئ قياسية حسب معايير ISA-18.2' : '6 ISA-18.2 verified emergency upset scenarios',
      ],
      link: `/${locale}/solutions#ots`,
    },
    {
      id: 'preheat-train',
      title:
        isAr
          ? 'شبكة التسخين الأولي الهيدروليكية والحرارية للنفط الخام'
          : 'Crude Preheat Train Thermal-Hydraulic Network Model',
      sector: isAr ? 'شبكات التبادل الحراري والمضخات' : 'Heat Transfer & Pumping',
      status: isAr ? 'منجز ومختبر' : 'Validated',
      image: '/assets/screens/preheat-train-pfd.png',
      scope:
        isAr
          ? 'محاكاة ديناميكية متقدمة لسلسلة المبادلات الحرارية متعددة المراحل مع حسابات دقيقة للهبوط في الضغط والاتزان الحراري وتجاوزات صمامات الأمان.'
          : 'Multi-stage shell-and-tube exchanger train simulation with dynamic differential pressure calculations, bypass control, and fouling drift.',
      specs: [
        isAr ? 'اتزان هيدروليكي وحراري لحظي للشبكة' : 'Coupled pressure-flow and dynamic heat duty balance',
        isAr ? 'محاكاة أعطال الصدمة الحرارية وتوقف المضخات' : 'Thermal shock and pump trip cavitation transients',
        isAr ? 'تتبع درجات حرارة الدخول والخروج في الزمن الفعلي' : 'Real-time multi-point temperature gradient tracking',
      ],
      link: `/${locale}/solutions#builder`,
    },
    {
      id: 'instructor-station',
      title:
        isAr
          ? 'كونسول المشرف ومنظومة حقن أعطال العمليات الفورية'
          : 'Instructor Supervisory Console & Fault Injection Station',
      sector: isAr ? 'أنظمة الإشراف والتحكم الميداني' : 'Supervisory & Safety Control',
      status: isAr ? 'منجز ومختبر للتشغيل' : 'Validated & Operational',
      image: '/assets/screens/instructor-console.png',
      scope:
        isAr
          ? 'محطة تحكم إشرافية متطورة تمكن مدربي العمليات من إطلاق اضطرابات مسبقة أو فورية على الوحدة وتجميد المشهد وتحليل الخطأ الجذري مع المتدربين.'
          : 'Supervisory fault injection platform enabling plant instructors to trigger live upsets (pump trips, valve stiction, leaks) with instant freeze and root-cause debriefs.',
      specs: [
        isAr ? 'حقن فوري للأعطال بضغطة زر دون تأخير' : 'One-click instantaneous emergency fault triggers',
        isAr ? 'إيقاف مؤقت، لقطة حالة (Snapshot)، وإعادة المحاكاة' : 'Freeze, snapshot, and rewind functions for debriefs',
        isAr ? 'تسجيل زمني دقيق لكل خطوة يتخذها المتدرب' : 'Millisecond-precision trainee action timestamping',
      ],
      link: `/${locale}/solutions#console`,
    },
    {
      id: 'sop-certification',
      title:
        isAr
          ? 'منظومة تقييم واعتماد المشغلين الرقمية وفق لوائح SOP'
          : 'Operator Qualification & SOP Compliance Suite',
      sector: isAr ? 'الحوكمة والتأهيل المهني للمشغلين' : 'Workforce Qualification',
      status: isAr ? 'متاح للمشاريع التجريبية' : 'Pilot Enrollment Open',
      image: '/assets/screens/cdu-atm-column-pfd.png',
      scope:
        isAr
          ? 'محرك تقييم آلي يقارن ردود أفعال المشغلين بلوائح وإجراءات التشغيل القياسية (SOP) للمنشأة، مع إصدار سجلات تدقيق وشهادات كفاءة رسمية غير قابلة للتلاعب.'
          : 'Automated evaluation engine benchmarking operator response times against plant SOPs during severe emergencies, generating verifiable qualification audit certificates.',
      specs: [
        isAr ? 'قياس سرعة إقرار الإنذارات وإسكاتها (ISA-18.2)' : 'ISA-18.2 alarm acknowledgment latency scoring',
        isAr ? 'تأكيد الالتزام بنطاقات الأمان التشغيلية (Trip Limits)' : 'Automated safety envelope breach detection',
        isAr ? 'شهادة كفاءة موثقة قبل تسليم الورديات الحية' : 'Verifiable qualification sign-off before plant console shifts',
      ],
      link: `/${locale}/solutions#certification`,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
              {isAr ? 'المشاريع الهندسية والوحدات المنجزة' : 'FEATURED ENGINEERING PROJECTS & SIMULATORS'}
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? 'نماذج هندسية حقيقية بنيت لواقع منشآت الطاقة.'
                : 'Validated engineering projects for energy facilities.'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {isAr
                ? 'استعراض لنماذج المحاكاة والمنظومات الديناميكية التي تم بناؤها واختبارها وتوثيق أدائها وفق متطلبات مصافي التكرير ومجمعات الغاز.'
                : 'A selection of high-fidelity dynamic models, unit digital twins, and supervisory suites built and verified against international energy standards.'}
            </p>
          </div>

          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 hover:underline shrink-0"
          >
            <span>{isAr ? 'طلب مناقشة مشروع تجريبي لمنشأتك ←' : 'Request a project scoping →'}</span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-16/9 w-full bg-slate-950 overflow-hidden border-b border-slate-200">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 start-3">
                    <span className="inline-block rounded bg-slate-900/90 text-slate-200 text-[11px] font-semibold px-3 py-1 border border-slate-700">
                      {proj.status}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs font-semibold text-sky-600 uppercase tracking-wide">
                    {proj.sector}
                  </div>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {proj.scope}
                  </p>

                  {/* Clean Technical Specifications List (No green checkmark icons) */}
                  <ul className="mt-5 pt-4 border-t border-slate-200/80 space-y-1.5 text-xs text-slate-700">
                    {proj.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-slate-400 select-none">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Link */}
              <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between">
                <Link
                  href={proj.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline"
                >
                  <span>{isAr ? 'تفاصيل المشروع والمواصفات' : 'View specifications'}</span>
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">Nexiiva</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
