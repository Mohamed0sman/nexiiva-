'use client';

import React from 'react';
import {
  ShieldCheck,
  Boxes,
  MonitorCheck,
  Clock4,
  CheckCircle2,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface TrustStripProps {
  locale?: string;
  dict?: Dict;
}

export function TrustStrip({ locale = 'en' }: TrustStripProps) {
  const specs = [
    {
      category: locale === 'ar' ? 'الأمان والامتثال السيبراني' : 'CYBERSECURITY ARCHITECTURE',
      metric: '100%',
      title:
        locale === 'ar'
          ? 'تشغيل محلي معزول (Air-Gapped)'
          : '100% Air-Gapped Deployment',
      desc:
        locale === 'ar'
          ? 'يعمل محلياً بالكامل دون اتصال بالإنترنت أو الاعتماد على سحابة خارجية لضمان سرية البيانات.'
          : 'Runs strictly on-premise without external network connections, ensuring zero industrial cyber risk.',
      icon: ShieldCheck,
      badge: locale === 'ar' ? 'معزول تماماً' : 'Air-Gapped',
    },
    {
      category: locale === 'ar' ? 'مكتبة المعدات المعيارية' : 'COMPONENT LIBRARY',
      metric: '387',
      title:
        locale === 'ar'
          ? 'معدة وطراز هيدروليكي معتمد'
          : '387 Verified Equipment Models',
      desc:
        locale === 'ar'
          ? 'مكتبة نمذجة فيزيائية متكاملة لأبراج التقطير، الأفران، المبادلات، الصمامات، والمضخات.'
          : 'Dynamic library of distillation trays, fired heaters, pumps, valves, and heat exchangers.',
      icon: Boxes,
      badge: locale === 'ar' ? 'نماذج معتمدة' : 'Verified Models',
    },
    {
      category: locale === 'ar' ? 'مطابقة بيئة غرف التحكم' : 'OPERATOR CONSOLE FIDELITY',
      metric: '1:1',
      title:
        locale === 'ar'
          ? 'مطابقة شاشات الـ DCS والإنذارات'
          : '1:1 DCS Console Matching',
      desc:
        locale === 'ar'
          ? 'نفس لوحات التحكم التفاعلية، مسارات PFD، ومؤشرات الإنذار التي يتعامل معها المشغل يومياً.'
          : 'Exact replication of console faceplates, alarm annunciators, and 12 synchronized trends.',
      icon: MonitorCheck,
      badge: locale === 'ar' ? 'معايير ISA' : 'ISA-18.2 Ready',
    },
    {
      category: locale === 'ar' ? 'سرعة الإنجاز والتشغيل' : 'DEPLOYMENT AGILITY',
      metric: '~1 wk',
      title:
        locale === 'ar'
          ? 'أسبوع واحد مستهدف للبناء'
          : '~1 Week Build Time Target',
      desc:
        locale === 'ar'
          ? 'مستهدف زمني قياسي لبناء واختبار محاكي الوحدة الصناعية بدلاً من أشهر الانتظار التقليدية.'
          : 'Target build turnaround to configure and validate a single unit dynamic simulator.',
      icon: Clock4,
      badge: locale === 'ar' ? 'تنفيذ سريع' : 'Rapid Build',
    },
  ];

  const complianceStandards = [
    locale === 'ar' ? 'مطابقة معايير إدارة إنذارات ISA-18.2' : 'ISA-18.2 Alarm Management Standard',
    locale === 'ar' ? 'متوافق مع لوائح السلامة المهنية OSHA PSM 1910.119' : 'OSHA PSM 1910.119 Process Safety Management',
    locale === 'ar' ? 'مؤشرات سلامة العمليات API RP 754' : 'API RP 754 Process Safety Indicators',
    locale === 'ar' ? 'حسابات فيزيائية ديناميكية بحفظ المادة والطاقة' : 'First-Principles Thermodynamic Conservation Laws',
  ];

  return (
    <section
      id="trust-strip"
      className="relative z-20 border-b border-slate-200 bg-white py-12"
      aria-label="Platform Specifications"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-2xl font-extrabold tracking-tight text-[#0A192F] font-mono">
                        {item.metric}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-[#0A192F]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational & Engineering Compliance Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-600">
          {complianceStandards.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
