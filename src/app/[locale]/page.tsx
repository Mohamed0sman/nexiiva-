import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ProductsSection } from '@/components/home/ProductsSection';
import { DeploymentArchitecture } from '@/components/home/DeploymentArchitecture';
import { PlansSection } from '@/components/home/PlansSection';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import type { Dict } from '@/types/dict';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as unknown as Dict;

  return (
    <div className="flex flex-col w-full">
      {/* 1. INTRODUCTION & HERO — Authentic Operator Training Simulator with Process Column Schematic */}
      <HeroSection locale={locale} dict={messages} />

      {/* 2. INDUSTRIAL CREDIBILITY STRIP */}
      <TrustStrip locale={locale} dict={messages} />

      {/* 3. OUR PRODUCTS — Nexiiva OTS (Available Now) & Nexiiva OTS Builder (Gas Units / TEG / Amine) */}
      <ProductsSection locale={locale} dict={messages} />

      {/* 4. DEPLOYMENT ARCHITECTURE — Cloud vs On-Premises Air-Gapped Workstations */}
      <DeploymentArchitecture locale={locale} dict={messages} />

      {/* 5. SELECT YOUR PLAN — 3 Commercial Models: Pilot (3 Mos), Company License, Training Center Course */}
      <PlansSection locale={locale} dict={messages} />

      {/* 6. ABOUT US & THE TEAM — Built with Real Plant Experience: Mostafa Adel & Mohamed Osman */}
      <LeadershipSection locale={locale} dict={messages} />

      {/* 7. CONTACT US — Direct Booking Form with 5 Interest Options + WhatsApp + Email */}
      <FinalCtaSection locale={locale} dict={messages} />
    </div>
  );
}
