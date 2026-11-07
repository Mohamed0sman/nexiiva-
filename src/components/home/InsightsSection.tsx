'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface InsightsSectionProps {
  locale: string;
  dict: Dict;
}

export function InsightsSection({ locale, dict }: InsightsSectionProps) {
  const articles = [
    {
      slug: 'why-operators-need-to-see-the-worst-day-before-it-happens',
      title:
        locale === 'ar'
          ? 'لماذا يجب أن يواجه المشغل أسوأ سيناريو في المحاكي قبل حدوثه في المصنع؟'
          : 'Why Operators Need to See the Worst Day Before It Happens',
      summary:
        locale === 'ar'
          ? 'اليوم الأول في غرفة التحكم لا يجب أن يبدأ بعبارة "اجلس بجوار المشغل الأقدم". كيف تحول محاكيات التدريب عالية الدقة الطوارئ النادرة إلى استجابة إجرائية تلقائية ومحسوبة.'
          : 'Day one in the control room shouldn’t begin with "sit next to the senior". How high-fidelity training simulators turn unrepeatable emergencies into predictable procedural muscle memory.',
      date: locale === 'ar' ? '15 أكتوبر 2026' : 'Oct 15, 2026',
      readTime: locale === 'ar' ? '5 دقائق قراءة' : '5 min read',
      author: locale === 'ar' ? 'مصطفى عادل · مؤسس نكسيفا' : 'Mostafa Adel · Founder & CEO',
      category: locale === 'ar' ? 'سلامة العمليات (PSM)' : 'Process Safety',
    },
    {
      slug: 'what-an-ots-actually-trains-and-what-it-doesnt',
      title:
        locale === 'ar'
          ? 'ما الذي يدرّبه محاكي الـ OTS فعلياً وما الذي يعجز عنه؟'
          : 'What an OTS Actually Trains (and What It Doesn’t)',
      summary:
        locale === 'ar'
          ? 'محاكي تدريب المشغلين ليس لعبة فيديو وليس مجرد مخطط CAD ثابت. تحليل هندسي لدقة المعادلات الثرموديناميكية وبيئة عمل الكونسول ودور المحاكي في بدء تشغيل المنشآت.'
          : 'An Operator Training Simulator is not a video game, nor is it a CAD viewer. A technical teardown of thermodynamic fidelity, console ergonomics, and where OTS fits in plant commissioning.',
      date: locale === 'ar' ? '28 أكتوبر 2026' : 'Oct 28, 2026',
      readTime: locale === 'ar' ? '6 دقائق قراءة' : '6 min read',
      author: locale === 'ar' ? 'محمد عثمان · معماري النظم' : 'Mohamed Osman · Systems Architect',
      category: locale === 'ar' ? 'التحليل الهندسي' : 'Engineering Insights',
    },
    {
      slug: 'offline-first-simulators-for-secure-plants',
      title:
        locale === 'ar'
          ? 'المحاكيات المعزولة محلياً (Offline-First) للمنشآت الحيوية'
          : 'Offline-First Simulators for Secure Plants',
      summary:
        locale === 'ar'
          ? 'مجمعات التكرير والبتروكيماويات لا يمكنها المخاطرة بالاعتماد على سحابة خارجية أو نقل بيانات التحكم عبر الإنترنت. لماذا يعد التصميم المحلي المعزول خياراً غير قابل للتفاوض.'
          : 'Air-gapped petrochemical complexes cannot tolerate SaaS dependencies or external telemetry. Why offline-first architecture is non-negotiable for critical national infrastructure.',
      date: locale === 'ar' ? '02 نوفمبر 2026' : 'Nov 02, 2026',
      readTime: locale === 'ar' ? '4 دقائق قراءة' : '4 min read',
      author: locale === 'ar' ? 'جهاد أشرف · مستشار الحوكمة' : 'Gehad Ashraf · Strategic Advisor',
      category: locale === 'ar' ? 'الأمان والتشغيل السيبراني' : 'Cybersecurity & Architecture',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow={dict?.insights?.eyebrow || (locale === 'ar' ? 'الدراسات والتحليلات الهندسية' : 'TECHNICAL PAPERS & PERSPECTIVES')}
            title={
              dict?.insights?.title ||
              (locale === 'ar'
                ? 'مقالات وتحليلات من واقع غرف التحكم الصناعية.'
                : 'Engineering perspectives & control room analysis.')
            }
            subtitle={
              locale === 'ar'
                ? 'رؤى متعمقة في العوامل البشرية لغرف التحكم، النمذجة الديناميكية، وأمن البنية التحتية الحيوية.'
                : 'Deep dives into control room human factors, dynamic modeling, and industrial simulation architecture.'
            }
            className="mb-0"
            theme="light"
          />

          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-[#0A192F] shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-colors shrink-0"
          >
            <span>{dict?.insights?.cta || (locale === 'ar' ? 'استعراض كافة الأوراق الفنية' : 'View all technical papers')}</span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180 text-blue-600" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/insights/${item.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-7 transition-all duration-200 hover:border-slate-300 hover:bg-white shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-blue-700 font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0A192F] group-hover:text-blue-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 font-semibold">{item.author}</span>
                <span className="inline-flex items-center gap-1 font-bold text-blue-700 group-hover:underline">
                  <span>{locale === 'ar' ? 'قراءة التحليل' : 'Read paper'}</span>
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
