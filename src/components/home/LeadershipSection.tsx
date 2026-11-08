'use client';

import React from 'react';
import type { Dict } from '@/types/dict';

interface LeadershipSectionProps {
  locale?: string;
  dict: Dict;
}

export function LeadershipSection({ locale = 'en', dict }: LeadershipSectionProps) {
  const isAr = locale === 'ar';

  const members = [
    {
      initials: 'MA',
      name: isAr ? 'مصطفى عادل' : 'Mostafa Adel',
      role: isAr ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO',
      domain: isAr ? 'هندسة العمليات والتشغيل' : 'PLANT OPERATIONS & REFINING',
      bio:
        isAr
          ? 'مهندس عمليات بخبرة ١٠ سنوات في البتروكيماويات والتكرير ومعالجة الغاز.'
          : 'Operations engineer with 10 years in petrochemicals, refining and gas processing.',
    },
    {
      initials: 'MO',
      name: isAr ? 'محمد عثمان' : 'Mohamed Osman',
      role: isAr ? 'شريك مؤسس والمدير التقني' : 'Co-Founder & CTO',
      domain: isAr ? 'معمارية النظم والحسابات' : 'DYNAMIC COMPUTATIONAL SYSTEMS',
      bio:
        isAr
          ? 'معماري أنظمة برمجية متخصص في محركات الحسابات الديناميكية ومطابقة أنظمة التحكم الموزع DCS.'
          : 'Software systems architect specializing in dynamic calculation engines, real-time thermodynamics, and DCS console integration.',
    },
    {
      initials: 'GA',
      name: isAr ? 'جهاد أشرف' : 'Gehad Ashraf',
      role: isAr ? 'شريك مؤسس ومستشار الأعمال' : 'Co-Founder, Business Advisor & Mentor',
      domain: isAr ? 'الحوكمة والاستشارات الاستراتيجية' : 'STRATEGIC ADVISORY & GOVERNANCE',
      bio:
        isAr
          ? 'مستشار استراتيجي في الحوكمة المؤسسية والشراكات الإقليمية ونمو المشاريع الصناعية.'
          : 'Strategic operations mentor with deep cross-border expertise in regional venture growth, industrial partnerships, and corporate governance.',
    },
    {
      initials: 'RE',
      name: isAr ? 'ردينة إمام' : 'Rodayna Emam',
      role: isAr ? 'شريك مؤسس وتطوير الأعمال' : 'Co-Founder, Business Development',
      domain: isAr ? 'النمو التجاري والشراكات' : 'COMMERCIAL GROWTH & PARTNERSHIPS',
      bio:
        isAr
          ? 'مسؤولة النمو التجاري وإدارة عقود المشاريع التجريبية والتوسع في قطاع التكرير والطاقة.'
          : 'Commercial growth strategist leading refinery client engagement, industrial pilot contracts, and GCC expansion.',
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* PART 1: ABOUT US — Built with real plant experience */}
        <div className="max-w-4xl text-start">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
            {dict?.about?.eyebrow || (isAr ? 'من نحن' : 'ABOUT US')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {dict?.about?.title ||
              (isAr ? 'نبني نكسيفا بخبرة تشغيل حقيقية' : 'Built with real plant experience')}
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
            <p>
              {dict?.about?.p1 ||
                (isAr
                  ? 'يبني نكسيفا مهندسو عمليات لديهم سنوات من الخبرة في التكرير والبتروكيماويات ومعالجة الغاز.'
                  : 'Nexiiva is built by operations engineers with years of experience in refining, petrochemicals and gas processing.')}
            </p>
            <p>
              {dict?.about?.p2 ||
                (isAr
                  ? 'هدفنا أن نمنح كل مشغّل مكانًا آمنًا للتدرّب على المواقف التي تكلّف أكثر ما يمكن عندما تسوء.'
                  : 'Our goal is to give every operator a safe place to practice the situations that cost the most when they go wrong.')}
            </p>
            <p className="font-semibold text-slate-900">
              {dict?.about?.p3 ||
                (isAr
                  ? 'نكسيفا منصة واحدة لأي وحدة عمليات، وليست لنوع واحد من الوحدات.'
                  : 'Nexiiva is one platform for any process unit, not a single unit type.')}
            </p>
          </div>
        </div>

        {/* PART 2: THE TEAM */}
        <div id="team" className="mt-16 pt-12 border-t border-slate-100">
          <div className="max-w-3xl mb-10 text-start">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              {dict?.leadership?.teamEyebrow || (isAr ? 'الفريق' : 'THE TEAM')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {dict?.leadership?.teamTitle || (isAr ? 'فريق العمل والقيادة' : 'The team')}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {dict?.leadership?.teamSubtitle ||
                (isAr
                  ? 'مهندسو عمليات بخبرة تشغيل حقيقية في المصافي ومجمعات البتروكيماويات.'
                  : 'Operations engineers with direct field background in refining, petrochemicals and gas processing.')}
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-6 hover:border-sky-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-sky-600 font-mono text-sm font-bold text-sky-800 shadow-2xs">
                      {member.initials}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                      <p className="text-xs font-semibold text-sky-700">{member.role}</p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-600 block mb-2">
                    {member.domain}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
