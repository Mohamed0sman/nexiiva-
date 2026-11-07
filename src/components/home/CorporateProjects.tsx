'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowRight, CheckCircle2, Monitor, Layers, Sliders, Award } from 'lucide-react';
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
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
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
      icon: Monitor,
    },
    {
      id: 'preheat-train',
      title:
        isAr
          ? 'شبكة التسخين الأولي الهيدروليكية والحرارية للنفط الخام'
          : 'Crude Preheat Train Thermal-Hydraulic Network Model',
      sector: isAr ? 'شبكات التبادل الحراري والمضخات' : 'Heat Transfer & Pumping',
      status: isAr ? 'منجز ومختبر' : 'Validated',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
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
      icon: Layers,
    },
    {
      id: 'instructor-station',
      title:
        isAr
          ? 'كونسول المشرف ومنظومة حقن أعطال العمليات الفورية'
          : 'Instructor Supervisory Console & Transient Injection Station',
      sector: isAr ? 'أنظمة الإشراف والتحكم الميداني' : 'Supervisory & Safety Control',
      status: isAr ? 'منجز ومختبر للتشغيل' : 'Validated & Operational',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
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
      icon: Sliders,
    },
    {
      id: 'sop-certification',
      title:
        isAr
          ? 'منظومة تقييم واعتماد المشغلين الرقمية وفق لوائح SOP'
          : 'Operator Qualification & SOP Compliance Certification Suite',
      sector: isAr ? 'الحوكمة والتأهيل المهني للمشغلين' : 'Workforce Qualification',
      status: isAr ? 'متاح للمشاريع التجريبية' : 'Pilot Enrollment Open',
      statusColor: 'bg-blue-50 text-blue-800 border-blue-300',
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
      icon: Award,
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 border-b border-slate-200 overflow-hidden" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow={isAr ? 'أحدث المشاريع والوحدات المنجزة' : 'FEATURED SIMULATION PROJECTS & DIGITAL TWINS'}
            title={
              isAr
                ? 'نماذج هندسية حقيقية بنيت وفق أدق المعايير الصناعية.'
                : 'Validated engineering projects engineered for operational reality.'
            }
            subtitle={
              isAr
                ? 'نستعرض جانباً من نماذج المحاكاة والمنظومات الديناميكية التي تم بناؤها واختبارها وتوثيق أدائها وفق متطلبات منشآت الطاقة والتكرير.'
                : 'A selection of high-fidelity dynamic models, unit digital twins, and supervisory suites built and verified against international energy standards.'
            }
            className="mb-0"
            theme="light"
          />

          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 hover:bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-xs transition-colors shrink-0"
          >
            <span>{isAr ? 'طلب نموذج تجريبي لمنشأتك' : 'Request a Project Scoping'}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  {/* Project Image Frame (Pure Software Interface) */}
                  <div className="relative aspect-16/9 w-full bg-slate-950 overflow-hidden border-b border-slate-200">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-102"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Status Pill on Image */}
                    <div className="absolute top-3 start-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold font-mono tracking-wider border shadow-sm ${proj.statusColor}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        <span>{proj.status}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 end-3">
                      <span className="rounded bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono font-bold text-slate-300 border border-slate-700">
                        {proj.sector}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider">
                      <Icon className="h-4 w-4" />
                      <span>{proj.sector}</span>
                    </div>

                    <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#0A192F] group-hover:text-blue-700 transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {proj.scope}
                    </p>

                    {/* Technical Specifications */}
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        {isAr ? 'المواصفات الهندسية المعتمدة:' : 'VERIFIED ENGINEERING SPECIFICATIONS:'}
                      </span>
                      {proj.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={proj.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
                  >
                    <span>{isAr ? 'استعراض تفاصيل المشروع والمواصفات' : 'View project details & specifications'}</span>
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>

                  <span className="text-[11px] font-mono text-slate-500">
                    Nexiiva Industrial
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
