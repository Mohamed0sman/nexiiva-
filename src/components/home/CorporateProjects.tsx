'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame, Activity, Sliders, Award, CheckCircle2 } from 'lucide-react';
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
      icon: Flame,
      title:
        isAr
          ? 'التوأم الرقمي لوحدة التقطير الجوي للبترول الخام (CDU-101)'
          : 'Atmospheric Crude Distillation (CDU-101) Digital Twin',
      sector: isAr ? 'تكرير البترول والطاقة' : 'Petroleum Refining',
      status: isAr ? 'منجز ومختبر للتشغيل' : 'Validated & Operational',
      image: '/assets/photos/hero-control-room.jpg',
      scope:
        isAr
          ? 'نموذج توأم رقمي متكامل لبرج التقطير الجوي يشمل أفران التسخين، أبراج التقطير، 3 أعمدة فصل جانبية (نافثا، كيروسين، ديزل)، ونظام الراجع العلوي.'
          : 'Comprehensive dynamic digital twin model replicating crude preheat, atmospheric column, 3 side-strippers (Naphtha, Kerosene, L. Diesel), and overhead reflux circuit.',
      specs: [
        isAr ? '12 مؤشراً بيانياً متزامناً للحرارة والضغط والتدفق' : '12 Synchronized multi-pen trends for T, P & Flow',
        isAr ? 'مطابقة 1:1 لشاشات كونسول الـ DCS وصمامات التحكم' : '1:1 DCS console faceplates and cascade loops',
        isAr ? '6 سيناريوهات طوارئ قياسية حسب معايير ISA-18.2' : '6 ISA-18.2 verified emergency upset scenarios',
      ],
      link: `/${locale}/solutions#ots`,
    },
    {
      id: 'preheat-train',
      icon: Activity,
      title:
        isAr
          ? 'النموذج الهيدروليكي والحراري لشبكة التسخين الأولي'
          : 'Crude Preheat Train Thermal-Hydraulic Network Model',
      sector: isAr ? 'شبكات التبادل الحراري والمضخات' : 'Heat Transfer & Pumping',
      status: isAr ? 'منجز ومختبر' : 'Validated',
      image: '/assets/screens/preheat-train-pfd.png',
      scope:
        isAr
          ? 'نمذجة ديناميكية متقدمة لسلسلة المبادلات الحرارية متعددة المراحل مع حسابات دقيقة للهبوط في الضغط والاتزان الحراري وتجاوزات صمامات الأمان.'
          : 'Multi-stage shell-and-tube exchanger train dynamic model with differential pressure calculations, bypass control, and fouling drift.',
      specs: [
        isAr ? 'اتزان هيدروليكي وحراري لحظي للشبكة' : 'Coupled pressure-flow and dynamic heat duty balance',
        isAr ? 'محاكاة أعطال الصدمة الحرارية وتوقف المضخات' : 'Thermal shock and pump trip cavitation transients',
        isAr ? 'تتبع درجات حرارة الدخول والخروج في الزمن الفعلي' : 'Real-time multi-point temperature gradient tracking',
      ],
      link: `/${locale}/solutions#builder`,
    },
    {
      id: 'instructor-station',
      icon: Sliders,
      title:
        isAr
          ? 'محطة التحكم الإشرافي وإدارة طوارئ العمليات الفورية'
          : 'Instructor Supervisory Station & Fault Injection Console',
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
      icon: Award,
      title:
        isAr
          ? 'منظومة تقييم واعتماد الكفاءة وفق لوائح التشغيل القياسية (SOP)'
          : 'Operator Qualification & SOP Compliance Suite',
      sector: isAr ? 'الحوكمة والتأهيل المهني للمشغلين' : 'Workforce Qualification',
      status: isAr ? 'متاح للمشاريع التجريبية' : 'Pilot Enrollment Open',
      image: '/assets/photos/operator-control-room.jpg',
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
            <div className="text-xs font-mono font-bold tracking-wider text-sky-600 uppercase">
              {isAr ? 'المشاريع الهندسية والوحدات المنجزة' : 'FEATURED ENGINEERING PROJECTS & DIGITAL TWINS'}
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? 'نماذج هندسية حقيقية بنيت لواقع منشآت الطاقة.'
                : 'Validated engineering projects for energy facilities.'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {isAr
                ? 'استعراض لنماذج التوأم الرقمي والمنظومات الديناميكية التي تم بناؤها واختبارها وتوثيق أدائها وفق متطلبات مصافي التكرير ومجمعات الغاز.'
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
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-sky-300 transition-colors shadow-2xs"
              >
                <div>
                  {/* Project Image Frame (Bright, real industrial photo/flowsheet) */}
                  <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden border-b border-slate-200">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 start-3">
                      <span className="inline-flex items-center gap-1.5 rounded bg-white/95 text-slate-800 text-[11px] font-semibold px-3 py-1 border border-slate-200 shadow-2xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wide">
                      <Icon className="h-4 w-4 text-sky-600" />
                      <span>{proj.sector}</span>
                    </div>

                    <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {proj.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {proj.scope}
                    </p>

                    {/* Clean Technical Specifications List with Lucide Icons */}
                    <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                      {proj.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={proj.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    <span>{isAr ? 'تفاصيل المشروع والمواصفات' : 'View specifications'}</span>
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-mono">Nexiiva Energy</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
