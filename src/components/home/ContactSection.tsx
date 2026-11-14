'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, ShieldCheck, Check, Send, PhoneCall } from 'lucide-react';
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

    const body = `Name: ${name}\nCompany: ${company}\nInterested in: ${interest}\n\n${message}`;
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Nexiiva – ${interest}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white scroll-mt-20 relative">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="flex flex-col items-start text-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
            <PhoneCall className="w-4 h-4 text-[#0084d3]" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[64ch] font-normal">
            {lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels & Mutual NDA Assurance */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-emerald-200 bg-[#ecfdf5]/80 p-5 hover:bg-[#ecfdf5] transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              <div className="flex items-center gap-3.5 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
                  <MessageCircle className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-sm text-emerald-950">
                    {isAr ? 'واتساب الإدارة المباشر' : 'WhatsApp Direct Engineering'}
                  </div>
                  <div className="font-mono text-xs text-emerald-700 font-semibold mt-0.5">
                    01004131154 (+20)
                  </div>
                </div>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed ps-1">
                {isAr
                  ? 'متاح للمناقشات التشغيلية المباشرة مع فريق المؤسسين وحجز المواعيد الفورية.'
                  : 'Instant operational discussions directly with the founding engineering team.'}
              </p>
            </a>

            {/* Email Direct Card */}
            <a
              href={`mailto:${EMAIL}`}
              className="group block rounded-2xl border border-slate-200 bg-[#F8FBFE] p-5 hover:bg-slate-50 transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              <div className="flex items-center gap-3.5 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-xs">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {isAr ? 'البريد الإلكتروني الرسمي' : 'Official Communications'}
                  </div>
                  <div className="font-mono text-xs text-sky-700 font-semibold mt-0.5 break-all">
                    {EMAIL}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed ps-1">
                {isAr
                  ? 'لإرسال مواصفات الوحدات وطلبات عروض الأسعار والاتفاقيات الرسمية.'
                  : 'For technical specifications, pilot requests, and mutual NDA documentation.'}
              </p>
            </a>

            {/* Mutual NDA Guarantee Card */}
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs font-bold text-amber-950 uppercase tracking-wide">
                    {isAr ? 'ضمان السرية الهندسية (Mutual NDA)' : 'Mutual NDA Assurance'}
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed mt-1">
                    {isAr
                      ? 'نحترم أسرار العمليات الصناعية. نوقع اتفاقية سرية متبادلة لحماية مستندات المصنع قبل مراجعة أي P&ID أو بيانات كونسول.'
                      : 'We sign a binding mutual NDA before reviewing any flowsheet, P&ID, or control operating parameters.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-[#e3e8ee] rounded-[24px] p-6 sm:p-8 shadow-[0_12px_40px_-10px_rgba(16,22,34,0.06)]">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-start">
                <div className="flex items-center gap-2.5 text-emerald-800 font-bold mb-2 text-base">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>{isAr ? 'تم فتح تطبيق البريد الخاص بك بنجاح!' : 'Email client opened successfully!'}</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  {isAr
                    ? 'تم تجهيز مسودة الرسالة متضمنة بياناتك واختيارك. إذا لم يفتح البريد تلقائياً، يمكنك مراسلتنا مباشرة على Mostafa.adel.esmaiel@gmail.com.'
                    : 'Your message has been formatted. If your email application did not launch automatically, feel free to email Mostafa.adel.esmaiel@gmail.com directly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="n"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {dict?.contact?.nameLabel || (isAr ? 'الاسم' : 'Name')}
                  </label>
                  <input
                    id="n"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={isAr ? 'مثال: م. أحمد مصطفى' : 'e.g. John Doe'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-[#101622] focus:border-[#0084d3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20 transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="c"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {dict?.contact?.companyLabel || (isAr ? 'الشركة / المصنع' : 'Company / Refinery')}
                  </label>
                  <input
                    id="c"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder={isAr ? 'اسم الشركة أو مصفاة التكرير' : 'e.g. Alexandria Petroleum Company'}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-[#101622] focus:border-[#0084d3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20 transition-colors"
                  />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label
                    htmlFor="pl"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {dict?.contact?.interestLabel || (isAr ? 'أنا مهتم بـ' : "I'm interested in")}
                  </label>
                  <select
                    id="pl"
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-[#101622] focus:border-[#0084d3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20 transition-colors"
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
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {dict?.contact?.messageLabel || (isAr ? 'رسالتك / متطلبات الوحدة' : 'Message / Unit Scope')}
                  </label>
                  <textarea
                    id="m"
                    name="message"
                    rows={4}
                    required
                    placeholder={isAr ? 'اكتب تفاصيل طلبك أو عدد المتدربين والوحدات المطلوبة...' : 'Details about your unit, operators, or expected pilot timeline...'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-[#101622] focus:border-[#0084d3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    id="send"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0084d3] hover:bg-[#006fb3] px-7 py-3 text-sm font-semibold text-white shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <Send className="w-4 h-4 rtl:-scale-x-100" />
                    <span>{dict?.contact?.sendBtn || (isAr ? 'أرسل الرسالة' : 'Send message')}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
