'use client';

import React from 'react';
import Link from 'next/link';
import { NexiivaLogo } from '@/components/NexiivaLogo';
import { ArrowRight, Mail, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface FinalCtaSectionProps {
  locale: string;
  dict: Dict;
}

export function FinalCtaSection({ locale, dict }: FinalCtaSectionProps) {
  const verifiedPhone = '01004131154';
  const verifiedEmail = 'Mostafa.adel.esmaiel@gmail.com';

  const qualificationChecklist = [
    locale === 'ar' ? 'البدء بوحدة تشغيلية واحدة (مثل CDU أو شبكة التسخين)' : 'Focus on one critical process unit (e.g. CDU or Preheat Train)',
    locale === 'ar' ? 'توفير مخططات P&ID وجداول بيانات المعدات وفلسفة التحكم' : 'Provide plant P&IDs, equipment data sheets & control philosophy',
    locale === 'ar' ? 'فترة تسليم قياسية مستهدفة في حدود أسبوع إلى أسبوعين' : 'Target delivery and deployment in approximately 1–2 weeks',
    locale === 'ar' ? 'تشغيل محلي معزول 100% دون الحاجة إلى إنترنت' : '100% On-premise air-gapped installation on local workstations',
  ];

  return (
    <section className="relative py-24 bg-[#0A192F] overflow-hidden text-center border-t border-slate-800">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Brand Logo & Eyebrow */}
        <NexiivaLogo variant="light" className="h-9 w-auto mb-6" />

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 mb-4">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>{locale === 'ar' ? 'جاهزية كاملة لنشر المشاريع التجريبية' : 'PILOT PROGRAMME ENROLLMENT OPEN'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] max-w-3xl">
          {dict?.finalCta?.title ||
            (locale === 'ar'
              ? 'لنجعل محاكيات تدريب المشغلين متاحة لكل وحدة صناعية.'
              : 'Let’s make OTS accessible to every industrial unit.')}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          {dict?.finalCta?.subtitle ||
            (locale === 'ar'
              ? 'انضم إلينا في تغيير مستقبل التدريب الصناعي وسلامة العمليات. ابدأ بمشروع تجريبي منضبط لوحدة تشغيلية حقيقية في منشأتك.'
              : 'Join us in transforming industrial training and process safety. Start with a focused single-unit pilot deployed directly at your facility.')}
        </p>

        {/* Qualification Checklist Bar */}
        <div className="mt-10 w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-start">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400 block mb-3 text-center sm:text-start">
            {locale === 'ar' ? 'متطلبات البدء في المشروع التجريبي (Pilot Criteria):' : 'PILOT PROGRAMME QUALIFICATION CRITERIA:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            {qualificationChecklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-8 py-4 text-sm font-bold text-white shadow-xs transition-colors active:scale-95"
          >
            <span>{dict?.finalCta?.requestPilot || (locale === 'ar' ? 'طلب مشروع تجريبي للوحدة' : 'Request a Unit Pilot')}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>

          <Link
            href={`https://wa.me/20${verifiedPhone.startsWith('0') ? verifiedPhone.slice(1) : verifiedPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/60 bg-emerald-950/40 hover:bg-emerald-900/40 px-7 py-4 text-sm font-semibold text-emerald-300 transition-colors active:scale-95"
          >
            <MessageSquare className="h-4 w-4 text-emerald-400" />
            <span>{locale === 'ar' ? `واتساب مباشر (${verifiedPhone})` : `Direct WhatsApp (${verifiedPhone})`}</span>
          </Link>

          <Link
            href={`mailto:${verifiedEmail}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-7 py-4 text-sm font-semibold text-slate-300 transition-colors active:scale-95"
          >
            <Mail className="h-4 w-4 text-blue-400" />
            <span>{dict?.finalCta?.contactUs || (locale === 'ar' ? 'مراسلة الإدارة' : 'Email Engineering')}</span>
          </Link>
        </div>

        {/* NDA & Confidentiality Reassurance */}
        <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>
            {locale === 'ar'
              ? 'حماية كاملة للبيانات: توقيع اتفاقية سرية متبادلة (Mutual NDA) يسبق استلام أي وثائق.'
              : 'Complete IP Protection: Mutual NDA executed prior to receipt of any plant documentation.'}
          </span>
        </div>
      </div>
    </section>
  );
}
