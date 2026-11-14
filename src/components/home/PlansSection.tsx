'use client';

import React from 'react';
import { Check, ArrowRight, Sparkles, Building2, Cloud } from 'lucide-react';
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
      isPopular: true,
      icon: Sparkles,
      badge: isAr ? 'أفضل بداية · منخفض المخاطر' : 'Recommended · Low Risk',
      title: dict?.plans?.pilot?.title || (isAr ? 'تجربة (Pilot)' : 'Pilot'),
      desc:
        dict?.plans?.pilot?.desc ||
        (isAr
          ? 'ثلاثة أشهر مع مشغّليك قبل الالتزام بترخيص. تشمل التشغيل والإيقاف و٥ أعطال مخصصة وتقرير تقييم المتدربين.'
          : 'Three months with your own operators before you commit to a license. Includes start-ups, shutdowns, 5 custom upsets and a trainee scoring report.'),
      bullets: isAr ? [
        'مدة التجربة: ٣ أشهر كاملة مع مشغلي مصنعك',
        'تدريب على عمليات بدء التشغيل والإيقاف التدريجي',
        '٥ أعطال تشغيلية مخصصة لوحدتك الحقيقية',
        'تقرير تقييم موضوعي ومفصل لأداء المتدربين',
      ] : [
        '3 months full trial with your actual plant operators',
        'Start-up, normal operation and shutdown procedures',
        '5 custom upsets engineered for your specific unit',
        'Comprehensive objective trainee qualification report',
      ],
      cta: dict?.plans?.pilot?.cta || (isAr ? 'اطلب تجربة' : 'Request a pilot'),
      selectValue: 'Pilot',
    },
    {
      id: 'On-premises',
      isPopular: false,
      icon: Building2,
      badge: isAr ? 'تركيب محلي داخل المصنع' : 'Air-Gapped Industrial',
      title:
        dict?.plans?.onPrem?.title ||
        (isAr ? 'ترخيص داخل الشركة (On-premises)' : 'On-premises license'),
      desc:
        dict?.plans?.onPrem?.desc ||
        (isAr
          ? 'يُثبَّت دون اتصال داخل مصنعك. ترخيص لكل وحدة عمليات مع صيانة سنوية. تتحمّل شركتك سفر فريقنا وإقامته أثناء التثبيت.'
          : 'Installed offline inside your plant. One license per process unit plus yearly maintenance. Your company covers our team’s travel and stay for the installation.'),
      bullets: isAr ? [
        'تثبيت محلي ١٠٠٪ معزول عن الإنترنت (Air-Gapped)',
        'ترخيص دائم لكل وحدة عمليات صناعية',
        'صيانة سنوية ودعم فني وتحديثات مستمرة',
        'تتحمل شركتكم نفقات سفر وإقامة فريق التثبيت',
      ] : [
        '100% offline air-gapped installation inside plant network',
        'Dedicated license per industrial process unit',
        'Yearly maintenance, engineering support & updates',
        'Client covers travel and lodging for deployment team',
      ],
      cta: dict?.plans?.onPrem?.cta || (isAr ? 'اطلب عرض سعر' : 'Request a quote'),
      selectValue: 'On-premises license',
    },
    {
      id: 'Cloud',
      isPopular: false,
      icon: Cloud,
      badge: isAr ? 'وصول سحابي مباشر' : 'Zero Infrastructure',
      title: dict?.plans?.cloud?.title || (isAr ? 'ترخيص سحابي (Cloud)' : 'Cloud license'),
      desc:
        dict?.plans?.cloud?.desc ||
        (isAr
          ? 'وصول من المتصفح دون إعداد خوادم. ترخيص لكل وحدة عمليات مع صيانة سنوية.'
          : 'Access from the browser with no server setup. One license per process unit plus yearly maintenance.'),
      bullets: isAr ? [
        'وصول فوري من أي متصفح دون الحاجة لخوادم محلية',
        'ترخيص سنوي مرن لكل وحدة عمليات',
        'تحديثات تلقائية ونمذجة سريعة للوحدات',
        'صيانة ودعم فني مستمر على مدار العام',
      ] : [
        'Immediate browser access with zero server deployment',
        'Flexible license per process unit with yearly support',
        'Automated updates and seamless multi-site access',
        'Dedicated remote engineering onboarding & support',
      ],
      cta: dict?.plans?.cloud?.cta || (isAr ? 'اطلب عرض سعر' : 'Request a quote'),
      selectValue: 'Cloud license',
    },
  ];

  return (
    <section id="plans" className="py-20 lg:py-24 bg-[#f8fbfe] border-y border-[#e3e8ee] scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="flex flex-col items-start text-start mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
            {eyebrow}
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[62ch] font-normal">
            {lead}
          </p>
        </div>

        {/* 3 Commercial Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`relative bg-white rounded-[24px] p-7 flex flex-col justify-between craft-card ${
                  p.isPopular
                    ? 'border-2 border-[#0084d3] shadow-[0_12px_40px_-10px_rgba(0,132,211,0.15)]'
                    : 'border border-[#e3e8ee] shadow-2xs'
                }`}
              >
                {/* Popular Pill */}
                {p.isPopular && (
                  <div className="absolute -top-3.5 start-6 bg-[#0084d3] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-xs tracking-wider uppercase">
                    {p.badge}
                  </div>
                )}

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-[#0084d3] border border-sky-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    {!p.isPopular && (
                      <span className="font-mono text-[11px] font-medium text-slate-500 bg-slate-100 rounded-full px-2.5 py-0.5">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-[#101622] mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#485460] leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5 mb-8">
                    {p.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  type="button"
                  onClick={() => handleSelectPlan(p.selectValue)}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 px-5 text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] ${
                    p.isPopular
                      ? 'bg-[#0084d3] hover:bg-[#006fb3] text-white'
                      : 'bg-white hover:bg-slate-50 text-[#101622] border border-[#e3e8ee]'
                  }`}
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
