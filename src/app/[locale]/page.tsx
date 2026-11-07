import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ProblemSection } from '@/components/home/ProblemSection';
import { SolutionSection } from '@/components/home/SolutionSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { LiveDemoConsole } from '@/components/LiveDemoConsole';
import { SectionHeader } from '@/components/SectionHeader';
import { WhyNexiivaSection } from '@/components/home/WhyNexiivaSection';
import { ComparisonSection } from '@/components/home/ComparisonSection';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { JourneySection } from '@/components/home/JourneySection';
import { PilotSection } from '@/components/home/PilotSection';
import { LeadershipSection } from '@/components/home/LeadershipSection';
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
      {/* 1. HERO — Grand Stature + Services Dock + DCS Frame */}
      <HeroSection locale={locale} dict={messages} />

      {/* 2. Trust & Cybersecurity Standards Strip */}
      <TrustStrip locale={locale} dict={messages} />

      {/* 3. THE PROBLEM — Operational Reality & Incident Cost Analysis */}
      <ProblemSection locale={locale} dict={messages} />

      {/* 4. THE SOLUTION — 4 Architectural Engineering Pillars */}
      <SolutionSection locale={locale} dict={messages} />

      {/* 5. HOW IT WORKS — Practice. Instruct. Certify. */}
      <HowItWorksSection locale={locale} dict={messages} />

      {/* 6. LIVE DEMO — "Try the console" */}
      <section className="relative py-24 bg-[#0A192F] overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={
              messages?.demo?.eyebrow ||
              (locale === 'ar' ? 'محاكي تفاعلي حي' : 'INTERACTIVE SIMULATOR')
            }
            title={
              messages?.demo?.title ||
              (locale === 'ar' ? 'جرّب كونسول التحكم بنفسك' : 'Try the console')
            }
            subtitle={
              messages?.demo?.subtitle ||
              (locale === 'ar'
                ? 'اختبر نموذج نكسيفا الديناميكي مباشرة في متصفحك. أطلق اضطراباً تشغيلياً على برج التقطير الجوي وراقب استجابة إنذارات DCS الفورية.'
                : 'Experience Nexiiva’s dynamic model directly in your browser. Trigger an operational upset on the atmospheric column and watch the DCS alarms react.')
            }
            align="center"
            theme="dark"
          />
          <LiveDemoConsole dict={messages?.demo} />
        </div>
      </section>

      {/* 7. SOLUTIONS SUITE — Comprehensive Simulation Infrastructure */}
      <SolutionsSection locale={locale} dict={messages} />

      {/* 8. INDUSTRIES COVERED — Supported Domains & Unit Operations */}
      <IndustriesSection locale={locale} dict={messages} />

      {/* 9. WHY NEXIIVA — Engineering Distinction & Technical Proof */}
      <WhyNexiivaSection locale={locale} dict={messages} />

      {/* 10. TECHNICAL COMPARISON — 5-Dimension Economic & Technical Matrix */}
      <ComparisonSection locale={locale} dict={messages} />

      {/* 11. PILOT PROGRAMME — Structured Low-Risk Deployment */}
      <PilotSection locale={locale} dict={messages} />

      {/* 12. EXECUTIVE LEADERSHIP & FOUNDING TEAM */}
      <LeadershipSection locale={locale} dict={messages} />

      {/* 13. OUR JOURNEY & ROADMAP — Engineering Progression */}
      <JourneySection locale={locale} dict={messages} />

      {/* 14. SAFETY & RESPONSIBILITY — PSM & Environmental Mitigation */}
      <ResponsibilitySection locale={locale} dict={messages} />

      {/* 15. LATEST INSIGHTS — Engineering Whitepapers */}
      <InsightsSection locale={locale} dict={messages} />

      {/* 16. FINAL CTA — Enterprise Consultation Action Center */}
      <FinalCtaSection locale={locale} dict={messages} />
    </div>
  );
}
