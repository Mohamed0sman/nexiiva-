'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';
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
        : 'Installed directly on local plant engineering workstations or isolated training room LAN with zero internet dependency.',
    },
    {
      title: isAr ? 'سرية تامة للمخططات (Zero Cloud Telemetry)' : 'Zero Cloud Telemetry & Data Sovereignty',
      desc: isAr
        ? 'مخططات P&ID، جداول معدات المنشأة، وحدود التشغيل السرية لا تغادر أسوار الموقع أبداً. امتثال كامل لمعايير IEC 62443 و NIST SP 800-82.'
        : 'Plant P&IDs, equipment datasheets, and proprietary process limits never leave the facility fence, ensuring full IEC 62443 & NIST SP 800-82 compliance.',
    },
    {
      title: isAr ? 'معالجة فيزيائية لحظية بمعدل 60Hz (Deterministic Physics)' : 'Deterministic 60 Hz Physics Engine',
      desc: isAr
        ? 'محرك الحسابات الديناميكية يعمل على المعالج المحلي بزمن استجابة فائق، دون أي تأخير في حركة المؤشرات أو اهتزازات في الشبكة.'
        : 'Dynamic equations solved locally with millisecond fidelity—zero latency, zero jitter, and zero packet loss during emergency transients.',
    },
    {
      title: isAr ? 'مطابقة تامة لشاشات غرف التحكم (1:1 DCS Parity)' : '1:1 Control Room DCS Console Parity',
      desc: isAr
        ? 'تهيئة محطات متعددة الشاشات تماثل غرف التحكم الميدانية (Yokogawa, DeltaV, Foxboro, Honeywell) لأداء تدريبي واقعي.'
        : 'Authentic multi-monitor layouts mirroring live industrial control rooms for seamless operational muscle memory.',
    },
  ];

  const cloudLimitations = [
    {
      title: isAr ? 'مخاطر رفع المخططات السحابية (IP Leakage Risk)' : 'Proprietary IP Exposure Risk',
      desc: isAr
        ? 'إجبار المنشأة على رفع تصاميم P&ID وبيانات الإنتاج الحساسة إلى خوادم سحابية خارجية مشتركة.'
        : 'Requires uploading proprietary plant flowsheets and operational recipes to external multi-tenant cloud servers.',
    },
    {
      title: isAr ? 'تأخير شبكة الاتصال (WAN Latency & Jitter)' : 'Network Latency & Transient Distortion',
      desc: isAr
        ? 'تأخر استجابة المؤشرات والإنذارات أثناء الاضطرابات السريعة (مثل توقف الضاغط أو غلق صمام الطوارئ) بسبب بطء الإنترنت.'
        : 'Internet lag and packet loss distort transient physics during rapid upsets such as compressor surges or emergency trips.',
    },
    {
      title: isAr ? 'مخالفة معايير أمن منشآت الطاقة (OT Policy Violation)' : 'Energy OT Security Non-Compliance',
      desc: isAr
        ? 'لوائح الأمن السيبراني لمصافي البترول ومجمعات الغاز تحظر قطعياً ربط محاكيات التحكم بشبكة الإنترنت العامة.'
        : 'Refinery and petrochemical cybersecurity regulations strictly forbid exposing operator control interfaces to public networks.',
    },
    {
      title: isAr ? 'توقف التدريب عند انقطاع الخدمة (Cloud Outage Dependency)' : 'Cloud Downtime Interruptions',
      desc: isAr
        ? 'انقطاع خدمة الإنترنت أو تعطل خوادم المزود السحابي يوقف خطط تدريب المشغلين واختبارات الاعتماد المهني.'
        : 'Local internet dropouts or cloud vendor service outages disrupt scheduled training shifts and qualification exams.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="architecture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/70 px-3.5 py-1 text-xs font-bold text-sky-800 uppercase tracking-wider font-mono">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            <span>{isAr ? 'معمارية التشغيل والأمن السيبراني' : 'DEPLOYMENT ARCHITECTURE & OT SECURITY'}</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isAr
              ? 'المحاكاة المعزولة محلياً (On-Premise) مقابل الحوسبة السحابية (Cloud).'
              : 'Air-Gapped On-Premise vs. Cloud SaaS Architecture.'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {isAr
              ? 'لماذا تفرض مصافي التكرير ومجمعات البتروكيماويات ومنشآت الطاقة تشغيل محاكيات الـ OTS داخل شبكتها المعزولة محلياً وتستبعد الحلول السحابية العامة تماماً.'
              : 'Why critical energy, refining, and gas facilities mandate physically isolated offline simulation environments over public cloud services.'}
          </p>
        </div>

        {/* Side-by-side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Nexiiva Air-Gapped On-Premise (Recommended / Plant Standard) */}
          <div className="relative rounded-2xl border-2 border-sky-300 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-sky-100">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                    <span>{isAr ? 'نظام نكسيفا المعتمد' : 'NEXIIVA STANDARD'}</span>
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {isAr ? 'التشغيل المحلي المعزول (Air-Gapped On-Premise)' : '100% Offline Air-Gapped On-Premise'}
                  </h3>
                </div>
                <div className="hidden sm:block text-end">
                  <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                    {isAr ? 'مطابق لمعايير الطاقة' : 'Energy OT Compliant'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'برمجية مستقلة يتم تثبيتها مباشرة على أجهزة المحطة المحلية، لتمنح المنشأة ملكية كاملة للنموذج وسرية مطلقة دون أي اعتماد على خوادم خارجية.'
                  : 'Self-contained simulator deployed directly on plant hardware, giving facilities total data sovereignty, zero cloud exposure, and uncompromised real-time control.'}
              </p>

              {/* Feature List */}
              <div className="mt-6 space-y-4">
                {onPremiseStrengths.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary box */}
            <div className="mt-8 pt-5 border-t border-sky-100 bg-sky-50/50 rounded-xl p-4 text-xs font-mono text-sky-900 flex items-center justify-between">
              <span>{isAr ? 'الامتثال الأمني:' : 'Security Standard:'}</span>
              <span className="font-bold text-sky-700">{isAr ? 'معايير IEC 62443 / NIST SP 800-82' : 'IEC 62443 / NIST SP 800-82 Strict'}</span>
            </div>
          </div>

          {/* Card 2: Cloud / Generic SaaS Simulators */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider">
                    <span>{isAr ? 'البرمجيات السحابية العامة' : 'GENERIC CLOUD / SAAS'}</span>
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-700">
                    {isAr ? 'الحوسبة السحابية (Cloud & Web Simulators)' : 'Multi-Tenant Cloud / SaaS Models'}
                  </h3>
                </div>
                <div className="hidden sm:block text-end">
                  <span className="text-[11px] font-mono font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded">
                    {isAr ? 'مرفوض في شبكات الـ OT' : 'Disallowed in Industrial OT'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
                {isAr
                  ? 'منصات سحابية تعتمد على استضافة نماذج المحاكاة خارج المنشأة عبر متصفحات الإنترنت، مما يولد مخاطر سيبرانية وتأخيرات في الاستجابة اللحظية.'
                  : 'Web-based simulators hosting physics models on third-party public clouds, introducing severe cybersecurity compliance issues and latency jitters.'}
              </p>

              {/* Feature List */}
              <div className="mt-6 space-y-4">
                {cloudLimitations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary box */}
            <div className="mt-8 pt-5 border-t border-slate-100 bg-slate-50 rounded-xl p-4 text-xs font-mono text-slate-500 flex items-center justify-between">
              <span>{isAr ? 'حالة الاعتماد في المنشآت الحيوية:' : 'Industrial Viability:'}</span>
              <span className="font-semibold text-rose-600">{isAr ? 'غير مناسب لمنشآت الطاقة الحساسة' : 'Not suitable for critical assets'}</span>
            </div>
          </div>
        </div>

        {/* Corporate Scoping Callout */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-start">
            <h4 className="text-sm font-bold text-slate-900">
              {isAr
                ? 'هل ترغب في فحص متطلبات الأجهزة والتثبيت المحلي لمنشأتك؟'
                : 'Need hardware specifications and local workstation requirements?'}
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              {isAr
                ? 'فريقنا الهندسي يوفر وثيقة المتطلبات الفنية للأجهزة ومواصفات كروت الرسوميات وشاشات كونسول الـ DCS.'
                : 'Our engineering team provides comprehensive workstation, GPU, and multi-monitor hardware deployment specifications.'}
            </p>
          </div>

          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-6 py-2.5 text-xs font-bold text-white transition-colors active:scale-95 shrink-0"
          >
            <span>{isAr ? 'طلب المواصفات الفنية' : 'Request Hardware Specs'}</span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
