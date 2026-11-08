'use client';

import React from 'react';
import Link from 'next/link';
import type { Dict } from '@/types/dict';

interface IndustriesSectionProps {
  locale: string;
  dict: Dict;
}

export function IndustriesSection({ locale }: IndustriesSectionProps) {
  const isAr = locale === 'ar';

  const industries = [
    {
      name: isAr ? 'تكرير البترول والطاقة' : 'Petroleum Refining',
      status: isAr ? 'متاح للتشغيل' : 'Delivered Today',
      desc: isAr
        ? 'محاكاة ديناميكية متكاملة لوحدات التقطير الجوي (CDU)، التقطير الفراغي (VDU)، وشبكات التسخين الأولي مع مطابقة تامة لكونسول الـ DCS.'
        : 'Full dynamic simulation of atmospheric crude distillation (CDU), vacuum distillation (VDU), and preheat train integration with 1:1 DCS console parity.',
      units: 'CDU · VDU · Preheat Train · Stabilizer',
      thermo: isAr ? 'حسابات بينغ-روبنسون (Peng-Robinson EOS)' : 'Peng-Robinson EOS Thermodynamics',
    },
    {
      name: isAr ? 'معالجة الغاز الطبيعي' : 'Natural Gas Processing',
      status: isAr ? 'ضمن خطة التطوير' : 'Roadmap Stage',
      desc: isAr
        ? 'وحدات تجفيف الغاز بغليكول ثلاثي الإيثيلين (TEG)، معالجة الغاز الحمضي بالأمين، وأبراج تجزئة سوائل الغاز الطبيعي (NGL).'
        : 'Triethylene glycol (TEG) dehydration, amine acid gas contactors, and multi-stage NGL fractionation trains with full phase envelope calculation.',
      units: 'TEG Dehydration · Amine Treating · De-ethanizer',
      thermo: isAr ? 'حسابات الغاز الحامضي والأمين' : 'Electrolyte NRTL / Amine Thermodynamics',
    },
    {
      name: isAr ? 'الصناعات البتروكيماوية' : 'Petrochemicals',
      status: isAr ? 'ضمن خطة التطوير' : 'Roadmap Stage',
      desc: isAr
        ? 'أفران التكسير الحراري بالبخار، أبراج تبريد الصدمة، أعمدة فصل الإيثيلين والبروبيلين، وحلقات مفاعلات البولي إيثيلين.'
        : 'Steam cracking pyrolysis furnaces, quench columns, ethylene/propylene super-fractionators, and loop polymerization reactors.',
      units: 'Cracking Furnace · C2/C3 Splitters · Polyethylene',
      thermo: isAr ? 'حسابات التكسير الحركي' : 'Detailed Pyrolysis Reaction Kinetics',
    },
    {
      name: isAr ? 'المعاهد الهندسية والجامعات' : 'Institutes & Academies',
      status: isAr ? 'برامج أكاديمية' : 'Academic Programs',
      desc: isAr
        ? 'معامل محاكاة العمليات للجامعات وأكاديميات تأهيل المشغلين المهنية مع تمارين تشغيل قياسية وشهادات كفاءة رقمية.'
        : 'Process dynamics laboratories for chemical engineering faculties and vocational operator qualification academies with SOP grading.',
      units: 'Unit Operations Lab · Console Certification',
      thermo: isAr ? 'مناهج هندسة العمليات الكيميائية' : 'Curriculum-Aligned Process Modeling',
    },
  ];

  return (
    <section className="relative py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
              {isAr ? 'القطاعات والصناعات المخدومة' : 'INDUSTRIES & DOMAINS'}
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? 'من وحدة تكرير واحدة إلى كافة الصناعات التحويلية.'
                : 'From a single process unit to the entire plant complex.'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {isAr
                ? 'البداية من وحدات التكرير الحيوية (CDU/VDU) مع مسار هندسي مدروس للتوسع نحو معالجة الغاز والبتروكيماويات والأكاديميات التدريبية.'
                : 'Starting from core refining units and scaling methodically across gas processing, petrochemical complexes, and training academies.'}
            </p>
          </div>

          <Link
            href={`/${locale}/industries`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline shrink-0"
          >
            <span>{isAr ? 'استعراض كتالوج الوحدات الكامل ←' : 'View full unit catalog →'}</span>
          </Link>
        </div>

        {/* 4 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-slate-500">
                  {ind.status}
                </div>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {ind.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-0.5">
                    {isAr ? 'الحزمة الفيزيائية:' : 'Thermo Package:'}
                  </span>
                  <span>{ind.thermo}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 font-mono text-xs text-sky-600 font-semibold">
                {ind.units}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
