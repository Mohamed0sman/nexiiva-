'use client';

import React from 'react';
import type { Dict } from '@/types/dict';

interface LeadershipSectionProps {
  locale?: string;
  dict: Dict;
}

export function LeadershipSection({ locale = 'en', dict }: LeadershipSectionProps) {
  const members = [
    {
      name: locale === 'ar' ? 'مصطفى عادل' : 'Mostafa Adel',
      role: locale === 'ar' ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO',
      domain: locale === 'ar' ? 'نمذجة العمليات والمحاكاة' : 'PROCESS MODELING & SIMULATION',
      bio:
        locale === 'ar'
          ? 'مهندس كيميائي ومتخصص في النمذجة الديناميكية للعمليات البترولية وتطوير أنظمة تدريب المشغلين.'
          : 'Process simulation specialist and chemical engineer focused on accessible high-fidelity dynamic modeling for energy plants.',
    },
    {
      name: locale === 'ar' ? 'محمد عثمان' : 'Mohamed Osman',
      role: locale === 'ar' ? 'شريك مؤسس والرئيس التقني (CTO)' : 'Co-Founder & CTO',
      domain: locale === 'ar' ? 'معمارية محركات المحاكاة' : 'SIMULATION ENGINE ARCHITECTURE',
      bio:
        locale === 'ar'
          ? 'معماري أنظمة برمجية متخصص في محركات الحسابات الديناميكية ومحاكاة شاشات DCS المعزولة أمنياً.'
          : 'Software systems architect specializing in dynamic calculation engines, real-time thermodynamics, and air-gapped DCS emulation.',
    },
    {
      name: locale === 'ar' ? 'جهاد أشرف' : 'Gehad Ashraf',
      role: locale === 'ar' ? 'شريك مؤسس ومستشار الأعمال' : 'Co-Founder, Business Advisor & Mentor',
      domain: locale === 'ar' ? 'الحوكمة والاستشارات الاستراتيجية' : 'STRATEGIC ADVISORY & GOVERNANCE',
      bio:
        locale === 'ar'
          ? 'مستشار استراتيجي في الحوكمة المؤسسية والشراكات الإقليمية ونمو المشاريع الصناعية.'
          : 'Strategic operations mentor with deep cross-border expertise in regional venture growth, industrial partnerships, and corporate governance.',
    },
    {
      name: locale === 'ar' ? 'ردينة إمام' : 'Rodayna Emam',
      role: locale === 'ar' ? 'شريك مؤسس وتطوير الأعمال' : 'Co-Founder, Business Development',
      domain: locale === 'ar' ? 'النمو التجاري والشراكات' : 'COMMERCIAL GROWTH & PARTNERSHIPS',
      bio:
        locale === 'ar'
          ? 'مسؤولة النمو التجاري وإدارة عقود المشاريع التجريبية والتوسع في قطاع التكرير والطاقة.'
          : 'Commercial growth strategist leading refinery client engagement, industrial pilot contracts, and GCC expansion.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Executive Keynote Mission Quote */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            {dict?.leadership?.teamEyebrow ||
              (locale === 'ar' ? 'القيادة وفريق العمل' : 'LEADERSHIP & FOUNDING PARTNERS')}
          </span>

          <div className="relative mt-4">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900 leading-relaxed tracking-tight">
              &ldquo;
              {dict?.leadership?.quote ||
                (locale === 'ar'
                  ? 'هدفنا أن يمارس كل مهندس ومشغل في غرف التحكم أعتى حالات الطوارئ مئات المرات في بيئة المحاكاة الافتراضية قبل أن يتعامل مع صمام حي في المنشأة الصناعية.'
                  : 'Our mission is to ensure every control room technician has faced their worst-case emergency hundreds of times in simulation before ever touching live plant valves.')}
              &rdquo;
            </blockquote>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-900">
                {dict?.leadership?.author || (locale === 'ar' ? 'مصطفى عادل' : 'Mostafa Adel')}
              </span>
              <span>·</span>
              <span>
                {dict?.leadership?.role || (locale === 'ar' ? 'المؤسس والرئيس التنفيذي، نكسيفا' : 'Founder & CEO, Nexiiva')}
              </span>
              <span>·</span>
              <span className="text-slate-600 font-medium">
                {dict?.leadership?.note || (locale === 'ar' ? 'ملتزمون بسلامة المنشآت الحيوية' : 'Committed to Plant Safety')}
              </span>
            </div>
          </div>
        </div>

        {/* Founding & Leadership Team Grid */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {dict?.leadership?.teamTitle ||
                (locale === 'ar' ? 'الفريق القيادي والمهندسون المؤسسون' : 'The Engineering & Executive Team')}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              {dict?.leadership?.teamSubtitle ||
                (locale === 'ar'
                  ? 'بقيادة مهندسي محاكاة العمليات الكيميائية ومعماريي البرمجيات المتقدمة وخبراء تطوير الأعمال الصناعية.'
                  : 'Led by process simulation engineers, software systems architects, and industrial commercial leaders.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-6 hover:border-sky-300 hover:bg-white transition-all duration-200 shadow-2xs"
              >
                <div>
                  {/* Discipline / Domain Tag */}
                  <span className="inline-block rounded bg-sky-50 border border-sky-200 px-2 py-0.5 text-[10px] font-bold text-sky-700 tracking-wider font-mono">
                    {member.domain}
                  </span>

                  <h4 className="mt-4 text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {member.name}
                  </h4>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    {member.role}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] text-slate-500 font-mono">
                  Nexiiva Leadership
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
