'use client';

import React from 'react';
import Link from 'next/link';
import { NexiivaLogo } from '@/components/NexiivaLogo';
import { ArrowRight, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface FinalCtaSectionProps {
  locale: string;
  dict: Dict;
}

export function FinalCtaSection({ locale, dict }: FinalCtaSectionProps) {
  const isAr = locale === 'ar';
  const verifiedPhone = '01004131154';
  const verifiedEmail = 'Mostafa.adel.esmaiel@gmail.com';

  const qualificationChecklist = [
    isAr ? 'البدء بوحدة تشغيلية واحدة (مثل CDU أو شبكة التسخين)' : 'Focus on one critical process unit (e.g. CDU or Preheat Train)',
    isAr ? 'توفير مخططات P&ID وجداول بيانات المعدات وفلسفة التحكم' : 'Provide plant P&IDs, equipment data sheets & control philosophy',
    isAr ? 'فترة تسليم قياسية مستهدفة في حدود أسبوع إلى أسبوعين' : 'Target delivery and deployment in approximately 1–2 weeks',
    isAr ? 'تشغيل محلي معزول 100% دون الحاجة إلى إنترنت' : '100% On-premise air-gapped installation on local workstations',
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-sky-100/70 overflow-hidden text-center border-t border-sky-200">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Brand Logo & Eyebrow */}
        <NexiivaLogo variant="dark" className="h-9 w-auto mb-6" />

        <div className="text-xs font-mono font-bold tracking-wider text-sky-600 uppercase mb-3">
          {isAr ? 'المشاريع التجريبية والتواصل المباشر' : 'PILOT PROGRAMME ENROLLMENT OPEN'}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] max-w-3xl">
          {dict?.finalCta?.title ||
            (isAr
              ? 'لنجعل التوائم الرقمية المتقدمة متاحة لكل وحدة صناعية.'
              : 'Let’s bring high-fidelity digital twins to every industrial unit.')}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
          {dict?.finalCta?.subtitle ||
            (isAr
              ? 'انضم إلينا في تغيير مستقبل التدريب الصناعي وسلامة العمليات. ابدأ بمشروع تجريبي منضبط لوحدة تشغيلية حقيقية في منشأتك.'
              : 'Join us in transforming industrial training and process safety. Start with a focused single-unit pilot deployed directly at your facility.')}
        </p>

        {/* Qualification Checklist Card */}
        <div className="mt-10 w-full max-w-3xl rounded-xl border border-sky-200 bg-white p-6 text-start shadow-2xs">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-800 block mb-4 text-center sm:text-start">
            {isAr ? 'معايير التأهيل للمشروع التجريبي:' : 'PILOT QUALIFICATION CRITERIA:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
            {qualificationChecklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-xs transition-colors active:scale-95"
          >
            <span>{dict?.finalCta?.requestPilot || (isAr ? 'طلب مشروع تجريبي للوحدة' : 'Request a Unit Pilot')}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>

          <Link
            href={`https://wa.me/20${verifiedPhone.startsWith('0') ? verifiedPhone.slice(1) : verifiedPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 px-7 py-3.5 text-sm font-bold text-emerald-800 shadow-2xs transition-colors active:scale-95"
          >
            <MessageSquare className="h-4 w-4 text-emerald-600" />
            <span>{isAr ? `واتساب مباشر (${verifiedPhone})` : `Direct WhatsApp (${verifiedPhone})`}</span>
          </Link>

          <Link
            href={`mailto:${verifiedEmail}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-colors active:scale-95"
          >
            <Mail className="h-4 w-4 text-sky-600" />
            <span>{dict?.finalCta?.contactUs || (isAr ? 'مراسلة الإدارة' : 'Email Engineering')}</span>
          </Link>
        </div>

        {/* NDA & Confidentiality Reassurance */}
        <div className="mt-8 text-xs text-slate-500 font-mono">
          <span>
            {isAr
              ? 'حماية كاملة للبيانات: توقيع اتفاقية سرية المعلومات (Mutual NDA) يسبق استلام أي وثائق هندسية.'
              : 'Complete IP Protection: Mutual NDA executed prior to receipt of any plant documentation.'}
          </span>
        </div>
      </div>
    </section>
  );
}
