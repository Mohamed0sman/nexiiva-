'use client';

import React, { useState } from 'react';
import { Mail, Check, MessageCircle } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ContactSectionProps {
  locale: string;
  dict?: Dict;
}

const EMAIL = 'Mostafa.adel.esmaiel@gmail.com';
const WHATSAPP_URL = 'https://wa.me/201004131154';

export function ContactSection({ locale, dict }: ContactSectionProps) {
  const isAr = locale === 'ar';
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('Not sure yet');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const eyebrow = dict?.contact?.eyebrow || (isAr ? 'تواصل معنا' : 'CONTACT US');
  const title = dict?.contact?.title || (isAr ? 'تواصل معنا' : 'Contact us');
  const lead =
    dict?.contact?.lead ||
    (isAr
      ? 'أرسل لنا رسالة وسنرد عليك. نوقّع اتفاقية سرية متبادلة (NDA) قبل مراجعة أي مستندات للمصنع.'
      : 'Send us a message and we will reply. We sign a mutual NDA before reviewing any plant documents.');

  const options = [
    { value: 'Not sure yet', label: isAr ? 'لست متأكدًا بعد' : 'Not sure yet' },
    { value: 'Demo', label: isAr ? 'عرض تجريبي' : 'Demo' },
    { value: 'Pilot', label: isAr ? 'تجربة (Pilot)' : 'Pilot' },
    { value: 'On-premises license', label: isAr ? 'ترخيص داخل الشركة (On-premises)' : 'On-premises license' },
    { value: 'Cloud license', label: isAr ? 'ترخيص سحابي (Cloud)' : 'Cloud license' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Send via mailto fallback
    const body = `Name: ${name}\nCompany: ${company}\nInterested in: ${interest}\n\n${message}`;
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Nexiiva – ${interest}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-[1100px] px-5">
        {/* Eyebrow */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
          {eyebrow}
        </div>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-3">
          {title}
        </h2>

        {/* Lead with Mutual NDA Assurance */}
        <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[62ch] mb-8 font-normal">
          {lead}
        </p>

        {/* Direct Channels (WhatsApp & Email buttons) */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {/* WhatsApp Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#a7f3d0] bg-[#ecfdf5] px-5 py-3 text-sm font-semibold text-[#006145] hover:bg-emerald-100 transition-colors shadow-xs"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            <span>{dict?.contact?.whatsapp || 'WhatsApp'}</span>
          </a>

          {/* Direct Email Button */}
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#e3e8ee] bg-white px-5 py-3 text-sm font-semibold text-[#101622] hover:bg-slate-50 transition-colors shadow-xs"
          >
            <Mail className="h-5 w-5 text-[#0084d3]" />
            <span>{EMAIL}</span>
          </a>
        </div>

        {/* Form Container */}
        <div className="max-w-[560px]">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-start">
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold mb-2">
                <Check className="h-5 w-5 text-emerald-600" />
                <span>{isAr ? 'تم فتح تطبيق البريد الخاص بك!' : 'Email client opened!'}</span>
              </div>
              <p className="text-sm text-emerald-700 leading-relaxed">
                {isAr
                  ? 'تم تجهيز رسالتك مع عنوان الموضوع والتفاصيل. سنرد عليك في أقرب وقت بمجرد الإرسال.'
                  : 'Your inquiry has been formatted. If your email client did not open automatically, write directly to Mostafa.adel.esmaiel@gmail.com.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="n"
                  className="block text-sm font-semibold text-[#101622] mb-1.5"
                >
                  {dict?.contact?.nameLabel || (isAr ? 'الاسم' : 'Name')}
                </label>
                <input
                  id="n"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-[10px] border border-[#e3e8ee] bg-white px-3.5 py-2.5 text-base text-[#101622] focus:border-[#0084d3] focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="c"
                  className="block text-sm font-semibold text-[#101622] mb-1.5"
                >
                  {dict?.contact?.companyLabel || (isAr ? 'الشركة' : 'Company')}
                </label>
                <input
                  id="c"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-[10px] border border-[#e3e8ee] bg-white px-3.5 py-2.5 text-base text-[#101622] focus:border-[#0084d3] focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20"
                />
              </div>

              {/* I'm interested in */}
              <div>
                <label
                  htmlFor="pl"
                  className="block text-sm font-semibold text-[#101622] mb-1.5"
                >
                  {dict?.contact?.interestLabel || (isAr ? 'أنا مهتم بـ' : "I'm interested in")}
                </label>
                <select
                  id="pl"
                  name="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-[10px] border border-[#e3e8ee] bg-white px-3.5 py-2.5 text-base text-[#101622] focus:border-[#0084d3] focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20"
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="m"
                  className="block text-sm font-semibold text-[#101622] mb-1.5"
                >
                  {dict?.contact?.messageLabel || (isAr ? 'رسالتك' : 'Message')}
                </label>
                <textarea
                  id="m"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-[10px] border border-[#e3e8ee] bg-white px-3.5 py-2.5 text-base text-[#101622] focus:border-[#0084d3] focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20"
                />
              </div>

              {/* Send Button */}
              <div className="pt-2">
                <button
                  id="send"
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0084d3] px-6 py-3 text-base font-semibold text-white shadow-xs hover:bg-[#006fb3] transition-colors cursor-pointer active:scale-[0.98]"
                >
                  {dict?.contact?.sendBtn || (isAr ? 'أرسل الرسالة' : 'Send message')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
