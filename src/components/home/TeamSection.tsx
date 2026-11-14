'use client';

import React from 'react';
import type { Dict } from '@/types/dict';

interface TeamSectionProps {
  locale: string;
  dict?: Dict;
}

export function TeamSection({ locale, dict }: TeamSectionProps) {
  const isAr = locale === 'ar';

  const eyebrow = dict?.team?.eyebrow || (isAr ? 'القيادة والمؤسسون' : 'LEADERSHIP & FOUNDERS');
  const title = dict?.team?.title || (isAr ? 'الفريق' : 'The team');

  const members = dict?.team?.members || [
    {
      name: isAr ? 'مصطفى عادل' : 'Mostafa Adel',
      role: isAr ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO',
      bio: isAr
        ? 'مهندس عمليات بخبرة ١٠ سنوات في البتروكيماويات والتكرير ومعالجة الغاز.'
        : 'Operations engineer with 10 years in petrochemicals, refining and gas processing.',
      initials: 'MA',
    },
    {
      name: isAr ? 'محمد عثمان' : 'Mohamed Osman',
      role: isAr ? 'شريك مؤسس والمدير التقني' : 'Co-founder & CTO',
      bio: isAr
        ? 'مهندس برمجيات لمحركات الحساب الديناميكي وربط وحدات تحكم DCS.'
        : 'Software architect for dynamic calculation engines and DCS console integration.',
      initials: 'MO',
    },
    {
      name: isAr ? 'جهاد أشرف' : 'Gehad Ashraf',
      role: isAr ? 'شريك مؤسس ومستشار أعمال' : 'Co-founder & Business Advisor',
      bio: isAr
        ? 'مرشد في الاستراتيجية والشراكات والحوكمة.'
        : 'Mentor in strategy, partnerships and governance.',
      initials: 'GA',
    },
    {
      name: isAr ? 'رودينا إمام' : 'Rodayna Emam',
      role: isAr ? 'شريك مؤسس وتطوير الأعمال' : 'Co-founder & Business Development',
      bio: isAr
        ? 'تقود التواصل مع عملاء المصافي وعقود التجارب.'
        : 'Leads refinery client engagement and pilot contracts.',
      initials: 'RE',
    },
  ];

  return (
    <section id="team" className="py-16 lg:py-20 bg-[#f8fbfe] border-y border-[#e3e8ee] scroll-mt-20">
      <div className="mx-auto max-w-[1100px] px-5">
        {/* Eyebrow */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
          {eyebrow}
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-8">
          {title}
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e3e8ee] rounded-[18px] p-6 flex flex-col shadow-xs"
            >
              {/* Circular Initials Avatar */}
              <div className="h-[52px] w-[52px] rounded-full bg-[#e7faff] border border-[#c0e3f6] text-[#006aa8] font-bold text-base flex items-center justify-center mb-4 select-none">
                {member.initials}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-[#101622] mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <div className="text-xs font-mono font-semibold text-[#0084d3] uppercase tracking-wider mb-3">
                {member.role}
              </div>

              {/* Bio */}
              <p className="text-sm text-[#485460] leading-relaxed flex-1">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
