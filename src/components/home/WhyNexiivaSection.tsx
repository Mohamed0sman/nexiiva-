'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Bot, Library, Timer, WifiOff } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface WhyNexiivaSectionProps {
  dict: Dict;
}

export function WhyNexiivaSection({ dict }: WhyNexiivaSectionProps) {
  const cards = [
    {
      icon: Bot,
      badge: 'نمذجة مؤتمتة',
      title:
        dict?.whyNexiiva?.cards?.[0]?.title || 'محرك بناء ومطابقة النماذج',
      desc:
        dict?.whyNexiiva?.cards?.[0]?.desc ||
        'تحويل وثائق ومخططات P&ID الهندسية إلى منطق محاكاة متكامل ومطابق لظروف التشغيل.',
      accent: '#1D4ED8',
    },
    {
      icon: Library,
      badge: '387 طراز معتمد',
      title:
        dict?.whyNexiiva?.cards?.[1]?.title || '387 نوعاً من المعدات الصناعية',
      desc:
        dict?.whyNexiiva?.cards?.[1]?.desc ||
        'مكتبة نمذجة غنية تتيح توليد مشروع تدريب كامل بحسابات هيدروليكية وحرارية دقيقة.',
      accent: '#38BDF8',
    },
    {
      icon: Timer,
      badge: 'سرعة التنفيذ',
      title:
        dict?.whyNexiiva?.cards?.[2]?.title || 'أسبوع واحد مستهدف للبناء',
      desc:
        dict?.whyNexiiva?.cards?.[2]?.desc ||
        'مستهدف زمني قياسي لبناء واختبار محاكي الوحدة الصناعية لتقليل فترات الانتظار.',
      accent: '#F59E0B',
    },
    {
      icon: WifiOff,
      badge: 'أمان البيانات 100%',
      title:
        dict?.whyNexiiva?.cards?.[3]?.title || 'تشغيل محلي معزول بدون إنترنت',
      desc:
        dict?.whyNexiiva?.cards?.[3]?.desc ||
        'تشغيل محلي بالكامل دون أي اتصال سحابي خارجي، ملائم لشبكات التحكم الصارمة والمعزولة.',
      accent: '#22C55E',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.whyNexiiva?.eyebrow || 'المزايا والقدرات الهندسية'}
          title={
            dict?.whyNexiiva?.title ||
            'هندسة متطورة تجمع بين السرعة، الأمان، والدقة.'
          }
          subtitle="بناء نماذج المحاكاة من وثائق المنشأة مع تشغيل محلي معزول تماماً عن الإنترنت."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
