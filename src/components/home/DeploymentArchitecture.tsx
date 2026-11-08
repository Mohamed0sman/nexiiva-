'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Cloud, Server, Laptop } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface DeploymentArchitectureProps {
  locale: string;
  dict?: Dict;
}

export function DeploymentArchitecture({ locale }: DeploymentArchitectureProps) {
  const isAr = locale === 'ar';

  const onPremiseStrengths = [
    {
      title: isAr ? 'تشغيل محلي معزول 100% (Air-Gapped Workstations)' : '100% Offline Air-Gapped Workstations',
      desc: isAr
        ? 'تثبيت كامل على أجهزة محطات العمل الهندسية أو شبكة قاعة التدريب المحلية (LAN) دون الحاجة للاتصال بالإنترنت نهائياً.'
        : 'Installed directly on plant engineering workstations or isolated training room LAN with zero internet dependency.',
    },
    {
      title: isAr ? 'سرية تامة للمخططات (Zero Data Telemetry)' : 'Zero Data Telemetry & IP Sovereignty',
      desc: isAr
        ? 'مخططات P&ID، جداول معدات المنشأة، وحدود التشغيل السرية لا تغادر أسوار الموقع أبداً. امتثال كامل لمعايير IEC 62443.'
        : 'Plant P&IDs, equipment datasheets, and proprietary process limits never leave your facility perimeter.',
    },
    {
      title: isAr ? 'معالجة فيزيائية لحظية بمعدل 60Hz' : 'Deterministic 60 Hz Physics Engine',
      desc: isAr
        ? 'محرك الحسابات الديناميكية يعمل على المعالج المحلي بزمن استجابة فائق دون أي تأخير في حركة المؤشرات أو اهتزازات في الشبكة.'
        : 'Dynamic equations solved locally with millisecond fidelity—zero latency and zero jitter during emergency transients.',
    },
    {
      title: isAr ? 'مطابقة تامة لشاشات غرف التحكم (1:1 DCS)' : '1:1 Control Room DCS Multi-Monitor Parity',
      desc: isAr
        ? 'تهيئة محطات متعددة الشاشات تماثل غرف التحكم الميدانية (Yokogawa, DeltaV, Foxboro, Honeywell) لأداء تدريبي واقعي.'
        : 'Authentic multi-monitor layouts mirroring live industrial control rooms for seamless operational muscle memory.',
    },
  ];

  const cloudStrengths = [
    {
      title: isAr ? 'وصول فوري دون الحاجة لشراء خوادم خاصة' : 'Instant Browser Access & Zero Server Setup',
      desc: isAr
        ? 'تشغيل مباشر عبر متصفح الويب للفرق الموزعة، ومراكز التدريب، والاستشاريين دون الحاجة لتهيئة عتاد محلي معقد.'
        : 'Instant web access for distributed teams, training academies, and process engineers without complex on-site IT provisioning.',
    },
    {
      title: isAr ? 'تحديثات مستمرة للنماذج ومكتبة المعدات' : 'Continuous Library & Model Updates',
      desc: isAr
        ? 'الحصول التلقائي على أحدث تحديثات محرك المحاكاة، ونماذج الوحدات الجديدة (مثل وحدات الغاز TEG والأمين) فور إطلاقها.'
        : 'Automatic delivery of latest simulation solver enhancements, bug fixes, and upcoming gas process units (TEG, Amine).',
    },
    {
      title: isAr ? 'مرونة عالية للتدريب عن بُعد' : 'Flexible Multi-Site & Remote Training',
      desc: isAr
        ? 'إمكانية تدريب المهندسين والمشغلين من أي موقع مصرح به، مع إدارة إشرافية مركزية ومزامنة سيناريوهات المدرب.'
        : 'Enable operators to practice from regional plant annexes or remote offices with centralized instructor oversight.',
    },
    {
      title: isAr ? 'أمان اتصال مشفر بالكامل (TLS 1.3 / Enterprise Auth)' : 'Encrypted Channels & Role-Based Access',
      desc: isAr
        ? 'قنوات اتصال مشفرة وإدارة وصول قائمة على الأدوار لمنع أي وصول غير مصرح به لشاشات وبيانات التدريب.'
        : 'Enterprise authentication with strict role-based permissions and end-to-end encryption for session data.',
    },
  ];

  const handleSelectPlan = (plan: string) => {
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('contact-interest') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = plan;
      }
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="architecture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <div className="text-xs font-mono font-bold tracking-wider text-sky-600 uppercase">
            {isAr ? 'خيارات النشر والتشغيل' : 'DEPLOYMENT ARCHITECTURE'}
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isAr
              ? 'تشغيل على السحابة أو داخل شركتك.'
              : 'Run on the cloud or inside your company.'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {isAr
              ? 'توفر نكسيفا خيارين للنشر لتلبية احتياجات المصافي الكبرى التي تفرض العزل الأمني التام، أو الفرق ومراكز التدريب التي تتطلب الوصول السحابي الفوري.'
              : 'Nexiiva offers two proven deployment options: 100% offline air-gapped workstations for secure plant perimeters, or instant cloud access for distributed teams and training academies.'}
          </p>
        </div>

        {/* Side-by-side Deployment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: On-Premises Air-Gapped */}
          <div className="relative rounded-2xl border-2 border-sky-300 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-sky-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-sky-700 uppercase">
                      {isAr ? 'الخيار المعتمد للمصافي' : 'FOR ENERGY REFINERIES'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {isAr ? 'التثبيت داخل الشركة (On-Premises)' : 'On-Premises Air-Gapped'}
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                  {isAr ? 'معزول 100%' : '100% Offline'}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'تثبيت مباشر داخل شبكة المنشأة أو على أجهزة التدريب المستقلة دون الحاجة لأي اتصال بالإنترنت. تتحمّل المنشأة سفر فريقنا وإقامته.'
                  : 'Installed directly behind plant firewalls on local workstations with zero internet access required. Company covers team travel & stay.'}
              </p>

              <div className="mt-6 space-y-3.5">
                {onPremiseStrengths.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                {isAr ? 'الأمان: معايير IEC 62443' : 'Security: IEC 62443 Compliant'}
              </span>
              <button
                type="button"
                onClick={() => handleSelectPlan('Company license')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 cursor-pointer"
              >
                <span>{isAr ? 'طلب تثبيت محلي' : 'Inquire On-Premises'}</span>
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Card 2: Cloud Deployment */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-600 uppercase">
                      {isAr ? 'مرونة وسرعة النشر' : 'INSTANT ACCESS'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {isAr ? 'التشغيل على السحابة (Cloud)' : 'Cloud Deployment'}
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded">
                  {isAr ? 'تشغيل فوري' : 'Instant Run'}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'وصول فوري من أي حاسوب مصرح به عبر المتصفح. مناسب للتجارب السريعة، الأكاديميات والمعاهد، والفرق الموزعة جغرافياً.'
                  : 'Immediate browser-based training access. Ideal for quick pilots, training center courses, and multi-location engineering teams.'}
              </p>

              <div className="mt-6 space-y-3.5">
                {cloudStrengths.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                {isAr ? 'الوصول: فوري عبر المتصفح' : 'Access: Zero Hardware Setup'}
              </span>
              <button
                type="button"
                onClick={() => handleSelectPlan('Demo')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-600 cursor-pointer"
              >
                <span>{isAr ? 'تجربة سحابية سريعة' : 'Try Cloud Demo'}</span>
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
