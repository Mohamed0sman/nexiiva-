import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock, Building2 } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'اتصل بنكسيفا' : 'Contact Us & Corporate Inquiries',
    description:
      'Connect with Nexiiva engineering and commercial leadership in Cairo and Alexandria, Egypt.',
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-24 bg-[#05060A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="COMMERCIAL & ENGINEERING"
          title="Direct Contact & Site Scoping"
          subtitle="Reach out to our engineering and commercial teams for technical consultations, pilot scoping, and enterprise inquiries."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Corporate Info & Map Placeholder (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#0E111E] p-8 shadow-xl space-y-6">
              <h3 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#E9EAF4]">
                Corporate Headquarters & Contacts
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#8B4CFF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono-tag text-xs">OFFICE LOCATION</strong>
                    <span className="text-[#9A9CB3] text-xs">
                      [Corporate Headquarters — Cairo / Alexandria, Egypt — to be provided]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono-tag text-xs">EMAIL</strong>
                    <a
                      href="mailto:contact@nexiiva.com"
                      className="text-xs text-[#38BDF8] hover:underline font-mono-tag"
                    >
                      contact@nexiiva.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono-tag text-xs">PHONE</strong>
                    <span className="text-[#9A9CB3] text-xs font-mono-tag">
                      [Phone number — to be provided upon incorporation]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono-tag text-xs">WORKING HOURS</strong>
                    <span className="text-[#9A9CB3] text-xs font-mono-tag">
                      Sunday – Thursday: 08:00 – 17:00 (EET / UTC+2)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Static Map / Location Graphic */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070912] p-6 text-center">
              <div className="h-44 w-full rounded-xl border border-white/5 bg-[#0A0D18] flex flex-col items-center justify-center p-4">
                <Building2 className="h-8 w-8 text-[#8B4CFF] mb-2" />
                <span className="font-mono-tag text-xs font-bold text-white">
                  Egypt & GCC Regional Hub
                </span>
                <span className="mt-1 font-mono-tag text-[10px] text-[#9A9CB3]">
                  [Interactive Satellite Map — Cairo Operations Centre]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
