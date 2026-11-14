'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, ShieldCheck, CheckCircle2, Send, PhoneCall, Loader2, ArrowRight } from 'lucide-react';
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
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('Not sure yet');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          name,
          email,
          phone,
          company,
          interest,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error('Server response failed');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('[Contact Submit Error]', err);
      // Fallback: Open mail client if background API dispatch failed
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nInterested in: ${interest}\n\n${message}`;
      const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
        `Nexiiva – ${interest} from ${name}`
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setInterest('Not sure yet');
    setMessage('');
    setSubmitted(false);
    setErrorMessage('');
  };

  const getWhatsAppFollowupLink = () => {
    const text = isAr
      ? `مرحباً م. مصطفى عادل، تواصلت معكم عبر موقع نكسيفا بخصوص: ${interest} - الاسم: ${name} (${company}).`
      : `Hello Eng. Mostafa, I reached out through the Nexiiva platform regarding: ${interest} - ${name} (${company}).`;
    return `https://wa.me/201004131154?text=${encodeURIComponent(text)}`;
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
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 text-start">
                <div className="flex items-center gap-3 text-emerald-800 font-bold mb-3 text-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span>{isAr ? 'تم إرسال رسالتك بنجاح!' : 'Inquiry Received Successfully!'}</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {isAr ? (
                    <>
                      شكراً لتواصلك. تم استلام تفاصيل طلبك وتسجيلها في النظام، وسيتواصل معك المهندس <strong>مصطفى عادل</strong> وفريق العمليات الهندسية في أقرب وقت.
                    </>
                  ) : (
                    <>
                      Thank you. Your request details have been registered and dispatched. Eng. <strong>Mostafa Adel</strong> and the engineering team will review and reply promptly.
                    </>
                  )}
                </p>

                {/* Quick actions after submit */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch">
                  <a
                    href={getWhatsAppFollowupLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{isAr ? 'متابعة عبر واتساب (01004131154)' : 'Quick WhatsApp Confirmation'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs transition-colors"
                  >
                    <span>{isAr ? 'إرسال رسالة أخرى' : 'Send another inquiry'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="n"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      {dict?.contact?.nameLabel || (isAr ? 'الاسم' : 'Name')} <span className="text-red-500">*</span>
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

                  {/* Work Email */}
                  <div>
                    <label
                      htmlFor="em"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      {dict?.contact?.emailLabel || (isAr ? 'البريد الإلكتروني للرد' : 'Work Email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="em"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={isAr ? 'name@refinery.com' : 'john@refinery.com'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-[#101622] focus:border-[#0084d3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Company & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label
                      htmlFor="c"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      {dict?.contact?.companyLabel || (isAr ? 'الشركة / المصنع' : 'Company / Refinery')} <span className="text-red-500">*</span>
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

                  {/* Phone / WhatsApp */}
                  <div>
                    <label
                      htmlFor="ph"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      {dict?.contact?.phoneLabel || (isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp')}
                    </label>
                    <input
                      id="ph"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={isAr ? 'مثال: 010xxxxxxxx' : '+20 100 xxxx xxx'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-[#101622] focus:border-[#0084d3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084d3]/20 transition-colors"
                    />
                  </div>
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
                    {dict?.contact?.messageLabel || (isAr ? 'رسالتك / متطلبات الوحدة' : 'Message / Unit Scope')} <span className="text-red-500">*</span>
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
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    id="send"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0084d3] hover:bg-[#006fb3] px-7 py-3 text-sm font-semibold text-white shadow-xs transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{isAr ? 'جاري الإرسال...' : 'Sending...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 rtl:-scale-x-100" />
                        <span>{dict?.contact?.sendBtn || (isAr ? 'أرسل الرسالة' : 'Send message')}</span>
                      </>
                    )}
                  </button>

                  <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span>{isAr ? 'إشعار مباشر لإدارة نكسيفا' : 'Direct notification to Mostafa Adel'}</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
