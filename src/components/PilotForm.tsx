'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, MessageCircle, Mail } from 'lucide-react';

const pilotSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  workEmail: z.string().email('Valid corporate email is required'),
  companyName: z.string().min(2, 'Company name is required'),
  roleTitle: z.string().min(2, 'Job title is required'),
  unitType: z.string().min(1, 'Please select a unit type'),
  siteLocation: z.string().min(2, 'Site/country is required'),
  operatingScenarios: z.string().optional(),
  honeypot: z.string().max(0),
});

type PilotFormValues = z.infer<typeof pilotSchema>;

export function PilotForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<PilotFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PilotFormValues>({
    resolver: zodResolver(pilotSchema),
    defaultValues: {
      honeypot: '',
    },
  });

  const onSubmit = async (data: PilotFormValues) => {
    if (data.honeypot) return;
    setIsSubmitting(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'pilot', ...data }),
      });
    } catch (err) {
      console.error('Lead submission network error', err);
    }

    setLastSubmittedData(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const getWhatsAppLink = () => {
    if (!lastSubmittedData) return 'https://wa.me/201004131154';
    const message = `Hello Eng. Mostafa,\nI submitted an industrial pilot scoping request on Nexiiva:\n\n• Name: ${lastSubmittedData.fullName}\n• Company: ${lastSubmittedData.companyName}\n• Role: ${lastSubmittedData.roleTitle}\n• Target Unit: ${lastSubmittedData.unitType}\n• Site: ${lastSubmittedData.siteLocation}\n• Corporate Email: ${lastSubmittedData.workEmail}`;
    return `https://wa.me/201004131154?text=${encodeURIComponent(message)}`;
  };

  const getMailtoLink = () => {
    if (!lastSubmittedData) return 'mailto:Mostafa.adel.esmaiel@gmail.com';
    const subject = `[Nexiiva Pilot Request] ${lastSubmittedData.companyName} - ${lastSubmittedData.fullName}`;
    const body = `Dear Eng. Mostafa Adel,\n\nI have requested a pilot scoping deployment on Nexiiva for:\n• Plant / Unit: ${lastSubmittedData.unitType} at ${lastSubmittedData.companyName} (${lastSubmittedData.siteLocation})\n• Contact: ${lastSubmittedData.fullName} (${lastSubmittedData.roleTitle})\n• Email: ${lastSubmittedData.workEmail}\n\nOperating Scenarios:\n${lastSubmittedData.operatingScenarios || 'Standard critical operational upset training.'}`;
    return `mailto:Mostafa.adel.esmaiel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-8 text-center text-slate-900 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Pilot Request Transmitted</h3>
        <p className="mt-3 text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
          Your request details have been registered and dispatched directly to <strong className="text-slate-900">Mostafa.adel.esmaiel@gmail.com</strong>.
        </p>

        {/* Instant Contact CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat on WhatsApp (01004131154)</span>
          </a>

          <a
            href={getMailtoLink()}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Open Email Direct</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-mono-tag text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-xl font-bold text-slate-900">
          Request an Industrial Pilot Deployment
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          Deploy an air-gapped OTS for one process unit at your site. Notifications route directly to Eng. Mostafa Adel.
        </p>
      </div>

      {/* Honeypot field (hidden from view) */}
      <input
        type="text"
        {...register('honeypot')}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Eng. Ahmed Mansour"
            {...register('fullName')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName.message}</p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Corporate Email *
          </label>
          <input
            type="email"
            placeholder="mansour@refinery.com"
            {...register('workEmail')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.workEmail && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.workEmail.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Plant / Organization Name *
          </label>
          <input
            type="text"
            placeholder="Midor / ENPPI / ADNOC"
            {...register('companyName')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.companyName.message}</p>
          )}
        </div>

        {/* Role Title */}
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Your Role / Designation *
          </label>
          <input
            type="text"
            placeholder="Operations Manager / Training Head"
            {...register('roleTitle')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.roleTitle && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.roleTitle.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Unit Type Selection */}
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Target Unit for Pilot *
          </label>
          <select
            {...register('unitType')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          >
            <option value="">Select a unit type...</option>
            <option value="CDU_ATM">Atmospheric Distillation Unit (CDU)</option>
            <option value="VDU_VAC">Vacuum Distillation Unit (VDU)</option>
            <option value="PREHEAT">Crude Preheat Train & Desalter</option>
            <option value="AMINE_GAS">Amine Sweetening / Gas Treatment</option>
            <option value="TEG_DEHYD">TEG Gas Dehydration Unit</option>
            <option value="OTHER_CUSTOM">Other Custom Process Unit</option>
          </select>
          {errors.unitType && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.unitType.message}</p>
          )}
        </div>

        {/* Site Location */}
        <div>
          <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
            Site Location / Country *
          </label>
          <input
            type="text"
            placeholder="Alexandria, Egypt / Jubail, KSA"
            {...register('siteLocation')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
          />
          {errors.siteLocation && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.siteLocation.message}</p>
          )}
        </div>
      </div>

      {/* Target Operating Scenarios */}
      <div>
        <label className="block text-xs font-mono-tag font-bold text-slate-900 mb-1.5">
          Priority Training Scenarios (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Furnace trip, column overpressure, cold start-up sequence, or emergency valve shutdown..."
          {...register('operatingScenarios')}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[#1D4ED8] hover:bg-blue-600 py-3.5 text-sm font-bold text-white shadow-sm transition-colors active:scale-95 disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? 'Transmitting Scoping Data...' : 'Submit Pilot Scoping Request'}
      </button>

      <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
        <span className="font-mono-tag">Confidential · Protected under mutual NDA</span>
        <a
          href="https://wa.me/201004131154"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span>Quick WhatsApp: 01004131154</span>
        </a>
      </div>
    </form>
  );
}
