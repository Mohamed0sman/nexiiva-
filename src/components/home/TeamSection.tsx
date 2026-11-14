'use client';

import React from 'react';
import { Users2, Award } from 'lucide-react';
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
      badge: isAr ? 'هندسة العمليات' : 'Plant Operations',
    },
    {
      name: isAr ? 'محمد عثمان' : 'Mohamed Osman',
      role: isAr ? 'شريك مؤسس والمدير التقني' : 'Co-founder & CTO',
      bio: isAr
        ? 'مهندس برمجيات لمحركات الحساب الديناميكي وربط وحدات تحكم DCS.'
        : 'Software architect for dynamic calculation engines and DCS console integration.',
      initials: 'MO',
      badge: isAr ? 'محركات المحاكاة' : 'Simulation Engines',
    },
    {
      name: isAr ? 'جهاد أشرف' : 'Gehad Ashraf',
      role: isAr ? 'شريك مؤسس ومستشار أعمال' : 'Co-founder & Business Advisor',
      bio: isAr
        ? 'مرشد في الاستراتيجية والشراكات والحوكمة.'
        : 'Mentor in strategy, partnerships and governance.',
      initials: 'GA',
      badge: isAr ? 'استراتيجية وحوكمة' : 'Strategy & Governance',
    },
    {
      name: isAr ? 'رودينا إمام' : 'Rodayna Emam',
      role: isAr ? 'شريك مؤسس وتطوير الأعمال' : 'Co-founder & Business Development',
      bio: isAr
        ? 'تقود التواصل مع عملاء المصافي وعقود التجارب.'
        : 'Leads refinery client engagement and pilot contracts.',
      initials: 'RE',
      badge: isAr ? 'تطوير أعمال المصافي' : 'Industrial Pilots',
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-24 bg-[#f8fbfe] border-y border-[#e3e8ee] scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="flex flex-col items-start text-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
            <Users2 className="w-4 h-4 text-[#0084d3]" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight">
            {title}
          </h2>
        </div>

        {/* 4 Executive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e3e8ee] hover:border-sky-300 rounded-[22px] p-6 sm:p-7 flex flex-col justify-between craft-card"
            >
              <div>
                {/* Avatar with Status Ring */}
                <div className="flex items-center justify-between mb-5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#e7faff] to-[#c0e3f6]/50 border border-[#c0e3f6] text-[#006aa8] font-bold text-base flex items-center justify-center select-none shadow-2xs">
                    {member.initials}
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-slate-500 bg-slate-100 rounded-full px-2.5 py-0.5">
                    {'badge' in member && member.badge ? (member as { badge: string }).badge : (isAr ? 'عضو مؤسس' : 'Co-Founder')}
                  </span>
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
                <p className="text-sm text-[#485460] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Verified Founder Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <Award className="w-3.5 h-3.5 text-sky-600" />
                <span>{isAr ? 'عضو الفريق المؤسس' : 'Founding Leadership'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
