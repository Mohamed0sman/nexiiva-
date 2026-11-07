import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ExecutiveLetter } from '@/components/home/ExecutiveLetter';
import { CorporateProjects } from '@/components/home/CorporateProjects';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { SolutionSection } from '@/components/home/SolutionSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { WhyNexiivaSection } from '@/components/home/WhyNexiivaSection';
import { ComparisonSection } from '@/components/home/ComparisonSection';
import { PilotSection } from '@/components/home/PilotSection';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { JourneySection } from '@/components/home/JourneySection';
import { ResponsibilitySection } from '@/components/home/ResponsibilitySection';
import { InsightsSection } from '@/components/home/InsightsSection';
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

      {/* 3. EXECUTIVE COMMITMENT & FOUNDER'S LETTER (Mirroring Onspec Executive Statement) */}
      <ExecutiveLetter locale={locale} dict={messages} />

      {/* 4. FEATURED ENGINEERING PROJECTS & UNIT SIMULATORS (Mirroring Onspec Latest Projects) */}
      <CorporateProjects locale={locale} dict={messages} />

      {/* 5. CORE SIMULATION CAPABILITIES & SOLUTIONS */}
      <SolutionsSection locale={locale} dict={messages} />

      {/* 6. INDUSTRIAL SECTORS & UNIT COVERAGE */}
      <IndustriesSection locale={locale} dict={messages} />

      {/* 7. OPERATIONAL REALITY & INCIDENT COST AUDIT */}
      <ProblemSection locale={locale} dict={messages} />

      {/* 8. ARCHITECTURAL ENGINEERING PILLARS */}
      <SolutionSection locale={locale} dict={messages} />

      {/* 9. QUALIFICATION CYCLE — Practice. Instruct. Certify. */}
      <HowItWorksSection locale={locale} dict={messages} />

      {/* 10. ENGINEERING DISTINCTION & TECHNICAL BENCHMARKS */}
      <WhyNexiivaSection locale={locale} dict={messages} />

      {/* 11. 5-DIMENSION TECHNICAL & ECONOMIC COMPARISON */}
      <ComparisonSection locale={locale} dict={messages} />

      {/* 12. STRUCTURED LOW-RISK PLANT PILOT PROGRAMME */}
      <PilotSection locale={locale} dict={messages} />

      {/* 13. EXECUTIVE LEADERSHIP & BOARD OF DIRECTORS */}
      <LeadershipSection locale={locale} dict={messages} />

      {/* 14. ENGINEERING MILESTONES & REGIONAL DEPLOYMENT ROADMAP */}
      <JourneySection locale={locale} dict={messages} />

      {/* 15. PROCESS SAFETY MANAGEMENT & ENVIRONMENTAL MITIGATION */}
      <ResponsibilitySection locale={locale} dict={messages} />

      {/* 16. TECHNICAL PAPERS & ENGINEERING PERSPECTIVES */}
      <InsightsSection locale={locale} dict={messages} />

      {/* 17. CORPORATE HEADQUARTERS & DIRECT ENGAGEMENT ACTION CENTER */}
      <FinalCtaSection locale={locale} dict={messages} />
    </div>
  );
}
