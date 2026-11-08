'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, GraduationCap, Clock } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface PlansSectionProps {
  locale: string;
  dict?: Dict;
}

export function PlansSection({ locale, dict }: PlansSectionProps) {
  const isAr = locale === 'ar';

  const handleSelectPlan = (planValue: string) => {
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('contact-interest') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = planValue;
      }
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="plans" className="relative py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block">
            {dict?.plans?.eyebrow || (isAr ? 'نماذج التعاقد والترخيص' : 'SELECT YOUR PLAN')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {dict?.plans?.title || (isAr ? 'اختر خطتك' : 'Select your plan')}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {dict?.plans?.subtitle ||
              (isAr
                ? 'أخبرنا بالأنسب لك وسنرسل لك عرض سعر.'
                : 'Tell us which one fits and we will send you a quote.')}
          </p>
        </div>

        {/* 3 Real Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* PLAN 1: Pilot */}
          <div className="flex flex-col justify-between rounded-2xl border border-sky-200 bg-white p-7 sm:p-8 shadow-sm hover:border-sky-400 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 border border-sky-200">
                  <Clock className="h-3.5 w-3.5 text-sky-600" />
                  {isAr ? '٣ أشهر' : '3 Months'}
                </span>
                <span className="text-xs font-mono text-slate-500">{isAr ? 'مخاطر منخفضة' : 'Low Risk'}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {dict?.plans?.pilot?.title || (isAr ? 'تجربة (Pilot)' : 'Pilot')}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed min-h-[48px]">
                {dict?.plans?.pilot?.desc ||
                  (isAr
                    ? 'ثلاثة أشهر مع مشغّليك قبل الالتزام بترخيص.'
                    : 'Three months with your own operators, before you commit to a license.')}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                  {isAr ? 'ما يتضمنه البرنامج التجريبي:' : 'PILOT INCLUDES:'}
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'تدريب مشغّلي المنشأة على وحدة حقيقية' : 'Full access for your own plant operators'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'ممارسة التشغيل والإيقاف و5 أعطال مخصصة' : 'Start-ups, shutdowns & 5 custom plant upsets'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'تثبيت محلي معزول أو عبر السحابة' : 'Cloud or offline air-gapped installation'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'تقرير تقييم استجابة الكوادر واعتماد الكفاءة' : 'Trainee reaction scoring & qualification report'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => handleSelectPlan('Pilot')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 py-3 px-4 text-sm font-bold text-white shadow-2xs transition-colors cursor-pointer active:scale-98"
              >
                <span>{dict?.plans?.pilot?.cta || (isAr ? 'اطلب تجربة' : 'Request a pilot')}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* PLAN 2: Company License */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-sky-600 bg-white p-7 sm:p-8 shadow-md relative">
            {/* Recommended Badge */}
            <div className="absolute -top-3.5 inset-x-0 flex justify-center">
              <span className="rounded-full bg-sky-600 px-4 py-0.5 text-xs font-bold text-white shadow-xs uppercase tracking-wide">
                {isAr ? 'الأكثر طلباً للمنشآت' : 'FOR FACILITIES & PLANTS'}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                  <Building2 className="h-3.5 w-3.5 text-sky-600" />
                  {isAr ? 'ترخيص منشأة' : 'Plant License'}
                </span>
                <span className="text-xs font-mono text-slate-500">{isAr ? 'سنوي' : 'Annual Support'}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {dict?.plans?.companyLicense?.title || (isAr ? 'ترخيص للشركات' : 'Company license')}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed min-h-[48px]">
                {dict?.plans?.companyLicense?.desc ||
                  (isAr
                    ? 'ترخيص لكل وحدة عمليات مع صيانة سنوية. اختر السحابة أو التثبيت داخل الشركة. عند التثبيت داخل الشركة تتحمّل الشركة سفر فريقنا وإقامته.'
                    : 'One license per process unit plus yearly maintenance. Choose cloud or on-premises. For on-premises installation, your company covers our team’s travel and stay.')}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                  {isAr ? 'مميزات ترخيص الشركات:' : 'LICENSE INCLUDES:'}
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'ترخيص مستقل لكل وحدة عمليات صناعية' : 'One license per industrial process unit'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'صيانة سنوية وتحديثات برمجية ودعم فني' : 'Yearly maintenance, model updates & engineer support'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'حرية الاختيار: سحابة أو تثبيت داخل الشركة' : 'Choice of cloud or on-premises installation'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'للتثبيت المحلي: المنشأة تغطي سفر وإقامة الفريق' : 'On-premises: company covers team travel & stay'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => handleSelectPlan('Company license')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 py-3 px-4 text-sm font-bold text-white shadow-sm transition-colors cursor-pointer active:scale-98"
              >
                <span>{dict?.plans?.companyLicense?.cta || (isAr ? 'اطلب عرض سعر' : 'Request a quote')}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* PLAN 3: Training Center */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:border-sky-300 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                  <GraduationCap className="h-3.5 w-3.5 text-emerald-600" />
                  {isAr ? '٥ أيام' : '5-Day Courses'}
                </span>
                <span className="text-xs font-mono text-slate-500">{isAr ? 'حد أدنى ٥ متدربين' : 'Min 5 Trainees'}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {dict?.plans?.trainingCenter?.title || (isAr ? 'مركز تدريب' : 'Training center')}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed min-h-[48px]">
                {dict?.plans?.trainingCenter?.desc ||
                  (isAr
                    ? 'دورات لكل شخص مدتها ٥ أيام، بحد أدنى ٥ متدربين، أونلاين أو حضوريًا. عامة: تدريب على الوحدات المتاحة في نكسيفا. مخصصة: تختار الوحدة ويتدرب عليها المتدربون. في الدورات الحضورية يتحمّل المركز سفر المدرّب وإقامته.'
                    : 'Per-person courses of 5 days, minimum 5 trainees, online or in person. Generic: practice on the units already on Nexiiva. Specific: you choose the unit and trainees train on it. For in-person courses the center covers the instructor’s travel and stay.')}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                  {isAr ? 'مسارات دورات المراكز:' : 'COURSE TRACKS INCLUDE:'}
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'دورات مدتها ٥ أيام لكل شخص (حد أدنى ٥ متدربين)' : '5-day per-person intensive course (min. 5 trainees)'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'تنفيذ مرن: أونلاين أو حضوريًا داخل مركزكم' : 'Delivery options: online or in-person at your center'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'مسار عام: تدريب على الوحدات الجاهزة بنكسيفا' : 'Generic track: practice on ready Nexiiva units'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'مسار مخصص: اختيار وحدة محددة للتدريب' : 'Specific track: choose custom unit for trainees'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isAr ? 'للحضوري: المركز يتحمل سفر وإقامة المدرب' : 'In-person: center covers instructor travel & stay'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => handleSelectPlan('Training center course')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 py-3 px-4 text-sm font-bold text-white shadow-2xs transition-colors cursor-pointer active:scale-98"
              >
                <span>{dict?.plans?.trainingCenter?.cta || (isAr ? 'اطلب دورة' : 'Request a course')}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
