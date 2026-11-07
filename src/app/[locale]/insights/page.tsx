import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { Clock } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'الرؤى والتحليلات الهندسية' : 'Engineering Insights & Articles',
    description:
      'Technical perspectives on operator training simulators, DCS emulation, and refinery process safety.',
  };
}

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = [
    {
      slug: 'why-operators-need-to-see-the-worst-day-before-it-happens',
      title: 'Why Operators Need to See the Worst Day Before It Happens',
      summary:
        'Day one in the control room shouldn’t begin with "sit next to the senior". How high-fidelity training simulators turn unrepeatable emergencies into predictable procedural muscle memory.',
      date: 'Oct 15, 2026',
      readTime: '5 min read',
      author: 'Mostafa Adel',
      category: 'Process Safety',
    },
    {
      slug: 'what-an-ots-actually-trains-and-what-it-doesnt',
      title: 'What an OTS Actually Trains (and What It Doesn’t)',
      summary:
        'An Operator Training Simulator is not a video game, nor is it a CAD viewer. A technical teardown of thermodynamic fidelity, console ergonomics, and where OTS fits in plant commissioning.',
      date: 'Oct 28, 2026',
      readTime: '6 min read',
      author: 'Mohamed Osman',
      category: 'Engineering Insights',
    },
    {
      slug: 'offline-first-simulators-for-secure-plants',
      title: 'Offline-First Simulators for Secure Plants',
      summary:
        'Air-gapped petrochemical complexes cannot tolerate SaaS dependencies or external telemetry. Why offline-first architecture is non-negotiable for critical national infrastructure.',
      date: 'Nov 02, 2026',
      readTime: '4 min read',
      author: 'Gehad Ashraf',
      category: 'Cybersecurity & Deployment',
    },
  ];

  return (
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ENGINEERING INSIGHTS"
          title="Field Notes & Technical Analysis"
          subtitle="Rigorous engineering articles written for plant managers, training directors, and console operators."
          theme="light"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/insights/${post.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 transition-colors hover:border-slate-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-tag text-slate-500">
                  <span className="rounded bg-white border border-slate-200 px-2.5 py-1 text-[#1D4ED8] font-bold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#0A192F] group-hover:text-[#1D4ED8] transition-colors">
                  {post.title}
                </h2>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono-tag">
                <span className="text-slate-500">{post.author}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#1D4ED8] group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
