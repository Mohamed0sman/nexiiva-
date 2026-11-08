'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, MessageCircle, Mail } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().min(2, 'Company name is required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) return;
    setIsSubmitting(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...data }),
      });
    } catch (err) {
      console.error('Contact submission network error', err);
    }

    setLastSubmittedData(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const getWhatsAppLink = () => {
    if (!lastSubmittedData) return 'https://wa.me/201004131154';
    const message = `Hello Eng. Mostafa,\nI sent an inquiry via the Nexiiva contact form:\n\n• Name: ${lastSubmittedData.name}\n• Company: ${lastSubmittedData.company}\n• Email: ${lastSubmittedData.email}\n• Subject: ${lastSubmittedData.subject}\n• Message: ${lastSubmittedData.message}`;
    return `https://wa.me/201004131154?text=${encodeURIComponent(message)}`;
  };

  const getMailtoLink = () => {
    if (!lastSubmittedData) return 'mailto:Mostafa.adel.esmaiel@gmail.com';
    const subject = `[Nexiiva Inquiry] ${lastSubmittedData.subject} - ${lastSubmittedData.name}`;
    const body = `Dear Eng. Mostafa Adel,\n\nI contacted Nexiiva with the following inquiry:\n• From: ${lastSubmittedData.name} (${lastSubmittedData.company})\n• Email: ${lastSubmittedData.email}\n• Subject: ${lastSubmittedData.subject}\n\nMessage:\n${lastSubmittedData.message}`;
    return `mailto:Mostafa.adel.esmaiel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-8 text-center text-slate-900 shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Message Transmitted</h3>
        <p className="mt-2 text-xs text-slate-700 max-w-sm mx-auto leading-relaxed">
          Your inquiry has been received and dispatched to <strong className="text-slate-900">Mostafa.adel.esmaiel@gmail.com</strong>.
        </p>

        {/* WhatsApp & Email Action */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp (01004131154)</span>
          </a>

          <a
            href={getMailtoLink()}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Direct Email</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-5 rounded-md border border-slate-300 bg-white px-4 py-1.5 text-xs font-mono-tag text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <input
        type="text"
        {...register('honeypot')}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Eng. Mohamed"
            {...register('name')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            placeholder="mohamed@petrochem.com"
            {...register('email')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Company / Organization *
          </label>
          <input
            type="text"
            placeholder="ANRPC / MIDOR / SABIC"
            {...register('company')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            placeholder="Pilot Inquiry / Technical Specification"
            {...register('subject')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
          Detailed Message *
        </label>
        <textarea
          rows={4}
          placeholder="Describe your facility, unit type, or training requirements..."
          {...register('message')}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 font-medium">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[#1D4ED8] hover:bg-blue-600 py-3 text-sm font-bold text-white shadow-sm transition-colors active:scale-95 disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
      </button>

      <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
        <span className="font-mono-tag">Direct notification to Mostafa Adel</span>
        <a
          href="https://wa.me/201004131154"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span>WhatsApp: 01004131154</span>
        </a>
      </div>
    </form>
  );
}
