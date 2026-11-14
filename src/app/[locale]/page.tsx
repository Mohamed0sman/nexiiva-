import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { DemoSection } from '@/components/home/DemoSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { AboutSection } from '@/components/home/AboutSection';
import { TeamSection } from '@/components/home/TeamSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { PlansSection } from '@/components/home/PlansSection';
import { ContactSection } from '@/components/home/ContactSection';
import type { Dict } from '@/types/dict';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as unknown as Dict;

  return (
    <div className="flex flex-col w-full bg-white text-[#485460]">
      {/* 1. INTRODUCTION & HERO — Process Training Simulator with CDU-101 Distillation Column Schematic */}
      <HeroSection locale={locale} dict={messages} />

      {/* 2. DEMO — Video Demonstration with English / Arabic Toggle */}
      <DemoSection locale={locale} dict={messages} />

      {/* 3. OPERATIONAL IMPACT — How it helps (3 High-Impact Value Cards) */}
      <ImpactSection locale={locale} dict={messages} />

      {/* 4. PLANT EXPERIENCE — Built with Real Plant Experience */}
      <AboutSection locale={locale} dict={messages} />

      {/* 5. THE TEAM — Leadership & Founders (4 Founding Leaders) */}
      <TeamSection locale={locale} dict={messages} />

      {/* 6. OUR PRODUCTS — Nexiiva OTS with 5-Screenshot Gallery & Click-to-Zoom Lightbox */}
      <ProductsSection locale={locale} dict={messages} />

      {/* 7. SELECT YOUR PLAN — 3 Commercial Options (Pilot / On-Premises / Cloud) */}
      <PlansSection locale={locale} dict={messages} />

      {/* 8. CONTACT US — Direct Booking Form with 5 Interest Options + WhatsApp + Email + Mutual NDA Reassurance */}
      <ContactSection locale={locale} dict={messages} />
    </div>
  );
}
