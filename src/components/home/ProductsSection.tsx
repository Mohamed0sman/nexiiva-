'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Sliders, Flame, Gauge, Wrench } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ProductsSectionProps {
  locale: string;
  dict?: Dict;
}

export function ProductsSection({ locale, dict }: ProductsSectionProps) {
  const isAr = locale === 'ar';

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
    <section id="products" className="relative py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block">
            {dict?.products?.eyebrow || (isAr ? 'برمجيات المحاكاة' : 'OUR PRODUCTS')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {dict?.products?.title ||
              (isAr ? 'منتجاتنا' : 'Our products')}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {dict?.products?.subtitle ||
              (isAr
                ? 'محاكاة دقيقة مبنية لوحدات العمليات الحقيقية: وحدات جاهزة للتدريب الآن، ومنظومة تجميع للوحدات المخصصة.'
                : 'High-fidelity simulation software built for real plant units: ready for training today, with modular assembly for custom facilities.')}
          </p>
        </div>

        {/* 2 Featured Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PRODUCT 1: Nexiiva OTS (Available Now) */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-7 sm:p-9 shadow-2xs hover:border-sky-300 transition-colors">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                {dict?.products?.otsTag || (isAr ? 'متاح الآن' : 'Available now')}
              </span>
              <span className="font-mono text-xs text-slate-500">Cloud / On-Premise</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {dict?.products?.otsTitle || 'Nexiiva OTS'}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {dict?.products?.otsDesc ||
                (isAr
                  ? 'محاكي لتدريب المشغّلين. وحدة CDU/VDU جاهزة، ووحدات أخرى في الطريق. شغّله على السحابة أو على خوادمك الخاصة.'
                  : 'An operator training simulator. The CDU/VDU unit is ready and more units are on the way. Run it on the cloud or on your own servers.')}
            </p>

            {/* Ready Units Sub-card */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
              <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                {isAr ? 'الوحدات المكتملة والمتاحة فوراً:' : 'READY PROCESS UNITS INCLUDED:'}
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>CDU/VDU-101:</strong>{' '}
                    {isAr
                      ? 'برج التقطير الجوي والتفريغي، 3 صواني سحب جانبية (نافثا، كيروسين، ديزل)، ودائرة الراجع العلوي.'
                      : 'Atmospheric & Vacuum Distillation, 3 side-strippers (Naphtha, Kerosene, L. Diesel), and overhead reflux circuit.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Crude Preheat Train:</strong>{' '}
                    {isAr
                      ? 'شبكة التسخين الأولي متعددة المراحل مع حسابات الاتزان الحراري وفروق الضغط.'
                      : 'Multi-stage shell-and-tube exchanger train with coupled heat balance and pressure drop equations.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>1:1 DCS & Alarms:</strong>{' '}
                    {isAr
                      ? 'شاشات كونسول مطابقة لغرف التحكم مع 12 مؤشر اتجاه حي وإنذارات متوافقة مع ISA-18.2.'
                      : 'Console faceplates matching plant DCS with 12 synchronized live trends and ISA-18.2 alarm hierarchy.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Instructor Console:</strong>{' '}
                    {isAr
                      ? 'حقن لحظي لحالات الطوارئ (توقف مضخات، تسريبات، انقطاع راجع) مع تقييم آلي للـ SOP.'
                      : 'Supervisory fault injection (pump trips, valve stiction, leaks) with freeze and automated SOP scoring.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Visual Screenshot Thumbnail */}
            <div className="relative mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-16/9">
              <Image
                src="/assets/screens/cdu-atm-column-pfd.png"
                alt="Nexiiva OTS CDU Column Console"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleSelectPlan('Demo')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-5 py-2.5 text-xs font-bold text-white shadow-2xs transition-colors cursor-pointer"
              >
                <span>{isAr ? 'حجز عرض توضيحي للـ OTS' : 'Book OTS Demo'}</span>
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={() => handleSelectPlan('Pilot')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-2xs transition-colors cursor-pointer"
              >
                <span>{isAr ? 'طلب تجربة (3 أشهر)' : 'Request 3-Month Pilot'}</span>
              </button>
            </div>
          </div>

          {/* PRODUCT 2: Nexiiva OTS Builder (Early Access) */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-7 sm:p-9 shadow-2xs hover:border-amber-300 transition-colors">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {dict?.products?.builderTag || (isAr ? 'وصول مبكر' : 'Early access')}
              </span>
              <span className="font-mono text-xs text-slate-500">In Active Testing</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {dict?.products?.builderTitle || 'Nexiiva OTS Builder'}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {dict?.products?.builderDesc ||
                (isAr
                  ? 'جمّع وحدة جديدة من مكتبة معدات وصدّرها كمشروع نكسيفا. نبني به أيضًا وحدات غاز مثل نزع الماء بالجلايكول (TEG) ومعالجة الغاز بالأمين. ما زال قيد الاختبار.'
                  : 'Assemble a new unit from an equipment library and export it as a Nexiiva project. Gas units such as TEG dehydration and amine sweetening are being built with it. Still in testing.')}
            </p>

            {/* Modular Features Sub-card */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
              <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                {isAr ? 'قدرات منشئ الوحدات الهندسية:' : 'MODULAR BUILDER CAPABILITIES:'}
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Equipment Library (387 Types):</strong>{' '}
                    {isAr
                      ? 'مكتبة شاملة من المعدات الهندسية المعتمدة (أبراج، مبادلات، مضخات، ضواغط، صمامات تحكم).'
                      : 'Comprehensive library of verified equipment blocks (columns, exchangers, pumps, valves, controllers).'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Gas Units in Pipeline:</strong>{' '}
                    {isAr
                      ? 'بناء وحدات معالجة الغاز: نزع الماء بالجلايكول (TEG Dehydration) ومعالجة الغاز بالأمين (Amine Sweetening).'
                      : 'Gas processing units actively being assembled: TEG Dehydration & Amine Sweetening systems.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Export as Nexiiva Project:</strong>{' '}
                    {isAr
                      ? 'تصدير الوحدة المجمعة مباشرة كمشروع تدريبي كامل مع ربط هيدروليكي وحسابات اتزان حية.'
                      : 'Export compiled unit flowsheets directly into active Nexiiva runtime projects with coupled physics.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>~1 Week Delivery Target:</strong>{' '}
                    {isAr
                      ? 'تقليص وقت بناء نماذج الوحدات من شهور طويلة إلى أسبوع تقريباً لكل وحدة.'
                      : 'Targeting unit model assembly in approximately 1 week instead of months of bespoke manual programming.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Visual Screenshot Thumbnail */}
            <div className="relative mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-16/9">
              <Image
                src="/assets/screens/preheat-train-pfd.png"
                alt="Nexiiva OTS Builder Flowsheet Exchanger Train"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleSelectPlan('Company license')}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 px-5 py-2.5 text-xs font-bold text-white shadow-2xs transition-colors cursor-pointer"
              >
                <span>{isAr ? 'طلب ترخيص وحدة مخصصة' : 'Inquire for Custom Unit'}</span>
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </button>

              <Link
                href={`/${locale}/solutions#builder`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-2xs transition-colors"
              >
                <span>{isAr ? 'تفاصيل المنشئ' : 'Builder Specs'}</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
