'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Workflow, Library, Timer, WifiOff, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface WhyNexiivaSectionProps {
  locale?: string;
  dict: Dict;
}

export function WhyNexiivaSection({ locale = 'en', dict }: WhyNexiivaSectionProps) {
  const cards = [
    {
      icon: Workflow,
      badge: locale === 'ar' ? 'نمذجة مؤتمتة' : 'AUTOMATED PIPELINE',
      title:
        dict?.whyNexiiva?.cards?.[0]?.title ||
        (locale === 'ar' ? 'محرك بناء ومطابقة النماذج الرقمية' : 'Algorithmic Unit Modeling Engine'),
      desc:
        dict?.whyNexiiva?.cards?.[0]?.desc ||
        (locale === 'ar'
          ? 'تحويل وثائق ومخططات P&ID وبيانات العمليات مباشرة إلى كود محاكاة ديناميكي دون الحاجة إلى برمجة يدوية مخصصة لكل صمام.'
          : 'Automated compilation pipeline ingests plant P&IDs and process specs, directly generating simulator logic without months of manual custom coding.'),
      comparison:
        locale === 'ar'
          ? 'الموردون التقليديون: 6-12 شهراً من البرمجة اليدوية · نكسيفا: توليد مؤتمت في أيام'
          : 'Legacy Vendors: 6–12 months bespoke coding · Nexiiva: Automated compilation in days',
      points:
        locale === 'ar'
          ? ['قراءة فورية لمسميات الخطوط والأجهزة', 'توليد آلي لشبكة التوصيل الهيدروليكي']
          : ['Direct tag & instrument line parsing', 'Automated hydraulic network generation'],
    },
    {
      icon: Library,
      badge: locale === 'ar' ? '387 طراز معتمد' : '387 VERIFIED MODELS',
      title:
        dict?.whyNexiiva?.cards?.[1]?.title ||
        (locale === 'ar' ? 'مكتبة متكاملة من 387 طراز للمعدات' : '387 Verified Equipment Component Types'),
      desc:
        dict?.whyNexiiva?.cards?.[1]?.desc ||
        (locale === 'ar'
          ? 'مكتبة نمذجة فيزيائية غنية ومختبرة للمضخات، صواني التقطير، مبادلات الحرارة، ومحابس التحكم، توفر اتزاناً هيدروليكياً دقيقاً.'
          : 'Extensive, pre-tested dynamic component library covering centrifugal pumps, distillation trays, fired heaters, and control valves with rigorous hydraulics.'),
      comparison:
        locale === 'ar'
          ? 'مكتبة جاهزة معتمدة تقلل مخاطر الأخطاء البرمجية والانحراف الرياضي'
          : 'Pre-verified models eliminate custom software bugs and mathematical drift',
      points:
        locale === 'ar'
          ? ['معادلات ضغط وتدفق هيدروليكية متصلة', 'محاكاة ديناميكية لظواهر التجويف والفيضان']
          : ['Coupled pressure-flow hydraulic equations', 'Dynamic cavitation & column flooding physics'],
    },
    {
      icon: Timer,
      badge: locale === 'ar' ? 'سرعة الإنجاز' : '~1 WEEK TARGET',
      title:
        dict?.whyNexiiva?.cards?.[2]?.title ||
        (locale === 'ar' ? 'مستهدف البناء: أسبوع واحد لكل وحدة' : 'Target: ~1 Week Build Turnaround'),
      desc:
        dict?.whyNexiiva?.cards?.[2]?.desc ||
        (locale === 'ar'
          ? 'مستهدف زمني قياسي لبناء واختبار محاكي الوحدة الصناعية، مما يتيح للإدارة البدء بتدريب المشغلين قبل إجراءات التشغيل الفعلي.'
          : 'Target build time of approximately one week per unit — tested and validated during plant pilot deployment for rapid commissioning.'),
      comparison:
        locale === 'ar'
          ? 'تسليم سريع يواكب جداول توقف المصانع وأعمال الصيانة وعمرات التشغيل'
          : 'Rapid turnaround aligned with plant turnaround schedules and commissioning dates',
      points:
        locale === 'ar'
          ? ['تسليم نموذج الوحدة الأولى خلال 7-14 يوماً', 'اختبار سيناريوهات الطوارئ مباشرة']
          : ['First unit model delivered in 7–14 days', 'Immediate emergency scenario qualification'],
    },
    {
      icon: WifiOff,
      badge: locale === 'ar' ? 'أمان سيبراني 100%' : '100% AIR-GAPPED',
      title:
        dict?.whyNexiiva?.cards?.[3]?.title ||
        (locale === 'ar' ? 'تشغيل محلي معزول تماماً عن الإنترنت' : 'Strictly Air-Gapped Cybersecurity'),
      desc:
        dict?.whyNexiiva?.cards?.[3]?.desc ||
        (locale === 'ar'
          ? 'تشغيل محلي بالكامل على حواسيب المنشأة دون أي اتصال سحابي خارجي أو اتصال بالإنترنت، متوافق كلياً مع أمن البنية التحتية الحرجة.'
          : 'Runs 100% offline on standard plant workstations. Zero cloud telemetry, zero external network dependency, fully compliant with critical infrastructure policies.'),
      comparison:
        locale === 'ar'
          ? 'صفر مخاطر تسريب بيانات أو اختراق سيبراني للشبكات الصناعية'
          : 'Zero cyber risk, zero cloud leakage, full IEC 62443 compliance',
      points:
        locale === 'ar'
          ? ['لا يتطلب أي اتصال بالإنترنت', 'حماية تامة لأسرار العمليات ومخططات المنشأة']
          : ['Zero external network connectivity required', 'Complete protection of proprietary plant P&IDs'],
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.whyNexiiva?.eyebrow || (locale === 'ar' ? 'المزايا والقدرات الهندسية' : 'ENGINEERING DISTINCTION')}
          title={
            dict?.whyNexiiva?.title ||
            (locale === 'ar'
              ? 'هندسة متطورة تجمع بين السرعة، الأمان، والدقة.'
              : 'Engineered for speed, security, and precision.')
          }
          subtitle={
            locale === 'ar'
              ? 'بناء نماذج المحاكاة مباشرة من وثائق المنشأة مع تشغيل محلي معزول تماماً عن الإنترنت لضمان أعلى معايير الحماية الصناعية.'
              : 'Building high-fidelity simulation models directly from plant documentation with strictly air-gapped on-premise deployment.'
          }
          theme="light"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative rounded-xl border border-slate-200 bg-slate-50 p-8 transition-colors hover:border-slate-300 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0A192F]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {card.desc}
                </p>

                {/* Legacy vs Nexiiva Benchmarking Bar */}
                <div className="mt-5 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700">
                  <span className="font-semibold text-blue-700 block mb-0.5">
                    {locale === 'ar' ? 'المقارنة الفنية:' : 'Engineering Benchmark:'}
                  </span>
                  <span className="text-slate-600">{card.comparison}</span>
                </div>

                {/* Feature Bullet Points */}
                <div className="mt-5 pt-4 border-t border-slate-200/80 space-y-2">
                  {card.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>{pt}</span>
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
