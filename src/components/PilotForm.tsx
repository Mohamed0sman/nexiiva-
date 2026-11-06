'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2 } from 'lucide-react';

const pilotSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  workEmail: z.string().email('Valid corporate email is required'),
  companyName: z.string().min(2, 'Company name is required'),
  roleTitle: z.string().min(2, 'Job title is required'),
  unitType: z.string().min(1, 'Please select a unit type'),
  siteLocation: z.string().min(2, 'Site/country is required'),
  operatingScenarios: z.string().optional(),
  honeypot: z.string().max(0), // Antispam honeypot
});

type PilotFormValues = z.infer<typeof pilotSchema>;

export function PilotForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // If honeypot is filled, silent reject
    if (data.honeypot) return;

    setIsSubmitting(true);
    // Simulate server action / email dispatch
    console.log('[Nexiiva Pilot Request Received]', data);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-[#22C55E]/40 bg-[#0A1612] p-8 text-center text-[#E9EAF4]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E]/20 text-[#22C55E] mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold">Pilot Application Transmitted</h3>
        <p className="mt-3 text-sm text-[#9A9CB3] max-w-md mx-auto leading-relaxed">
          Thank you for initiating the Nexiiva Pilot Program. Our engineering operations team will review your unit specifications and contact you within 24 hours to schedule the technical scoping call.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono-tag hover:bg-white/10"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-white/10 bg-[#0E111C] p-6 sm:p-8 shadow-2xl"
    >
      <div className="border-b border-white/10 pb-4">
        <h3 className="text-xl font-bold text-white">
          Request an Industrial Pilot Deployment
        </h3>
        <p className="text-xs text-[#9A9CB3] mt-1">
          Deploy an air-gapped OTS for one process unit at your site.
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
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Eng. Ahmed Mansour"
            {...register('fullName')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Corporate Email *
          </label>
          <input
            type="email"
            placeholder="mansour@refinery.com"
            {...register('workEmail')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.workEmail && (
            <p className="mt-1 text-xs text-red-400">{errors.workEmail.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Plant / Organization Name *
          </label>
          <input
            type="text"
            placeholder="Midor / ENPPI / ADNOC"
            {...register('companyName')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-400">{errors.companyName.message}</p>
          )}
        </div>

        {/* Role Title */}
        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Your Role / Designation *
          </label>
          <input
            type="text"
            placeholder="Operations Manager / Training Head"
            {...register('roleTitle')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.roleTitle && (
            <p className="mt-1 text-xs text-red-400">{errors.roleTitle.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Unit Type Selection */}
        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Target Unit for Pilot *
          </label>
          <select
            {...register('unitType')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white focus:border-[#8B4CFF] focus:outline-none"
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
            <p className="mt-1 text-xs text-red-400">{errors.unitType.message}</p>
          )}
        </div>

        {/* Site Location */}
        <div>
          <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
            Site Location / Country *
          </label>
          <input
            type="text"
            placeholder="Alexandria, Egypt / Jubail, KSA"
            {...register('siteLocation')}
            className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
          />
          {errors.siteLocation && (
            <p className="mt-1 text-xs text-red-400">{errors.siteLocation.message}</p>
          )}
        </div>
      </div>

      {/* Target Operating Scenarios */}
      <div>
        <label className="block text-xs font-mono-tag font-semibold text-[#E9EAF4] mb-1.5">
          Priority Training Scenarios (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Furnace trip, column overpressure, cold start-up sequence, or emergency valve shutdown..."
          {...register('operatingScenarios')}
          className="w-full rounded-lg border border-white/10 bg-[#070912] px-3.5 py-2.5 text-sm text-white placeholder-[#5E6075] focus:border-[#8B4CFF] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl brand-gradient py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(109,59,240,0.4)] transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
      >
        {isSubmitting ? 'Transmitting Scoping Data...' : 'Submit Pilot Scoping Request'}
      </button>

      <p className="text-center font-mono-tag text-[10px] text-[#9A9CB3]">
        Confidential engineering disclosure protected under mutual NDA prior to P&ID transfer.
      </p>
    </form>
  );
}
