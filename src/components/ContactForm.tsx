'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2 } from 'lucide-react';

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
    console.log('[Nexiiva Contact Dispatch]', data);
    await new Promise((r) => setTimeout(r, 700));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-[#22C55E]/40 bg-[#0A1612] p-8 text-center text-[#E9EAF4]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]/20 text-[#22C55E] mb-3">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">Message Transmitted</h3>
        <p className="mt-2 text-xs text-[#9A9CB3] max-w-sm mx-auto leading-relaxed">
          Your inquiry has been received by our engineering team. We typically respond within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-5 rounded-lg border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono-tag hover:bg-white/10"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-2xl border border-white/10 bg-[#0E111C] p-6 sm:p-8 shadow-2xl"
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
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Eng. Mohamed"
            {...register('name')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            placeholder="name@company.com"
            {...register('email')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Company / Refinery *
          </label>
          <input
            type="text"
            placeholder="Refining Co."
            {...register('company')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            placeholder="Platform inquiry / Technical pilot"
            {...register('subject')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
          Your Inquiry *
        </label>
        <textarea
          rows={4}
          placeholder="Please describe your unit operations, simulator requirements, or consultation topic..."
          {...register('message')}
          className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl brand-gradient py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
      >
        {isSubmitting ? 'Transmitting Inquiry...' : 'Send Message'}
      </button>
    </form>
  );
}
