'use client';

import React from 'react';
import type { Dict } from '@/types/dict';

interface PlansSectionProps {
  locale: string;
  dict?: Dict;
}

export function PlansSection({ locale, dict }: PlansSectionProps) {
  const isAr = locale === 'ar';

  const eyebrow = dict?.plans?.eyebrow || (isAr ? 'اختر خطتك' : 'SELECT YOUR PLAN');
  const title = dict?.plans?.title || (isAr ? 'اختر خطتك' : 'Select your plan');
  const lead =
    dict?.plans?.lead ||
    (isAr
      ? 'أخبرنا بالأنسب لك وسنرسل لك عرض سعر.'
      : 'Tell us which one fits and we will send you a quote.');

  const handleSelectPlan = (planValue: string) => {
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('pl') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = planValue;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const plans = [
    {
      id: 'Pilot',
      title: dict?.plans?.pilot?.title || (isAr ? 'تجربة (Pilot)' : 'Pilot'),
      desc:
        dict?.plans?.pilot?.desc ||
        (isAr
          ? 'ثلاثة أشهر مع مشغّليك قبل الالتزام بترخيص. تشمل التشغيل والإيقاف و٥ أعطال مخصصة وتقرير تقييم المتدربين.'
          : 'Three months with your own operators before you commit to a license. Includes start-ups, shutdowns, 5 custom upsets and a trainee scoring report.'),
      cta: dict?.plans?.pilot?.cta || (isAr ? 'اطلب تجربة' : 'Request a pilot'),
      selectValue: 'Pilot',
    },
    {
      id: 'On-premises',
      title:
        dict?.plans?.onPrem?.title ||
        (isAr ? 'ترخيص داخل الشركة (On-premises)' : 'On-premises license'),
      desc:
        dict?.plans?.onPrem?.desc ||
        (isAr
          ? 'يُثبَّت دون اتصال داخل مصنعك. ترخيص لكل وحدة عمليات مع صيانة سنوية. تتحمّل شركتك سفر فريقنا وإقامته أثناء التثبيت.'
          : 'Installed offline inside your plant. One license per process unit plus yearly maintenance. Your company covers our team’s travel and stay for the installation.'),
      cta: dict?.plans?.onPrem?.cta || (isAr ? 'اطلب عرض سعر' : 'Request a quote'),
      selectValue: 'On-premises license',
    },
    {
      id: 'Cloud',
      title: dict?.plans?.cloud?.title || (isAr ? 'ترخيص سحابي (Cloud)' : 'Cloud license'),
      desc:
        dict?.plans?.cloud?.desc ||
        (isAr
          ? 'وصول من المتصفح دون إعداد خوادم. ترخيص لكل وحدة عمليات مع صيانة سنوية.'
          : 'Access from the browser with no server setup. One license per process unit plus yearly maintenance.'),
      cta: dict?.plans?.cloud?.cta || (isAr ? 'اطلب عرض سعر' : 'Request a quote'),
      selectValue: 'Cloud license',
    },
  ];

  return (
    <section id="plans" className="py-16 lg:py-20 bg-[#f8fbfe] border-y border-[#e3e8ee] scroll-mt-20">
      <div className="mx-auto max-w-[1100px] px-5">
        {/* Eyebrow */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
          {eyebrow}
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-3">
          {title}
        </h2>

        {/* Lead */}
        <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[62ch] mb-8 font-normal">
          {lead}
        </p>

        {/* 3 Commercial Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-[#e3e8ee] rounded-[18px] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#73d4ff] transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-[#101622] mb-3">
                  {p.title}
                </h3>
                <p className="text-base text-[#485460] leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPlan(p.selectValue)}
                className="self-start inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-[#0084d3] hover:bg-[#006fb3] transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
