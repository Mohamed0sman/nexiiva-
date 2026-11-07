'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, ShieldCheck } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface LeadershipSectionProps {
  locale?: string;
  dict: Dict;
}

export function LeadershipSection({ dict }: LeadershipSectionProps) {
  const members = dict?.leadership?.members || [
    {
      name: 'Mostafa Adel',
      role: 'Founder & CEO',
      bio: 'Process simulation specialist and chemical engineer focused on accessible high-fidelity dynamic modeling for energy plants.',
      image: '/assets/team/mostafa-adel.jpg',
      initials: 'MA',
    },
    {
      name: 'Mohamed Osman',
      role: 'Co-Founder & CTO',
      bio: 'Software systems architect specializing in dynamic calculation engines, real-time thermodynamics, and air-gapped DCS emulation.',
      image: '/assets/team/mohamed-osman.jpg',
      initials: 'MO',
    },
    {
      name: 'Gehad Ashraf',
      role: 'Co-Founder, Business Advisor & Mentor',
      bio: 'Strategic operations mentor with deep cross-border expertise in regional venture growth, industrial partnerships, and corporate governance.',
      image: null,
      initials: 'GA',
    },
    {
      name: 'Rodayna Emam',
      role: 'Co-Founder, Business Development',
      bio: 'Commercial growth strategist leading refinery client engagement, industrial pilot contracts, and GCC expansion.',
      image: null,
      initials: 'RE',
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A192F] text-white overflow-hidden border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CEO Quote Card */}
        <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/60 p-8 sm:p-12 shadow-sm backdrop-blur-sm">
          <Quote className="h-10 w-10 text-blue-400/60" />

          {/* Quote Body */}
          <blockquote className="mt-4 text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed tracking-tight">
            &ldquo;
            {dict?.leadership?.quote ||
              'Our mission is to ensure every control room technician has faced their worst-case emergency hundreds of times in simulation before ever touching live plant valves.'}
            &rdquo;
          </blockquote>

          {/* Founder Profile Details */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-blue-500 shadow-sm">
                <Image
                  src="/assets/team/mostafa-adel.jpg"
                  alt="Mostafa Adel, Founder & CEO"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover aspect-square"
                />
              </div>

              <div>
                <h4 className="text-base font-bold text-white">
                  {dict?.leadership?.author || 'Mostafa Adel'}
                </h4>
                <p className="text-xs text-blue-300/80">
                  {dict?.leadership?.role || 'Founder & CEO, Nexiiva'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/80 px-4 py-1.5 text-xs text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>
                {dict?.leadership?.note ||
                  'Committed to Operational Excellence & Plant Safety'}
              </span>
            </div>
          </div>
        </div>

        {/* Founding & Leadership Team Grid */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold text-blue-400 tracking-wider">
              {dict?.leadership?.teamEyebrow || 'LEADERSHIP & FOUNDERS'}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {dict?.leadership?.teamTitle || 'The Engineering & Executive Team'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              {dict?.leadership?.teamSubtitle ||
                'Led by process simulation engineers, software systems architects, and industrial commercial leaders.'}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-slate-700/80 bg-slate-900/50 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
              >
                <div>
                  {/* Portrait or Monogram Avatar */}
                  <div className="mx-auto relative h-24 w-24 shrink-0 rounded-full border-2 border-blue-500/80 p-0.5 shadow-sm">
                    <div className="h-full w-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover aspect-square"
                        />
                      ) : (
                        <span className="text-xl font-bold tracking-wider text-blue-300">
                          {member.initials}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-blue-400">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-400 text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
