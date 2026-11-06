import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { JourneySection } from '@/components/home/JourneySection';
import { LinkedinIcon } from '@/components/SocialIcons';
import type { Dict } from '@/types/dict';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'عن نكسيفا وفريق العمل' : 'About Nexiiva & Leadership',
    description:
      'The story behind Nexiiva, our mission to make high-fidelity OTS accessible to every industrial unit, and the founding team.',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as unknown as Dict;

  const team = [
    {
      name: 'Mostafa Adel',
      role: 'Founder & CEO',
      bio: 'Process simulation lead and chemical engineering practitioner focused on democratizing high-fidelity simulator technology across Middle East energy infrastructure.',
      image: '/assets/team/mostafa-adel.jpg',
      initials: null,
      linkedin: '#',
    },
    {
      name: 'Mohamed Osman',
      role: 'Co-Founder & CTO',
      bio: 'Software architect specializing in high-performance dynamic simulation engines, air-gapped system design, and industrial DCS emulation.',
      image: '/assets/team/mohamed-osman.jpg',
      initials: null,
      linkedin: '#',
    },
    {
      name: 'Gehad Ashraf',
      role: 'Co-Founder, Business Advisor & Mentor',
      bio: 'Strategic operations mentor with deep cross-border expertise in regional venture growth, industrial partnerships, and corporate enterprise alignment.',
      image: null,
      initials: 'GA',
      linkedin: '#',
    },
    {
      name: 'Rodayna Emam',
      role: 'Co-Founder, Business Development',
      bio: 'Commercial growth strategist leading refinery and NOC client engagement, pilot trial contracts, and institutional partnerships across Egypt and the GCC.',
      image: null,
      initials: 'RE',
      linkedin: '#',
    },
  ];

  return (
    <div className="py-24 bg-[#05060A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OUR STORY & PURPOSE"
          title="Making OTS Accessible to Every Industrial Unit"
          subtitle="Founded by engineers who believe control room safety should never depend on luck or informal apprenticeship."
        />

        {/* Narrative Section: Adam's First Day */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#0E111E] p-8 lg:p-12 shadow-2xl">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-bold text-[#8B4CFF] uppercase">
              THE GENESIS NARRATIVE
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              Adam’s First Day in the Central Control Room
            </h3>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#9A9CB3]">
              <p>
                When a junior console engineer named Adam sat down for his first 12-hour shift at an atmospheric distillation unit, he was handed a headset, shown twelve glowing screens, and told: <span className="text-[#E9EAF4] italic">&ldquo;Sit next to the senior and watch carefully.&rdquo;</span>
              </p>
              <p>
                Months passed. Adam observed routine steady-state conditions: slight valve tweaks, level drifts, normal rundown sampling. But the severe, terrifying operational transients—reflux pump seizure, furnace flameout, emergency trip sequences—only happened once every five years.
              </p>
              <p>
                When a rare upset finally occurred during an off-shift with the senior engineer away, the inevitable hesitation resulted in a unit trip: <strong className="text-white">seven days of lost production ($70K), $50K in refractory and tray repairs, and $30K in off-spec penalties. Over $150,000 lost from one small problem.</strong>
              </p>
              <p>
                Nexiiva was founded to change this reality: to ensure that every control room operator faces the worst day hundreds of times in a realistic virtual simulator before ever touching a live valve.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement Callout */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <span className="font-mono-tag text-xs font-bold text-[#38BDF8] uppercase">
            CORPORATE VISION
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            &ldquo;Let’s Make OTS Accessible to Every Industrial Unit.&rdquo;
          </h2>
          <p className="mt-4 text-sm text-[#9A9CB3]">
            Traditional OTS providers charge millions of dollars and take years to deliver custom proprietary hardware. Nexiiva delivers air-gapped, high-fidelity simulation in approximately one week of build time at a fraction of the cost.
          </p>
        </div>

        {/* Founding Leadership Team (4 members) */}
        <div id="team" className="mt-24">
          <SectionHeader
            eyebrow="LEADERSHIP & FOUNDERS"
            title="The Engineering & Executive Team"
            subtitle="Led by process modeling engineers, systems architects, and industrial commercial leaders."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-[#0E111C] p-6 text-center transition-all duration-300 hover:border-[#8B4CFF] hover:shadow-[0_0_25px_rgba(109,59,240,0.2)] flex flex-col justify-between"
              >
                <div>
                  {/* Portrait or Initials Avatar with brand gradient ring */}
                  <div className="mx-auto relative h-28 w-28 rounded-full p-1 brand-gradient shadow-xl">
                    <div className="h-full w-full rounded-full overflow-hidden bg-[#0A0D18] flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="font-mono-tag text-2xl font-bold tracking-wider text-white">
                          {member.initials}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-mono-tag text-xs font-semibold text-[#8B4CFF] mt-1">
                    {member.role}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#9A9CB3]">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex justify-center">
                  <a
                    href={member.linkedin}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#9A9CB3] hover:border-[#8B4CFF] hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap & Milestones Section */}
        <div id="roadmap" className="mt-24">
          <JourneySection dict={messages} />
        </div>
      </div>
    </div>
  );
}
