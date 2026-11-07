import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { CorporateProjects } from '@/components/home/CorporateProjects';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { PilotSection } from '@/components/home/PilotSection';
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
      {/* 1. CORPORATE HERO — Dynamic Process Simulation for Energy Facilities */}
      <HeroSection locale={locale} dict={messages} />

      {/* 2. INDUSTRIAL STANDARDS & CREDIBILITY STRIP */}
      <TrustStrip locale={locale} dict={messages} />

      {/* 3. FEATURED ENGINEERING PROJECTS & UNIT SIMULATORS */}
      <CorporateProjects locale={locale} dict={messages} />

      {/* 4. CORE SIMULATION CAPABILITIES & ARCHITECTURAL PILLARS */}
      <SolutionsSection locale={locale} dict={messages} />

      {/* 5. STRUCTURED LOW-RISK PLANT PILOT PROGRAMME */}
      <PilotSection locale={locale} dict={messages} />

      {/* 6. EXECUTIVE LEADERSHIP & FOUNDING PARTNERS */}
      <LeadershipSection locale={locale} dict={messages} />

      {/* 7. CORPORATE HEADQUARTERS & DIRECT ACTION CENTER */}
      <FinalCtaSection locale={locale} dict={messages} />
    </div>
  );
}


