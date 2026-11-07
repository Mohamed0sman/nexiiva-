import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = [
    'why-operators-need-to-see-the-worst-day-before-it-happens',
    'what-an-ots-actually-trains-and-what-it-doesnt',
    'offline-first-simulators-for-secure-plants',
  ];
  const locales = ['en', 'ar'];
  const paramsList: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      paramsList.push({ locale, slug });
    }
  }
  return paramsList;
}

const articlesData: Record<
  string,
  {
    title: string;
    date: string;
    author: string;
    readTime: string;
    category: string;
    summary: string;
    content: string[];
  }
> = {
  'why-operators-need-to-see-the-worst-day-before-it-happens': {
    title: 'Why Operators Need to See the Worst Day Before It Happens',
    date: 'Oct 15, 2026',
    author: 'Mostafa Adel, Founder & CEO',
    readTime: '5 min read',
    category: 'Process Safety',
    summary:
      'Day one in the control room shouldn’t begin with "sit next to the senior". How high-fidelity training simulators turn unrepeatable emergencies into predictable procedural muscle memory.',
    content: [
      'When a new console operator steps into a refinery control room, their training often follows a familiar pattern: sit next to the senior technician and observe.',
      'Over the course of their first twelve months, an average operator might witness seven to eight operational upsets. Of those, three or four are routine variations—a sluggish control valve on a preheat line, a minor level transmitter oscillation in an accumulator drum, or a scheduled pump changeover.',
      'The catastrophic scenarios—complete reflux failure on an atmospheric distillation column, feed pump seizure at 360°C, or furnace tube rupture—may not occur for five or ten years. When they finally happen, the senior technician who knew the hydraulic quirks of the unit might be off-shift, on leave, or retired.',
      'A shutdown on an atmospheric crude distillation unit (CDU) rarely costs just the lost crude throughput. The true breakdown reveals compounding losses: 7 days downtime ($70K), equipment repairs ($50K), and off-spec inventory penalties ($30K), totaling $150,000 or more from a single transient incident.',
      'When an operator practices recovering from a REFLUX LOSS or H01 FURNACE TRIP in a virtual DCS replica twenty times before touching the live console, their response shifts from panic to protocol. The console operator does not hesitate; they recognise the divergent differential pressure, anticipate column flooding, and execute the corrective sequence calmly.',
    ],
  },
  'what-an-ots-actually-trains-and-what-it-doesnt': {
    title: 'What an OTS Actually Trains (and What It Doesn’t)',
    date: 'Oct 28, 2026',
    author: 'Mohamed Osman, Co-Founder & CTO',
    readTime: '6 min read',
    category: 'Engineering Insights',
    summary:
      'An Operator Training Simulator is not a video game, nor is it a CAD viewer. A technical teardown of thermodynamic fidelity, console ergonomics, and where OTS fits in plant commissioning.',
    content: [
      'There is widespread confusion in plant procurement between virtual plant walkthroughs and Operator Training Simulators (OTS).',
      'A 3D VR headset walkthrough is valuable for field operators learning valve locations, egress routes, and manual bypass maneuvers. However, for the console operator sitting in the Central Control Room (CCR), a 3D visualization is almost entirely irrelevant.',
      'The console operator lives in the Distributed Control System (DCS): faceplates, process flow diagrams (PFDs), real-time alarm summaries, multi-pen trend graphics, and setpoint adjustments.',
      'An OTS simulates the physics, thermodynamics, and control algorithms behind the glass: multi-component vapor-liquid equilibrium (Peng-Robinson / SRK), pump hydraulic driving force equations, and authentic 1:1 functional faceplates.',
      'Honest engineering requires understanding operational boundaries: an OTS models heat and mass transfer correlations. It trains procedural handling and emergency muscle memory, rather than mechanical metallurgical fatigue diagnostics.',
    ],
  },
  'offline-first-simulators-for-secure-plants': {
    title: 'Offline-First Simulators for Secure Plants',
    date: 'Nov 02, 2026',
    author: 'Gehad Ashraf, Co-Founder & Business Advisor',
    readTime: '4 min read',
    category: 'Cybersecurity & Deployment',
    summary:
      'Air-gapped petrochemical complexes cannot tolerate SaaS dependencies or external telemetry. Why offline-first architecture is non-negotiable for critical national infrastructure.',
    content: [
      'Modern cloud-native software architectures rely heavily on persistent internet connectivity, public hyperscalers, and continuous telemetry pipelines.',
      'In refineries, LNG liquefaction terminals, and petrochemical facilities, however, the IT/OT boundary is protected by strict ISA/IEC 62443 standards. Industrial Control Systems (ICS) are air-gapped from the public internet.',
      'Simulators requiring persistent cloud handshakes or remote licensing tokens are immediately disqualified by plant CISO and OT security teams.',
      'Nexiiva is engineered for full standalone execution: zero cloud runtime dependence, local thermodynamic solver, and local cryptographic scoring on isolated LAN workstations or standalone laptops.',
      'This guarantees that training units can be deployed directly inside control room training annexes, portable site trailers, or off-site corporate training academies with complete data confidentiality.',
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Nexiiva Insights`,
    description: article.summary,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = articlesData[slug];
  if (!article) {
    notFound();
  }

  return (
    <article className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back Link */}
        <Link
          href={`/${locale}/insights`}
          className="inline-flex items-center gap-2 font-mono-tag text-xs font-semibold text-[#1D4ED8] hover:text-[#0A192F] transition-colors"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
          <span>Back to Insights</span>
        </Link>

        {/* Article Header */}
        <header className="mt-8 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tag text-slate-500">
            <span className="rounded bg-blue-50 border border-blue-200 px-2.5 py-1 text-[#1D4ED8] font-bold">
              {article.category}
            </span>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{article.date}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] leading-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D4ED8] text-xs font-bold text-white font-mono-tag">
              NA
            </div>
            <div>
              <span className="text-sm font-bold text-[#0A192F] block">
                {article.author}
              </span>
              <span className="text-xs text-slate-500 font-mono-tag">
                Nexiiva Engineering
              </span>
            </div>
          </div>
        </header>

        {/* Article Summary Lead */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-base sm:text-lg font-medium text-slate-800 shadow-sm leading-relaxed">
          {article.summary}
        </div>

        {/* Article Paragraphs */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6 text-base text-slate-700 leading-relaxed">
          {article.content.map((p, idx) => (
            <p key={idx} className="text-slate-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Post CTA */}
        <div className="mt-14 rounded-2xl border border-slate-800 bg-[#0A192F] p-8 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg font-bold text-white">
              Ready to test this in your control room?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Start with a focused unit pilot deployed directly at your facility.
            </p>
          </div>

          <Link
            href={`/${locale}/pilot`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1D4ED8] hover:bg-[#2563EB] px-6 py-3 text-xs font-bold text-white shadow-sm transition-colors active:scale-95 shrink-0"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  );
}
