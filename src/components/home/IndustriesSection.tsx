'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Fuel, Flame, Atom, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface IndustriesSectionProps {
  locale: string;
  dict: Dict;
}

export function IndustriesSection({ locale, dict }: IndustriesSectionProps) {
  const industries = [
    {
      name: dict?.industries?.items?.[0]?.name || (locale === 'ar' ? 'تكرير البترول' : 'Petroleum Refining'),
      badge: dict?.industries?.items?.[0]?.badge || (locale === 'ar' ? 'متاح للتشغيل الفوري' : 'Delivered Today'),
      isDelivered: true,
      icon: Fuel,
      desc:
        dict?.industries?.items?.[0]?.desc ||
        (locale === 'ar'
          ? 'محاكاة ديناميكية متكاملة لوحدات التقطير الجوي (CDU)، التقطير الفراغي (VDU)، وشبكات التسخين الأولي مع مطابقة تامة لكونسول الـ DCS.'
          : 'Full dynamic simulation of atmospheric crude distillation (CDU), vacuum distillation (VDU), and preheat train integration with 1:1 DCS console parity.'),
      units: 'CDU · VDU · Preheat Train · Stabilizer',
      thermo: locale === 'ar' ? 'حسابات بينغ-روبنسون (Peng-Robinson EOS)' : 'Peng-Robinson EOS Thermodynamics',
      highlight: locale === 'ar' ? 'وحدة CDU مكتملة ومختبرة بالكامل' : 'CDU model validated with 12 live trends',
    },
    {
      name: dict?.industries?.items?.[1]?.name || (locale === 'ar' ? 'معالجة الغاز الطبيعي' : 'Natural Gas Processing'),
      badge: dict?.industries?.items?.[1]?.badge || (locale === 'ar' ? 'ضمن خارطة التطوير' : 'Roadmap Stage'),
      isDelivered: false,
      icon: Flame,
      desc:
        dict?.industries?.items?.[1]?.desc ||
        (locale === 'ar'
          ? 'وحدات تجفيف الغاز بغليكول ثلاثي الإيثيلين (TEG)، معالجة الغاز الحمضي بالأمين، وأبراج تجزئة سوائل الغاز الطبيعي (NGL).'
          : 'Triethylene glycol (TEG) dehydration, amine acid gas contactors, and multi-stage NGL fractionation trains with full phase envelope calculation.'),
      units: 'TEG Dehydration · Amine Treating · De-ethanizer',
      thermo: locale === 'ar' ? 'حسابات الغاز الحامضي والأمين (Amine Package)' : 'Electrolyte NRTL / Amine Thermodynamics',
      highlight: locale === 'ar' ? 'بناء مسار امتصاص وتجديد الأمين' : 'Amine absorber & stripper modeling pipeline',
    },
    {
      name: dict?.industries?.items?.[2]?.name || (locale === 'ar' ? 'البتروكيماويات' : 'Petrochemicals'),
      badge: dict?.industries?.items?.[2]?.badge || (locale === 'ar' ? 'ضمن خارطة التطوير' : 'Roadmap Stage'),
      isDelivered: false,
      icon: Atom,
      desc:
        dict?.industries?.items?.[2]?.desc ||
        (locale === 'ar'
          ? 'أفران التكسير الحراري بالبخار، أبراج تبريد الصدمة، أعمدة فصل الإيثيلين والبروبيلين، وحلقات مفاعلات البولي إيثيلين.'
          : 'Steam cracking pyrolysis furnaces, quench columns, ethylene/propylene super-fractionators, and loop polymerization reactors.'),
      units: 'Cracking Furnace · C2/C3 Splitters · Polyethylene',
      thermo: locale === 'ar' ? 'حسابات التكسير الحركي (Reaction Kinetics)' : 'Detailed Pyrolysis Reaction Kinetics',
      highlight: locale === 'ar' ? 'نمذجة درجات حرارة ملفات الفرن (COT)' : 'Coil outlet temperature (COT) dynamic modeling',
    },
    {
      name: dict?.industries?.items?.[3]?.name || (locale === 'ar' ? 'المعاهد الهندسية والجامعات' : 'Institutes & Academies'),
      badge: dict?.industries?.items?.[3]?.badge || (locale === 'ar' ? 'برامج أكاديمية فعالة' : 'Active Programs'),
      isDelivered: true,
      icon: GraduationCap,
      desc:
        dict?.industries?.items?.[3]?.desc ||
        (locale === 'ar'
          ? 'معامل محاكاة العمليات للجامعات وأكاديميات تأهيل المشغلين المهنية مع تمارين تشغيل قياسية وشهادات كفاءة رقمية.'
          : 'Process dynamics laboratories for chemical engineering faculties and vocational operator qualification academies with SOP grading.'),
      units: 'Unit Operations Lab · Console Certification',
      thermo: locale === 'ar' ? 'مناهج هندسة العمليات الكيميائية' : 'Curriculum-Aligned Process Modeling',
      highlight: locale === 'ar' ? 'تأهيل الخريجين على غرف التحكم الفعلية' : 'Hands-on live DCS console experience for students',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.industries?.eyebrow || (locale === 'ar' ? 'القطاعات الصناعية والوحدات المدعومة' : 'SUPPORTED INDUSTRIAL DOMAINS')}
          title={
            dict?.industries?.title ||
            (locale === 'ar'
              ? 'من وحدة تكرير واحدة إلى كافة الصناعات التحويلية.'
              : 'From a single process unit to the entire plant complex.')
          }
          subtitle={
            locale === 'ar'
              ? 'البداية من وحدات التكرير الحيوية (CDU/VDU) مع مسار هندسي مدروس للتوسع نحو معالجة الغاز والبتروكيماويات والمجمعات الصناعية.'
              : 'Starting from core refining units and scaling methodically across gas processing, petrochemical complexes, and training academies.'
          }
          theme="light"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-all duration-200 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                        ind.isDelivered
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase tracking-wider ${
                        ind.isDelivered
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#0A192F]">
                    {ind.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>

                  {/* Thermodynamic & Validation Specs */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-[11px]">
                    <div className="text-slate-500">
                      <span className="font-semibold text-slate-700 block mb-0.5">{locale === 'ar' ? 'الحزمة الفيزيائية:' : 'Thermo Package:'}</span>
                      <span className="font-mono text-[10px] text-slate-600">{ind.thermo}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span className="text-[11px] truncate">{ind.highlight}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="font-mono text-[11px] text-blue-700 font-bold block truncate">
                    {ind.units}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/industries`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-[#0A192F] shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-colors"
          >
            <span>
              {locale === 'ar'
                ? 'استعراض كتالوج الوحدات الصناعية ومواصفات النمذجة كاملة'
                : 'Explore full industry coverage & unit modeling catalog'}
            </span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180 text-blue-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
