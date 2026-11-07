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
      {/* 1. HERO */}
      <HeroSection locale={locale} dict={messages} />

      {/* 2. Trust/capability strip */}
      <TrustStrip locale={locale} dict={messages} />

      {/* 3. THE PROBLEM */}
      <ProblemSection locale={locale} dict={messages} />

      {/* 4. 02 — THE SOLUTION */}
      <SolutionSection dict={messages} />

      {/* 5. HOW IT WORKS */}
      <HowItWorksSection locale={locale} dict={messages} />

      {/* 6. LIVE DEMO — "Try the console" */}
      <section className="relative py-20 bg-[#0A192F] overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={messages?.demo?.eyebrow || 'INTERACTIVE SIMULATOR'}
            title={messages?.demo?.title || 'Try the console'}
            subtitle={
              messages?.demo?.subtitle ||
              'Experience Nexiiva’s dynamic model directly in your browser. Trigger an operational upset on the atmospheric column and watch the DCS alarms react.'
            }
            align="center"
            theme="dark"
          />
          <LiveDemoConsole dict={messages?.demo} />
        </div>
      </section>

      {/* 7. WHY NEXIIVA */}
      <WhyNexiivaSection locale={locale} dict={messages} />

      {/* 8. HOW WE COMPARE */}
      <ComparisonSection locale={locale} dict={messages} />

      {/* 9. SOLUTIONS */}
      <SolutionsSection locale={locale} dict={messages} />

      {/* 10. INDUSTRIES */}
      <IndustriesSection locale={locale} dict={messages} />

      {/* 11. OUR JOURNEY */}
      <JourneySection dict={messages} />

      {/* 12. PILOT PROGRAMME */}
      <PilotSection locale={locale} dict={messages} />

      {/* 13. Leadership & Founding Team */}
      <LeadershipSection locale={locale} dict={messages} />

      {/* 14. Responsibility / Safety block */}
      <ResponsibilitySection locale={locale} dict={messages} />

      {/* 15. Latest insights */}
      <InsightsSection locale={locale} dict={messages} />

      {/* 16. Final CTA */}
      <FinalCtaSection locale={locale} dict={messages} />
    </div>
  );
}
