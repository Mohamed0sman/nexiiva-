'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NexiivaLogo } from '@/components/NexiivaLogo';
import { ArrowRight, Mail, MessageSquare, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface FinalCtaSectionProps {
  locale: string;
  dict: Dict;
}

export function FinalCtaSection({ locale, dict }: FinalCtaSectionProps) {
  const isAr = locale === 'ar';
  const verifiedPhone = '01004131154';
  const verifiedEmail = 'Mostafa.adel.esmaiel@gmail.com';

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Demo');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact_or_plan',
          name,
          company,
          email,
          interest,
          message,
        }),
      });
    } catch (err) {
      console.error('Lead post error', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getWhatsAppSubmitLink = () => {
    const text = `Hello Eng. Mostafa,\n\nInquiry from Nexiiva website:\n• Name: ${name || 'N/A'}\n• Company: ${company || 'N/A'}\n• Interested in: ${interest}\n• Email: ${email || 'N/A'}\n\nMessage:\n${message || 'Please contact me regarding this inquiry.'}`;
    return `https://wa.me/201004131154?text=${encodeURIComponent(text)}`;
  };

  const getMailtoSubmitLink = () => {
    const subject = `Nexiiva – ${interest} – ${name || company || 'Inquiry'}`;
    const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nInterested in: ${interest}\n\nMessage:\n${message}`;
    return `mailto:${verifiedEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-sky-100/60 overflow-hidden text-start border-t border-sky-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-mono font-bold tracking-wider text-sky-700 uppercase mb-3">
            {isAr ? 'تواصل معنا' : 'CONTACT US'}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            {dict?.contact?.title || (isAr ? 'تواصل معنا' : 'Contact us')}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            {dict?.contact?.subtitle ||
              (isAr
                ? 'أرسل لنا رسالة وسنرد عليك بالبريد الإلكتروني.'
                : 'Send us a message and we will reply by email.')}
          </p>

          {/* Direct Email & WhatsApp Contacts */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
              <Mail className="h-3.5 w-3.5 text-sky-600" />
              <strong>{isAr ? 'البريد الإلكتروني:' : 'Email:'}</strong>{' '}
              <a href={`mailto:${verifiedEmail}`} className="text-sky-600 hover:underline">
                {verifiedEmail}
              </a>
            </span>

            <span className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
              <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
              <strong>{isAr ? 'واتساب:' : 'WhatsApp:'}</strong>{' '}
              <a
                href="https://wa.me/201004131154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                {verifiedPhone}
              </a>
            </span>
          </div>
        </div>

        {/* Contact Grid: Form + Commercial Qualification Criteria */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-sky-200 bg-white p-6 sm:p-9 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isAr ? 'تم استلام رسالتك بنجاح' : 'Message Received'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? 'شكراً لتواصلك مع نكسيفا. سنقوم بالرد عليك عبر البريد الإلكتروني في غضون 24 ساعة.'
                    : 'Thank you for reaching out to Nexiiva. Our engineering team will review your inquiry and reply via email within 24 hours.'}
                </p>

                {/* Instant WhatsApp / Mailto Buttons */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={getWhatsAppSubmitLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white shadow-2xs transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{isAr ? 'فتح المحادثة عبر واتساب' : 'Open in WhatsApp'}</span>
                  </a>

                  <a
                    href={getMailtoSubmitLink()}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-5 py-2.5 text-xs font-bold text-white shadow-2xs transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{isAr ? 'إرسال عبر تطبيق البريد' : 'Send via Email App'}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs text-slate-500 underline hover:text-slate-700 cursor-pointer"
                >
                  {isAr ? 'إرسال رسالة أخرى' : 'Send another inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                      {dict?.contact?.nameLabel || (isAr ? 'الاسم' : 'Name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isAr ? 'الاسم الكامل' : 'Full name'}
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-hidden transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 mb-1">
                      {dict?.contact?.companyLabel || (isAr ? 'الشركة / المنشأة' : 'Company')}
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={isAr ? 'اسم المنشأة أو المصنع' : 'Plant or company name'}
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                    {dict?.contact?.emailLabel || (isAr ? 'البريد الإلكتروني' : 'Email')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-hidden transition-colors"
                  />
                </div>

                {/* I'm interested in (The 5 Options from Nexiiva website.html) */}
                <div>
                  <label htmlFor="contact-interest" className="block text-xs font-bold text-slate-700 mb-1">
                    {dict?.contact?.interestLabel || (isAr ? 'أنا مهتم بـ' : 'I’m interested in')}
                  </label>
                  <select
                    id="contact-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-hidden transition-colors"
                  >
                    <option value="Demo">{isAr ? 'عرض تجريبي (Demo)' : 'Demo'}</option>
                    <option value="Pilot">{isAr ? 'تجربة (Pilot - 3 أشهر)' : 'Pilot'}</option>
                    <option value="Company license">{isAr ? 'ترخيص للشركات' : 'Company license'}</option>
                    <option value="Training center course">{isAr ? 'دورة لمركز تدريب' : 'Training center course'}</option>
                    <option value="Not sure yet">{isAr ? 'لست متأكدًا بعد' : 'Not sure yet'}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                    {dict?.contact?.messageLabel || (isAr ? 'رسالتك' : 'Message')}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      isAr
                        ? 'وضح الوحدة التشغيلية المستهدفة أو استفسارك...'
                        : 'Describe your process unit, operator count, or inquiry...'
                    }
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-hidden transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-8 py-3 text-sm font-bold text-white shadow-xs transition-colors cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>
                      {isSubmitting
                        ? (isAr ? 'جاري الإرسال...' : 'Sending...')
                        : (dict?.contact?.submitBtn || (isAr ? 'أرسل الرسالة' : 'Send message'))}
                    </span>
                  </button>

                  <a
                    href={getWhatsAppSubmitLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{isAr ? 'أو تواصل فوراً عبر واتساب' : 'Or chat instantly via WhatsApp'}</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Commercial Qualification & Trust Sidecar (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-2xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-800 block mb-3">
                {isAr ? 'التزام السرية والبيانات:' : 'CONFIDENTIALITY & DATA PROTECTION:'}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {isAr
                  ? 'ندرك تماماً سرية مخططات المنشآت البترولية. نوقع اتفاقية سرية معلومات ملزمة قانونياً (Mutual NDA) لحماية بياناتكم قبل استلام أي وثائق.'
                  : 'We strictly protect plant IP. A binding Mutual Non-Disclosure Agreement (NDA) is executed prior to reviewing any facility documentation.'}
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{isAr ? 'توقيع اتفاقية NDA متبادلة لحماية المخططات' : 'Mutual NDA executed before receiving plant files'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{isAr ? 'إمكانية التثبيت المعزول 100% دون إنترنت' : '100% Air-gapped on-premise installation option'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{isAr ? 'دعم تدريب الكوادر واعتماد إجراءات الـ SOP' : 'Dedicated operator qualification and SOP scoring'}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                {isAr ? 'المقر والتواصل المباشر:' : 'DIRECT CONTACT:'}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'مهندس مصطفى عادل (المؤسس والرئيس التنفيذي)'
                  : 'Eng. Mostafa Adel (Founder & CEO)'}
              </p>
              <p className="mt-1 text-xs text-slate-800 font-bold">
                WhatsApp: 01004131154
              </p>
              <p className="text-xs text-slate-800 font-bold">
                Email: Mostafa.adel.esmaiel@gmail.com
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
