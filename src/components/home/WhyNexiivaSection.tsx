'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Workflow, Library, Timer, WifiOff } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface WhyNexiivaSectionProps {
  locale?: string;
  dict: Dict;
}

export function WhyNexiivaSection({ locale = 'en', dict }: WhyNexiivaSectionProps) {
  const cards = [
    {
      icon: Workflow,
      badge: locale === 'ar' ? 'نمذجة مؤتمتة' : 'Automated Modeling',
      title:
        dict?.whyNexiiva?.cards?.[0]?.title ||
        (locale === 'ar' ? 'محرك بناء ومطابقة النماذج' : 'Unit Modeling Engine'),
      desc:
        dict?.whyNexiiva?.cards?.[0]?.desc ||
        (locale === 'ar'
          ? 'تحويل وثائق ومخططات P&ID الهندسية إلى منطق محاكاة متكامل ومطابق لظروف التشغيل.'
          : 'Automated pipeline models the unit from technical specifications, converting engineering documents into simulator logic.'),
    },
    {
      icon: Library,
      badge: locale === 'ar' ? '387 طراز معتمد' : '387 Verified Models',
      title:
        dict?.whyNexiiva?.cards?.[1]?.title ||
        (locale === 'ar' ? '387 نوعاً من المعدات الصناعية' : '387 Equipment Types'),
      desc:
        dict?.whyNexiiva?.cards?.[1]?.desc ||
        (locale === 'ar'
          ? 'مكتبة نمذجة غنية تتيح توليد مشروع تدريب كامل بحسابات هيدروليكية وحرارية دقيقة.'
          : 'A comprehensive library of verified industrial process components generates a full training project with accurate hydraulic coupling.'),
    },
    {
      icon: Timer,
      badge: locale === 'ar' ? 'سرعة التنفيذ' : '~1 Week Target',
      title:
        dict?.whyNexiiva?.cards?.[2]?.title ||
        (locale === 'ar' ? 'أسبوع واحد مستهدف للبناء' : 'Target: ~1 Week Build Time'),
      desc:
        dict?.whyNexiiva?.cards?.[2]?.desc ||
        (locale === 'ar'
          ? 'مستهدف زمني قياسي لبناء واختبار محاكي الوحدة الصناعية لتقليل فترات الانتظار.'
          : 'Target build time: about one week per unit — to be measured on unit two during pilot deployment.'),
    },
    {
      icon: WifiOff,
      badge: locale === 'ar' ? 'أمان البيانات 100%' : '100% Air-Gapped',
      title:
        dict?.whyNexiiva?.cards?.[3]?.title ||
        (locale === 'ar' ? 'تشغيل محلي معزول بدون إنترنت' : '100% Offline Mode'),
      desc:
        dict?.whyNexiiva?.cards?.[3]?.desc ||
        (locale === 'ar'
          ? 'تشغيل محلي بالكامل دون أي اتصال سحابي خارجي، ملائم لشبكات التحكم الصارمة والمعزولة.'
          : 'Offline mode needs no AI and no internet. Fully compliant with air-gapped industrial cybersecurity standards.'),
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
              ? 'بناء نماذج المحاكاة من وثائق المنشأة مع تشغيل محلي معزول تماماً عن الإنترنت.'
              : 'Building simulation models directly from plant documentation with strictly air-gapped deployment.'
          }
          theme="light"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative rounded-xl border border-slate-200/90 bg-slate-50/70 p-7 transition-colors hover:border-slate-300 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0A192F]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
